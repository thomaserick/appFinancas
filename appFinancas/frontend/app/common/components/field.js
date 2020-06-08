(function () {
  angular.module("App").component("field", {
    bindings: {
      id: "@",
      label: "@",
      grid: "@",
      placeholder: "@",
      type: "@", //String
      model: "=", //expressão que vai ser resolvida dentor do componente
      readonly: "<", //Sentido unico do parent para dentro do componente
    },
    controller: [
      "gridSystem",
      function (gridSystem) {
        this.$onInit = () =>
          (this.gridClasses = gridSystem.toCssClasses(this.grid));
      },
    ],
    template: `    
    <div class="{{ $ctrl.gridClasses }}">
      <div class="form-group">
        <label for="{{ $ctrl.id}}">{{$ctrl.label}}</label>
        <input type="{{ $ctrl.type}}" id="{{$ctrl.id}}" class="form-control" placeholder="{{ $ctrl.placeholder}}" ng-model="$ctrl.model" ng-readonly="$ctrl.readonly" />
      </div>
    </div>
    `,
  });
})();
