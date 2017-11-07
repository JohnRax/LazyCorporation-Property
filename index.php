<?php include "Property/header.php" ?>
<?php include "Property/navigation.php" ?>
<?php 
	
	if (isset($_GET['source'])) {

		$source=$_GET['source'];
	}
	else{

		$source="";
	}

	switch ($source) {
		case 'pfs':
			include "Property/property_for_sale.php";
			break;
		case 'nh':
			include "Property/new_homes.php";
			break;	
		case 'cp':
			include "Property/commercial_property.php";
			break;		
		case 'ea':
			include "Property/find-agents.php";
			break;	
		case 'tr':
			include "Property/to-rent.php";
			break;	
		case 'ctl':
			include "Property/commercial-to-let.php";
			break;	
		case 'la':
			include "Property/letting-agents.php";
			break;	
		case 'hp':
			include "Property/house-price.php";
			break;	
		case 'hs':
			include "Property/house-stats.php";
			break;	
		case 'hmi':
			include "Property/howmuch-my-house.php";
			break;	
		case 'cmh':
			include "Property/claim-my-home.php";
			break;	
		case 'nhfs':
			include "Property/new-homes.php";
			break;	
		case 'ud':
			include "Property/developers.php";
			break;	
		default:
			include "Property/homepage.php";
			break;
	}


 ?>
