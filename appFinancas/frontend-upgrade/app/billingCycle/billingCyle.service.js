(function () {

    angular
        .module('App')
        .factory('billingCycleService', billingCycleService)

    billingCycleService.$inject = ['$http', '$q'];

    function billingCycleService($http, $q) {

        const url = `http://localhost:3003/billingCycles`;


        var service = {

            saveBillingCycle: saveBillingCycle,
            getAllBillingCyle: getAllBillingCyle,
            deleteBillingCycle: deleteBillingCycle,
            updateBillingCycle: updateBillingCycle
        }

        return service;

        function getAllBillingCyle() {

            return $http.get(url)
                .then(responseBillingCyclData)
                .catch(function (err) {
                    return $q.reject(err);
                });
        }

        function saveBillingCycle(billingCycle) {

            return $http.post(url, billingCycle)
                .then(responseBillingCyclData)
                .catch(function (err) {
                    return $q.reject(err);
                });
        }

        function deleteBillingCycle(id) {
            const deleteUrl = `${url}/${id}`;
            return $http.delete(deleteUrl)
                .then(responseBillingCyclData)
                .catch(function (err) {
                    return $q.reject(err)
                })
        }

        function updateBillingCycle(billingCycle) {
            const deleteUrl = `${url}/${billingCycle.id}`;
            return $http.put(deleteUrl, billingCycle)
                .then(responseBillingCyclData)
                .catch(function (err) {
                    return $q.reject(err)
                })
        }

        function responseBillingCyclData(response) {
            return response.data;
        }

    }

})()