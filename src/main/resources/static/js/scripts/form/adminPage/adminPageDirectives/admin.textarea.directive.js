if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}
academy.admin.TextareaDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/adminPage/adminView/admin.textarea.html',
        scope: {
            "question": '=',
            "remove": '=',
            "index": '='
        },
        replace: true
    }
};
