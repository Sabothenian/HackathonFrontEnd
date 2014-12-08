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
        },
        link: function postLink(scope, element, attrs) {
            //element.text('this is the pieChart directive');
            console.log(scope.chartData[0].value);
            var chart = c3.generate({
                data: {
                    columns: [
//            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                        [scope.chartData[0].label, scope.chartData[0].value],
                        [scope.chartData[1].label, scope.chartData[1].value],
                        [scope.chartData[2].label, scope.chartData[2].value],
                        /*["virginica", 2.5, 2],
                        ["setosa", 30],*/
//            ["versicolor", 40],
//            ["virginica", 50],
                    ],
                    type : 'pie',
                    onmouseover: function (d, i) { console.log("onmouseover", d, i, this); },
                    onmouseout: function (d, i) { console.log("onmouseout", d, i, this); },
                    onclick: function (d, i) { console.log("onclick", d, i, this); },
                },
                axis: {
                    x: {
                        label: 'Sepal.Width'
                    },
                    y: {
                        label: 'Petal.Width'
                    }
                }
            });
        }
    };
  });
