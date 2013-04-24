/**
 * Angular module containing all the directives. The main module in app.js cites this as a dependency, thereby bringing in all the directives at once.
 * There is also a smaller directive "globalEvents" that could have gone into a separate file, but was really too small for that.
 */
angular.module("dance.directives", ["loginBoxDirective"])
    /**
     * This directive catches clicks anywhere on the page. It is responsible for hiding the login box when a user clicks anywhere outside it
     */
    .directive("globalEvents", ["loginService", function(loginService){          //a little directive, to insignificant to put inside its own file
        return function(scope, element, attrs){
            element.bind("click", function(e){  //this catches all clicks anywhere in the body
                var element = e.target;     //the element that actually triggered the event
                //Now search its and its parents. If one is an element with class ".login" or ".login-buttons" do nothing. Otherwise, proceed
                var login = $(element).closest(".login-box, .login-buttons");
                if(login.length == 0){
                    scope.$apply(function(){        //we have to use $apply so that the changes will be registered across the application
                        loginService.showLogin = false;
                        loginService.invalid = false;       //hide the invalid message, if it is actually displayed
                    })

                }

            })
        }
    }])