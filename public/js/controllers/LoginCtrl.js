angular.module("dance").controller("LoginCtrl", ["$scope", "loginService", function($scope, loginService){
    $scope.login = loginService;        //Remember, this makes a REFERENCE to the service.

    $scope.doLogin = function(){
        $scope.login.perform($scope.user, $scope.password, function(valid){
            //If valid, do something?
            if(valid){
                console.log("Login successful!");
            }
        })
    }

    $scope.$watch("login.showLogin", function(newVal, oldVal){
        if(newVal == false){
            $scope.login.invalid = false;       //This removes the login invalid message
        }
    })
}])