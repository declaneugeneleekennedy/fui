<?php
    session_start();

    $input = json_decode(file_get_contents('php://input'));

    if(!array_key_exists('application', $_SESSION)) {
    	$_SESSION['application'] = (object) array(
    		'applicationId' => 1,
    		'values' => array()
    	);
    }

    if($input && $input->values) {
        $_SESSION['application']->values = $input->values;
    }
    
    echo json_encode($_SESSION['application']);
?>