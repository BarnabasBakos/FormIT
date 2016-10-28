if (!academy) {
    var academy = {};
}

if (!academy.admin) {
    academy.admin = {};
}
academy.admin.AdminServiceProvider = function () {

    this.$get = ['$http', '$q',function($http, $q){
        return new academy.admin.AdminService($http, $q);
    }]
};

academy.admin.AdminService =function($http, $q){
    var id=0;
    var index;
    var vm = this;

    vm.addCheckQuestion = addCheckQuestion;
    vm.addNewChoice = addNewChoice;
    vm.addRadioQuestion = addRadioQuestion;
    vm.addSelectQuestion = addSelectQuestion;
    vm.addTextareaQuestion = addTextareaQuestion;
    vm.addTextQuestion = addTextQuestion;
    vm.getForm = getForm;
    vm.getKey = getKey;
    vm.send = send;
    vm.remove=remove;


    vm.form = {
        formtitle: '',
        questions: []
    };


    function getForm() {
        return vm.form

    }

    function addTextQuestion(description) {
        var object = {
            "description": description,
            "type": "text"
        };
        vm.form.questions.push(object);
        return object;
    }

    function addRadioQuestion(data) {
        var object = {
            "description": data,
            "type": "radio",
            "choices": []
        };
        vm.form.questions.push(object);
        return object;
    }

    function addSelectQuestion(data) {
        var object = {
            "description": data,
            "type": "select",
            "choices": []
        };
        vm.form.questions.push(object);
        return object;

    }

    function addTextareaQuestion(data) {
        var object = {
            "description": data,
            "type": "textarea"
        };
        vm.form.questions.push(object);
        return object;
    }

    function addCheckQuestion(data) {
        var object = {
            "description": data,
            "type": "checkbox",
            "choices": []
        };
        vm.form.questions.push(object);
        return object;
    }

    function getKey () {
        var deferral = $q.defer();
        $http.get("/rest/form/key")
            .then(function (response) {
                deferral.resolve(response.data);
            });
        return deferral.promise;
    }
    function send(key) {
        $http.post("/rest/form/" + encodeURI(key), vm.form);
    }

    function addNewChoice(question, option) {

        index = vm.form.questions.indexOf(question);
        vm.form.questions[index].choices.push(option);
    }
    function remove(question){
        index = vm.form.questions.indexOf(question);
        vm.form.questions.splice(index,1);
    }

};