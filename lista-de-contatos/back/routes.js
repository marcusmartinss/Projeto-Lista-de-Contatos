const express = require("express");

const Services = require("./services");

const Models = require("./models")

const contatoRoute = express.Router();

contatoRoute.post('/create', async (req, res) => {
    await Services.criarContato(req.body).then(contatoCriado => {
        return res.status(200).json(contatoCriado);
    }).catch(err => {
        return res.status(500).json(err.message);
    });
});

contatoRoute.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const delContato = await Models.contatoModel.findOne({_id: id}).catch((err) => {
        res.status(400).json({message: "ID em formato incorreto"});
    });

    if(!delContato){
        res.status(404).json({message: "Contato não encontrado"});
        return;
    }

    try {
        await Models.contatoModel.deleteOne({_id: id});
        res.status(200).json({message: "Contato deletado com sucesso"});
    } catch (err) {
        res.status(500).json({error: err});
    }
});

contatoRoute.patch('/update/:id', async (req, res) => {
    const id = req.params.id;
    const {nome, sobrenome, email, telefone} = req.body

    const contato = {
        nome,
        sobrenome,
        email,
        telefone
    };

    try {
        const updatedContato = await Models.contatoModel.updateOne({_id: id}, contato)

        if(updatedContato.matchedCount === 0){
            res.status(404).json({message:"Contato não foi encontrado"});
            return;
        }

        res.status(200).json(contato);
    } catch (err) {
        res.status(500).json({error: err});
    }

});

module.exports = {contatoRoute};
