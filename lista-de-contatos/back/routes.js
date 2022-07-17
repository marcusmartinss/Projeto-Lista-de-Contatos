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
    const delContato = await Models.contatoModel.findOne({_id: id}).catch((err) => res.status(500));

    if(!delContato){
        res.status(424).json({message: "Usuário não encontrado"});
        return;
    }

    try {
        await Models.contatoModel.deleteOne({_id: id});
        res.status(200).json({message: "Usuário deletado com sucesso"});
    } catch (err) {
        res.status(500).json({error: err});
    }
});

// GET Lista de todos contatos
contatoRoute.get('/contact', async (req, res) => {
    try {
        const contatos = await Models.contatoModel.find();
        res.status(200).json(contatos);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

// GET Informações de contato único
contatoRoute.get('/contact/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const contato = await Models.contatoModel.findOne({_id: id});

        if(!contato){
            res.status(404).json({message: "Contato não encontrado"});
            return;
        }

        res.status(200).json(contato);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

module.exports = {contatoRoute};
