(function(angular) {
'use strict';

angular.module('app').directive('myQuestion', function() {

  return {
    restrict: 'E',
    templateUrl: 'myQuestion.html',
    transclude: true,
    scope: {
      questionText: '@q'
    }
  };

});

}(angular));
