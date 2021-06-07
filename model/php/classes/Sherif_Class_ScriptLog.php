<?php
class ScriptLog extends ScriptObject
{
	
	private $time_stamp;
	private $script_log_link;
	private $errors_count; 
	
    public function __construct($_file_path) {
		
		parent::__construct($_file_path);
		
		$this->script_log_link = "index.php?page=script_log&log_path=".$this->get_deactivated_file_path();
		$this->count_log_errors_in_html();
		$this->parse_script_log_file_name();
		$this->parse_icon_png_path();

    } 
	
	public function update_property_map(){
		
		$this->set_property('time_stamp',$this->time_stamp); 				
		$this->set_property('script_log_link',$this->script_log_link); 				
		$this->set_property('errors_count',$this->errors_count); 
		$this->set_property('icon_png_path',$this->icon_png_path); 

	}

	public function get_script_log_link(){
		
		return $this->script_log_link;
		
	}	
	
	private function parse_script_log_file_name(){
		
		$file_name_no_ext = $this->get_file_name_without_extension();
		$underscore_explode = explode("_",$file_name_no_ext);

		//old log namspace exeption (when there is time stamp at the beggining)
		if($underscore_explode[0] == "OO"){

			$this->set_script_name($file_name_no_ext);

		}else{

			$this->time_stamp = $underscore_explode[0];
			$rest_of_the_name = explode($this->time_stamp."_",$file_name_no_ext);
			$this->set_script_name($rest_of_the_name[1]);

		}
		



		
	}
	
	public function get_time_stamp(){
		
		return $this->time_stamp;
		
	}
	
	private function count_log_errors_in_html(){

		$line_array = $this->read_content();

		foreach($line_array as $line){
		
			if(stripos($line,'[error]')){

				$this->errors_count = 1;

				return true;
			}
			
		}		


	}
	

}
?>
