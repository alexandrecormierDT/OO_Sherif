<?php

	if(isset($_POST['xstage_path'])&&isset($_POST['batch_script_path'])){
	
		$xstage_path =$_POST['xstage_path'];
		$batchscipt_path =$_POST['batch_script_path'];
		
		global $LEVEL;
		
		$LEVEL = "../../";
		
		include($LEVEL."model/php/Sherif.php");
		
		$batch_object = new Batch();
		$batch_object->set_xstage_path($xstage_path);
		$batch_object->set_batch_script_path($batchscipt_path);
		$batch_object->run_batch_monothread();


	}


?>
