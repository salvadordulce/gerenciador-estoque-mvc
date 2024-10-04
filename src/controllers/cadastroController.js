const clienteModel = require('../models/clienteModel')

// Responsável por renderizar a página de cadastro de clientes
function exibirPaginaCadastro(request, response) {
  response.render('cadastro');
}

// Resposável por adicionar um novo cliente
function adicionarCliente(request, response) {
  console.log(request.body);

  const { nome, email, senha } = request.body;

  clienteModel.adicionarCliente(nome, email, senha);
}

module.exports = {
  exibirPaginaCadastro,
  adicionarCliente
}