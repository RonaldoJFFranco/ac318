(function() {
  angular.module('registerFitgame',[])
  .controller('registerCtrl',[function(){
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
        'email':vm.email,
        'senha':vm.senha
      }];
      console.log(vm.model);
    };
  }]);
})();
