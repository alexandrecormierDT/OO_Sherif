<?php
	
	if(isset($_POST['batchscripts_folder'])){
		
		$batchscripts_folder = $_POST['batchscripts_folder'];
		
		global $root_page;

		if(isset($root_page)==false){

			$root_page = "http://localhost/OO_sherif/index.php";
		}
				
		global $LEVEL;
		

		$LEVEL = "../../";

		
		include($LEVEL."model/php/Sherif.php");
		
		global $SHERIF; 
		
		if(isset($SHERIF)== false){
			$SHERIF = new Sherif();
		}
		
		
		$batchscripts_folder = "P:/pipeline/alexdev/batch/OO_sherif";
		
		//$BATCHSCRIPT_MANAGER = new ()

		$SHERIF->batchs->fetch_batchscripts_from_folder($batchscripts_folder);
		
		global $batchscripts_object_array;
		
		$batchscripts_object_array = $SHERIF->batchs->get_batch_scripts_objects_array();
		
		include($LEVEL."view/php/batchscripts_input_list.php");		
		
	}
	

	

?>
