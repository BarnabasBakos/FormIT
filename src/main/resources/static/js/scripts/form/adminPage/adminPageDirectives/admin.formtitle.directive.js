if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}
academy.admin.FormtitleDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'js/scripts/form/adminPage/adminView/admin.formtitle.html',
        scope: {
            "formtitle": '='

        },
        replace: true
    }
};

