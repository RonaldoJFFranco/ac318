(function() {
  angular.module("homeFitgame")
  .service("ApiCall",ApiCall);
  homeCtrl.$inject['$http'];
  function ApiCall ($http){
    this.login()
    {
      console.log( "teste");
    }
  }
})();
