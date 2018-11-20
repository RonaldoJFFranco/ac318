
angular.module('Fitgame')
.controller('registerCtrl',registerCtrl)

registerCtrl.$inject=['ApiCall','$window'];

function registerCtrl(ApiCall,$window){
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
      'descricao':vm.describ,
      'avaliador':{
        "id":window.sessionStorage.getItem('id'),
        "senha":window.sessionStorage.getItem('senha'),
        "nome":window.sessionStorage.getItem('nome'),
        "usuario":window.sessionStorage.getItem('usuario')
      }
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

  vm.voltar = () => {
    $window.location.href="profile.html";
  };

  vm.logout = () => {
    sessionStorage.clear();
    $window.location.href="index.html";
  };
};
