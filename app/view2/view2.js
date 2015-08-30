'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])


.controller('View2Ctrl', ['$scope', '$http',
  function ($scope, $http) {


    $http.get('images/all.json').success(function (data) {
      $scope.images = data;

    });

    $scope.orderProp = 'age';

    $scope.list = [];
    $scope.submit = function () {
      alert("submitting");
      if ($scope.text) {
        alert("submit picture");
        $scope.list.push(this.text);
        $scope.text = '';
      }
    }
  }]);




