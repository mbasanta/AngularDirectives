(function(angular) {

angular.module('app')
  .directive('removeFriend', function() {
    return {

      templateUrl: 'removeFriend.html',
      restrict: 'E',
      scope: {
        notifyParent: '&method'
      },
      controller: function($scope) {

        $scope.removing = false;

        $scope.startRemove = function(friend) {
          $scope.removing = true;
        };

        $scope.cancelRemove = function() {
          $scope.removing = false;
        };

        $scope.confirmRemove = function() {
          $scope.notifyParent({'friend':'Han'});
        };

      }

    };
  });

}(angular));
