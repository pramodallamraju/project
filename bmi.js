var app = angular.module('myBMI', []);
app.controller('mybmiCtrl', function($scope) {

	$scope.bmiNumber = 0;

    $scope.bmi = function() {
        if($scope.mh > 0 && $scope.mw > 0) {
        	$scope.bmiNumber = $scope.mw/($scope.mh * $scope.mh);
            return $scope.bmiNumber;
        }
    }

    $scope.clear = function() {$scope.mh = ""; $scope.mw = ""; $scope.message = "";};

    $scope.bmiMessage = function() {
        return $scope.bmiLookUp();
    }

    $scope.bmiLookUp = function() {

        /*$scope.bmiCategories = [
            {index: 1, category = "Underweight"},
            {index: 2, category = "Normal weight"},
            {index: 3, category = "Overweight"},
            {index: 4, category = "Obesity"}
        ];*/
        //$scope.bmiNumber = $scope.mw/($scope.mh * $scope.mh);

        $scope.message = "";
        if ($scope.bmiNumber <= 18.5) {
            $scope.message = "Underweight";
        }
        else if ($scope.bmiNumber >= 18.6 && $scope.bmiNumber <= 24.9) {
            $scope.message = "Normal weight";
        } else if ($scope.bmiNumber >= 25 && $scope.bmiNumber <= 29.9) {
            $scope.message = "Overweight";
        } else if ($scope.bmiNumber >= 30) {
            $scope.message = "Obesity";
        }
        return $scope.message;
    }
});


/*
BMI Categories: 
Underweight = <18.5
Normal weight = 18.5–24.9 
Overweight = 25–29.9 
Obesity = BMI of 30 or greater
*/


/*	
var myBMI = angular.module('myBMI',[]);
	myBMI.controller('mybmiCtrl', function($scope){
		$scope.mw="";
		$scope.mh="";
		$scope.enterName="";
	});
*/
