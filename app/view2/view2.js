'use strict';

var myApp = angular.module('myApp.view2', ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

myApp.controller('View2Ctrl', function($scope) {
      $scope.images = [
        {'name': 'Nexus S',
          'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
          'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
          'snippet': 'The Next, Next Generation tablet.'}
      ];
});

myApp.controller('View2Ctrl', ['$scope', 'Image',
  function($scope, Image) {
    $scope.images = Image.query();
    $scope.orderProp = 'age';
  }]);