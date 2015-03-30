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
      link: function(scope, el, attrs) {
        scope.nextState = function() {
          scope.user.level++;
          scope.user.level = scope.user.level % 3;
          setState();
        };

        function setState() {
          switch(scope.user.level) {
            case 0:
              el.find('.panel-body').css('background-color', 'white');
              return;
            case 1:
              el.find('.panel-body').css('background-color', 'yellow');
              return;
            case 2:
              el.find('.panel-body').css('background-color', 'red');
              return;
          }
        }

        setState();
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

        $scope.removeFriend = function(friend) {
          var idx = $scope.user.friends.indexOf(friend);
          if (idx > -1) {
            $scope.user.friends.splice(idx, 1);
          }
        };

      }

    };
  });

}(angular));
