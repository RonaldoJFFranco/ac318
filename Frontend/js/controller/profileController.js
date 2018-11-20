
angular.module('Fitgame')
.controller('profileCtrl',profileCtrl)

profileCtrl.$inject = ['ApiCall','$window']

function profileCtrl(ApiCall,$window){
  if(window.sessionStorage.getItem('usuario'))
  {
    var vm = this;
    vm.nome = window.sessionStorage.getItem('nome');///teste
    vm.usuario = window.sessionStorage.getItem('usuario');
    vm.atividadesCriadas = window.sessionStorage.getItem('atividades');
    vm.sala = [];
    vm.user = {
      "id":window.sessionStorage.getItem('id'),
      "senha":window.sessionStorage.getItem('senha'),
      "nome":window.sessionStorage.getItem('nome'),
      "usuario":window.sessionStorage.getItem('usuario')
    }

    ApiCall.getRoom(vm.user)
    .then((resp) => {
        console.log(resp.data);
        vm.sala = resp.data;

    })
    .catch(() => {
      return console.log("error", "Não foi possível carregar a lista de consultas disponíveis");
    });

    ApiCall.getActivitys(vm.user)
    .then((resp) => {
      console.log(resp.data);
        vm.atividadesCriadas = resp.data;
    })
    .catch(() => {
      return console.log("error", "Não foi possível carregar a lista de consultas disponíveis");
    });
    // vm.atividadesCriadas=[
    //   {id:1, nome : "Atividade1", dificuldade: "Baixa", descricao:"10 agachamentos, 10 flexões"},
    //   {id:2, nome : "Atividade2", dificuldade: "Normal", descricao:"20 agachamentos, 20 flexões"},
    //   {id:3, nome : "Atividade3", dificuldade: "Alta", descricao:"30 agachamentos, 30 flexões"}
    // ];

    vm.deleteSla = (id) => {
      console.log(id);
      ApiCall.deleteRoom(id)
      .then((resp) => {
        alert("Atividade excluída");
        $window.location.reload();
      })
      .catch(() => {
        alert("error", "Não foi possível realizar a exclusão");
      });
    };

    vm.deleteAtv = (id) => {
      console.log(id);
      ApiCall.deleteActivity(id)
      .then((resp) => {
        alert("Atividade excluída");
        $window.location.reload();
      })
      .catch(() => {
        alert("error", "Não foi possível realizar a exclusão");
      });
    };

    vm.logout = () => {
      sessionStorage.clear();
      $window.location.href="index.html";
    };
  }
  else
  {
      $window.location.href="index.html";
  }

}
