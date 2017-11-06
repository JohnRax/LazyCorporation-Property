<?php include "header.php" ?>
<?php include "navigation.php" ?>
<?php 
	
	if (isset($_GET['source'])) {

		$source=$_GET['source'];
	}
	else{

		$source="";
	}

	switch ($source) {
		case 'pfs':
			include "property_for_sale.php";
			break;
		case 'nh':
			include "new_homes.php";
			break;	
		case 'cp':
			include "commercial_property.php";
			break;		
		case 'ea':
			include "find-agents.php";
			break;	
		case 'tr':
			include "to-rent.php";
			break;	
		case 'ctl':
			include "commercial-to-let.php";
			break;	
		case 'la':
			include "letting-agents.php";
			break;	
		case 'hp':
			include "house-price.php";
			break;	
		case 'hs':
			include "house-stats.php";
			break;	
		case 'hmi':
			include "howmuch-my-house.php";
			break;	
		case 'cmh':
			include "claim-my-home.php";
			break;	
		case 'nhfs':
			include "new-homes.php";
			break;	
		case 'ud':
			include "developers.php";
			break;	
		default:
			include "homepage.php";
			break;
	}


 ?>
