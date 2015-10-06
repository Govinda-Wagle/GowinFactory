angular.module('starter.services', [])

.factory('GowinFactory', function($http) {
  //if called from api, locations array must be empty
  //locations = [];
  var locations = [
  {"id":1,"latitude":37.09024,"longitude":-95.712891, 'name': 'USA'},
  {"id":2,"latitude":27.665664444444445,"longitude":85.360695, 'name': 'NEPAL'}
  ];
  
  return {
    all: function() {
        //get json data from api
          // return $http.get('http://api_url').then(function(response){
          //    locations = response.data;
          //    return response.data;
          //   });

          return locations;
    },

    get: function(locationId) {
      for (var i = 0; i < locations.length; i++) {
        if (locations[i].id === parseInt(locationId)) {
          return locations[i];
        }
      }
      return null;
    }
  };
});
