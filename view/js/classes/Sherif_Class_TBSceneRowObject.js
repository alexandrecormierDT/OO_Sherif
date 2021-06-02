

window.Sherif.view.TBSceneRowObject = function(_tbscene_object){
	
	var input_div_template_path = "view\\html\\templates\\tbscene_row\\tbscene_row_input.html";
	var row_div_template_path = "view\\html\\templates\\tbscene_row\\tbscene_row_div.html";
	var row_copy_button_template_path = "view\\html\\templates\\tbscene_row\\tbscene_row_copy_button.html";
	var row_state = 'unselected';
	var row_div_html;
	var input_html;
	var copy_button_html;
	var source_object = _tbscene_object;

	var colors = [];
	colors["unselected"] = '#999999';
	colors["success"] ="#7EDC99";
	colors["selected"] ='#61bbe8';
	colors["error"] = "#ea8585";
	colors["batching"] = "#f7da7b";
	
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
		source_object = _tbscene_object;
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

	function change_div_color_to(_color_key){

		$(row_div_html).css('background-color', colors[_color_key]);


	}

	this.change_color = function(_color_key){

		change_div_color_to(_color_key);

	}
	

	function select_row(){
		
		row_state = 'selected';
		change_div_color_to('selected');
		$(input_html).prop( "checked", true );
	}
	
	function unselect_row() {
		
		row_state = 'unselected';
		change_div_color_to("unselected");
		$(input_html).prop( "checked", false );		
		
	}
	
	function format_html_input_string(){

		var string = $.ajax({type: "GET", url: input_div_template_path, async: false}).responseText;
		
		string = string.replaceAll('[tbscene_id]',source_object.get_tbscene_id());
		string = string.replaceAll('[tbscene_name]',source_object.get_tbscene_name());

		return string;
				
	}	
	
	function format_html_row_div_string(){
		
		var string = $.ajax({type: "GET", url: row_div_template_path, async: false}).responseText;
		
		string = string.replaceAll('[tbscene_id]',source_object.get_tbscene_id());
		return string;		
		
	}
	
	function format_html_row_copy_button_string(){
		
		var string = $.ajax({type: "GET", url: row_copy_button_template_path, async: false}).responseText;
		
		string = string.replaceAll('[tbscene_id]',source_object.get_tbscene_id());
		return string;		
		
	}
	
	function toggle_selection(){
		
			if(row_state == 'selected'){
				unselect_row();
				console.log('1----selected '+row_state);
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
		copy_button_html = $.parseHTML(format_html_row_copy_button_string())
		
		$(row_html).append(input_html);
		$(row_html).append(copy_button_html);
		$(input_html).click(function(){

			toggle_selection();
			window.Sherif.control.print_command_line();
			
		});	

		$(copy_button_html).click(function(){

			console.log("click")
			window.Sherif.control.copy_xstage_path_to_clipboard(source_object.get_tbscene_id())

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
	
	
	
	
}






