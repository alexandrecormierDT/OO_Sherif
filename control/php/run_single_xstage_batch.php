<?php

	if(isset($_POST['xstages_path'])&&isset($_POST['batchscript_path'])){
	
		$xstages_path =$_POST['xstages_paths_list_str'];
		$batchscipt_path =$_POST['batchscript_path'];
		
		global $LEVEL;
		
		$LEVEL = "../../";
		
		include($LEVEL."model/php/Sherif.php");
		
		global $SHERIF; 
		
		if(isset($SHERIF)== false){
			$SHERIF = new Sherif();
		}
		
		$batch_object = new Batch();
		$batch_object->set_xstage_path($xstage_path);
		$batch_object->parse_xstages_path_list_string($xstages_paths_list_str);
		$batch_object->set_batch_script_path($batchscipt_path);
		$batch_object->run_batch_monothread();
		

	}


?>
