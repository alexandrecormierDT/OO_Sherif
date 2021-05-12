<?php
class SherifObject
{
	
	public $properties; 
	
    public function __construct() {

		$this->properties = array();
		
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
