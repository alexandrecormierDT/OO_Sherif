<?php
	
	class RemoteFile extends SherifObject{
		
		private $file_path; 		
		private $file_name; 		
		private $file_extension; 		
		private $parent_folder_path;
		private $read_file_bin_path;
		private $create_file_bin_path;
		private $delete_file_bin_path;
		
		public function __construct($_file_path) {
			
			parent::__construct();

			$this->read_file_bin_path = "C:\wamp64\www\OO_Sherif\control\bin\read_file.cmd";	
			$this->create_file_bin_path = "C:\wamp64\www\OO_Sherif\control\bin\create_file.cmd";	
			$this->delete_file_bin_path = "C:\wamp64\www\OO_Sherif\control\bin\delete_file.cmd";	
			
			$this->file_path = $this->clean_path($_file_path);
			$this->file_name = $this->parse_file_name_from_file_path();
			$this->parent_folder_path = $this->parse_parent_folder_path_from_file_path();
			$this->file_extension = $this->parse_extension_from_file_path();
			
			$this->set_property('file_path',$this->file_path); 
			$this->set_property('file_name',$this->file_name); 
			$this->set_property('file_extension',$this->file_extension);
			
		}
		
		public function update_property_map(){
			
			$this->set_property('file_path',$this->clean_path($this->file_path)); 
			$this->set_property('file_name',$this->file_name); 
			$this->set_property('file_extension',$this->file_extension); 			
			
		}
		
		public function get_file_path(){
			
			return $this->file_path;
			
		}
		public function get_file_extension(){
			
			return $this->file_extension;
			
		}		
		
		public function get_file_name_without_extension(){
			
			$result = $this->parse_file_name_without_extension();
			return $result;
			
		}
		
		public function set_folder_path($_fp){
			
			
			$this->parent_folder_path = $_fp;
		}
		
		public function read_content(){
			
			$read_command_string = $this->read_file_bin_path." ".$this->file_path;
			
			try {
				
				$read_result_array = array();
				
				exec($read_command_string,$read_result_array);
				
				return $read_result_array;
				
			} catch (Exception $e) {
				
				echo 'error reading file : ',  $e->getMessage(), "\n";
			}
			
			
		}
		
		public function create_file(){
			
			$create_command_string = $this->create_file_bin_path." ".$this->file_path;
			
			exec($create_command_string,$read_result_array);
			
		}
		
		public function delete_file(){
			
			$delete_command_string = $this->delete_file_bin_path." ".$this->file_path;
			
			exec($delete_command_string,$read_result_array);
			
			
		}		
		
		public function get_file_name(){
			
			return 	$this->file_name ;
			
		}

		public function get_parent_folder_object(){

			$parent_folder_object =  new RemoteFolder($this->parent_folder_path);
			return $parent_folder_object;
			
		}
		
		public function get_parent_folder_name(){

			$parent_folder_object =  new RemoteFolder($this->parent_folder_path);
			return $parent_folder_object->get_folder_name();
			
		}
		
		public function get_parent_folder_path(){

			return $this->parent_folder_path;
			
		}		
		
		private function parse_file_name_from_file_path(){
			
			$file_path_explode1  = explode('\\',$this->file_path);
			$parsed_file_name = $file_path_explode1[count($file_path_explode1)-1];			
			return $parsed_file_name;
			
		}
		
		private function parse_parent_folder_path_from_file_path(){
			
			$file_path_explode2 = explode($this->file_name,$this->file_path);
			
			if(count($file_path_explode2)>0){
			
				$parsed_folder_path = $file_path_explode2[0];
				return $parsed_folder_path;
				
			}else{
					return false;
			}
			
		}
		
		private function parse_extension_from_file_path(){
			
			$point_explode = explode(".",$this->file_path);
			
			if(count($point_explode) > 1){
				return $point_explode[1];
			}
			return false;
			
			
		}
		
		private function parse_file_name_without_extension(){
			
			$point_explode = explode(".",$this->file_name);
			
			if(count($point_explode) > 1){
				return $point_explode[0];
			}
			return false;
			
			
		}
		
		private function clean_path($_path_string){
			
			$same_direction = str_replace('/','\\',$_path_string);
			$removed_double = preg_replace('#\+#','\\',$same_direction);
			return $removed_double;
			
		}	
		
		public function get_deactivated_file_path(){
			
			return $this->deactivate_path($this->file_path);
		}

		private function deactivate_path($_path_string){
			
			$deactivated_slashes = str_replace('\\','$',$_path_string);
			
			return $deactivated_slashes;
			
			
		}
		public function activate_path($_path_string){
			
			$activated_slashes = str_replace('$','\\',$_path_string);
			
			return $activated_slashes;
			
		}		
		

		
		
	}

?>
