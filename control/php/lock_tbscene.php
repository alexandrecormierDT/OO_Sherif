<?php

	if(isset($_POST['tbscene_folder_path']){
		
		$tbscene_folder_path =$_POST['tbscene_folder_path'];
		
		global $LEVEL;
		
		$LEVEL = "../../";
		
		include($LEVEL."model/php/Sherif.php");
		var $tbscene_object = new TBscene($tbscene_folder_path);
		$tbscene_object->lock_scene();
		
		echo "TBSCENE LOCKED"; 
	}


?>
