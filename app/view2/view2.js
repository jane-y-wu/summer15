'use strict';

var myApp = angular.module('myApp.view2', ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

//myApp.controller('View2Ctrl', function($scope) {
//  $scope.images = [
//    {'title': 'golden gate bridge',
//      'snippet': 'It is actually golden',
//      'imageUrl': 'http://40.media.tumblr.com/53cb43328372c9dd801ef6380274ff1f/tumblr_nt36geNiIO1uanhfqo1_1280.jpg'},
//    {'title': 'going somewhere',
//      'snippet': 'are you?',
//      'imageUrl': 'http://40.media.tumblr.com/662e9041340d0006b0e5a83b0ec0f785/tumblr_nt36ch8kxK1uanhfqo1_1280.jpg'},
//    {'title': 'lens flare',
//      'snippet': 'this was cool',
//      'imageUrl': 'http://41.media.tumblr.com/f14a02be5d52ec3ae51397522067ba0a/tumblr_nsmbq4vSYI1uanhfqo1_1280.jpg'}
//  ];
//});

myApp.controller('View2Ctrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('images/all.json').success(function(data) {
      $scope.images = data;
    });

    $scope.orderProp = 'age';
  }]);










