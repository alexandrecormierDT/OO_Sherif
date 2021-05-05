<?php
class ScriptLog extends RemoteFile
{
	
	private $icon_png_path;
	
	private $script_icon_png_directory; 
	
    public function __construct($_file_path) {
		
		parent::__construct($_file_path);
		
		$this->script_icon_png_directory = "http://localhost/OO_sherif/view/png/script_icons/";
		$this->icon_png_path  = $this->parse_icon_png_path();
		
		
    } 
	
	public function get_icon_png_path(){
		
		return $this->icon_png_path;
		
	}
	private function parse_icon_png_path(){
		
		$file_name_no_ext = $this->get_file_name_without_extension();
		
		$parsed_png_path= $this->script_icon_png_directory.$file_name_no_ext .".png";
		
		return $parsed_png_path;
		
	}	

}
?>
