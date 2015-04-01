(function(angular) {
'use strict';

angular.module('app').controller('MainCtrl', function($scope) {

  $scope.bountyHunters = [{
    name: 'Boba Fett'
  },{
    name: 'Dengar'
  },{
    name: 'Bossk'
  },{
    name: 'Cad Bane'
  }];

  $scope.add = function() {
    $scope.bountyHunters.push({name: '4LOM'});
  };

  $scope.remove = function() {
    $scope.bountyHunters.length--;
  };

});

}(angular));
