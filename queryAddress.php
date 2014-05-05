<?php
    $url = 'http://poc1.vermilian.com/queryAddress.php?' . http_build_query($_GET);

    $result = file_get_contents($url);

    echo $result;
?>