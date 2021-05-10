<?php

	//included by "control/php/fetch_batchscripts.php"
	
	global $LEVEL;
	
	if(isset($batchscripts_object_array)&&gettype($batchscripts_object_array)=='array'){
		
		foreach($batchscripts_object_array as $batchscript_object){
					
			$batchscript_name = $batchscript_object->get_file_name();
			$batchscript_path = $batchscript_object->get_file_path();
			$batchscript_icon = $batchscript_object->get_file_path();
			
			?>
			<div class="batchscript_row">

				<?php
					include($LEVEL."view/php/templates/batchscript_input.php");
				?>

				<?php
					include($LEVEL."view/php/templates/batchscript_name.php");
				?>

				<?php
					//$tbscene_script_log_history = $tbscene_object->get_script_log_history();
					//include($LEVEL."view/php/tbscene_script_history.php");
				?>


			</div>
			
			<?php

		}		
		
	}

?>
