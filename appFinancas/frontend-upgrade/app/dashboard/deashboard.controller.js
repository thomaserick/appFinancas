(function () {
  "use strict";

  angular
    .module("App")
    .controller("DashboardCtrl", DashboardController);

  DashboardController.$inject = ['DashboardService'];

  function DashboardController(DashboardService) {
    const _self = this;


    _self.getSummary = function () {

      DashboardService.getBillingSummary()
        .then(function (data) {
          const { credit = 0, debt = 0 } = data;
          _self.credit = credit;
          _self.debt = debt;
          _self.total = credit - debt;

        })
        .catch(function (error) { console.log('Error', error.status) });
    };

    _self.getSummary();

  }
})();