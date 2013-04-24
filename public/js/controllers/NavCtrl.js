angular.module("dance").controller("NavCtrl", ["$scope", "loginService", "menuService", function($scope, loginService, menuService){
    // Assignments to objects are done by reference, not by value, so this works.
    $scope.login = loginService;    //create a binding between the service and the controller.
    $scope.menu = menuService;      //Now we can iterate over menu items.

    /*$scope.doLogin = function(){    //Executes when the submit button on the login form is clicked.
        $scope.login.perform($scope.user, $scope.password, function(valid){
            //If valid, do something?
            if(valid){
                console.log("Login successful!");
            }
        })
    }*/



}])