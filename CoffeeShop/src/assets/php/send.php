<?php

function is_ajax() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&  $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
}
if(is_ajax()) {
    $name = $_POST['name'];
    $when = $_POST['when'];
    $time = $_POST['time'];
    $people = $_POST['party'];
    $email = $_POST['contactYou'];

    $header = 'From: ' . $email . " \r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $header .=  "Mime-Version: 1.0  \r\n";
    $header .= "Content-Type: text/html";

    $body = "Name: " . $name . "  \r\n";
    $body .= "Email:" . $phone . " \r\n";
    $body .= "For: " . $people ." \r\n";
    $body .= "Reservation day " . $when .  " \r\n";
    $body .= "Time: " . $time .  " \r\n";
    $body .= "This reservation was made on the website";

    $for = "jeffery.brooks@loop.colum.edu";
    $subject = "New Reservation!";
    mail($for, $subject, utf8_encode($body), $header);

    echo json_encode(array(
        'message' => 'Reservation Submitted!',
        'name'   => $name,
     ));
}else {
    die("NOOOOO!");
}