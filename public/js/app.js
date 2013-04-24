/*
 * The main module. Right now, it loads ui.bootstrap, dance.services, and dance.directives
 */
var app = angular.module("dance", ["ui.bootstrap", "dance.services", "dance.directives"])
    /*
     * Configuration block. This gets executed as soon as this module is loaded. So it can't do anything but setup work, since other modules may not be loaded yet.
     * It uses $routeProvider and $locationProvider to set up application routing.
     */
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true); //<-- this provides better URLs, but requires server/backend reconfiguration, like an .htaccess file
        $locationProvider.hashPrefix("!");
        $routeProvider
            .when("", {            //If root URL, we redirect to events
                redirectTo: "events"
            })
            .when("/events", {      //We load the events.html template. This will update the view and initialize the EventsCtrl controller
                templateUrl: "public/templates/events.html",
                controller: "EventsCtrl"
            })
            .when("/account", {
                templateUrl: "public/templates/account.html",
                controller: "AccountCtrl"
            })
            .when("/contact", {
                templateUrl: "public/templates/contact.html",
                controller: "ContactCtrl"
            })
            .when("/register", {
                templateUrl: "public/templates/register.html",
                controller: "RegisterCtrl"
            })
            .otherwise( {
                "templateUrl": "public/templates/notfound.html"
            })
    }]);
