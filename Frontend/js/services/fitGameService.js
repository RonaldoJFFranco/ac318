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
  this.deleteRoom = (idAtv) =>
  {
    return $http.delete("http://localhost:8080/salas/"+idAtv);
  }
  this.getRoom = (user) =>
  {
    return $http.post("http://localhost:8080/salas/filter",user);
  }
  this.getRoomById = (id) =>
  {
    return $http.get("http://localhost:8080/salas/",id);
  }
  this.editRoom = (dataEditRoom,id) =>
  {
    return $http.put("http://localhost:8080/salas/"+id,dataEditRoom);
  }


  this.deleteActivity = (idAtv) =>
  {
    return $http.delete("http://localhost:8080/atividades/"+idAtv);
  }

  this.createActivity = (dataNewActivity) =>
  {
    return $http.post("http://localhost:8080/atividades",dataNewActivity);
  }
  this.editActivity = (dataEditAtv,id) =>
  {
    return $http.put("http://localhost:8080/atividades/"+id,dataEditAtv);
  }
  this.getActivitys = (user) =>
  {
    return $http.post("http://localhost:8080/atividades/filter",user);
  }

  this.getActivityById = (id) =>
  {
    return $http.get("http://localhost:8080/atividades/"+id);
  }

  this.getAllActivitys = () =>
  {
    return $http.get("http://localhost:8080/atividades");
  }
}
