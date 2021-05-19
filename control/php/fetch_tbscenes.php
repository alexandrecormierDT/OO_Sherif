<?php

	if(isset($_POST['selected_root_folder_path'])){
	
		$selected_root_folder_path =$_POST['selected_root_folder_path'];
		
		global $LEVEL;
		
		$LEVEL = "../../";
		
		include($LEVEL."model/php/Sherif.php");

		$TM = new TBSceneManager();
		
		$root_folder_path = $selected_root_folder_path;

		$TM->fetch_tbscenes_from_folder($root_folder_path);
		
		$tbscenes_object_json_array = $TM->get_tbscene_array_as_json();

		echo $tbscenes_object_json_array;
	}


?>
