if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}
academy.admin.formAddQuestionDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/formEditOptions/form.add.question.html',
        scope: {
            "submit": '=',
            "index": '=',
            "name": '='
        },
        replace: true

    }
};
