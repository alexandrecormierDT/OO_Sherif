<?php

	if(isset($_POST['selected_root_folder_path'])){
	
		$selected_root_folder_path =$_POST['selected_root_folder_path'];
		
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
		
		$root_folder_path = $selected_root_folder_path;

		$SHERIF->tbscenes->fetch_tbscenes_from_folder($root_folder_path);
		
		global $tbscnes_object_array;
		
		$tbscenes_object_array = $SHERIF->tbscenes->get_tbscene_objects_array();
		
		include($LEVEL."view/php/tbscene_input_list.php");
	}


?>
