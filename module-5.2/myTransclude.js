(function(angular) {
'use strict';

angular.module('app').directive('myTransclude', function() {

  return {
    restrict: 'A',
    transclude: 'element',
    link: function(scope, el, attrs, ctrl, transclude) {
      transclude(scope, function(clone) {
        el.after(clone);
      });
    }
  };

});

}(angular));
