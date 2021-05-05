<?php

	if(isset($_POST['scene_paths'])&&isset($_POST['script_name'])){
	
		$scene_paths_str =$_POST['scene_paths'];
		$scipt_name =$_POST['script_name'];
		
		echo "executing script : ".$scipt_name."<br>";
		
		$scene_paths_array = explode(",",$scene_paths_str);
		
		$program_path = 'C:/Program Files (x86)/Toon Boom Animation/Toon Boom Harmony 20 Premium/win64/bin/HarmonyPremium.exe';
		
		$script_path = $scipt_name;
		$script_path_with_no_spaces = preg_replace("/\s+/","",$script_path);
		
		foreach($scene_paths_array as $scene_path){
			
			$scene_path_with_no_spaces = preg_replace("/\s+/","",$scene_path);
			
			
			$command_string = '"'.$program_path.'" "'.$scene_path_with_no_spaces.'" -batch -compile "'.$script_path_with_no_spaces.'"';
			$command = exec($command_string);
			
			echo "<br>COMMAND STRING<br>";		
			echo $command_string."<br>"."<br>";		
			echo "<br>RESPONSE<br>";		
			echo $command."<br>";		
			
		}

	}

//"C:\Program Files (x86)\Toon Boom Animation\Toon Boom Harmony 17 Premium\win64\bin\HarmonyPremium.exe"   P:\projects\billy\layout\harmony\ep101\ep101_pl005_animatic_v001\ep101_pl005_animatic_v001.xstage -batch -compile "P:\projects\billy\layout\harmony\add_dots.js"
//$command = exec ("D:/1_TRAVAIL/WEB/wamp64/www/SANDBOX/php_exec/bin/myscript.bat ".$scene_path);

?>
