/**
 * Handles the login box. Injects the template. When the login box is actually showed, puts the focus on the first text input (the user name).
 * The directive name "loginBox" is the camel-cased version of the tag used to invoke the directive <login-box></login-box>. This is an
 * Angular convention.
 */
angular.module("loginBoxDirective", [])     //Module dependencies would go in [], but there aren't any
    .directive("loginBox", [function () {   //Directive dependencies would be specified first in this array, then passed to the function
    return {
        restrict:'E',                   //restricts the directive to elements, i.e. <login-box></login-box>
        scope: {                        //This creates an isolated scope.
            focusWhen: "=",             //Here we are mapping values in the isolated scope to values in the parent scope (in this case, NavCtrl)
            submitAction: "=submit",    //The mapping is accomplished through the attributes of the <login-box> element
            invalid: "="
        },
        replace:true,           //Replace the <login-box></login-box> element with the template content
        templateUrl:"public/templates/loginBox.html",
        link:function (scope, element, attrs) {                 //This executes when the template is injected
            /*
                So what's going on here? We've isolated the scope so that this directive only has access to the data it needs to do its
                job. What is that data?
                (1) The username and password. These are contained within form controls already within the scope (they're in loginBox.html.)
                (2) A flag to watch, set when the login form is showing on the screen. Set by the service.
                (3) A submit action.
                (4) A flag that gets triggered when the login is invalid.
                The isolate scope works by reading the value of a DOM attribute. In other words, one creates a mapping between a directive's scope
                and the scope of the controller containing it through DOM attributes. This means the directive only gets access to _some_ of the controller's
                scope properties.

                <login-box focusWhen="login.showLogin" submit="login.perform" invalid="login.invalid"></login-box>

                So the value of scope.focusWhen is set to the value of login.showLogin on the parent scope (that is, NavCtrl.)
                The value of invalid is set to the value of login.showLogin on the parent scope.

                Think of this as a way of selectively giving the the directive access to controller data without giving it full access to the controller's data.
                This limits side-effects. The directive does not NEED to ALTER controller data. It just needs to USE controller data. An isolation scope
                PREVENTS any unintentional alteration of the controller's state.

                Example of a side effect: we wouldn't want this directive, which only handles the login box, to be able to override NavCtrl's menu property.
                That's the kind of thing that should never happen.

                If the menu should adjust based on successful login, that should be handled somewhere else, by watching for changes in the login service.
             */
            scope.$watch(scope.focusWhen, function (value) {       //We set up a watch on login.showLogin.
                if(value){      //If the login box is showing then...
                    $(element).find("input")[0].focus();            //Put focus on the first text input, which should be the one for user name.
                }
            })

            scope.doLogin = function(){                     //This is called from a DOM event. My personal feeling is that these should go into directives whenever possible.
                scope.submitAction(scope.user, scope.password);
            }


        }
    };
}]);
      