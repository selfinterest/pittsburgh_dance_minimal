/**
 * Handles the login box. Injects the template. When the login box is actually showed, puts the focus on the first text input (the user name).
 */
angular.module("loginBoxDirective", [])     //Module dependencies would go in [], but there aren't any
    .directive("loginBox", [function () {   //Directive dependencies would be specified first in this array, then passed to the function
    return {
        restrict:'E',           //restricts the directive to elements, i.e. <login-box></login-box>
        scope:false,            //Do not create a new scope. Just use whatever scope is active where the directive is placed.
        replace:true,           //Replace the <login-box></login-box> element with the template content
        templateUrl:"public/templates/loginBox.html",
        link:function (scope, element, attrs) {                 //This executes when the template is injected
            scope.$watch("login.showLogin", function () {       //We set up a watch on login.showLogin.
                $(element).find("input")[0].focus();            //Put focus on the first text input, which should be the one for user name.
            })
        }
    };
}]);
      