<?php
	
	// Define the parameters for the shell command
	
	$cmd_script_path = "C:/wamp64/www/sherif/bin/scandir_two_arg.cmd";
	$dir_path = "P:/pipeline/alexdev/batch/OO_sherif/";
	$format = "js";
	
	$scan_dir_script_cmd_string = $cmd_script_path." ".$dir_path." ".$format;

	$scandir_result_string=null;
	
	exec($scan_dir_script_cmd_string,$scandir_result_string);

	?>
	
	<label>Script a executer <input list="script_list" id="input_script_name" name="input_script" size="100"/></label>
	<datalist id="script_list">

	<?php foreach($scandir_result_string  as $src_path){
			
		if($src_path!="."&& $src_path!=".."){
				
			$exploded_path = explode(" ",$src_path);
			$src_name = $exploded_path[1];

			?>
			<option><?php echo $src_path; ?></option>
			<?php
			
		}

	}

	?>
	
	</datalist> 

