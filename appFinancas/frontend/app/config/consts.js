angular
  .module("App")
  .constant("consts", {
    appName: "MEAN - Primeira Aplicação",
    version: "1.0",
    owner: "ThomasErick",
    year: "2020",
    site: "http://cod3r.com.br",
    apiUrl: "http://localhost:3003/api",
    oapiUrl: "http://localhost:3003/oapi",
    userKey: "_token_userKey",
  })
  .run([
    "$rootScope",
    "consts",
    function ($rootScope, consts) {
      $rootScope.consts = consts;
    },
  ]);
