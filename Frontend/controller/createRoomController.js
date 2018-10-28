(function() {
  angular.module('createRoomFitgame',[])
  .controller('createRoomCtrl',[function(){
    var vm = this;
    vm.nome='';
    vm.atividadesDaSala=[];
    vm.selecionada='';
    vm.retirar='';
    vm.atividades=[
      {id:1, nome : "Atividade1", dificuldade: "Baixa", descricao:"10 agachamentos, 10 flexões"},
      {id:2, nome : "Atividade2", dificuldade: "Normal", descricao:"20 agachamentos, 20 flexões"},
      {id:3, nome : "Atividade3", dificuldade: "Alta", descricao:"30 agachamentos, 30 flexões"}
    ];
    vm.adicionar=function(){
      var found ='';
      found = vm.atividadesDaSala.find(function(item){return item.id == vm.selecionada});
      if(found == null)
      {
        found = vm.atividades.find(function(item){return item.id == vm.selecionada});
        vm.s=found;
        vm.atividadesDaSala.push(vm.s);
      }
      else{
        console.log('já adicionado');
      }
    };
    vm.remover=function(){

      var found = vm.atividadesDaSala.find(function(item){return item.id == vm.retirar});
      console.log(vm.atividadesDaSala.indexOf(found));
      console.log(vm.retirar);
      vm.atividadesDaSala.splice(vm.atividadesDaSala.indexOf(found),1);
    };
    vm.submit=function(){
      vm.aux={
        "nome":vm.nome,
        "atividades":vm.atividadesDaSala
      }
      console.log(vm.aux);
    };
  }]);
})();
