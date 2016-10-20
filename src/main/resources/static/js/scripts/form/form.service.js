if(!academy){
    var academy = {};
}

if(!academy.form){
    academy.form = {};
}
academy.form.FormServiceProvider =function(){

    this.$get = ['$http',function($http){
        return new academy.form.FormService($http);
    }]
};

academy.form.FormService =function($http){
    this.send = function(data) {
        console.log(data);
        $http.post("/form/data", data);
    }
};