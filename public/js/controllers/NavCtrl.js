/**
 * The Navigation controller. Notice how simple this is. All it does is convey data from the services to the DOM, via the $scope.
 */
angular.module("dance").controller("NavCtrl", ["$scope", "loginService", "menuService", function($scope, loginService, menuService){
    // Assignments to objects are done by reference, not by value, so this works.
    $scope.login = loginService;    //create a binding between the service and the controller.
    $scope.menu = menuService;      //Now we can iterate over menu items.


}])