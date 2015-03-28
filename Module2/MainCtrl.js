(function(angular) {

angular.module('app').controller('MainCtrl', function($scope) {
  $scope.user = {
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: 'Secret Rebel Base',
      planet: 'Yavin 4'
    },
    friends: [
      'Han',
      'Leia',
      'Chewy'
    ]
  };
  console.log($scope);
});

}(angular));