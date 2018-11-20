
angular.module('Fitgame')
.controller('createRoomCtrl',createRoomCtrl)

createRoomCtrl.$inject = ['ApiCall','$window'];

function createRoomCtrl(ApiCall,$window){
  var vm = this;
  vm.pin=Math.floor(Math.random() * 8999 + 1000);
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
    return console.log("error", "Não foi possível carregar as atividades");
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
      'pin':vm.pin,
      'avaliador':{
        "id":window.sessionStorage.getItem('id'),
        "senha":window.sessionStorage.getItem('senha'),
        "nome":window.sessionStorage.getItem('nome'),
        "usuario":window.sessionStorage.getItem('usuario')
      },
      "atividades":JSON.parse(angular.toJson(vm.atividades))
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

  vm.voltar = () => {
    console.log("qwertS");
    $window.location.href="profile.html";
  }

  vm.logout = () => {
    sessionStorage.clear();
    $window.location.href="index.html";
  }
}
