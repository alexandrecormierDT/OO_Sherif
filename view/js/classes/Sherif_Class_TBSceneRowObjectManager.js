window.Sherif.view.TBSCeneRowObjectManager = function(){
	
	var rows = [];
	
	var list_div = "#tbscenes_input_list";
	
	
	this.init = function(){
		
		rows = [];

	}
	
	function add_row_for_tbscene_object(_tbs_object){
		
		var new_tbs_row = new window.Sherif.view.TBSceneRowObject(_tbs_object);
		new_tbs_row.create_html();
		rows[_tbs_object.get_tbscene_id()] = new_tbs_row;
		
		return new_tbs_row;
		
	}
	
	this.get_row_by_tbscene_id = function(_tbscene_id){
		
		return rows[_tbscene_id];
		
	}
	
	this.get_rows = function(){
	
		return rows;
		
	}
	
	this.refresh_list = function(){
		
		var TBS_object_array = window.Sherif.control.tbscenes.get_tbscenes_objects_array();
		
		rows = [];
		
		console.log( TBS_object_array) ;
		
		for (var key in TBS_object_array) {
			
				var current_TBS_object = TBS_object_array[key];
				var new_row = add_row_for_tbscene_object(current_TBS_object)

				$("#tbscenes_input_list").append(new_row.get_html());
				
		}
		


	}
	
	this.select_all = function(){
		
		for (var key in rows) {
			
			var current_row  = rows[key];
			
			current_row.select_row();
			
		}				
		
		
		
	}
	
	this.unselect_all = function(){
		
		for (var key in rows) {
			
			var current_row  = rows[key];
			
			current_row.unselect_row();
			
		}		
		
		
	}
	
	this.create_selection_buttons = function(){

		
	}
	
	this.get_selected_rows_object_list = function(){
		
		var selected_rows = [];
		
		for (var key in rows){
			
			var current_row  = rows[key];
			
			if(current_row.is_selected()){
				selected_rows.push(current_row);
			}
			
		}
		
		return selected_rows;
		
	}
	
	this.get_selected_tbscene_id_list = function(){
		
		var selected_ids = [];
		
		for (var key in rows){
			
			var current_row  = rows[key];
			
			if(current_row.is_selected()){
				
				selected_ids.push(key);
				
			}
			
		}
		
		return selected_ids;
		
	}
	
}
