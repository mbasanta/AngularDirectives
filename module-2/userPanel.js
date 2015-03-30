(function(angular) {
'use strict';

angular.module('app').directive('userPanel', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'userPanel.html',
    scope: {
      name: '@',
      level: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope) {

      $scope.nextState = function(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        $scope.level++;
        $scope.level = $scope.level % 4;
      };
      $scope.collapsed = ($scope.initialCollapsed === 'true');

      $scope.collapse = function() {
        $scope.collapsed= !$scope.collapsed;
      };
    }
  };
});

}(angular));
