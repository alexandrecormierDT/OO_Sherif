window.Sherif.model.LogFolder = function(){
	
	var script_log_object_array;
	var folder_path;
	
	this.parse_json_map = function(_json_object){
		
		folder_path = _json_object.folder_path;
		script_log_object_array = [];
		
		var arg_array = _json_object.script_log_object_array
		
		if(_json_object.constructor == Array){
			
			arg_array = _json_object;
			
		}
		
		for(var s = 0 ; s < arg_array.length ; s++){
			
			console.log("_json_object")
			console.log(arg_array[s])
			
			var new_script_log = new window.Sherif.model.ScriptLog();
			new_script_log.parse_json_map(arg_array[s]);
			script_log_object_array.push(new_script_log);
			
		}
		
		

	}

    this.set_temp_folder_path = function(_path){

        folder_path = _path;

    }
	
	this.get_path = function(){
		
		return folder_path;
		
	}
	
	this.get_script_log_object_array = function(){
		
		return script_log_object_array;
		
	}
	
}