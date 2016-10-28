if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}
academy.admin.TextDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/adminPage/adminView/admin.text.html',
        scope: {
            "question": '=',
            "remove": '=',
            "index": '='
        },
        replace: true
    }
};
