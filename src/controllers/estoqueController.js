const produtoModel = require("../models/produtoModel");

// Responsável por renderizar a página de estoque
async function renderizarPaginaEstoque(request, response) {

  const produto = await produtoModel.listagemProduto()

  response.render("estoque", { produto });
}

// Responsável por renderizar a página de cadastro de produto

function renderizarPaginaProduto(request, response) {
  response.render("criarProduto");
}

function adicionarProduto(request, response) {
  console.log(request.body);

  const { titulo, fornecedor, quantidade } = request.body;

  produtoModel.adicionarProduto(titulo, fornecedor, quantidade)

  response.redirect("estoque")
}


module.exports = {
  renderizarPaginaEstoque,
  renderizarPaginaProduto,
  adicionarProduto
}