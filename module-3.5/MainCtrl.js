(function(angular) {

angular.module('app').controller('MainCtrl', function($scope) {

  $scope.data = {
    message: 'I haven\'t been clicked'
  };

  $scope.clickHandler = function(p) {
    p.message = 'I\'ve been clicked';
  };

});

}(angular));
