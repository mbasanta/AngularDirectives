(function(angular) {
'use strict';

angular.module('app').directive('myLazyRender', function() {

  return {
    restrict: 'A',
    transclude: 'element',
    priority: 1200,
    link: function(scope, el, attrs, ctrl, transclude) {
      var hasBeenShown = false;
      var unWatchFn = scope.$watch(attrs.myLazyRender, function(value) {
        if (value && !hasBeenShown) {
          hasBeenShown = true;
          transclude(scope, function(clone) {
            el.after(clone);
          });
          unWatchFn();
        }
      });
    }
  };

});

}(angular));
