window.Sherif.model.TBScene = function(){
	
	var tbscene_id;
	var tbscene_name;
	var folder_name;
	var folder_path;
	var log_folder_object;
	var xstage; 
	var selected = false; 
	var locked = false; 

	
	var tbscene_id =""; 

	this.parse_json_map = function(_json_object){
		
		folder_name = _json_object.folder_name;
		folder_path = _json_object.folder_path;
		tbscene_name = folder_name;
		locked = _json_object.locked == "yes" ? true : false; 
		
		tbscene_id ="tbscene_"+window.Sherif.generate_serial();
		
		xstage = new window.Sherif.model.XStage(); 
		xstage.parse_json_map(_json_object.xstage);
		
		log_folder_object = new window.Sherif.model.LogFolder(); 

		if(_json_object.hasOwnProperty('log_folder')){
			log_folder_object.parse_json_map(_json_object.log_folder);
			
		}
		
	}
	
	this.parse_script_log_history_json = function(_json_object){
		
		log_folder_object.parse_json_map(_json_object);
		
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

	this.is_locked = function(){
		
		return locked;
		
	}			
	
	
	this.get_folder_name  = function(){
		
		return folder_name;
		
	}	
	
	this.get_folder_path  = function(){
		
		return folder_path;
		
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
	
	this.get_log_folder_path = function(){
		
		if(log_folder_object.get_path()!=""){

			return log_folder_object.get_path();

		}else{

			return folder_path+"\\Log";

		}

		

		
	}
	
}
