(function() {
  angular.module("homeFitgame")
  .service("ApiCall",ApiCall);
  homeCtrl.$inject['$http'];
  function ApiCall ($http){
    this.login(dataLogin)
    {
      return $http.post(`localhost/route`,dataLogin);
    }
    this.createRoom(dataRoom)
    {
      return $http.post(`localhost/route`,dataRoom);
    }
    this.registerAccount(dataNewUser)
    {
      return $http.post(`localhost/route`,dataNewUser);
    }
    this.createActivity(dataNewActivity)
    {
      return $http.post(`localhost/route`,dataNewActivity);
    }
    this.getAllActivitys()
    {
      return $http.get(`localhost/route`);
    }
    this.getAllRooms()
    {
      return $http.get(`localhost/route`);
    }
  }
})();
