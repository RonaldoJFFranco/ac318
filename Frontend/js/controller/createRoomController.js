
angular.module('Fitgame')
.controller('createRoomCtrl',createRoomCtrl)

createRoomCtrl.$inject = ['ApiCall','$window','$location'];

function createRoomCtrl(ApiCall,$window,$location){

  var sl = null;
  new URL(location.href).searchParams.get('at')
  const params = new URL(location.href).searchParams;
  var sl = params.get('sl');

  var vm = this;
  vm.pin=Math.floor(Math.random() * 8999 + 1000);
  vm.atividadesDaSala=[];
  vm.selecionada='';
  vm.retirar='';
  vm.atividades=[];

  if(sl){
    console.log("qweqweqweqw");
    ApiCall.getRoomById(sl)
    .then((resp)=>{
      console.log(resp.data[0].pin);
      vm.pin = resp.data[0].pin;
      vm.atividadesDaSala= resp.data[0].atividades;
      //vm.atividades= resp.data[0].atividades;
      vm.flag = true;
    })
    .catch(() => {
      return console.log("error", "Não foi possível editar a atividade");
    });
  }

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
      "atividades":JSON.parse(angular.toJson(vm.atividadesDaSala))
    }

    console.log(vm.aux);
    if(sl==null){
      ApiCall.createRoom(vm.aux)
      .then((resp) => {
        alert("Sala criada com sucesso");
        $window.location.href="profile.html";
      })
      .catch(() => {
        alert("Não foi possivel criar a sala");
        $window.location.href="profile.html";
      });
    }
    else {
      ApiCall.editRoom(vm.aux,sl)
      .then((resp) => {
        alert("Edição realizada com sucesso");
        $window.location.href="profile.html";
      })
      .catch(() => {
        alert("Não foi possivel editar a sala");
        $window.location.href="profile.html";
      });
    }
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
