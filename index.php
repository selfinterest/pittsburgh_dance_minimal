<?php
/**
 * Front-end controller. VERY simple. /api requests get passed along to api functions. Other requests get sent to the index() function
 */
error_reporting(E_ERROR | E_WARNING | E_PARSE);

require_once('private/PhpConsole.php');
PhpConsole::start(true, true, dirname(__FILE__));

require('private/Slim/Slim.php');
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->add(new \Slim\Middleware\ContentTypes());
$app->add(new \Slim\Middleware\SessionCookie());

//debug($app->request()->post("username"));
$app->get("/(:whatever)", function() {
    require_once("private/main.php");
});

$app->post("/api/login", function() use ($app){
    //$requestBody = json_decode($app->request()->getBody());
    $requestBody = $app->request()->getBody();
    $response = [];
    if($requestBody["username"] == "Terrence"){
        $response["success"] = true;
        $app->setCookie("loggedIn", true);
    } else {
        $response["success"] = false;
    }
    echo json_encode($response);
});

$app->post("/api/logout", function() use ($app){
    $app->deleteCookie("loggedIn");
});


$app->run();