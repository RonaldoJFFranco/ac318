(function() {
  angular.module("homeFitgame",['$http'])
  .service("ApiCall",ApiCall);
  function ApiCall ($http){
    this.login()
    {
      console.log( "teste");
    }
  }
})();
