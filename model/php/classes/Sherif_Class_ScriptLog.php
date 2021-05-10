<?php
class ScriptLog extends RemoteFile
{
	
	private $icon_png_path;
	
	private $script_icon_png_directory; 
	
	private $script_name; 
	
	private $time_stamp; 
	
    public function __construct($_file_path) {
		
		parent::__construct($_file_path);
		
		$this->script_icon_png_directory = "http://localhost/OO_sherif/view/png/script_icons/";
		$this->parse_script_file_name();
		$this->icon_png_path  = $this->parse_icon_png_path();
		
		
    } 
	
	public function get_icon_png_path(){
		
		return $this->icon_png_path;
		
	}
	
	private function parse_script_file_name(){
		
		$file_name_no_ext = $this->get_file_name_without_extension();
		
		$underscore_explode = explode("_",$file_name_no_ext);
		
		$this->time_stamp = $underscore_explode[0];
		
		$rest_of_the_name = explode($this->time_stamp."_",$file_name_no_ext);
		
		$this->script_name = $rest_of_the_name[1];

		
		
	}
	
	
	public function get_time_stamp(){
		
		return $this->time_stamp;
		
	}
	
	public function get_script_name(){
		
		return $this->script_name;
	}	
	
	private function parse_icon_png_path(){
		
		$parsed_png_path= $this->script_icon_png_directory.$this->script_name.".png";
		
		return $parsed_png_path;
		
	}	

}
?>
