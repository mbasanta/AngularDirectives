(function(angular) {

angular.module('app')
  .directive('userInfoCard', function() {
    return {

      templateUrl: 'userInfoCard.html',
      restrict: 'E',
      //replace: true, // Deprecated
      scope: {
        user: '=',
        initialCollapsed: '@collapsed'
      },
      controller: function($scope) {

        //$scope.collapsed = false;
        $scope.collapsed = ($scope.initialCollapsed === 'true');

        $scope.knightMe = function(user) {
          user.rank = 'knight';
        };

        $scope.collapse = function() {
          $scope.collapsed= !$scope.collapsed;
        };
      }

    };
  });

}(angular));
