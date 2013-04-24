/**
 * Handles the login box. Injects the template. When the login box is actually showed, puts the focus on the first text input (the user name).
 */
angular.module("loginBoxDirective", [])     //Module dependencies would go in [], but there aren't any
    .directive("loginBox", [function () {   //Directive dependencies would be specified first in this array, then passed to the function
    return {
        restrict:'E',           //restricts the directive to elements, i.e. <login-box></login-box>
        scope: {                //This creates an isolated scope.
            focusWhen: "=",
            submitAction: "=submit",
            invalid: "="
        },
        replace:true,           //Replace the <login-box></login-box> element with the template content
        templateUrl:"public/templates/loginBox.html",
        link:function (scope, element, attrs) {                 //This executes when the template is injected
            /*
                So what's going on here? We've isolated the scope so that this directive only has access to the data in the parent scope it needs to do its
                job. What is that data?
                (1) The username and password. These are contained within form controls already within the scope (they're in loginBox.html.)
                (2) A flag to watch, set when the login form shows.
                (3) A submit action.
                (4) A flag that gets triggered when the login is invalid.
             */
            scope.$watch(scope.focusWhen, function () {       //We set up a watch on login.showLogin.
                $(element).find("input")[0].focus();            //Put focus on the first text input, which should be the one for user name.
            })

            scope.doLogin = function(){
                scope.submitAction(scope.user, scope.password);
            }


        }
    };
}]);
      