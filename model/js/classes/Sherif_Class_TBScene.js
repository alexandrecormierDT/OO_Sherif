

window.Sherif.model.XStage = function(){
	
	var xstage_path;
	
	this.parse_json_map = function(_json_object){
		
		xstage_path = _json_object.file_path;

	}
	
	this.get_path = function(){
		
		return xstage_path;
		
	}
	
}

window.Sherif.model.LogFolder = function(){
	
	var script_log_object_array;
	var folder_path;
	
	this.parse_json_map = function(_json_object){
		
		folder_path = _json_object.folder_path;
		script_log_object_array = [];
		
		for(var s = 0 ; s < _json_object.script_log_object_array.length ; s++){
			
			var new_script_log = new window.Sherif.model.ScriptLog();
			new_script_log.parse_json_map(_json_object.script_log_object_array[s]);
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

window.Sherif.model.TBScene = function(){
	
	var tbscene_id;
	var tbscene_name;
	var folder_name;
	var folder_path;
	var log_folder_object;
	var xstage; 
	var selected = false; 
	
	var input_div_template_path = "view/html/templates/tbscene_input.html";
	
	var tbscene_id =""; 

	this.parse_json_map = function(_json_object){
		
		folder_name = _json_object.folder_name;
		folder_path = _json_object.folder_path;
		tbscene_name = folder_name;
		
		tbscene_id =folder_name+"_"+generate_serial();
		
		xstage = new window.Sherif.model.XStage(); 
		xstage.parse_json_map(_json_object.xstage);
		
		log_folder_object = new window.Sherif.model.LogFolder(); 
		log_folder_object.parse_json_map(_json_object.log_folder);
		
	}
	
	this.select_tbscene = function(){
		
		selected = true;
		
	}
	
	this.unselect_tbscene = function(){
		
		selected = false;
		
	}	
	
	this.is_selected = function(){
		
		return selected;
		
	}		
	
	function generate_serial() {
	  return Math.floor(Math.random()*1000)

	}
	
	this.get_folder_name  = function(){
		
		return folder_name;
		
	}	
	
	this.get_tbscene_name  = function(){
		
		return tbscene_name;
		
	}	
	
	this.get_tbscene_id  = function(){
		
		return tbscene_id;
		
	}
		
	this.get_xstage  = function(){
		
		return xstage;
		
	}	
	
	this.get_xstage_path  = function(){
		
		return xstage.get_path();
		
	}	

	this.get_log_folder_object  = function(){
		
		return log_folder_object;
		
	}		
	
}

		
window.Sherif.model.TBScenesManager = function(){
	
	var tbscenes_objects_array = [];
	
	this.init = function(){
		
		tbscenes_object_array = [];
	}
	
	this.add_tbscene_object = function(_tbscene_object){
		
		tbscene_id = _tbscene_object.get_tbscene_id();
		
		tbscenes_objects_array[tbscene_id]=_tbscene_object;
		
	}
	
	this.get_tbscene_object_by_id = function(_tbscene_id){
		
		return tbscenes_objects_array[_tbscene_id];
		
	}
	
	this.get_tbscenes_objects_array = function(){
		
		return tbscenes_objects_array;
		
	}
	
}
	