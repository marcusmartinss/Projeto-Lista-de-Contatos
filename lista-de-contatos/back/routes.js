const DB = require("./database");
const express = require("express");

const Services = require("./services");

const contatoModel = require("./models/contato");
const userModel =  require("./models/usuario");

const contatoRoute = express.Router();
const userRoute = express.Router();


userRoute.post('/sign-in', async (req, res) => {
    await criarUsuario(req.body)
    .then(usuarioCriado => {
        return res.status(200).json(usuarioCriado);
    }).catch(err => {
        return res.status(500).json(err.message);
    });
})

userRoute.post('/:id/create', async (req, res) => {
    const {id} = req.params
    await Services.criarContato(req.body)
    .then( async (contatoCriado) => {
        try{
            const usuario = await userModel.userModel.findById(id)
            console.log(usuario);
            usuario.contatos.push(contatoCriado);     
            usuario.save();
            return res.status(200).json(contatoCriado);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }).catch(err => {
        return res.status(500).json(err.message);
    });
});

userRoute.delete('/:userId/delete/:id', async (req, res) => {
    const id = req.params.id;
    
    const delContato = await contatoModel.contatoModel.findById(id).catch((err) => {
        res.status(400).json({message: "ID em formato incorreto"});
    });

    console.log(delContato);
    if(!delContato){
        res.status(404).json({message: "Contato não encontrado"});
        return;
    }

    try {
        await userModel.contato.deleteOne({_id: id});
        res.status(200).json({message: "Contato deletado com sucesso"});
    } catch (err) {
        res.status(500).json({error: err});
    }
});

userRoute.patch('/:userId/update/:id', async (req, res) => {
    const id = req.params.id;
    const {nome, sobrenome, email, telefone} = req.body

    const contato = {
        nome,
        sobrenome,
        email,
        telefone
    };

    try {
        const updatedContato = await contatoModel.contatoModel.updateOne({_id: id}, contato)

        if(updatedContato.matchedCount === 0){
            res.status(404).json({message:"Contato não foi encontrado"});
            return;
        }

        res.status(200).json(contato);
    } catch (err) {
        res.status(500).json({error: err});
    }

})

// GET Lista de todos contatos
userRoute.get('/:id/contact', async (req, res) => {
    try {
        const contatos = await contatoModel.contatoModel.find();
        res.status(200).json(contatos);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

// GET Informações de contato único
userRoute.get('/:userId/contact/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const contato = await contatoModel.contatoModel.findOne({_id: id});

        if(!contato){
            res.status(404).json({message: "Contato não encontrado"});
            return;
        }

        res.status(200).json(contato);
    } catch (err) {
        res.status(500).json({error: err});
    }

});


module.exports = {contatoRoute, userRoute};
