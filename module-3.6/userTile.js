(function(angular) {

angular.module('app').directive('userTile', function() {

  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    templateUrl: 'userTile.html',
    controller: function($scope) {
      $scope.select = function() {
        $scope.user.selected = !$scope.user.selected;
      };
    }
  };

});

}(angular));
