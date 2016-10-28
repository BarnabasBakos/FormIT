if (!academy) {
    var academy = {};
}
if (!academy.admin) {
    academy.admin = {};
}

academy.admin.AdminController = function (adminService) {
    var vm = this;
    vm.itemBag = [];
    vm.addCheck = addCheck;
    vm.addChoice = addChoice;
    vm.addRadio = addRadio;
    vm.addSelect = addSelect;
    vm.addText = addText;
    vm.addTextarea = addTextarea;
    vm.handleDrop = handleDrop;
    vm.send = send;
    vm.form = adminService.getForm();
    vm.remove=remove;

    function addText(question, index) {
        vm.itemBag[index] = adminService.addTextQuestion(question);
    }

    function handleDrop(item) {
        vm.itemBag.push(item);
    }

    function addRadio(question, index) {
        vm.itemBag[index] = adminService.addRadioQuestion(question);
    }

    function addSelect(question, index) {
        vm.itemBag[index] = adminService.addSelectQuestion(question);
    }

    function addTextarea(question, index) {
        vm.itemBag[index] = adminService.addTextareaQuestion(question);
    }


    function addCheck(question, index) {
        vm.itemBag[index] = adminService.addCheckQuestion(question);
    }

    function send() {
        adminService.getKey().then(function (data) {
            console.log(data);
            adminService.send(data.key);
        })
    }


    function addChoice(question, option) {
        adminService.addNewChoice(question, option);
    }

    function remove (question, index) {
        vm.itemBag.splice(index, 1);
        adminService.remove(question);
    }

};

