
angular.module('Fitgame')
.controller('createRoomCtrl',createRoomCtrl)

createRoomCtrl.$inject = ['ApiCall'];

function createRoomCtrl(ApiCall){
  var vm = this;
  vm.nome='';
  vm.atividadesDaSala=[];
  vm.selecionada='';
  vm.retirar='';
  vm.atividades=[];

  ApiCall.getAllActivitys()
  .then((resp) => {
    console.log(resp.data);
    vm.atividades=resp.data;
  })
  .catch(() => {
    return console.log("error", "Não foi possível fazer o login");
  });

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
    ApiCall.createRoom(vm.aux)
    .then((resp) => {
      return console.log("deu");
    })
    .catch(() => {
      return console.log("error", "Não foi possível realizar o cadastro");
    });
  };
}
