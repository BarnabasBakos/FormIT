angular.module("academy", ['ngRoute', 'ngMaterial', 'academy.form'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/form', {
                templateUrl: 'js/scripts/form/form.template.html',
                controller: academy.form.FormController,
                controllerAs: 'vm'
            })
            .otherwise('/form')
    }]);