(function(angular) {
'use strict';

angular.module('app')
  .directive('stateDisplay', function() {
    return {
      link: function(scope, el, attrs) {
        var params = attrs.stateDisplay.split(' ');
        var linkVar = params[0];
        var classes = params.slice(1);

        scope.$watch(linkVar, function(newVal, oldVal) {
          el.removeClass(classes.join(' '));
          el.addClass(classes[newVal]);
        });
      }
    };
  });

}(angular));
