# App Finanças

### Tecnologias Utilizadas para desenvolvimento

- MongoDB
- Express
- AngularJs
- NodeJs

## MongoDB NoSQL

[documentação]: (https://docs.mongodb.com/)

- Orientado a Documento
- Usa Json
- Tabelas -> Collections
- Registros/Tuplas -> Documentos (objetos Json)

* Instalação

  - colocar no path o caminho do Mongo
  - C:\Program Files\MongoDB\Server\3.4\bin
  - Testar o comando -> cmd -> mongod

### Comandos

- Comandos Básicos

* show dbs

  - Mostra quantas base

- use db_finance
  - Troca o banco de dados

* Comandos Insert

- db.createCollection('billingCycles')

  - Cria Collection

- db.billingCycles.drop()

  - Remove Collection

- db.billingCycles.insert({})

  - Inseri registro

- db.billingCycles.save({})
  - Salva/atualiza registro

* Pesquisa

- db.billingCycles.find()

  - Localiza os registros dentro da collections

- db.billingCycles.find.pretty()

  - Mostra de forma mais legivel

- db.billingCycles.findOne()

  - Mostra o primeiro registro

- db.billingCycles.findOne({month:2})

  - Mostrando o registro passando filtro

- db.billingCycles.find({credits:{\$exists:true},{\_id:0,name:1}})

  - Mostra os registros apenas com o atributos que gostaria "name"

- db.billingCycles.find({\$or:[{month:1},{monsth:2}]})

  - Monstra os registros OU sobre dois critérios

- db.billingCycles.find({credits:{\$exists:true}}).pretty()

  - Apenas os registros que possui o atributo credits

- db.billingCycles.find({year:2017}).skip(1).pretty()

  - Pula o primeiro registro

- db.billingCycles.find({year:2017}).skip(1).limit(1)
  - Pula o primeiro registro e traz apenas o primeiro elemento
  - Fazer paginação

* Agregação

- db.billingCycles.aggregate([{
  $project:{credit:{$sum:"$credtis.value"},deb:{$sum:"$debts.value"}}
  },{
  $group:{
  _id: null,
  credit:{$sum:"$credit"}, debt:{$sum:"$debt"}
  }
  }])

  - Soma de todo os creditos e debitos

* Update

- db.billingCycles.update({
  $and:[{month:1},{year:2017}]
},{$set{credits:[{name:"Salário",value:5000}]}})

* Count

- db.billingCycles.count()
  - Conta os registros da Tabela(collection)

* Remove

- db.billingCycles.remove({month:2})

  - Remove os regisotr com filtro

- db.billingCycles.remove({year:2},1)
  - Remove os registro com filtro e limitando apenas a 1 registro

* Drop

- db.dropDatabase()
  - Remove os bancos de dados

## NodeJs

- Instalação

* npm init
  - Inicia o projeto
* npm i express
  - instala a dependencia do express

## AngularJs

- Instalação

- npm init

  - Inicia o projeto

- npm install angular@1.7.9
  - Versao angular

## BackEnd

### Dependencias

- remover npm uninstall <nome_pacote>

  - Romover dependências

- npm install express
  - Framework web
- npm install express-query-int
- npm install body-parser
  - É um midllewere, o bodyparse usa o parse da requisição, transforma em objetos
- npm install mongoose
- npm install mongoose-paginate
- npm install lodash
- npm install pm2
  - Gerenciador de pacote do nodeJs para produção monitoramento
- npm node-restful
- npm install bcrypt@1.0.2
  - Criptografar senha
- npm install jsonwebtoken@7.3.0

  - JWT

- npm install nodemon --save-dev

  - Apenas para desenvolvimento ( quadno tiver algum crash reinstarta a aplicação)

- npm run dev

  - Rodar o Servidor

- Producao com PM2

  - npm run production

- Deleta o servidor
  - pm2 delete backend

## FrondEnd

### Dependencias

- npm init

  - Inicia

- npm i
  - Instala todas as dependencias no package.json

**Helpers**

- [Angular_Style_Guide](https://github.com/johnpapa/angular-styleguide)

- [Format GitHub](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
