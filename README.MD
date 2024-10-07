## O projeto consiste em um aplicativo para gerenciar estoque.

## Tecnologias
 - body-parser
 - chokidar
 - connect-livereload
 - ejs
 - express
 - express-session
 - livereload
 - md5
 - mysql2
 - nodemon
 - pg
 - promise

## COMANDOS DE CRIAR BANCO E TABELA

USE gerenciadorestoque;

CREATE TABLE clientes (
    id int primary key auto_increment,
    nome varchar(255),
    email varchar(255) unique,
    senha varchar(255),
    criadoEm date
);

CREATE TABLE produtos (
    id int primary key auto_increment,
    titulo varchar(255),
    fornecedor varchar(255),
    quantidade INT
);

select * from clientes where email = "alemao123@gmail.com";

select * from clientes;
select * from produtos;

## Como executar o projeto
## Clone o projeto

git clone https://github.com/salvadordulce/gerenciador-estoque-mvc.git

## Entre na pasta do projeto

gerenciador-estoque-mvc

## Instale as dependências

npm install

## Inicie o projeto

npm start