<?php

if ($_POST['adsfxgsv'] != 'qwigu3802323hkbfak23') exit('Spam decected');

if ($_POST['name'] != '' or $_POST['email'] != 'sfiolg@nhf.com') {
// если поле "name" не пустое или
// значение поля "email" содержит строку, отличную от "sfiolg@nhf.com"
// то запрос НЕ принимается, т.е. данные не будут далее обрабатываться или сохраняться в БД
} else {

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$n1a2m3e = $_POST['n1a2m3e'];
$e1m2a3i4l = $_POST['e1m2a3i4l'];
$comment = $_POST['comment'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'gre.mail@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'EGrechnev1590'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров 465/587

$mail->setFrom('gre.mail@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('egrechnev@gmail.com');     // Кому будет уходить письмо
// $mail->addAddress($email);     // Копия письма
//$mail->addAddress('ellen@example.com');          // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);    // Set email format to HTML

$content = file_get_contents(__DIR__.'/mail.html');
$content = str_replace('{%NAME%}', $n1a2m3e, $content);
$content = str_replace('{%EMAIL%}', $e1m2a3i4l, $content);
$content = str_replace('{%COMMENT%}', $comment, $content);


$mail->Subject = $n1a2m3e;
$mail->Body    = $content;
// $mail->Body    = 'Имя:' .$name . '<br />Фамилия: ' .$lastname. '<br />Email: ' .$email. '<br />Сообщение:' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Что-то пошло не так, письмо не отправлено';
} else {
    header('location: /#contacts');
}

}
?>