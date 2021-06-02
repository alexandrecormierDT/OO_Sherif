window.Sherif.model.BatchScript = function(){
	
	var script_file_path;
	var script_file_name;
	var script_name;
	var script_id = ""; 
	var icon_png_path = "";

	this.parse_json_map = function(_json_object){
		
		script_file_path = _json_object.file_path;
		script_file_name = _json_object.file_name;
		script_name = _json_object.file_name;
		script_id ="batch_script_"+generate_serial();
		icon_png_path = _json_object.icon_png_path;
		
	}
	
	function generate_serial() {
	  return Math.floor(Math.random()*1000000000)

	}
	
	this.get_file_name  = function(){
		
		return script_file_name;
		
	}	

	
	this.get_icon_png_path = function(){
		
		return icon_png_path;
		
	}

	this.get_nice_name = function(){

		//OO_batch_render_to_bg_version
		var split_batch = script_file_name.split("OO_batch_"); 

		var name_without_batch = split_batch[1]
		var name_without_extension = name_without_batch.split(".")[0]

		return name_without_extension;

	}
	
	this.get_file_path = function(){
		
		return script_file_path;
		
	}	
	
	this.get_script_name = function(){
		
		return script_name;
		
	}	
		
	this.get_script_id = function(){
		
		return script_id;
		
	}	
}

		
