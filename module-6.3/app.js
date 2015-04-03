angular.module('plunker', []);

angular.module('plunker').controller('MainCtrl', function($scope) {

});

angular.module('plunker').directive('emperor', function() {
  var name = 'The Emporer';
  return {
    scope: true,
    controller: function($scope) {
      this.name = name;
    },
    link: function($scope, el, attrs) {
        el.data('name', name);
    }
  };
});

angular.module('plunker').directive('vadar', function() {
  var name = 'Vadar';
  return {
    scope: true,
    require: '^emperor',
    controller: function($scope) {
      this.name = name;
    },
    link: function($scope, el, attrs, emperorCtrl) {
      el.data('name', name);
      el.data('master', emperorCtrl.name);
      console.log('Vadar\'s Master is  ', emperorCtrl.name);
    }
  };
});

angular.module('plunker').directive('starkiller', function() {
  return {
    scope: true,
    require: '^vadar',
    link: function($scope, el, attrs, vadarCtrl) {
      el.data('name', 'StarKiller');
      el.data('master', vadarCtrl.name);
      console.log('StarKiller\'s Master is ', vadarCtrl.name);
    }
  };
});
