
window.Sherif.view.TBSceneRowObject = function(_tbscene_object){
	
	var input_div_template_path = "view/html/templates/tbscene_input.html";
	var row_div_template_path = "view/html/templates/tbscene_row_div.html";
	
	var tbdata = {
		tbscene_id:_tbscene_object.get_tbscene_id(),
		tbscene_name:_tbscene_object.get_tbscene_name(),
		log_folder_object: _tbscene_object.get_log_folder_object()
	}	
	
	
	this.update = function(_tbscene_object){
		
		tbdata = {
			tbscene_id:_tbscene_object.get_tbscene_id(),
			tbscene_name:_tbscene_object.get_tbscene_name(),
			log_folder_object: _tbscene_object.get_log_folder_object()
		}		
		
	}
	
	function format_html_input_string(){

		var string = $.ajax({type: "GET", url: input_div_template_path, async: false}).responseText;
		
		string = string.replace('[tbscene_id]',tbdata.tbscene_id);
		string = string.replace('[tbscene_name]',tbdata.tbscene_name);

		return string;
				
	}	
	
	function format_html_row_div_string(){
		
		var string = $.ajax({type: "GET", url: row_div_template_path, async: false}).responseText;
		
		string = string.replace('[tbscene_id]',tbdata.tbscene_id);
		return string;		
		
	}
	

	this.get_html = function(){
		

		var input_html = $.parseHTML(format_html_input_string());
		var row_html = $.parseHTML(format_html_row_div_string());
		
		var script_log_history_object = new window.Sherif.view.ScriptHistoryObject(tbdata.log_folder_object)
		var script_log_history_html = script_log_history_object.get_html()
		
		$(row_html).append(input_html);
		$(row_html).append(script_log_history_html);
		$(row_html).click(function(){
			window.Sherif.control.SelectTBScene(tbdata.tbscene_id)
		});	
		
		return row_html;		

		
	}
	
}



window.Sherif.view.ScriptHistoryObject = function(_log_folder_object){
	
	var script_history_span_template_path = "view/html/templates/tbscene_script_history_span.html";
	
	var lfdata = {
		script_log_object_array:_log_folder_object.get_script_log_object_array(),
		folder_path:_log_folder_object.get_path()
	}	
	
	this.update = function(_log_folder_object){
		
		lfdata = {
			script_log_object_array:_log_folder_object.get_script_log_object_array(),
			folder_path:_log_folder_object.get_path()
		}			
			
	}
	
	
	function format_html_script_history_span_string(){

		var string = $.ajax({type: "GET", url: script_history_span_template_path, async: false}).responseText;
		return string;
				
	}		
	
	this.get_html = function(){
		
		var span_html = $.parseHTML(format_html_script_history_span_string());
		
		for(var sls = 0 ; sls < lfdata.script_log_object_array.length ; sls++){
			
			var script_log_span_object = new window.Sherif.view.ScriptLogSpan(lfdata.script_log_object_array[sls]);
			$(span_html).append(script_log_span_object.get_html());
			
		}
		
		return span_html;
	}
	
	
}


window.Sherif.view.ScriptLogSpan = function(_script_log_object){
	
	var script_log_span_template_path = "view/html/templates/script_log_span.html";

	var sldata = {
		
			file_path:_script_log_object.get_file_path(),
			script_name:_script_log_object.get_script_name(),
			script_log_id:_script_log_object.get_script_log_id(),
			time_stamp:_script_log_object.get_time_stamp(),
			icon_png_path:_script_log_object.get_icon_png_path(),
			script_log_link:_script_log_object.get_script_log_link()
	}	
	
	this.update = function(_script_log_object){
		
		sldata = {
			file_path:_script_log_object.get_file_path(),
			script_name:_script_log_object.get_script_name(),
			script_log_id:_script_log_object.get_script_log_id(),
			time_stamp:_script_log_object.get_time_stamp(),
			icon_png_path:_script_log_object.get_icon_png_path(),
			script_log_link:_script_log_object.get_script_log_link()
		}			
			
	}
	
	function format_html_script_log_span_string(){

		var string = $.ajax({type: "GET", url: script_log_span_template_path, async: false}).responseText;
		
		string = string.replace('[script_log_id]',sldata.script_log_id);
		string = string.replace('[script_name]',sldata.script_name);
		string = string.replace('[script_log_link]',sldata.script_log_link);
		string = string.replace('[icon_png_path]',sldata.icon_png_path);
		
		return string;
				
	}		
	

	this.get_html = function(){
		
		var span_html = $.parseHTML(format_html_script_log_span_string());
		
		return span_html;
	}
		
	
}

