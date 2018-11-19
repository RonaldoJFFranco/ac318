angular.module("Fitgame")
.controller("registerCtrl",registerCtrl)

registerCtrl.$inject = ['ApiCall',"$window"];

function registerCtrl(ApiCall,$window){

  var vm = this;
  vm.aux=sessionStorage.length;
  vm.nome=(window.sessionStorage.getItem('nome')!=null) ? window.sessionStorage.getItem('nome') : '';
  vm.email=(window.sessionStorage.getItem('usuario')!=null) ? window.sessionStorage.getItem('usuario') : '';
  vm.senha=(window.sessionStorage.getItem('senha')!=null) ? window.sessionStorage.getItem('senha') : '';
  vm.model={
    'nome': null,
    'usuario': null,
    'senha': null,
  };

  vm.submit=function(){
    vm.model={
      'nome':vm.nome,
      'usuario':vm.email,
      'senha':vm.senha
    };

    console.log(vm.model);
    if(window.sessionStorage.getItem('usuario'))
    {
      ApiCall.editAccount(vm.model)
      .then((resp) => {
        window.sessionStorage.setItem('usuario',vm.model.usuario);
        window.sessionStorage.setItem('nome',vm.model.nome);
        $window.location.href="profile.html";
        alert("Informações atualizadas com sucesso");
      })
      .catch(() => {
        alert("error", "Não foi possível realizar a alteração");
      });
    }
    else{
      ApiCall.registerAccount(vm.model)
      .then((resp) => {
        alert("Cadastro realizado com sucesso");
        $window.location.href="index.html";
      })
      .catch(() => {
        alert("error", "Não foi possível realizar o cadastro");
      });
    }
  };

  vm.delete = () =>{
    ApiCall.deleteAccount(window.sessionStorage.getItem('id'))
    .then((resp) => {
      alert("Conta deletada com sucesso");
      sessionStorage.clear();
      $window.location.href="index.html";
    })
    .catch(() => {
      alert("error", "Não foi possível realizar a exclusão");
    });
  }

  vm.logout = () => {
    sessionStorage.clear();
    $window.location.href="index.html";
  }
};
