(function(angular) {
'use strict';

angular.module('app')
  .directive('droidInfoCard', function() {
    return {

      templateUrl: 'droidInfoCard.html',
      restrict: 'E',
      //replace: true, // Deprecated
      scope: {
        droid: '=',
        initialCollapsed: '@collapsed'
      },
      controller: function($scope) {

        $scope.nextState = function() {
          $scope.droid.level++;
          $scope.droid.level = $scope.droid.level % 4;
        };
        $scope.collapsed = ($scope.initialCollapsed === 'true');

        $scope.collapse = function() {
          $scope.collapsed= !$scope.collapsed;
        };
      }

    };
  });

}(angular));
