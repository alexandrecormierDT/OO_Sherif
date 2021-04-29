<?php
	
	$dir = "images/";
	
	$images_tag = array();

	$images = scandir ( $dir, SCANDIR_SORT_ASCENDING);

	foreach($images  as $im){
		
		if($im!="."&&$im!=".."){
			$str = "";
			$str .= '<br>'.$im;
			$str .= '<br><img src="'.$dir.'/'.$im.'">';
			array_push($images_tag,$str );		
			echo $str;		
			
		}

	}


?>
