const mongoose = require("mongoose");
const contato = require("./contato");

const userSchema = new mongoose.Schema({
    loginEmail:{
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    contatos: [contato.contatoSchema]
})

const userModel = mongoose.model('usuario', userSchema);

module.exports = { userSchema, userModel };
