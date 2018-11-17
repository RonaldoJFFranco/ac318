angular.module("Fitgame")
.controller("registerCtrl",registerCtrl)

registerCtrl.$inject = ['ApiCall'];

function registerCtrl(ApiCall){
  var vm = this;
  vm.nome='';
  vm.email='';
  vm.senha='';
  vm.model=[{
    'nome':vm.nome,
    'email':vm.email,
    'senha':vm.senha
  }];
  vm.submit=function(){
    vm.model=[{
      'nome':vm.nome,
      'usuario':vm.email,
      'senha':vm.senha
    }];
    ApiCall.registerAccount(vm.model);
  };
};
