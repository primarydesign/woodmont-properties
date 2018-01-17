<?php

if (isset($_POST)) {

	$name = $_POST['name'];
	$email = $_POST['email'];
  $property = $_POST['property'];
	$clearance = 0;

	//Validate Requireds
	$reqs = Array($name, $email, $property);
	foreach( $reqs as $r ) {
		$clearance += (required($r)) ? 0 : 1;
	}
	//Validate Email
	// $clearance += (email($email)) ? 0 : 1;

	//Check Validation & Send Email
	if ($clearance !== 0) {
	/* submission invalidation */

		/* error-handling */
		echo "failure:validation";

	} else {
	/* submission clear */

		$address = "niko@primarydesign.com";
		$subject = "Woodmont Properties VIP List Signup";
		$message = "Someone has requested to be on the VIP for a Coming Soon property. Please add the info below to the mailing list for this community. \n";
		$message .= "Name: " . $name . "\n";
		$message .= "Email: " . $email . "\n";
		$message .= "Property: " . $property . "\n";

		if( mail($address, $subject, $message) ) {
			echo "Successful submission from " . $_SERVER['HTTP_HOST'];
		} else {
			echo "failure:mailing";
		}

	}/**(submission)**/
}
//GENERAL GLOBAL DECLARATIONS
function required($x) {
	if ($x !== "") return true;
	else return false;
}
function email($x) {
	$rgx = '/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+([.][a-zA-Z]+)+$/';
	$val = preg_match($rgx,$x);
	return ($val === 1) ? true : false;
}
function phone($x) {
	$rgx = '/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/';
	$val = preg_match($rgx,$x);
	return ($val === 1) ? true : false;
}

?>
