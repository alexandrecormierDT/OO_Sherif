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

		$TM = new TBSceneManager();
		
		$root_folder_path = $selected_root_folder_path;

		$TM->fetch_tbscenes_from_folder($root_folder_path);
		
		global $tbscnes_object_array;
		
		$tbscenes_object_json_array = $TM->get_tbscene_array_as_json();
		
		//include($LEVEL."view/php/tbscene_input_list.php");
		
		
		
		echo $tbscenes_object_json_array;
	}


?>
