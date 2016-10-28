if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}
academy.admin.RadioDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/adminPage/adminView/admin.radio.html',
        scope: {
            "add": '=',
            "question": '=',
            "remove": '=',
            "index": '='

        },
        replace: true
    }
};
