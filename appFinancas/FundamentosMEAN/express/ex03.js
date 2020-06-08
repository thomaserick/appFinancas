const express = require("express");
const server = express();

server.use("/api", (req, res, next) => {
  console.log("Inicio...");
  next();
  console.log("Fim..");
});

server.use("/api", (req, res, next) => {
  console.log("Resposta...");
  next();
  res.send("<h1>API!</h1>");
});

server.listen(3000, () => {
  console.log(`Executando...`);
});
