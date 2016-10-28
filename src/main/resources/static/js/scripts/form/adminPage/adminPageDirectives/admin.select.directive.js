if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}
academy.admin.SelectDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/adminPage/adminView/admin.select.html',
        scope: {
            "add": '=',
            "question": '=',
            "remove": '=',
            "index": '='
        },
        replace: true
    }
};
