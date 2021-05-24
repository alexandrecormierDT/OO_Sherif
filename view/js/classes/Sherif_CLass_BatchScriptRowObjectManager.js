window.Sherif.view.BatchScriptRowObjectManager = function(){
	
	var rows = [];
	
	var list_div = "#batch_scripts_input_list";
	
	this.init = function(){
		
		rows = [];

	}
	
	function add_row_for_batch_script_object(_bs_object){
		
		var new_bs_row = new window.Sherif.view.BatchScriptRowObject(_bs_object);
		new_bs_row.create_html();
		rows[_bs_object.get_script_id()] = new_bs_row;
		
		return new_bs_row;
		
	}
	
	this.get_row_by_batch_script_id = function(_batch_script_id){
		
		return rows[_batch_script_id];
		
	}
	
	this.get_rows = function(){
	
		return rows;
		
	}
	
	this.refresh_list = function(){
		
		var BS_object_array = window.Sherif.control.batch_scripts.get_batch_scripts_objects_array();
		
		console.log( "BS_object_array") ;
		console.log( BS_object_array) ;
		
		for (var key in BS_object_array) {
			
				var new_row = add_row_for_batch_script_object(BS_object_array[key])
				$("#batch_scripts_input_list").append(new_row.get_html());
				
		}

	}
	
	this.unselect_all = function(){
		
		for (var key in rows) {
			
			var current_row  = rows[key];
			
			current_row.unselect_row();
			
		}		
		
		
	}

	this.get_selected_rows_list = function(){
		
		var selected_rows = [];
		
		for (var key in rows) {
			
			var current_row  = rows[key];
			
			if(current_row.is_selected()){
				selected_rows.push(current_row);
			}
			
		}
		
		return selected_rows;
		
	}
	
	
	this.get_selected_bacth_script_id_list = function(){
		
		var selected_ids = [];
		
		for (var key in rows) {
			
			var current_row  = rows[key];
			
			if(current_row.is_selected()){
				selected_ids.push(key);
			}
			
		}
		
		return selected_ids;		
		
	}
	
}

