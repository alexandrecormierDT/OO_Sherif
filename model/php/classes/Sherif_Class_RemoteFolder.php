<?php

	
	class RemoteFolder extends SherifObject{
		
		private $folder_path; 		
		private $folder_name; 		
		private $scan_sub_folder_bin_path;
		private $scan_all_files_bin_path;
		private $scan_all_files_by_extension_bin_path;
		
		
		public function __construct($_folder_path) {
			
			
			parent::__construct();

			$this->folder_path = $this->clean_path($_folder_path);
			$this->folder_name = $this->parse_folder_name_from_folder_path();

			$this->scan_sub_folder_bin_path = $this->get_bin_folder_path()."\\scandir_sub_dir.cmd";
			$this->scan_all_files_bin_path = $this->get_bin_folder_path()."\\scandir_all_files.cmd";
			$this->scan_all_files_by_extension_bin_path =  $this->get_bin_folder_path()."\\scandir_all_files_by_extension.cmd";
			
			
			$this->set_property('folder_path',$this->folder_path); 
			$this->set_property('folder_name',$this->folder_name);

		}
		
		
		//override
		public function update_property_map(){
			
			$this->set_property('folder_path',$this->folder_path); 
			$this->set_property('folder_name',$this->folder_name); 		
			
		}
		
		
		public function get_folder_name(){
			
			return $this->folder_name;
			
		}
		public function get_folder_path(){
			
			return $this->folder_path;
			
		}
				
		private function parse_folder_name_from_folder_path(){
			
			$folder_path_explode1  = explode ('\\',$this->folder_path);
			
			if(count($folder_path_explode1) > 0){
				
				$parsed_folder_name = $folder_path_explode1[count($folder_path_explode1)-1];			
				return $parsed_folder_name;						
				
			}
			
			return false;
			
		}
		
		public function get_sub_folders_objects_array(){
			
				$command_string = $this->scan_sub_folder_bin_path." ".$this->folder_path;
			

				$result_array = array();
				
				exec($command_string,$result_array);
				
				$remote_folders_instances = array();

				foreach($result_array  as $sub_folder_bare){
					
					$full_path = $this->folder_path.'\\'.$sub_folder_bare;
					
					$new_remote_folder = new RemoteFolder($full_path);
					
					array_push($remote_folders_instances,$new_remote_folder);
					
				}
				
				return $remote_folders_instances;
				

		}
		
		
		
		
		public function get_files_objects_array(){
			
			$command_string = $this->scan_all_files_bin_path." ".$this->folder_path;
			
			$result_array = array();

			exec($command_string,$result_array);
			
			$remote_files_instances = array();

			foreach($result_array  as $file_bare){
				
				$full_path = $this->folder_path.'\\'.$file_bare;
				$new_remote_folder = new RemoteFile($full_path);
				array_push($remote_files_instances,$new_remote_folder);

				
			}
			
			return $remote_files_instances;
					
		}

		
		public function get_files_objects_array_with_extention($_file_extension){
			
			$file_extension = $_file_extension;
		
			$ext_command_string = $this->scan_all_files_by_extension_bin_path." ".$this->folder_path." ".$file_extension;

			$result_file_path_array = array();

			$command = exec($ext_command_string,$result_file_path_array);
			
			$remote_files_instances = array();

			foreach($result_file_path_array  as $file_bare){
					
				$full_path = $this->folder_path."\\".$file_bare;
				
				//echo $full_path;
				
				$new_remote_folder = new RemoteFile($full_path);
					
				array_push($remote_files_instances,$new_remote_folder);

			}
			
			return $remote_files_instances;

		}	
		
		private function clean_path($_path_string){
			
			return preg_replace('#\+#','\\',$_path_string);
			
		}		
		

				
		
	}

?>
