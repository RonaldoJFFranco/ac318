angular.module("Fitgame")
.controller("homeCtrl",homeCtrl);

homeCtrl.$inject = ['ApiCall','$window'];

function homeCtrl(ApiCall,$window){
  var vm = this;
  vm.email='';
  vm.senha='';
  vm.user='';
  vm.login=[{
    'email':vm.email,
    'senha':vm.senha
  }];
  vm.submit=function(){
    vm.login=[{
      'email':vm.email,
      'senha':vm.senha
    }];
    window.localStorage.setItem('usuario', vm.email);
    window.localStorage.setItem('email', vm.email);
    $window.location.href="profile.html";
    // console.log(ApiCall.login(vm.login))
    // .then((resp) => {
    //   if(resp && resp.status == 200){
    //     vm.user = JASON.parse(resp.data.body);
    //     window.localStorage.setItem('usuario', vm.user.usuario);
    //     window.localStorage.setItem('nome', vm.user.nome);
    //     window.localStorage.setItem('email', vm.user.email);
    //     window.localStorage.setItem('id', vm.user.id);
    //     $window.location.href="profile.html";
    //   }
    // })
    // .catch(() => {
    //   return console.log("error", "Não foi possível fazer o login");
    // });
  };
};
