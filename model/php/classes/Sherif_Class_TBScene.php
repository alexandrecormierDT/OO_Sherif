<?php
class TBScene extends RemoteFolder
{
	private $tbscene_name;
	private $xstage_object_array; 
	private $last_xstage_object; 
	private $log_folder_object;
	private $element_folder_object;
	
	
    public function __construct($_folder_path) {
		
		parent::__construct($_folder_path);
		
		$this->xstage_object_array = array();
		
		$this->tbscene_name = $this->get_folder_name();
		
		$this->parse_first_level_files();
		
		$this->last_xstage_object = $this->xstage_object_array[0];
		
		$this->parse_sub_folders();
		
    }
	

	
	//override
	public function update_property_map(){
	
		$this->set_property('xstage',$this->last_xstage_object->get_object_propeties_map()) ;
		if(isset($this->log_folder_object)){
			$this->set_property('log_folder',$this->log_folder_object->get_object_propeties_map());
		}
	
	}
	
	public function get_tbscene_name(){
		
		return $this->tbscene_name;
		
	}
	
	public function get_last_xstage_path(){
		
		return $this->last_xstage_object->get_file_path();
		
	}
	
	public function get_script_log_history(){
		
		if($this->log_folder_object != null){
		
			$script_log_object_array = $this->log_folder_object->get_script_log_object_array();
			
			return $script_log_object_array;
						
		}
		
		return false;

	}
	
	private function parse_first_level_files(){
		
		$files_object_array = $this->get_files_objects_array();
		
		foreach($files_object_array as $current_file_object){
			
			if($current_file_object->get_file_extension() == "xstage"){
				
				$new_xstage_object = new XStage($current_file_object->get_file_path());
				
				array_push($this->xstage_object_array,$new_xstage_object);

			}

		}

	}
	
	private function parse_sub_folders(){
		
		$sub_folder_object_array = $this->get_sub_folders_objects_array();
		
		foreach($sub_folder_object_array as $current_sub_folder){
			
			if($current_sub_folder->get_folder_name() == "Log"){
				
				$new_log_folder = new LogFolder($current_sub_folder->get_folder_path()); 
				
				$this->log_folder_object = $new_log_folder;
				
			}

		}

	}
	


}
?>
