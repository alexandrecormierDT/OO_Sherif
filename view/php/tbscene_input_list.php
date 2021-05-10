<?php
	
	global $LEVEL;
	
	$LEVEL = "../../";
	
	if(isset($tbscenes_object_array)&&gettype($tbscenes_object_array)=='array'){
		
		foreach($tbscenes_object_array as $tbscene_object){
					
			$xstage_name = $tbscene_object->get_tbscene_name();
			$xstage_path = $tbscene_object->get_last_xstage_path();
			?>
			<div class="tbscene_row">

				<?php
					include($LEVEL."view/php/templates/tbscene_input.php");
				?>

				<?php
					include($LEVEL."view/php/templates/tbscene_name.php");
				?>

				<?php
					$tbscene_script_log_history = $tbscene_object->get_script_log_history();
					include($LEVEL."view/php/tbscene_script_history.php");
				?>
				<?php
					include($LEVEL."view/php/templates/tbscene_batch_status.php");
				?>
				<?php
					include($LEVEL."view/php/templates/tbscene_batch_feedback.php");
				?>

			</div>
			<?php

		}		
		
	}

?>
