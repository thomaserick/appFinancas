//Scopo Global
(function () {
  "use strict";

  angular
    .module("App")
    .controller("DashboardCtrl", ["$http", "consts", DashboardController]);

  function DashboardController($http, consts) {
    const _self = this;
    _self.getSummary = function () {
      const url = `${consts.apiUrl}/billingSummary`;
      $http.get(url).then(function (response) {
        const { credit = 0, debt = 0 } = response.data;
        _self.credit = credit;
        _self.debt = debt;
        _self.total = credit - debt;
      });
    };

    _self.getSummary();
  }
})();
