angular.module('plunker', []);

angular.module('plunker').controller('MainCtrl', function($scope) {

});

angular.module('plunker').directive('emperor', function() {
  return {
    scope: true,
    link: {
      pre: function($scope, el, attrs) {
        el.data('name', 'The Emperor');
        $scope.master = 'The Emperor';
      }
    }
  };
});

angular.module('plunker').directive('vadar', function() {
  return {
    scope: true,
    link: {
      pre: function($scope, el, attrs) {
        el.data('name', 'Vadar');
        el.data('master', $scope.master);
        console.log('Vadar\'s Master is  ', $scope.master);
        $scope.master = 'Vadar';
      }
    }
  };
});

angular.module('plunker').directive('starkiller', function() {
  return {
    scope: true,
    link: {
      post: function($scope, el, attrs) {
        el.data('name', 'StarKiller');
        el.data('master', $scope.master);
        console.log('StarKiller\'s Master is ', $scope.master);
      }
    }
  };
});
