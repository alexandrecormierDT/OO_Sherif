<?php
class LogFolder extends RemoteFolder
{
	
	private $script_log_object_array; 
	
    public function __construct($_folder_path) {
		
		parent::__construct($_folder_path);
		
		$this->script_log_object_array = array();
		
		$this->parse_html_files();
		
    }
	
	public function update_property_map(){
		
		$this->set_property('script_log_object_array',$this->get_parsed_log_property_array()); 
			
	}
	
	
	private function parse_html_files(){
		
		$files_object_array = $this->get_files_objects_array_with_extention("html");
		
		if(count($files_object_array) > 0 ){
			
			foreach($files_object_array as $current_html_file){
				
				$new_script_log = new ScriptLog($current_html_file->get_file_path());
				
				array_push($this->script_log_object_array,$new_script_log);
			
			}
			
		}else{
		
			return false;
			
		}
		
	}


	
	public function get_script_log_object_array(){
		
		return $this->script_log_object_array;
		
		
	}
	

	public function get_parsed_log_property_array(){
		
			$parsed_log_array = array();
		
			foreach($this->script_log_object_array as $script_log_object){
				
				$script_log_map = $script_log_object->get_object_propeties_map();
				
				array_push($parsed_log_array,$script_log_map);
			
			}
			
			return $parsed_log_array;
		
	}
	
	public function get_log_json_string(){
		
			return json_encode($this->get_parsed_log_property_array());

		
	}	
	

}
?>
