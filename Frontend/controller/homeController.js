(function() {
  angular.module('homeFitgame',[])
  .controller('homeCtrl',[function(){
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
      console.log(vm.model);
    };
  }]);
})();
