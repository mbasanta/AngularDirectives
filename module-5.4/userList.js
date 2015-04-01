(function(angular) {
'use strict';

angular.module('app').directive('userList', function($compile) {

  return {
    restrict: 'A',
    transclude: 'element',
    link: function(scope, el, attrs, ctrl, transclude) {
      var pieces = attrs.userList.split(' ');
      var itemString = pieces[0];
      var collectionName = pieces[2];
      var elements = [];

      scope.$watchCollection(collectionName, function(collection) {
        if (elements.length > 0) {
          for(var i = 0; i < elements.length; i++) {
            elements[i].el.remove();
            elements[i].scope.$destroy();
          }
          elements = [];
        }

        for (var j = 0; j < collection.length; j++) {
          var childScope = scope.$new();
          childScope[itemString] = collection[j];
          transclude(childScope, function(clone) {
            var template = $compile(
              '<div class="panel panel-primary">' +
                '<div class="panel-heading">{{' + itemString + '.name}}</div>' +
                '<div class="panel-body" />' +
              '</div>');
            var wrapper = template(childScope);
            wrapper.find('.panel-body').append(clone);
            el.before(wrapper);

            var item = {};
            item.el = wrapper;
            item.scope = childScope;
            elements.push(item);
          });
        }
      });
    }
  };
});

}(angular));
