window.Sherif.model.Batch = function(){
	
	var xstages_path_array  = [];
	var batch_script;
	var command_string; 
	
	function fetch_xstages_paths(){
		
		var selected_tbscene_ids = window.Sherif.view.tbscene_row_list.get_selected_tbscene_id_list(); 
		
		for (var i = 0 ; i <selected_tbscene_ids.length; i++){
			
			var selected_TBS = window.Sherif.control.tbscenes.get_tbscene_object_by_id(selected_tbscene_ids[i]);
			
			xstages_path_array.push(selected_TBS.get_xstage_path());
			
		}
		
	}
	
	function fetch_bacth_script(){
		
		
		
	}	
	
	function format_data_form function(){
		
		
		
	}
	
	function send_batch_form = function(){
		
		
	}
	
	this.get_command_string = function(){
		
		
		
		
		
		
	}
	
	this.send_
}
