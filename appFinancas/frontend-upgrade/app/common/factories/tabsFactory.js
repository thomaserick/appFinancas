(function () {

    angular.module('App').factory('tabs', [TabsFactory])

    function TabsFactory() {

        return { show }

        function show(owner, {
            tabList = false,
            tabCreate = false,
            tabUpdate = false,
            tabDelete = false
        }) {
            owner.tabList = tabList
            owner.tabCreate = tabCreate
            owner.tabUpdate = tabUpdate
            owner.tabDelete = tabDelete
        }


    }



})();