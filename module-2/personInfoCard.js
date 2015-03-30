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

        $scope.knightMe = function(person) {
          person.rank = 'knight';
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
