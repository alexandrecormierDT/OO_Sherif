<?php

	if(isset($_POST['xstages_paths_list_str'])&&isset($_POST['batchscript_path'])){
	
		$xstages_paths_list_str =$_POST['xstages_paths_list_str'];
		$batchscipt_path =$_POST['batchscript_path'];
		
		global $LEVEL;
		
		$LEVEL = "../../";
		
		include($LEVEL."model/php/Sherif.php");
		
		$batch_object = new Batch();
		$batch_object->parse_xstages_path_list_string($xstages_paths_list_str);
		$batch_object->set_batch_script_path($batchscipt_path);
		$batch_object->run_batch_monothread_repeat();
		

	}


?>
