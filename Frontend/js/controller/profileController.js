
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
    vm.sala = window.sessionStorage.getItem('sala');
    // Apicall.getRooms(window.localStorage.getItem('id'))
    // .then((resp) => {
    //   if(resp && resp.status == 200){
    //     vm.sala = JASON.parse(resp.data.body);
    //   }
    // })
    // .catch(() => {
    //   return console.log("error", "Não foi possível carregar a lista de consultas disponíveis");
    // });

    // vm.sala=[
    //   { nome:"sala1",
    //     atividades:[
    //                 {id:1, nome : "Atividade1", dificuldade: "Baixa", descricao:"10 agachamentos, 10 flexões"},
    //                 {id:2, nome : "Atividade2", dificuldade: "Normal", descricao:"20 agachamentos, 20 flexões"}
    //                 ]
    //   }
    // ];

    // Apicall.getActivitys(window.localStorage.getItem('id'))
    // .then((resp) => {
    //   if(resp && resp.status == 200){
    //     vm.atividadesCriadas = JASON.parse(resp.data.body);
    //   }
    // })
    // .catch(() => {
    //   return console.log("error", "Não foi possível carregar a lista de consultas disponíveis");
    // });
    // vm.atividadesCriadas=[
    //   {id:1, nome : "Atividade1", dificuldade: "Baixa", descricao:"10 agachamentos, 10 flexões"},
    //   {id:2, nome : "Atividade2", dificuldade: "Normal", descricao:"20 agachamentos, 20 flexões"},
    //   {id:3, nome : "Atividade3", dificuldade: "Alta", descricao:"30 agachamentos, 30 flexões"}
    // ];

    vm.logout = () => {
      sessionStorage.clear();
      $window.location.href="index.html";
    }
  }
  else
  {
      $window.location.href="index.html";
  }

}
