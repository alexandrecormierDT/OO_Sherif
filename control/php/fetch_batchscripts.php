<?php

		global $LEVEL;

		global $branch;

		$LEVEL = "../../";

		include($LEVEL."model/php/Sherif.php");
		
		$batchscripts_folder = "P:\pipeline\alexdev\master\OO_sherif_scripts\default";
		
		$BM = new BatchManager($branch);

		$BM->fetch_batchscripts_from_folder($batchscripts_folder);
		
		$return_json = $BM->get_batch_scripts_array_as_json(); 

		echo $return_json;

	

?>
