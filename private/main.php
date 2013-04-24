<!DOCTYPE html>
<html ng-app="dance">
<head>
    <!-- The following needs to be changed if we are running under a sub dir -->
    <base href="/"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="fragment" content="!">
    <link rel="stylesheet" type="text/css" href="public/components/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="public/components/bootstrap/css/bootstrap-responsive.min.css"/>
    <link rel="stylesheet" type="text/css" href="public/css/custom.css"/>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.1.4/angular.min.js"></script>
    <script src="public/components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>
    <title>SimplyDance</title>
</head>
<body global-events>
<!-- nav bar -->
<div class="navbar" ng-controller="NavCtrl">
    <div class="navbar-inner">
        <div class="container">
            <a href="/" class="brand"><img class="brand" src="public/css/img/usa-dance-pittsburgh-chapter-3007.jpg"/></a>
            <ul class="nav">
                <li ng-repeat="item in menu.items" ng-class="{active: item.active}"><a ng-href="{{item.link}}">{{item.text}}</a></li>
            </ul>
            <form class="navbar-form pull-right login-buttons">
                <button class="btn btn-primary login" ng-model="login.showLogin" ng-show="!login.loggedIn" btn-checkbox btn-checkbox-true="true" btn-checkbox-false="false"><i class="icon-user"></i> Login</button>
                <button class="btn btn-primary login" ng-show="login.loggedIn" ng-click="login.logout()"><i class="icon-user"></i> Logout</button>
            </form>
            <div class="login-box span4 pull-right" ng-switch on="login.showLogin" ng-animate="'fade'" ng-cloak>
                <div class="arrow_box" ng-switch-when="true">
                    <login-box></login-box>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end nav bar -->
<div class="container" id="container">
    <!-- content -->
    <div class="content" ng-view ng-animate="{enter: 'view-enter', leave: 'view-leave'}"></div>
    <!-- end content -->
    <div class="footer">
        <p>2012 TCW Consulting</p>
    </div>
</div>
<!-- scripts. Because Angular is awesome, the order they are loaded in doesn't matter, as long as app.js is loaded first -->
<!-- This could eventually be migrated to a script loader, for further simplification -->
<script src="public/js/app.js"></script>
<script src="public/js/controllers/TicketCtrl.js"></script>
<script src="public/js/controllers/NavCtrl.js"></script>
<script src="public/js/controllers/LoginCtrl.js"></script>
<script src="public/js/controllers/EventsCtrl.js"></script>
<script src="public/js/controllers/AccountCtrl.js"></script>
<script src="public/js/controllers/ContactCtrl.js"></script>
<script src="public/js/controllers/RegisterCtrl.js"></script>
<script src="public/js/services.js"></script>
<script src="public/js/directives/loginBox.js"></script>
<script src="public/js/directives.js"></script>
</body>
</html>