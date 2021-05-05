<?php
class LogFolder extends RemoteFolder
{
	
	private $script_log_object_array; 
	
    public function __construct($_folder_path) {
		
		parent::__construct($_folder_path);
		
		$this->script_log_object_array = array();
		
		$this->parse_html_files();
		
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
	
	
	

}
?>
