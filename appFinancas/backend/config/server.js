const port = 3003;

const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowsCors = require("./cors");
const queryParser = require("express-query-int");

//Será capaz mais tipos de informações -> responsavel por fazer a interpretação
//toda requisição
server.use(bodyParser.urlencoded({ extended: true }));
//Transforma em objeto
server.use(bodyParser.json());
server.use(allowsCors);
server.use(queryParser());

server.listen(port, function () {
  console.log(`Backend is running on port ${port}.`);
});

module.exports = server;
