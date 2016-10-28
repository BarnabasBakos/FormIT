if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}
academy.admin.CheckboxDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/adminPage/adminView/admin.checkbox.html',
        scope: {
            "add": '=',
            "question": '=',
            "remove": '=',
            "index": '='

        },
        replace: true
    }
};
