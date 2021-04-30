<?php
	
	class RemoteFolder{
		
		private $folder_path; 
		
		private $scan_dir_sub_folder_bin_path;
		
		private $scan_dir_all_files_bin_path;
		
		
		public function __construct($_folder_path) {
			
			$folder_path = $_folder_path;
			
			$scan_dir_sub_dir_bin_path = "C:/wamp64/www/OO_Sherif/bin/scandir_sub_dir.cmd";
			$scan_dir_all_files_bin_path = "C:/wamp64/www/OO_Sherif/bin/scandir_all_files.cmd";

		}
		
		public function get_sub_folders(){
			
			$command_string = $scan_dir_sub_dir_bin_path." ".$folder_path;
			
			$result_array = array();
			
			exec($command_string,$result_array);
			
			$remote_folders_instances = array();

			foreach($result_array  as $sub_folder_path){
				
				$new_remote_folder = new RemoteFolder($sub_folder_path);
				
				array_push($remote_folders_instances,$new_remote_folder);
				
			}
			
			return $remote_folders_instances;
	
		}
		
		public function get_files(){
			
			$command_string = $scan_dir_all_files_bin_path." ".$folder_path;
			
			$result_array = array();
			
			exec($command_string,$result_array);
			
			$remote_files_instances = array();

			foreach($result_array  as $file_path){
				
				$new_remote_folder = new RemoteFile($file_path);
				
				array_push($remote_files_instances,$new_remote_folder);
				
			}
			
			return $remote_folders_instances;
					
		}
		
	}

?>
