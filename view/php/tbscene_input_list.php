<?php
	
	global $LEVEL;
	
	$LEVEL = "../../";
	
	if(isset($tbscenes_object_array)&&gettype($tbscenes_object_array)=='array'){
		
		foreach($tbscenes_object_array as $tbscene_object){
					
			$xstage_name = $tbscene_object->get_tbscene_name();
			$xstage_path = $tbscene_object->get_last_xstage_path();
			
			include($LEVEL."view/php/templates/tbscene_input.php");
			
			$tbscene_script_log_history = $tbscene_object->get_script_log_history();
			
			include($LEVEL."view/php/templates/tbscene_script_history.php");

		}		
		
	}

?>
