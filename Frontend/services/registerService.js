(function() {
  angular.module('homeFitgameService',[])
  .service('ApiCall',['$http',function($http){
    this.CadastroCall = function (obj){
      result = $http.post('localhost/mudarAQUIriboliaaaaaaaaaaaaaaaaaaaaa',obj).success(function(data,status){
        result = (data);
      }).error(function(){
        alert('Deu Ruim');
      });
      return result;
    };
  }]);
})();
