(function(angular) {

angular.module('app')
  .directive('userInfoCard', function() {
    return {

      templateUrl: 'userInfoCard.html',
      restrict: 'E',
      //replace: true, // Deprecated
      scope: true,
      controller: function($scope) {
        $scope.knightMe = function(user) {
          user.rank = 'knight';
        };
        console.log($scope);
      }

    };
  });

}(angular));
