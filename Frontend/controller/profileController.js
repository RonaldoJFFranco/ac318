(function() {
  angular.module('perfilFitgame',[])
  .controller('profileCtrl',[function(){
    var vm = this;
    vm.nome='';
    vm.email='';
    vm.sala=[
      { nome:"sala1",
        atividades:[
                    {id:1, nome : "Atividade1", dificuldade: "Baixa", descricao:"10 agachamentos, 10 flexões"},
                    {id:2, nome : "Atividade2", dificuldade: "Normal", descricao:"20 agachamentos, 20 flexões"}
                   ]
      }
    ];
    vm.atividadesCriadas=[
      {id:1, nome : "Atividade1", dificuldade: "Baixa", descricao:"10 agachamentos, 10 flexões"},
      {id:2, nome : "Atividade2", dificuldade: "Normal", descricao:"20 agachamentos, 20 flexões"},
      {id:3, nome : "Atividade3", dificuldade: "Alta", descricao:"30 agachamentos, 30 flexões"}
    ];
  }]);
})();
