const md5 = require("md5");

const pool = require("../config/banco-de-dados");

function adicionarCliente(nome, email, senha) {

    pool
        .query(
            `INSERT INTO clientes(nome, email, senha, criadoEm) VALUES ('${nome}', '${email}', '${md5(senha)}', NOW())`
        )
        .then(() => {
            console.log("DEU CERTO");
        })
        .catch((error) => {
            console.error("ERRO AO INSERIR DADOS", error);
        });
}

async function buscarClientePorEmail(email) {
    const cliente = await pool.query(`SELECT * FROM clientes WHERE email = '${email}'`)

    console.log(cliente)

    return cliente[0][0]
}
module.exports = {
    adicionarCliente,
    buscarClientePorEmail
}