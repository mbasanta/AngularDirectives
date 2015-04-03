(function(angular) {
'use strict';

angular.module('app').controller('MainCtrl', function($scope) {

  $scope.bountyHunters = [{
    name: 'Boba Fett', age: 35
  },{
    name: 'IG-88', age: 130
  },{
    name: 'Dengar', age: 42
  },{
    name: 'Bossk', age: 782
  },{
    name: 'Cad Bane', age: 51
  }];

  $scope.add = function() {
    $scope.bountyHunters.push({name: '4LOM'});
  };

  $scope.remove = function() {
    $scope.bountyHunters.length--;
  };

});

}(angular));
