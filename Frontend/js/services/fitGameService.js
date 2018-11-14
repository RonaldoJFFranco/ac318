angular.module("Fitgame")
.service("ApiCall",ApiCall);

ApiCall.$inject = ['$http'];

function ApiCall ($http){
  
  this.login = () => {
    console.log( "teste");
  }
}
