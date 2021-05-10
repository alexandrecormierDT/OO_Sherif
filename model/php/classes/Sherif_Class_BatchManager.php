<?php
class BatchManager
{
	
	private $batch_scripts_object_array;
	
	private $source_folder_object;
	
    public function __construct() {

		$this->batch_scripts_object_array = array();
		
    }	
	
	public function get_batch_scripts_objects_array(){
		
		return $this->batch_scripts_object_array;
		
	}
	
	
	public function fetch_batchscripts_from_folder($_folder_path){
		
		$this->source_folder_object = new RemoteFolder($_folder_path);
		
		$this->parse_js_files_from_source_folder();
		
	}
	
	private function parse_js_files_from_source_folder(){
		
		if(isset($this->source_folder_object)){

			$files_object_array = $this->source_folder_object->get_files_objects_array_with_extention("js");
			
			if(count($files_object_array) > 0 ){
				
				foreach($files_object_array as $current_js_file){
					
					if($this->is_batch_script($current_js_file)){
						
						$new_batch_script = new BatchScript($current_js_file->get_file_path());
						
						array_push($this->batch_scripts_object_array,$new_batch_script );
						
					}

				}
				
			}else{
			
				return false;
				
			}			
			
		}

	}
	
	private function is_batch_script($_file_object){
		
		$file_name = $_file_object->get_file_name(); 
		
		$underscore_split = explode('_',$file_name); 
		
		if($underscore_split[1]=="batch"){
		
			return true; 
			
		}
		
		return false; 
		
	}
	
	
	
}
?>
