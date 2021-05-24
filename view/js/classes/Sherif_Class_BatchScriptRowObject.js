
window.Sherif.view.BatchScriptRowObject = function(_batch_script_object){
	
	var row_div_template_path = "view/html/templates/batch_script_row_div.html";
	var row_state = 'unselected';
	var row_div_html;
	var input_html;
	
	var bsdata = {
		batch_script_id:_batch_script_object.get_script_id(),
		batch_script_name:_batch_script_object.get_script_name(),
	}	
	
	
	this.update_data = function(_batch_script_object){
		
		bsdata = {
			batch_script_id:_batch_script_object.get_script_id(),
			batch_script_name:_batch_script_object.get_script_name(),
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
		$(row_div_html).css('background-color', '#e87f61');
		$('#input_'+bsdata.batch_script_id).prop( "checked", true );
	}
	
	function unselect_row() {
		
		row_state = 'unselected';
		$(row_div_html).css('background-color', '#999999');
		$('#input_'+bsdata.batch_script_id).prop( "checked", false );		
		
	}
	
	
	function format_html_row_div_string(){
		
		var string = $.ajax({type: "GET", url: row_div_template_path, async: false}).responseText;
		
		string = string.replaceAll('[batch_script_id]',bsdata.batch_script_id);
		string = string.replaceAll('[batch_script_name]',bsdata.batch_script_name);
		
		return string;		
		
	}
	

	function toggle_selection(){
		
			if(row_state == 'selected'){
				unselect_row();
				console.log('1----selected '+row_state);
				//window.Sherif.control.unselect_TBScene(bsdata.batch_script_id)
			}else{
				select_row();
				
			}
		
	}
	
	
	
	this.update_html = function(){
		
		/*row_html = $.parseHTML(format_html_row_div_string());

		$(row_html).html("");
		$(row_html).append(script_log_history_object.get_html());
		
		row_div_html = row_html;
		
		unselect_row();
		
		return row_html;*/
		
	}
	

	this.create_html = function(){
		
		
		row_html = $.parseHTML(format_html_row_div_string());
		
		input_html = '#input_'+bsdata.batch_script_id;
		
		$(row_html).click(function(){

			
			window.Sherif.view.batch_script_row_list.unselect_all()
			
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

	
}






