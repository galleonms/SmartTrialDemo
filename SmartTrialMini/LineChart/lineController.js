angular.module('smartTrialApp').controller('lineController', function ($scope) {

    var grData = [];
    $scope.labels = [];
    $scope.data = [];
    

    $.getJSON("../sample.json", function (json) {
        $scope.sample = json;
    });

    for (var i = 0; i < $scope.sample.length; i++) {
        if ($scope.sample[i].name == $scope.study) 
            $scope.subjects = $scope.sample[i].subjects;
        
    }


    for (var i = 0; i < $scope.subjects.length; i++) {

        var dateObj = new Date($scope.subjects[i].created);
        var newObj = {
            'created': dateObj.getMonth(+ 1) + "-" + dateObj.getFullYear(),
            'name': $scope.subjects[i].name
        };
        grData.push(newObj);
    }

    var groups = grData.reduce(function (obj, item) {
        obj[item.created] = obj[item.created] || [];
        obj[item.created].push(item.name);
        return obj;
    }, {});
    

    var aggData = Object.keys(groups).map(function (key) {
        return { month: key, count: groups[key].length };
    });

    

    for (var i = 0; i < aggData.length; i++) {
        $scope.labels.push(aggData[i].month);
        $scope.data.push(aggData[i].count);
        console.log($scope.labels)
    }

    $scope.series = ['Dialysis Treatment'];


    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    
});
