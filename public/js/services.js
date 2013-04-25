/**
 * This is the dance services module. It contains two services, both of them very simple.
 * In theory, each of these services could have gone into separate modules in their own files, but both are quite simple.
 * In more complicated projects, it is advisable to have one module per service.
 *
 * Both the menu and the login stuff could have been put inside controllers. However, the functionality is cross-cutting: it needs to be shared among
 * different controllers, and one way to do that is to use a service.
 */
angular.module('dance.services', [])
    .service('loginService', ["$http", "$cookieStore", function ($http, $cookieStore){
        var service = {};
        service.showLogin = false;      //default value.
        service.loggedIn = $cookieStore.get("loggedIn");       //Set to true if the user is logged in.

        /**
         * Logs in the user
         * @param username
         * @param password
         * @param callback Optional. A callback to execute after login. Passed true if login successful, false otherwise.
         */
        service.perform = function(username, password, callback){
            console.log("Performing login.");
            console.log("User is: "+ username);

            $http.post("/api/login", {username: username, password: password}).success( function(data){
                if(data.success){
                    service.loggedIn = true;
                    service.showLogin = false;
                    if(typeof(callback) == "function")
                        callback(true);
                } else {
                    service.invalid = true;        //Invalid login. Show feedback.
                    if(typeof(callback) == "function")
                        callback(false);
                }
            })

        }

        service.logout = function(){
            //This should actually contact the server to initiate logout, but we'll just reset the flag.
            $http.post("/api/logout").success(function(data){
                service.loggedIn = false;
                $cookieStore.put("loggedIn", false);
            })


        }
        return service;
    }])

    /**
     * This service handles the menu.
     */
    .service("menuService", ["$rootScope", "$location", "$routeParams", "$route", function($rootScope, $location, $routeParams, $route){
        var service = {};

        service.items = [
            {
                text: "Events",
                link: "events"
            },
            {
                text: "Account",
                link: "account"
            },
            {
                text: "Contact",
                link: "contact"
            },
            {
                text: "Register",
                link: "register"
            }

        ];

        /**
         *  At some stage, the following logic will need refinement.
         */
        $rootScope.$watch(function(){ return $location.path()}, function(path){
            path = path.split("/")[1];      //this gives us the path without the "/", for matching to service.items

            $.each(service.items, function(x, item){    //this is probably inefficient
                service.items[x].active = item.link == path;    //We activate the menu item. On the DOM side, this will highlight the item.
            })
        })
        return service;
    }])