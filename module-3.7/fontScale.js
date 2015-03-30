(function(angular) {
'use strict';

angular.module('app').directive('fontScale', function() {

  return {
    link: function(scope, el, attrs) {
      scope.$watch(attrs.fontScale, function(newVal, oldVal) {
        el.css('font-size', newVal + '%');
      });
    }
  };

});

}(angular));
