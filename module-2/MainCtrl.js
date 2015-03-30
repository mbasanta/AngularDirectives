(function(angular) {

angular.module('app').controller('MainCtrl', function($scope) {

  $scope.person1 = {
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

  $scope.person2 = {
    name: 'Han Solo',
    address: {
      street: 'PO Box 123',
      city: 'Mos Eisley',
      planet: 'Tattoine'
    },
    friends: [
      'Luke',
      'Leia',
      'Chewy'
    ],
    level: 1
  };

  $scope.droid1 = {
    name: 'R2-D2',
    specifications: {
      manufacturer: 'Industrial Automaton',
      type: 'Astromech',
      productLine: 'R2 Series'
    },
    level: 2
  };
});

}(angular));
