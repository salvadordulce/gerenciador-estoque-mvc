const pool = require("../config/banco-de-dados");

function adicionarProduto(nome, fornecedor, quantidade) {

    pool
        .query(
            `INSERT INTO produtos(titulo, fornecedor, quantidade) VALUES ('${nome}', '${fornecedor}','${quantidade}')`)
        .then(() => {
            console.log("DEU CERTO");
        })
        .catch((error) => {
            console.error("ERRO AO INSERIR DADOS", error);
        });
}

 async function listagemProduto(request, response){

    const produtos = await pool.query(`SELECT * FROM produtos`)

    return produtos [0]
  }
  
module.exports = {
    adicionarProduto,
    listagemProduto
}