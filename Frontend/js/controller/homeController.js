angular.module('Fitgame')
.controller('homeCtrl',homeCtrl);

homeCtrl.$inject = ['ApiCall','$window'];

function homeCtrl(ApiCall,$window){
  var vm = this;
  vm.usuario='';
  vm.senha='';

  vm.login={
    'usuario':vm.usuario,
    'senha':vm.senha
  };
  vm.submit=function(){
    vm.login={
      'usuario':vm.usuario,
      'senha':vm.senha
    };
    ApiCall.getAllUser()
    .then((resp) => {
      console.log(resp.data);
      for (var i = 0; i < resp.data.length; i++) {
        if(resp.data[i].usuario == vm.email && resp.data[i].senha == vm.senha){
          window.sessionStorage.setItem('usuario', resp.data[i].usuario);
          window.sessionStorage.setItem('nome', resp.data[i].nome);
          window.sessionStorage.setItem('senha', resp.data[i].senha);
          window.sessionStorage.setItem('id', resp.data[i].id);
          $window.location.href="profile.html";
        }
      }
      if(sessionStorage.length==0){
        alert("e-mail ou senha incorretos, verifique suas informações e tente novamente!");
      }
    })
    .catch(() => {
      alert("error", "Não foi possível fazer o login");
    });
    // .then((resp) => {
    //
    //
    // })
    // .catch(() => {
    //   return console.log("error", "Não foi possível fazer o login");
    // });
  };
};
