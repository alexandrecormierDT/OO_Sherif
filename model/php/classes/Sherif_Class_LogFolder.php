<?php
class LogFolder extends RemoteFolder
{
	
	private $script_log_object_array; 
	
	private $bacth_running;
	
    public function __construct($_folder_path) {
		
		parent::__construct($_folder_path);
		
		$this->script_log_object_array = array();
		
		$this->parse_html_files();
		
		$this->is_batch_txt_present();
		
    }
	
	public function update_property_map(){
		
		$this->set_property('script_log_object_array',$this->get_parsed_log_property_array()); 
		$this->set_property('bacth_running',$this->is_batch_txt_present()); 
			
	}
	
	public function is_batch_running(){
		
		return $this->is_batch_txt_present();
		
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
	
	
	private function is_batch_txt_present(){
		
		$files_object_array = $this->get_files_objects_array_with_extention("txt");
		
		if(count($files_object_array) > 0 ){
			
			foreach($files_object_array as $current_txt_file){

				if($current_txt_file->get_file_name() == "batch.txt"){
					
					$this->bacth_running = "yes";
					
					return $this->batch_running;

				}
			
			}
			
		}
		
		$this->bacth_running = "no";
		
		return $this->batch_running;
		
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
