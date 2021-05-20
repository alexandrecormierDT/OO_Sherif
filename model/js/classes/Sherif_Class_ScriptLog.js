
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
	
	this.get_path = function(){
		
		return folder_path;
		
	}
	
	this.get_script_log_object_array = function(){
		
		return script_log_object_array;
		
	}
	
}

window.Sherif.model.ScriptLog = function(){
	
	var file_path;
	var script_name;
	var script_log_id;
	var time_stamp;
	var icon_png_path;
	var script_log_link;
	
	this.parse_json_map = function(_json_object){
		
		file_path = _json_object.file_path;
		script_name = _json_object.script_name;
		time_stamp = _json_object.time_stamp;
		icon_png_path = _json_object.icon_png_path;
		script_log_link = _json_object.script_log_link;
		script_log_id = "script_log_"+generate_serial();

	}
	
	function generate_serial() {
	  return Math.floor(Math.random()*1000000000000)

	}
	
	this.get_file_path = function(){
		
		return file_path;
		
	}
	this.get_script_name = function(){
		
		return script_name;
		
	}	
	this.get_script_log_id = function(){
		
		return script_log_id;
		
	}	
	this.get_time_stamp = function(){
		
		return time_stamp;
		
	}	
	this.get_icon_png_path = function(){
		
		return icon_png_path;
		
	}	
	this.get_script_log_link = function(){
		
		return script_log_link;
		
	}		
	
	function generate_serial() {
	  return Math.floor(Math.random()*1000)

	}
	
	
}
