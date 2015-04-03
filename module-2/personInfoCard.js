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
      controllerAs: 'vm',
      bindToController: true,
      controller: function($scope) {

        this.knightMe = function(person) {
          person.rank = 'knight';
        };

        this.removeFriend = function(friend) {
          var idx = this.person.friends.indexOf(friend);
          if (idx > -1) {
            this.person.friends.splice(idx, 1);
          }
        };

      }

    };
  });

}(angular));
