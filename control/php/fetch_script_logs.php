<?php

	if(isset($_POST['log_folder_path'])){
	
		$log_folder_path =$_POST['log_folder_path'];
		
		global $LEVEL;
		
		$LEVEL = "../../";
		
		include($LEVEL."model/php/Sherif.php");

		$LF = new LogFolder($log_folder_path);
		
		echo $LF->get_log_json_string();
		
	}


?>
