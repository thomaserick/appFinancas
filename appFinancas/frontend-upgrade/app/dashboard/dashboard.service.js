(function () {
    angular
        .module('App')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = ['$http', '$q'];

    function DashboardService($http, $q) {

        var service = {
            getBillingSummary: getBillingSummary,
        }

        return service;

        function getBillingSummary() {

            const url = `http://localhost:3003/billingSummary`;

            return $http.get(url)
                .then(getBillingSummaryData)
                .catch(function (err) {
                    return $q.reject(err);
                });


            function getBillingSummaryData(response) {
                return response.data;
            }
        }
    }


})()