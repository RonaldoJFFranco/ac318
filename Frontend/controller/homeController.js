(function() {
  angular.module('homeFitgame',[])
  .controller('homeCtrl',[function(){
    var vm = this;
    vm.login=[];
    vm.email='';
    vm.senha='';
    vm.submit=function(){
      vm.login.push(this.email);
      vm.login.push(this.senha);
      console.log(vm.login);
    };
  }]);
})();
