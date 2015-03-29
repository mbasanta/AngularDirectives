(function(angular) {

angular.module('app').directive('eventPause', function() {
  return {
    restrict: 'A',
    scope: {
      eventPause: '&'
    },
    link: function(scope, el, attrs) {
      el.on('pause', function(event) {
        scope.$apply(function() {
          scope.eventPause();
        });
      });
    }
  };
});

}(angular));
