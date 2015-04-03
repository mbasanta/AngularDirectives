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
    require: ['^vadar', '^emperor'],
    link: function($scope, el, attrs, ctrls) {
      el.data('name', 'StarKiller');
      el.data('master', ctrls[0].name);
      console.log('StarKiller\'s Master is ', ctrls[0].name);
      console.log('StarKiller\'s Master\'s Master is ', ctrls[1].name);
    }
  };
});
