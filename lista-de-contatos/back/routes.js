const express = require("express");
const mongoose = require("mongoose")

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
    const id = mongoose.Types.ObjectId(req.params.id.trim());
    const delContato = await Models.contatoModel.findOne({_id: id});

    try {
        await Models.contatoModel.deleteOne({_id: id});
        res.status(200).json({message: "Usuário deletado com sucesso"});
    } catch (err) {
        res.status(500).json({error: err});
    }
});

module.exports = {contatoRoute};
