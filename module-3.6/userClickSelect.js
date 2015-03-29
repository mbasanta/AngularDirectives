(function(angular) {

angular.module('app').directive('userClickSelect', function() {

  return {
    link: function(scope, el, attr) {
      el.on('click', function() {
        scope.user.selected = !scope.user.selected;
        scope.$apply();
      });
    }
  };

});

}(angular));
