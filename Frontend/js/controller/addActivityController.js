
angular.module('Fitgame')
.controller('registerCtrl',registerCtrl)

registerCtrl.$inject=[];

function registerCtrl(){
  var vm = this;
  vm.nome='';
  vm.dificuldade='';
  vm.describ='';
  vm.model=[{
    'nome':vm.nome,
    'dificuldade':vm.dificuldade,
    'descricao':vm.describ,
  }];
  vm.submit=function(){
    vm.model=[{
      'nome':vm.nome,
      'dificuldade':vm.dificuldade,
      'descricao':vm.describ
    }];
    console.log(vm.model);
  };
};

