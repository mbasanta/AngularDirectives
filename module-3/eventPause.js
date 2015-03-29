(function(angular) {

angular.module('app').directive('eventPause', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      var fn = $parse(attrs['eventPause']);
      el.on('pause', function(event) {
        scope.$apply(function() {
          fn(scope, {evt: event});
        });
      });
    }
  };
});

}(angular));
