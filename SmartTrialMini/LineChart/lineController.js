angular.module('smartTrialApp').controller('lineController', function ($scope) {

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Sunday1', 'Sunday2', 'Sunday3', 'Sunday4', 'Sunday5', 'Sunday6', 'Sunday7'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40, 40, 40, 40, 40, 40, 40, 40],
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.onHover = function (points) {
        if (points.length > 0) {
            console.log('Point', points[0].value);
        } else {
            console.log('No point');
        }
    };
    $scope.datasetOverride = [{ yAxisID: 'y-axis' }];

    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis',
                    type: 'linear',
                    display: true,
                    position: 'left'
                }
            ]
        }
    };
});