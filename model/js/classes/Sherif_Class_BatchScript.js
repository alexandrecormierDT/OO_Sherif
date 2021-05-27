window.Sherif.model.BatchScript = function(){
	
	var script_file_path;
	var script_file_name;
	var script_name;
	var script_id = ""; 

	this.parse_json_map = function(_json_object){
		
		script_file_path = _json_object.file_path;
		script_file_name = _json_object.file_name;
		script_name = _json_object.file_name;
		script_id ="batch_script_"+generate_serial();
		
	}
	
	function generate_serial() {
	  return Math.floor(Math.random()*1000000000)

	}
	
	this.get_file_name  = function(){
		
		return script_file_name;
		
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

		
