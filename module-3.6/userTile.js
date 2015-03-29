(function(angular) {

angular.module('app').directive('userTile', function() {

  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'userTile.html'
  };

});

}(angular));
