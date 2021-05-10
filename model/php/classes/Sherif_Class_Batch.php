<?php
	
class Batch
{
	
	private $batch_script_path; 
	
	private $xstages_paths_array; 

	private $harmony_path; 
	
	
    public function __construct() {
		
		$this->xstages_paths_array = array();
		
		$this->harmony_path ='C:/Program Files (x86)/Toon Boom Animation/Toon Boom Harmony 20 Premium/win64/bin/HarmonyPremium.exe';

    }
	
	public function set_batch_script_path($_bsp){
		
		$this->batch_script_path = $_bsp;
		
	}

	public function parse_xstages_path_list_string($_xpls){
		
		$this->xstages_paths_array = explode(",",$_xpls);
		
	}
	
	public function ser_xstage_path($_xp){
		
		$this->xstages_paths_array = array();
		array_push($this->xstages_paths_array,$_xp);
		
	}
	
	public function get_inline_command_string(){
		
		
		
	}
	

	public function run_batch_monothread(){
		
		$command_string = $this->format_command_string(); 
		
		foreach($this->xstages_paths_array as $xstages_path){
			
			$xstage_path_with_no_spaces = preg_replace("/\s+/","",$xstages_path);
			$script_path_with_no_spaces = preg_replace("/\s+/","",$this->batch_script_path);
			
			$bacth_command_string = '"'.$this->harmony_path.'" "'.$xstage_path_with_no_spaces.'" -batch -compile "'.$script_path_with_no_spaces.'"';
			
			echo "<div id='bacth_command_string'>";
			echo $bacth_command_string;
			echo "</div>";
			
			$repport = "";
			
			try {
				
				$result_string = "";
				
				exec($bacth_command_string,$result_string);
				
				
			} catch (Exception $e) {
				
				echo 'error running batch : '.$e->getMessage()."\n";
				
			}
			
		}
		
		
		
	}			
	
	private function format_command_string(){
		
		
	}
	
	private function create_bin_file(){
		
		
	}
	
	
}

?>
