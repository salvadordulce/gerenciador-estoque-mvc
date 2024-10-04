const md5 = require('md5');
const clienteModel = require('../models/clienteModel')

function exibirPaginaLogin(request, response) {
  response.render('login');
}

//Vendo se o 'cliente' existe
async function autenticarCliente(request, response) {

  const { email, senha } = request.body;

  console.log(email, senha);

  const cliente = await clienteModel.buscarClientePorEmail(email);

  if (cliente === undefined) {
    response.redirect('/');
    return;
  }

  console.log('senha digitada', senha);
  console.log('senha do banco', cliente.senha);

  // Verificando se a senha está correta
  if (md5(senha) !== cliente.senha) {
    response.redirect('/');
    return;
  }

  // Salvando o cliente na sessão
  request.session.cliente = cliente;

  response.redirect("/estoque");

  console.log('Cliente autenticado com sucesso!');

  console.log(cliente);
}

module.exports = {
  exibirPaginaLogin,
  autenticarCliente
}