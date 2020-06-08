(function () {
  angular
    .module("App")
    .controller("AuthCtrl", ["$location", "msgs", "auth", AuthController]);

  function AuthController($location, msgs, auth) {
    const _self = this;
    _self.loginMode = true;

    _self.changeMode = () => (_self.loginMode = !_self.loginMode);

    _self.login = () => {
      auth.login(_self.user, (err) =>
        err ? msgs.addError(err) : $location.path("/")
      );
    };

    _self.signup = () => {
      auth.signup(_self.user, (err) =>
        err ? msgs.addError(err) : $location.path("/")
      );
    };
    _self.getUser = () => auth.getUser();

    _self.logout = () => {
      auth.logout(() => $location.path("/"));
    };
  }
})();
