<?php
	
class TBSceneManager 
{
	
	private $tbscenes_object_array;

	
    public function __construct() {
		
		$this->tbscenes_object_array = array();  

    }
	
	public function add_tbscene($_xstage_path){
		
		$new_tbscene = new TBScene(); 
		$new_tbscene->set_xstage_path($_xstage_path); 
		array_push($tbscenes_object_array,$new_tbscene);
		
	}

	public function found_tbscenes(){

		if(count($this->tbscenes_object_array)>0){

			return true;

		}

		return false;

	}
	
	
	public function get_tbscene_objects_array(){
		
	
		return $this->tbscenes_object_array;
		
	}
	
	public function get_tbscene_array_as_json(){
		
		$tbscenes_json_array = array();
		
		foreach($this->tbscenes_object_array as $tbscene){
			
				$tbscene_map =  $tbscene->get_object_propeties_map();
				
				array_push($tbscenes_json_array,$tbscene_map);
				
				

		}
		
		return json_encode($tbscenes_json_array);
	}	
	
	public function get_tbscene_by_foldername($_searched_folder_name){
	
		foreach($this->tbscenes_object_array as $tbscene){
			
			if($tbscene->get_folder_name() == $_searched_folder_name){
				
				return $tbscene;
			}
		}

	}
	
	public function fetch_tbscenes_from_folder($_searched_folder_path){
	
		$searched_folder_object = new RemoteFolder($_searched_folder_path);

		$sub_folders_array = $searched_folder_object->get_sub_folders_objects_array(); 

		foreach($sub_folders_array as $sub_folder_object){
		
			if($this->folder_is_tbscene_folder($sub_folder_object)){
				
				$new_tbscene = new TBScene($sub_folder_object->get_folder_path());
				
				array_push($this->tbscenes_object_array,$new_tbscene);
				
			}

		}	



	}	
	
	private function folder_is_tbscene_folder($_folder_object){
		
		//need to had more conditions later
		
		if($this->folder_contain_xstage_file($_folder_object)){
			
			return true;
			
		}
		
		return false;
		
	}
	
	private function folder_contain_xstage_file($_folder_object){
		
		$xstages_array = $_folder_object->get_files_objects_array_with_extention("xstage");
		
		if(count($xstages_array) > 0){
			
			return true;
			
		}
		
		return false;
		
	}
	
	
	
	

}
?>
