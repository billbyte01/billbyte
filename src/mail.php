
$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Bill Byte contact form message";
$to = "bill.byte@pm.me";
$message = $_POST["msg"];

$txt = "name: " . $name . "\r\n" . "email: " . $from . "\r\n" . "\r\n" . "message: " . $message;

$headers = "from: " . $from . "\r\n";
$headers .= "reply-to: " . $from . "\r\n";

$mail_status = mail($to, @$subject, $txt, $headers);

if($mail_status){
    header("Location: /index.html?mail_status=sent");
} else{
    header("Location: /index.html?mail_status=error");
}