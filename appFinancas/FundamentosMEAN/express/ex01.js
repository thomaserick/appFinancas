const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hello World !!</h1>");
});

server.all("/teste", (req, res) => {
  res.send(`<h1>Teste!</h1>`);
});

server.get(/api/, (req, res) => {
  res.send(`<h1>API!</h1>`);
});

server.listen(3000, () => {
  console.log(`Executando...`);
});
