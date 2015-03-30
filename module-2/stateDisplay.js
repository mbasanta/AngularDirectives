(function(angular) {
'use strict';

angular.module('app')
  .directive('stateDisplay', function() {
    return {
      link: function(scope, el, attrs) {
        scope.$watch(attrs.stateDisplay, function(newVal, oldVal) {
          switch(newVal) {
            case 0:
              el.css('background-color', 'white');
              return;
            case 1:
              el.css('background-color', 'yellow');
              return;
            case 2:
              el.css('background-color', 'red');
              return;
          }
        });
      }
    };
  });

}(angular));
