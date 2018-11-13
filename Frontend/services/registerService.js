(function() {
  angular.module('homeFitgameService')
  .service('ApiCall',ApiCall);
  ApiCall.$inject = ['$http'];
  
  function ApiCall ($http){
    this.createUser(obj)
    {
      return = $http.post('localhost/mudarAQUIriboliaaaaaaaaaaaaaaaaaaaaa',obj);
    }
    
    this.login(obj)
    {
      return = $http.post('localhost/mudarAQUIriboliaaaaaaaaaaaaaaaaaaaaa',obj);
    }
    
    this.createRoom(obj)
    {
      return = $http.post('localhost/mudarAQUIriboliaaaaaaaaaaaaaaaaaaaaa',obj);
    }
    
    this.createActivity(obj)
    {
      return = $http.post('localhost/mudarAQUIriboliaaaaaaaaaaaaaaaaaaaaa',obj);
    }
  }
})();
