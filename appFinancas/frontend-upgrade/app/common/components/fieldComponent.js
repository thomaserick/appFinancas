(function () {
    angular.module('App').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
            type: '@',
            model: '=',
            readonly: '<',
        },
        controller: [
            "gridSystem",
            function (gridSystem) {
                this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid);
            },
        ],
        templateUrl: 'common/components/fieldComponent.html'
    })

})();