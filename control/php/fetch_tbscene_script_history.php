<?php

	if(isset($_POST['log_folder_path'])){
	
		$log_folder_path = $_POST['log_folder_path'];
		
		global $LEVEL;
		
		$LEVEL = "../../";
		
		include($LEVEL."model/php/Sherif.php");
		
		$log_folder = new LogFolder($log_folder_path); 
		
		echo $log_folder->get_log_json_string();

	}


?>
