window.Sherif.view.TBSCeneRowManager = function(){
	
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
		
		$('#tbscene_select_all').click(function(){

			window.Sherif.view.tbscene_row_list.select_all()
		});
		$('#tbscene_unselect_all').click(function(){
			window.Sherif.view.tbscene_row_list.unselect_all()
			
		})

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




window.Sherif.view.tbscene_row_list = new window.Sherif.view.TBSCeneRowManager()



window.Sherif.view.TBSceneRowObject = function(_tbscene_object){
	
	var input_div_template_path = "view/html/templates/tbscene_input.html";
	var row_div_template_path = "view/html/templates/tbscene_row_div.html";
	var row_state = 'unselected';
	var row_div_html;
	var input_html;
	
	var tbdata = {
		tbscene_id:_tbscene_object.get_tbscene_id(),
		tbscene_name:_tbscene_object.get_tbscene_name(),
		log_folder_object: _tbscene_object.get_log_folder_object()
	}	
	
	
	this.update_data = function(_tbscene_object){
		
		tbdata = {
			tbscene_id:_tbscene_object.get_tbscene_id(),
			tbscene_name:_tbscene_object.get_tbscene_name(),
			log_folder_object: _tbscene_object.get_log_folder_object()
		}		
	}
	
	this.get_row_state = function(){
		
		return row_state;
		
	}
	
	this.is_selected = function(){
		
		return (row_state == "selected");
		
		
	}
	
	this.unselect_row = function(){
		unselect_row()
		
	}
	
	
	this.select_row = function(){
		select_row()
		
	}
	

	function select_row(){
		
		row_state = 'selected';
		$(row_div_html).css('background-color', '#61bbe8');
		$(input_html).prop( "checked", true );
	}
	
	function unselect_row() {
		
		row_state = 'unselected';
		$(row_div_html).css('background-color', '#999999');
		$(input_html).prop( "checked", false );		
		
	}
	
	function format_html_input_string(){

		var string = $.ajax({type: "GET", url: input_div_template_path, async: false}).responseText;
		
		string = string.replaceAll('[tbscene_id]',tbdata.tbscene_id);
		string = string.replaceAll('[tbscene_name]',tbdata.tbscene_name);

		return string;
				
	}	
	
	function format_html_row_div_string(){
		
		var string = $.ajax({type: "GET", url: row_div_template_path, async: false}).responseText;
		
		string = string.replaceAll('[tbscene_id]',tbdata.tbscene_id);
		return string;		
		
	}
	

	
	function toggle_selection(){
		
			if(row_state == 'selected'){
				unselect_row();
				console.log('1----selected '+row_state);
				//window.Sherif.control.unselect_TBScene(tbdata.tbscene_id)
			}else{
				select_row();
				
			}
	
		
	}
	
	
	
	this.update_html = function(){
		
		input_html = $.parseHTML(format_html_input_string());

		$(row_html).html("");
		$(row_html).append(input_html);
		$(row_html).append(script_log_history_object.get_html());
		
		row_div_html = row_html;
		
		unselect_row();
		
		return row_html;
		
	}
	

	this.create_html = function(){
		
		
		row_html = $.parseHTML(format_html_row_div_string());
		input_html = $.parseHTML(format_html_input_string());
		
		$(row_html).append(input_html);
		$(input_html).click(function(){

			toggle_selection();
			window.Sherif.control.print_command_line();
			
		});	
		
		row_div_html = row_html;
		
		unselect_row();
		
		return row_html;		

		
	}
	
	this.get_html = function(){

		return row_div_html;		

	}	
	
	this.get_feedback_span_object = function(){
		
		return $('#feedback_'+tbdata.tbscene_id);
		
	}
	this.set_feedback_html = function(_html){
		
		$('#feedback_'+tbdata.tbscene_id).html(_html);
		
	}
	
	this.set_script_history_html = function(_html){
		
		$('#script_history_'+tbdata.tbscene_id).html(_html);
	}	
	
	
	function change_row_color_to_selected(_jquery_object){
		
		
		
	}
	
	
	
	
}






