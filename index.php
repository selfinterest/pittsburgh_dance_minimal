<?php
/**
 * Front-end controller. VERY simple. /api requests get passed along to api functions. Other requests get sent to the index() function
 */
error_reporting(E_ERROR | E_WARNING | E_PARSE);

require_once('private/epiphany/src/Epi.php');
Epi::setPath('base', 'private/epiphany/src');
Epi::init('route');

//API routes
getRoute()->get('/api/login', array('Api', 'login'));

getRoute()->get('/(.*)', "index");      //Catch all route. Should go last. Any requests not caught by the other routes go to index()

getRoute()->run();

function index(){
    require_once("private/main.php");
}

class Api {
    static public function login(){
        echo "This would normally be POST'd to, and would log in a user. Or something.";
    }
}
