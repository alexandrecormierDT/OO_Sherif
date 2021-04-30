<?php
	
class TBSceneManager
{
	
	private $tbscenes_array;
	
	
	
	
    public function __construct() {
		
		$tbscenes_array = array();  

    }
	
	public function add_tbscene($_xstage_path){
		
		$new_tbscene = new TBScene(); 
		$new_tbscene->set_xstage_path($_xstage_path); 
		array_push($tbscenes_array,$new_tbscene);
		
	}
	
	
	public function get_tbscene_by_foldername($_searched_folder_name){
	
		foreach($tbscenes_array as $tbscene){
			if($tbscene->get_folder_name() == $_searched_folder_name){
				return $tbscene;
			}
		}

	}
	
	
	

}
?>
