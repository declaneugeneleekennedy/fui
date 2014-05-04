<?php
    session_start();

    $input = json_decode(file_get_contents('php://input'));

    if($input) {
        $input->{'applicationId'}   = 1;
        $_SESSION['application']    = $input;
    }

    if($_SESSION['application']) {
        echo json_encode($_SESSION['application']);
    }
?>