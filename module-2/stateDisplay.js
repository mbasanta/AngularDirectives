(function(angular) {
'use strict';

angular.module('app')
  .directive('stateDisplay', function() {
    return {
      link: function(scope, el, attrs) {
        var params = attrs.stateDisplay.split(' ');
        var linkVar = params[0];

        scope.$watch(linkVar, function(newVal, oldVal) {
          el.css('background-color', params[newVal + 1]);
        });
      }
    };
  });

}(angular));
