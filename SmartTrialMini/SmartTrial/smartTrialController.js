
angular.module('smartTrialApp').controller('smartTrialController', function ($scope) {

     
    $.getJSON("sample.json", function (json) {
        $scope.sample = json;
        console.log(json);
    });
    
    $scope.addStudy = function () {
        $scope.sample.unshift({ name: $scope.newStudy, description: $scope.newDescription, status: "building", subjects: [] })
        $scope.newStudy = "";
        $scope.newDescription = "";
   };

    $scope.addSubject = function () {
        var newSubject = { created: $scope.createdNew, name: $scope.nameNew };                
        var s = $scope.sample;
        for (var i = 0, l = s.length; i < l; i++) {
            if (s[i].name == $scope.showing && s[i].status == 'production') {
                s[i].subjects.unshift(newSubject)
                $scope.createdNew = "";
                $scope.nameNew = "";
            }
        }
      
    };  

    $scope.changeStatus = function () {
        for (var i = 0, l = $scope.sample.length; i < l; i++) {
            if ($scope.sample[i].status == 'production' && $scope.sample[i].name == $scope.study) { 
                    $scope.sample[i].status = 'building'
            }
            else if ($scope.sample[i].status == 'building' && $scope.sample[i].name == $scope.study) {
                $scope.sample[i].status = 'production'
            }
        }
    }

    $scope.remove = function (index) {
        var s = $scope.sample
        for (var i = 0, l = s.length; i < l; i++) {
            if (s[i].name == $scope.showing) {
                s[i].subjects.splice(index, 1)
            }

        }        
    };
         
 });

