var app = angular.module('smartTrialApp', ['chart.js']);

app.config(['ChartJsProvider', function (ChartJsProvider) {
    ChartJsProvider.setOptions({
        chartColors: ['#FF5252', '#FF8A80'],
        responsive: false
    });
    ChartJsProvider.setOptions('line', {
        showLines: true
    });
}]);



