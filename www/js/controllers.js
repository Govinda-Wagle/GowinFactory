angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LocationsCtrl', function($scope, GowinFactory) {
  $scope.locations = GowinFactory.all();
})

.controller('MapCtrl', function($scope, $timeout, $stateParams, GowinFactory) {

    $scope.$on('$ionicView.enter', function() {
    var location = GowinFactory.get($stateParams.locationId);

    var myLatlng = new google.maps.LatLng(location.latitude,location.longitude);
    var initialLocation;
   
    var mapOptions = {
      center: myLatlng,
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    initialLocation = new google.maps.LatLng(location.latitude,location.longitude);
      map.setCenter(initialLocation);

    var marker = new google.maps.Marker({
      position: initialLocation,
      map: map,
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }); 
});
