<?php

if (isset($_POST['name']) && isset($_POST['tel']) && isset($_POST['comp'])) {
	$to = 'sales@arendapallet.ru';
    $name = substr($_POST['name'], 0, 64);
    $comp = substr($_POST['comp'], 0, 64);
    $tel = substr($_POST['tel'], 0, 64);
    $email = substr($_POST['email'], 0, 64);

    $body = "Имя:\r\n" . $name . "\r\n\r\n";
    $body .= "Компания:\r\n" . $comp . "\r\n\r\n";
    $body .= "Контактный номер:\r\n" . $tel . "\r\n\r\n";
    $body .= $email ? "E-mail:\r\n" . $email . "\r\n\r\n" : '';

    send_mail($to, $body, $email);
}

function send_mail($to, $body, $email)
{
    $subject = 'Запрос на Аренду';
    $headers = "From: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $body .= "Content-type: text/plain; charset=\"utf-8\"\r\n";

    mail($to, $subject, $body, $headers);
}