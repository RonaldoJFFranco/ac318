(function() {
  angular.module('registerFitgame',[])
  .controller('registerCtrl',[function($http,ApiCall){
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
      var result=ApiCall.CadastroCall(vm.model).success(function(data){
        var data = $.parseJSON(JSON.parse(data));
      });
    };
  }]);
})();
