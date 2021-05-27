window.Sherif.model.XStage = function(){
	
	var xstage_path;
	
	this.parse_json_map = function(_json_object){
		
		xstage_path = _json_object.file_path;

	}
	
	this.get_path = function(){
		
		return xstage_path;
		
	}
	
}