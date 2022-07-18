const mongoose = require("mongoose");

const contatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
})

const contatoModel = mongoose.model("contato", contatoSchema);

module.exports = {contatoSchema, contatoModel};
