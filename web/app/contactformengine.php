<?php

$EmailFrom = "info@woodmontproperties.com";
$EmailTo = "niko@primarydesigns.com";
$Subject = "You've Received a New Contact Form Submission";
$Name = Trim(stripslashes($_POST['Name']));
$Phone = Trim(stripslashes($_POST['Phone']));
$Email = Trim(stripslashes($_POST['Email']));
$Community = Trim(stripslashes($_POST['Community']));
$Message = Trim(stripslashes($_POST['Message']));

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
if ($success){
  print "<h3 class="footer__headline">Thank You! Your Message Has Been Sent.</h3>";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>
