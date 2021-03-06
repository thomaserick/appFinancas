(function()
{
angular.module('App').component('valueBox', {
    bindings: {
        grid:'@',
        colorClass:'@',
        value:'@',
        text:'@',
        iconClass:'@',

    },
    controller:[
        "gridSystem",
        function (gridSystem) {
          this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid);
        },
    ],
    templateUrl: 'common/components/valueBoxComponent.html'
})
})();