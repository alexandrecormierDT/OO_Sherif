<?php
	
	// Define the parameters for the shell command
	
	$cmd_script_path = "C:/wamp64/www/OO_Sherif/bin/scandir_two_arg.cmd";
	$dir_path = "P:/projects/billy/pre_shotgun/batch_pool/xstages/test_scene";
	$format = "xstage";
	
	$scan_dir_two_arg_command_string = $cmd_script_path." ".$dir_path."  ".$format;
	
	$scandir_result_string=null;
	
	exec($scan_dir_two_arg_command_string,$scandir_result_string);
	
	$cmd_script_path_all_files = "C:/wamp64/www/OO_Sherif/bin/scandir_sub_dir.cmd";
	//$cmd_script_path_all_files = "C:/wamp64/www/OO_Sherif/bin/scandir_all_files.cmd";
	$scandir_2;
	$command_string2 = $cmd_script_path_all_files." ".$dir_path;
	exec($command_string2,$scandir_2);

	foreach($scandir_2  as $scan){
		
		echo "<br>";
		echo $scan;
		
	}
	

	foreach($scandir_result_string  as $scene_path){
		
		$exploded_path = explode(" ",$scene_path);
		
		$xstage_name = $exploded_path[1];
		
		$new_tbscene = new TBScene($scene_path);
		
		$str = '<br> <input class="scene_row" type="checkbox" id="'.$xstage_name .'" name="'.$scene_path.'">';
		$str .= ' <label for="'.$xstage_name.'">'.$xstage_name .'</label>';	
		$str .= ' <div id="'.$scene_path.'"></div>';	

		echo $str;		

	}

//
?>
