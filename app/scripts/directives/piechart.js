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
        templateUrl: 'views/pieChart.html',
        restrict: 'E',
        controller: 'PiechartCtrl',
        replace: true,
        scope: {
            chartData: '='
        }/*,
        link: function postLink(scope, element, attrs) {
            //element.text('this is the pieChart directive');
        }*/
    };
  });
