const express = require("express");

const Services = require("./services");

const contatoRoute = express.Router();

contatoRoute.post('/create', async (req, res) => {
    await Services.criarContato(req.body).then(contatoCriado => {
        return res.status(200).json(contatoCriado);
    }).catch(err => {
        return res.status(500).json(err.message);
    });
});

module.exports = {contatoRoute};
