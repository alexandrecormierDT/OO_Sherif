<?php
class TBScene
{
	
	private  $scene_xstage_path; 
	private  $scene_folder_name; 

	
	
    public function __construct($_xp) {
		
		$scene_xstage_path = $_xp;
		
    }
	
	
	
	
	
	
	public function set_xstage_path($_xp){
		
		$scene_xstage_path = $_xp;
		
	}	
	
	public function get_folder_name(){
		
		return $scene_folder_name;
		
	}	
	
	private function fetch_scene_folder_from_xstage_path(){
		
		return scene_folder_name;
		
	}

}
?>
