angular.module('toggle-switch', ['ng']).directive('toggleSwitch', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      model: '=',
      attr_switch: '@',
      "event": '@',
      disabled: '&',
      onLabel: '@',
      offLabel: '@',
      knobLabel: '@'
    },
    template: '<div class="switch" ng-click="toggle()" ng-class="{ \'disabled\': disabled() }"><div class="switch-animate" ng-class="{\'switch-off\': !model[attr_switch], \'switch-on\': model[attr_switch]}"><span class="switch-left" ng-bind="onLabel"></span><span class="knob" ng-bind="knobLabel"></span><span class="switch-right" ng-bind="offLabel"></span></div></div>',
    controller: function($scope) {
      $scope.toggle = function toggle() {
        if(!$scope.disabled()) {
          $scope.model[$scope.attr_switch] = !$scope.model[$scope.attr_switch];
          $scope.$emit($scope.event, $scope.model);
        }
      };
    },
    compile: function(element, attrs) {
      if (!attrs.onLabel) { attrs.onLabel = 'On'; }
      if (!attrs.offLabel) { attrs.offLabel = 'Off'; }
      if (!attrs.knobLabel) { attrs.knobLabel = '\u00a0'; }
      if (!attrs.disabled) { attrs.disabled = false; }
      if (!attrs.event) { attrs.event = "toggle-switch-change"; }
      if (!attrs.attr_switch) { attrs.attr_switch = 'enabled'; }
    },
  };
});
