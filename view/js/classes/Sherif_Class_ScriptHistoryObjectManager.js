
window.Sherif.view.ScriptHistoryObjectManager = function(){
	
	var script_history_object_array = []; 
	
	this.add_script_history_for_tbscene_object = function(_tbs_object){
		
		var log_folder_object = _tbs_object.get_log_folder_object();
		
		console.log("log_folder_object")	
		console.log(log_folder_object)	
		
		var new_script_history_object = new window.Sherif.view.ScriptHistoryObject(log_folder_object)
		new_script_history_object.create_html();
		
		script_history_object_array[_tbs_object.get_tbscene_id()] = new_script_history_object;
		return new_script_history_object;
		
	}

	
	this.get_script_history_by_tbscene_id =function(_tbscene_id){
		
		return script_history_object_array[_tbscene_id];
		
	}
	

	this.append_history_to_row_by_tbscene_id = function(_tbscene_id){
		
		var script_history_object = this.get_script_history_by_tbscene_id(_tbscene_id);
		var row_object = window.Sherif.view.tbscene_row_list.get_row_by_tbscene_id(_tbscene_id)

		
		if(row_object != undefined){
		
			var history_html = script_history_object.get_html();
			row_object.set_script_history_html(history_html);		
			
		}

		
	}
	
	this.append_all_history = function(){
		
		console.log('script_history_object_array');
		console.log(script_history_object_array);
		
		for (var key in script_history_object_array) {
			
			this.append_history_to_row_by_tbscene_id(key);

		}
		
	}
	
	this.refresh_list = function(){
		
		script_history_object_array = [];
		
		var TBS_object_array = window.Sherif.control.tbscenes.get_tbscenes_objects_array();
		
		console.log( TBS_object_array) ;
		
		for (var key in TBS_object_array) {
			
				var current_TBS_object = TBS_object_array[key];
				var new_sh = this.add_script_history_for_tbscene_object(current_TBS_object)
				
		}

	}	
	
}

