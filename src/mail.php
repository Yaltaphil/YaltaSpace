<?php

$recepient = "yaltaphil@yandex.ru";

$name = trim($_POST["sender"]);
$from = "New sender $name\n";
$message = trim($_POST["sender"]);

mail(
    $recepient,
    $from,
    $message,
    "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient"
);

?>