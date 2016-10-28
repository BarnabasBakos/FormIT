(function() {
    'use strict';

    angular.module('academy.admin',[])
    .provider('adminService', academy.admin.AdminServiceProvider)
    .directive('addQuestion',academy.admin.formAddQuestionDirective)
    .directive('draggable', academy.form.formDragDirective)
    .directive('droppable', academy.form.formDropDirective)
    .directive('adminRadio', academy.admin.RadioDirective)
    .directive('adminText', academy.admin.TextDirective)
    .directive('adminCheckbox', academy.admin.CheckboxDirective)
    .directive('adminSelect', academy.admin.SelectDirective)
    .directive('adminTextarea', academy.admin.TextareaDirective)
    .directive('adminFormtitle', academy.admin.FormtitleDirective);
})();

