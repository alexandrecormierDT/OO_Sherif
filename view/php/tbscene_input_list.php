
<table class="tbscenes_table">

<thead>
        <tr>
            <th colspan="2">TBSCENE LIST</th>
        </tr>
 </thead>
 
 <tbody>
<?php
	
	global $LEVEL;
	
	$LEVEL = "../../";
	
	if(isset($tbscenes_object_array)&&gettype($tbscenes_object_array)=='array'){
		
		foreach($tbscenes_object_array as $tbscene_object){
					
			$xstage_name = $tbscene_object->get_tbscene_name();
			$xstage_path = $tbscene_object->get_last_xstage_path();
			?>
			<tr class="tbscene_row">

				<td>
				<?php
					include($LEVEL."view/php/templates/tbscene_input.php");
				?>
				</td>
				<td>
				<?php
					include($LEVEL."view/php/templates/tbscene_name.php");
				?>
				</td>				
				<td>
				<?php
					$tbscene_script_log_history = $tbscene_object->get_script_log_history();
					include($LEVEL."view/php/templates/tbscene_script_history.php");
				?>
				</td>

			</tr>
			<?php

		}		
		
	}

?>
 </tbody>

   
</table>