'use strict';

/**
 * @ngdoc directive
 * @name supportAnalyticsApp.directive:pieChart
 * @description
 * # pieChart
 */
angular.module('supportAnalyticsApp')
  .directive('pieChart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the pieChart directive');
      }
    };
  });
