
angular.module('Fitgame')
.controller('registerCtrl',registerCtrl)

registerCtrl.$inject=['ApiCall','$window','$location'];

function registerCtrl(ApiCall,$window,$location){

  var at = null;
  new URL(location.href).searchParams.get('at')
  const params = new URL(location.href).searchParams;
  var at = params.get('at');

  var vm = this;
  vm.flag = false;
  vm.nome='';
  vm.dificuldade='';
  vm.describ='';
  vm.model={
    'nome':vm.nome,
    'dificuldade':vm.dificuldade,
    'descricao':vm.describ,
  };

  if(at){
    ApiCall.getActivityById(at)
    .then((resp)=>{
      vm.nome = resp.data.nome;
      vm.dificuldade= resp.data.dificuldade;
      vm.describ = resp.data.descricao;
      vm.flag = true;
    })
    .catch(() => {
      return console.log("error", "Não foi possível editar a atividade");
    });
  }

  vm.submit=function(){
    vm.model={
      'nome':vm.nome,
      'dificuldade':vm.dificuldade,
      'descricao':vm.describ,
      'avaliador':{
        "id":window.sessionStorage.getItem('id'),
        "senha":window.sessionStorage.getItem('senha'),
        "nome":window.sessionStorage.getItem('nome'),
        "usuario":window.sessionStorage.getItem('usuario')
      }
    };

    console.log(vm.model,at);
    if(at==null){
      ApiCall.createActivity(vm.model)
      .then((resp) => {
        alert("Atividades criada com sucesso");
        $window.location.href="profile.html";
      })
      .catch(() => {
        alert("Não foi possivel criar a atividade");
        $window.location.href="profile.html";
      });
    }
    else{
      ApiCall.editActivity(vm.model,at)
      .then((resp) => {
        alert("Edição realizada com sucesso");
        $window.location.href="profile.html";
      })
      .catch(() => {
        alert("Não foi possivel editar a atividade");
        $window.location.href="profile.html";
      });
    }
  };

  vm.voltar = () => {
    $window.location.href="profile.html";
  };

  vm.delete = () =>{
    ApiCall.deleteAtividade(window.sessionStorage.getItem('id'))
    .then((resp) => {
      alert("Conta deletada com sucesso");
      sessionStorage.clear();
      $window.location.href="index.html";
    })
    .catch(() => {
      alert("error", "Não foi possível realizar a exclusão");
    });
  }

  vm.logout = () => {
    sessionStorage.clear();
    $window.location.href="index.html";
  };
};
