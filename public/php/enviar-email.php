<?php
//Receiving data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$headers = "Content-Type: text/plain;charset=utf-8\r\n";
$headers .= "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

//Sending data
$corpo = "Formulário da página de contato\r\n";
$corpo .= "Nome: " . $name . "\r\n";
$corpo .= "Email: " . $email . "\r\n";
$corpo .= "Mensagem: " . $message . "\r\n";

//Receptor email
$email_to = 'lloliveira.dev@outlook.com';

//Sending email
$status = mail ($email_to, mb_encode_mimeheader($subject, "utf-8"), $corpo, $headers);

if ($status):
  //Success
  header('location:index.php?status=sucesso');
else:
  //Error
  header('location:index.php?status=erro');
endif;
?>