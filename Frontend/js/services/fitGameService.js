angular.module("Fitgame")
.service("ApiCall",ApiCall);

ApiCall.$inject = ['$http'];

function ApiCall ($http){

  //crud user
  this.registerAccount = (dataNewUser) =>
  {
    return $http.post("http://localhost:8080/avaliadores",dataNewUser);
  }
  this.getAllUser = () =>
  {
    return $http.get("http://localhost:8080/avaliadores");
  }
  this.editAccount = (dataEditUser) =>
  {
    return $http.put("http://localhost:8080/avaliadores/"+window.sessionStorage.getItem('id'),dataEditUser);
  }
  this.deleteAccount = (idUser) =>
  {
    return $http.delete("http://localhost:8080/avaliadores/"+idUser);
  }


  this.createRoom = (dataRoom) =>
  {
    return $http.post("http://localhost:8080/salas",dataRoom);
  }
  this.createActivity = (dataNewActivity) =>
  {
    return $http.post("http://localhost:8080/atividades",dataNewActivity);
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
    return $http.get("http://localhost:8080/atividades");
  }
}
