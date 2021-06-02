<?php

class BatchScript extends ScriptObject
{

    private $doc_link;

    public function __construct($_file_path) {
		
		  parent::__construct($_file_path);
      $this->parse_batch_script_file_name();
      $this->parse_icon_png_path();
		
    }

  	
    public function update_property_map(){
      
      $this->set_property('icon_png_path',$this->icon_png_path); 

    }

  	private function parse_batch_script_file_name(){
		
      $file_name_no_ext = $this->get_file_name_without_extension();
      
      $batch_explode = explode("OO_batch_",$file_name_no_ext);
      
      $reformed_name = "OO_".$batch_explode[1];

      $this->set_script_name($reformed_name);
      
    }
    

}
?>
