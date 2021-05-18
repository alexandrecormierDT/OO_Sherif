

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
	  return Math.floor(Math.random()*1000)

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

		
window.Sherif.model.BatchScriptManager = function(){
	
	var batch_script_objects_array = [];
	
	this.init = function(){
		
		batch_script_objects_array = [];
	}
	
	this.add_batch_script_object = function(_batch_script_object){
		
		batch_script_id = _batch_script_object.get_script_id();
		batch_script_objects_array[batch_script_id] =_batch_script_object;
		
	}
	
	this.parse_batch_script_objects_from_json = function(_json_object){
		
		for(var s = 0 ; s < _json_object.length ; s++){
	
			var BS_object = new window.Sherif.model.BatchScript();
			
			BS_object.parse_json_map(_json_object[s]); 
			this.add_batch_script_object(BS_object);


		}	
		
	}
	
	this.get_batch_script_object_by_id = function(_script_id){
		
		return batch_script_objects_array[_script_id];
		
	}
	
	this.get_batch_scripts_objects_array = function(){
		
		return batch_script_objects_array;
		
	}
	
}
	