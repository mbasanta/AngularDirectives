(function(angular) {

angular.module('app').controller('MainCtrl', function($scope) {

  $scope.user1 = {
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
    ],
    level: 0
  };

  $scope.user2 = {
    name: 'Han Solo',
    address: {
      street: 'PO Box 123',
      city: 'Mos Eisley',
      planet: 'Tattoine'
    },
    friends: [
      'Luk',
      'Leia',
      'Chewy'
    ],
    level: 1
  };
});

}(angular));
