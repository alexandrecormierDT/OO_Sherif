<?php 

if (isset($_GET['log_path'])) {
	
	$deactivated_log_path = $_GET['log_path'];	
	
	$activated_slashes = str_replace('$','\\',$deactivated_log_path);
	$log_path = $activated_slashes;
	
	$script_log_object = new ScriptLog($log_path);
	
	$line_array = $script_log_object->read_content();
	
	$script_icon_path = $script_log_object->get_icon_png_path();
	


}


?>

<img class="script_icon_big" id="script_history_item" src="<?php echo $script_icon_path; ?>">

<?php 

	foreach($line_array as $line){
		
		echo $line;
		
	}

?>