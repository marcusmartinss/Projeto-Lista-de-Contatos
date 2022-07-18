const contatos = require('./models/contato');
const user = require('./models/usuario');

async function criarUsuario(usuario) {
    const novoUsuario = await user.userModel(usuario);
    return await novoUsuario.save()
    .then( (usuarioCriado) => {
        return usuarioCriado
    }).catch( (err) => {
        return err.message
    });
}

async function criarContato(contato) {
    const novoContato = await contatos.contatoModel(contato);
    return await novoContato.save()
        .then((contatoCriado) => {return contatoCriado})
        .catch((err) => {return err.message});
}

module.exports = { criarContato, criarUsuario };
