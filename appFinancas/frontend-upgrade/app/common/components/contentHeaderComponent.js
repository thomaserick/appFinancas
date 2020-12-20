(function()
{
angular.module("App").component("contentHeader", {
    bindings: {
      name: "@",
      small: "@",
    },
    templateUrl: 'common/components/contentHeaderComponent.html',
  });
})();