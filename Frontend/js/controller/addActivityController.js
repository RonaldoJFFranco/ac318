
angular.module('Fitgame')
.controller('registerCtrl',registerCtrl)

registerCtrl.$inject=["ApiCall"];

function registerCtrl(ApiCall){
  var vm = this;
  vm.nome='';
  vm.dificuldade='';
  vm.describ='';
  vm.model={
    'nome':vm.nome,
    'dificuldade':vm.dificuldade,
    'descricao':vm.describ,
  };
  vm.submit=function(){
    vm.model={
      'nome':vm.nome,
      'dificuldade':vm.dificuldade,
      'descricao':vm.describ
    };
    console.log(vm.model);
    ApiCall.createActivity(vm.model)
    .then((resp) => {
      return console.log("deu")
    })
    .catch(() => {
      return console.log("error", "Não foi possível criar a atividade");
    });
  };
};
