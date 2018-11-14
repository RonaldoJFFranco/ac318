angular.module("Fitgame")
.controller("homeCtrl",homeCtrl);

homeCtrl.$inject = ['ApiCall'];

function homeCtrl(ApiCall){
  var vm = this;
  vm.email='';
  vm.senha='';
  vm.model=[{
    'email':vm.email,
    'senha':vm.senha
  }];
  vm.submit=function(){
    vm.model=[{
      'email':vm.email,
      'senha':vm.senha
    }];
    console.log(ApiCall.login());
  };
};
