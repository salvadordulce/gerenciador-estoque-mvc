// Importando o módulo mysql2/promise
const mysql = require('mysql2/promise');

// Configuração da pool de conexões com MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gerenciadorestoque',
});

module.exports = pool;