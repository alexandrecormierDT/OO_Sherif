

// the script history is managed separately


window.Sherif.view.ScriptHistoryObjectManager = function(){
	
	var script_history_object_array = []; 
	
	this.add_script_history_for_tbscene_object = function(_tbs_object){
		
		var log_folder_object = _tbs_object.get_log_folder_object();	
		var new_script_history_object = new window.Sherif.view.ScriptHistoryObject(_log_folder_object)
		new_script_history_object.create_html();
		script_history_object_list[_tbs_object.get_tbscene_id()] = new_script_history_object;
		
		return new_script_history_object;
		
	}

	
	this.get_script_history_by_tbscene_id =function(_tbscene_id){
		
		return script_history_object_list[_tbscene_id];
		
	}
	

	this.append_history_to_row_by_tbscene_id = function(_tbscene_id){
		
		var script_history_object = this.get_script_history_by_tbscene_id(_tbscene_id);
		var row_object = window.Sherif.view.tbscene_row_list.get_row_by_tbscene_id(_tbscene_id)
		console.log(row_object);
		
		if(row_object != undefined){
		
			var history_html = script_history_object.get_html();
			var row_html = row_object.get_html();
			$(row_html).append(history_html);			
			
		}

		
	}
	
	this.append_all_history = function(){
		
		for (var key in script_history_object_array) {
			
			this.append_history_to_row_by_tbscene_id(key);

		}
		
	}
	
}


window.Sherif.view.script_history_list = new window.Sherif.view.ScriptHistoryObjectManager()

window.Sherif.view.ScriptHistoryObject = function(_log_folder_object){
	
	var script_history_span_template_path = "view/html/templates/tbscene_script_history_span.html";
	
	var span_html ; 
	
	var lfdata = {
		script_log_object_array:_log_folder_object.get_script_log_object_array(),
	}	
	
	this.update = function(_log_folder_object){
		
		lfdata = {
			script_log_object_array:_log_folder_object.get_script_log_object_array(),
		}			
			
	}
	

	function format_html_script_history_span_string(){

		var string = $.ajax({type: "GET", url: script_history_span_template_path, async: false}).responseText;
		return string;
				
	}		
	
	this.create_html = function(){
		
		span_html = $.parseHTML(format_html_script_history_span_string());
		
		if(lfdata.script_log_object_array != undefined){
			
			for(var sls = 0 ; sls < lfdata.script_log_object_array.length ; sls++){
				
				var script_log_span_object = new window.Sherif.view.ScriptLogSpan(lfdata.script_log_object_array[sls]);
				$(span_html).append(script_log_span_object.get_html());
				
			}
			
			return span_html;			
			
		}
		

	}
	
	this.get_html = function(){
		
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

