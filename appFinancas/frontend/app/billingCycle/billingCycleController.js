(function () {
  angular
    .module("App")
    .controller("BillingCycleCtrl", [
      "$http",
      "$location",
      "msgs",
      "tabs",
      "consts",
      BillingCycleController,
    ]);

  function BillingCycleController($http, $location, msgs, tabs, consts) {
    const _self = this;
    const url = `${consts.apiUrl}/billingCycles`;
    const numPage = 10;

    _self.createBillingCycle = function () {
      $http
        .post(url, _self.billingCycle)
        .then(function (response) {
          _self.refresh();
          msgs.addSuccess("Operação realizada com sucesso");
        })
        .catch(function (resp) {
          msgs.addError(resp.data.errors);
        });
    };

    _self.refresh = function () {
      const page = parseInt($location.search().page) || 1;
      $http
        .get(`${url}?skip=${(page - 1) * numPage}&limit=${numPage}`)
        .then(function (response) {
          _self.billingCycle = { credits: [{}], debts: [{}] };
          _self.billingCycles = response.data;
          _self.calculateValues();

          $http
            .get(`${url}/count`)
            .then(function (response) {
              //Arredondamento para +
              _self.pages = Math.ceil(response.data.value / 10);
              tabs.show(_self, { tabList: true, tabCreate: true });
            })
            .catch(function (resp) {});
        });
    };

    _self.showTabUpdate = function (billingCycle) {
      _self.billingCycle = billingCycle;
      _self.calculateValues();
      tabs.show(_self, { tabUpdate: true });
    };

    _self.showTabDelete = function (billingCycle) {
      _self.billingCycle = billingCycle;
      _self.calculateValues();
      tabs.show(_self, { tabDelete: true });
    };

    _self.updateBillingCycle = function () {
      const updateUrl = `${consts.apiUrl}/${_self.billingCycle._id}`;
      $http
        .put(updateUrl, _self.billingCycle)
        .then(function (response) {
          _self.refresh();
          msgs.addSuccess("Operação realizada com Sucesso!");
        })
        .catch(function (resp) {
          msgs.addError(resp.data.errors);
        });
    };

    _self.deleteBillingCycle = function () {
      const deleteUrl = `${consts.apiUrl}/${_self.billingCycle._id}`;
      $http
        .delete(deleteUrl, _self.billingCycle)
        .then(function (response) {
          _self.refresh();
          msgs.addSuccess("Operação realizada com Sucesso!");
        })
        .catch(function (resp) {
          msgs.addError(resp.data.errors);
        });
    };

    //--Credits

    //Incluir
    _self.addCredit = (index) => {
      _self.billingCycle.credits.splice(index + 1, 0, {});
    };

    //Copiar
    _self.cloneCredit = (index, { name, value }) => {
      _self.billingCycle.credits.splice(index + 1, 0, { name, value });
      _self.calculateValues();
    };
    //Delete
    _self.deleteCredit = (index) => {
      if (_self.billingCycle.credits.length > 1) {
        _self.billingCycle.credits.splice(index, 1);
        _self.calculateValues();
      }
    };

    //--Debts

    //Incluir
    _self.addDebt = (index) => {
      _self.billingCycle.debts.splice(index + 1, 0, {});
    };

    //Copiar
    _self.cloneDebt = (index, { name, value, status }) => {
      _self.billingCycle.debts.splice(index + 1, 0, { name, value, status });
      _self.calculateValues();
    };
    //Delete
    _self.deleteDebt = (index) => {
      if (_self.billingCycle.debts.length > 1) {
        _self.billingCycle.debts.splice(index, 1);
        _self.calculateValues();
      }
    };

    _self.calculateValues = () => {
      _self.credit = 0;
      _self.debt = 0;

      if (_self.billingCycle) {
        _self.billingCycle.credits.forEach(function ({ value }) {
          _self.credit += !value || isNaN(value) ? 0 : parseFloat(value);
        });

        _self.billingCycle.debts.forEach(function ({ value }) {
          _self.debt += !value || isNaN(value) ? 0 : parseFloat(value);
        });

        _self.total = _self.credit - _self.debt;
      }
    };

    _self.refresh();
  }
})();
