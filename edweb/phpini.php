<!DOCTYPE HTML>
<html>
<head>
	</head>
	<body>
<?php
$to = "edwinportillo62@yahoo.com";
$subject = "test mail";
$txt = "Hello world!";


if(mail($to,$subject,$txt)){
	echo 'mail sent ok';
	echo '<script> messageSent(); </script>
}
else{
	echo 'mail bad';
}
?> 
	</body>
</html>