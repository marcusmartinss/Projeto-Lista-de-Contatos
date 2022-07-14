const Models = require('./models');

async function criarContato(contato) {
    const novoContato = await Models.contatoModel(contato);
    return await novoContato.save()
        .then((contatoCriado) => {return contatoCriado})
        .catch((err) => {return err.message});
}

module.exports = { criarContato };