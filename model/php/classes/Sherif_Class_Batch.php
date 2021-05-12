<?php
	
class Batch extends SherifObject
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
	
	
	
	
	

	public function run_batch_monothread_multi_xstages(){
		
		$command_string = $this->format_command_string_multi_xstages();

		echo "<div id='bacth_command_string'>";
		echo $command_string;
		echo "</div>";
	
		exec($command_string,$result_string);
		
	}			
	
	public function run_batch_monothread_repeat(){
					
		foreach($this->xstages_paths_array as $xstage_path){
			
			$command_string = $this->format_command_single_xstage($xstage_path);
			
			echo "<div id='bacth_command_string'>";
			echo $xstage_path;
			echo "<br>";
			echo $command_string;
			echo "</div>";
			
			$result_string;
			exec($command_string,$result_string);	

			echo '[DONE]';			
			
		}
		
		echo '[BATCH FINISHED]';
		
	}
	
	
	// not supported  :(
	
	private function format_command_string_multi_xstages(){
		
		$xstages_list_string = "";
		
		$command_string = "";
		
		foreach($this->xstages_paths_array as $xstage_path){

			$xstage_path_with_no_spaces = preg_replace("/\s+/","",$xstage_path);
			$script_path_with_no_spaces = preg_replace("/\s+/","",$this->batch_script_path);
			$xstages_list_string .=' "'.$xstage_path_with_no_spaces.'"';

		}	
		
		$command_string = '"'.$this->harmony_path.'" '.$xstages_list_string.' -batch -compile "'.$script_path_with_no_spaces.'"';
		
		return $command_string;
		
		
	}
	
	
	private function format_command_single_xstage($_xstage_path){
		
		$command_string = "";
		
		$xstage_path_with_no_spaces = preg_replace("/\s+/","",$_xstage_path);
		$script_path_with_no_spaces = preg_replace("/\s+/","",$this->batch_script_path);

		$command_string = '"'.$this->harmony_path.'" "'.$xstage_path_with_no_spaces.'" -batch -compile "'.$script_path_with_no_spaces.'"';
		
		return $command_string;
		
		
	}
	
	private function create_bin_file(){
		
		
	}
	
	
}

?>
