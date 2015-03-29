(function(angular) {

angular.module('app').controller('MainCtrl', function($scope) {

  $scope.messages = [];

  $scope.handlePause = function() {
    $scope.messages.push({text: 'Paused!'});
    console.log('video paused');
  };

});

}(angular));
