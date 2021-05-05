
<?php

if(isset($tbscene_script_log_history) && gettype($tbscene_script_log_history) == "array"){
	
	echo count($tbscene_script_log_history);
		
	 foreach($tbscene_script_log_history as $script_log_object){
		 
		$script_name = $script_log_object->get_file_name();
		$script_icon_path = $script_log_object->get_icon_png_path();
		$script_log_deactivated_path = $script_log_object->get_deactivated_file_path();
		
			 
	?>
		<span id="script_history_item">
		<a href="<?php echo $root_page."?page=script_log&log_path=".$script_log_deactivated_path;?>"  target="_blank" ><img class="script_icon" id="script_history_item" src="<?php echo $script_icon_path; ?>"></a>
		</span>
	
	<?php

	}
	
	
}


?>


