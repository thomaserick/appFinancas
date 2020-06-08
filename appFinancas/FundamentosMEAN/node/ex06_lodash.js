const _ = require("lodash");

//Array de objetos
const alunos = [
  {
    name: "Thomas",
    nota: 10.0,
  },
  {
    name: "Jaque",
    nota: 9.0,
  },
  {
    name: "Paulo",
    nota: 7.0,
  },
];

const media = _.sumBy(alunos, "nota") / alunos.length;
console.log(media);
