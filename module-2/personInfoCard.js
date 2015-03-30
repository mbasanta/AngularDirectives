(function(angular) {
'use strict';

angular.module('app')
  .directive('personInfoCard', function() {
    return {

      templateUrl: 'personInfoCard.html',
      restrict: 'E',
      //replace: true, // Deprecated
      scope: {
        person: '=',
        initialCollapsed: '@collapsed'
      },
      controller: function($scope) {

        $scope.nextState = function() {
          $scope.person.level++;
          $scope.person.level = $scope.person.level % 4;
        };
        $scope.collapsed = ($scope.initialCollapsed === 'true');

        $scope.knightMe = function(person) {
          person.rank = 'knight';
        };

        $scope.collapse = function() {
          $scope.collapsed= !$scope.collapsed;
        };

        $scope.removeFriend = function(friend) {
          var idx = $scope.person.friends.indexOf(friend);
          if (idx > -1) {
            $scope.person.friends.splice(idx, 1);
          }
        };

      }

    };
  });

}(angular));
