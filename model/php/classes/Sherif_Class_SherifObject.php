<?php
class SherifObject
{
	
	public $properties; 
	
    public function __construct() {

		$this->properties = array();

		$this->get_bin_folder_path();
		
    }

	public function get_bin_folder_path(){

		$current_folder = getcwd();

		// C:\wamp64\www\sherif_proto\control\php

		//replaceing the php with bin

		$split_slash = explode("php",$current_folder); 

		$path =  $split_slash[0]."bin";

		return $path;

	}
	
	public function set_property($_pname,$_pvalue){
		
		$this->properties[$_pname] = $_pvalue;
		
	}
	
	
	public function get_object_propeties_map(){
		
		
		$this->set_property('sherif_class',get_class($this)); 
		$this->update_property_map();
		
		return $this->properties;
		
	}	
	
	public function update_property_map(){
		
		//to be overwritten
		
	}
	
}
?>
