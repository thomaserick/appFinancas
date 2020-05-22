(function () {
  angular.module("App").component("field", {
    bindings: {
      id: "@",
      label: "@",
      grid: "@",
      placeholder: "@",
      type: "@",
      model: "=",
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
        <input type="{{ $ctrl.type}}" id="{{$ctrl.id}}" class="form-control" placeholder="{{ $ctrl.placeholder}}" ng-model="$ctrl.model" />
      </div>
    </div>
    `,
  });
})();
