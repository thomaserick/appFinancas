(function () {

    angular.module('App').factory('msgsToastr', msgsFactory);

    msgsFactory.$inject = ['toastr'];

    function msgsFactory(toastr) {

        return {

            addSucess: addSucess,
            addError: addError,
            addInfo: addInfo,
            addWarning: addWarning
        }


        function addSucess(msgs) {
            addMsg(msgs, 'Sucesso', 'success');
        }

        function addError(msgs) {
            addMsg(msgs, 'Erro', 'error')
        }

        function addInfo(msgs) {
            addMsg(msgs, "Info", 'info')
        }

        function addWarning(msgs) {
            addMsg(msgs, 'Alerta', 'warning')
        }

        function addMsg(msgs, title, method) {

            if (msgs instanceof Array) {
                msgs.forEach(msg => toastr[method](msg, title))
            }
            else {
                toastr[method](msgs, title)
            }
        }
    }


})()