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
      }

    };
  });

}(angular));
