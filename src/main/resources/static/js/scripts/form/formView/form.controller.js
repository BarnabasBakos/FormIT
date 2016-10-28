if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}

academy.form.FormController = function(formService) {
    var vm = this;
    vm.getForms = getForms;
    vm.send = send;
    vm.viewForm = viewForm;
    vm.form = formService.getForm;
    vm.data = {};

    function send () {
        for (var i = 0; i < vm.form.questions.length; i++) {
            if (vm.form.questions[i].type === "checkbox") {
                vm.data.answers[i] = vm.form.questions[i].answer;
            }
            else if (typeof vm.data.answers[i] === "undefined" ) {
                vm.data.answers[i] = "";
            }
        }
        formService.send(vm.data, "apoteket", vm.form.formtitle);
    }

    formService.getForm()
        .then (function(data) {
            vm.form = data;
        });

    function getForms (){
        formService.getForms()
            .then(function(data){
                vm.forms=data;
            });
    }

    function viewForm (formData) {
        vm.form=formData.form;
    }
};
