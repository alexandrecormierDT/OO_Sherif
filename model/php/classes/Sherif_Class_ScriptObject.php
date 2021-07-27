<?php
class ScriptObject extends RemoteFile
{
	
	public $icon_png_path;
	private $script_icon_png_directory; 
	private $script_name; 
	private $script_nice_name; 
	
    public function __construct($_file_path) {
		
		parent::__construct($_file_path);
		
		//$this->script_icon_png_directory = "P:\\pipeline\\tb_scripts\\script-icons\\";
		$this->script_icon_png_directory = "view/png/script_icons/";
		$this->parse_script_file_name();
		$this->parse_icon_png_path();
	
    } 
	
	public function update_property_map(){
		
		$this->set_property('icon_png_path',$this->icon_png_path); 
		$this->set_property('script_name',$this->script_name); 			
		$this->set_property('script_nice_name',$this->script_nice_name); 			

	}
	
	public function get_icon_png_path(){
		
		return $this->icon_png_path;
		
	}

	
	private function parse_script_file_name(){
		
		$file_name_no_ext = $this->get_file_name_without_extension();
		$underscore_explode = explode("_",$file_name_no_ext);
		$this->script_name = $file_name_no_ext;
		
	}
	
	public function get_script_name(){
		
		return $this->script_name;
	}
    
	public function set_script_name($_string){
		
		$this->script_name = $_string;
        $this->set_property('script_name',$this->script_name);

	}	


    public function get_script_icon_png_directory(){

        return $this->script_icon_png_directory;

    }

    public function set_script_icon_png_path($_path){

        $this->icon_png_path = $_path;
        $this->set_property('icon_png_path',$this->icon_png_path); 

    }    

	public function parse_icon_png_path(){
		
		$parsed_png_path= $this->get_script_icon_png_directory().$this->get_script_name().".png";

        $this->icon_png_path = $parsed_png_path;

        /*echo "<br>".$parsed_png_path;
        echo "<br>";*/
		return $parsed_png_path;
		
	}	

}
?>
