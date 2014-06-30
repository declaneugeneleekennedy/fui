<?php
    list($handler, $id) = explode('/', $_GET['q']);

    $className = null;

    switch($handler) {
        case 'structure':
            require_once 'class/structure-handler.php';
            $className = 'StructureHandler';
            break;
        case 'form':
            require_once 'class/form-handler.php';
            $className = 'FormHandler';
            break;
        case 'application':
            require_once 'class/application-handler.php';
            $className = 'ApplicationHandler';
            break;
    }

    if(!is_null($className)) {
        $rest = new $className(file_get_contents('php://input'), $id);
        $rest->execute();
    }
?>