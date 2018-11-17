angular.module("Fitgame")
.service("ApiCall",ApiCall);

ApiCall.$inject = ['$http'];

function ApiCall ($http){

  this.login = (dataLogin) =>
  {
    return $http.post(`http://localhost:8080/route`,JSON.stringify(dataLogin));
  }
  this.createRoom = (dataRoom) =>
  {
    return $http.post(`http://localhost:8080/route`,JSON.stringify(dataRoom));
  }
  this.registerAccount = (dataNewUser) =>
  {
    return $http.post("http://localhost:8080/avaliadores",JSON.stringify(dataNewUser));
  }
  this.createActivity = (dataNewActivity) =>
  {
    return $http.post(`http://localhost:8080/route`,JSON.stringify(dataNewActivity));
  }
  this.getRooms = (userId) =>
  {
    return $http.get(`http://localhost:8080/route?`+userId);
  }
  this.getActivitys = (userId) =>
  {
    return $http.get(`http://localhost:8080/route?`+userId);
  }
  this.getAllActivitys = () =>
  {
    return $http.get(`http://localhost:8080/route`);
  }
}
