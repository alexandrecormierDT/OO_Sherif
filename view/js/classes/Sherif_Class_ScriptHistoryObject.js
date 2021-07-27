

// the script history is managed separately



window.Sherif.view.ScriptHistoryObject = function(_log_folder_object){
	
	var script_history_span_template_path = "view/html/templates/tbscene_row/tbscene_row_script_history_span.html";
	
	var span_html ; 
	
	var lfdata = {
		script_log_object_array:_log_folder_object.get_script_log_object_array()
	}	
	
	this.update_data = function(_log_folder_object){
		
		lfdata = {
			script_log_object_array:_log_folder_object.get_script_log_object_array()
		}			
			
	}
	

	function format_html_script_history_span_string(){

		var string = $.ajax({type: "GET", url: script_history_span_template_path, async: false}).responseText;
		return string;
				
	}		
	
	this.create_html = function(){
		
		span_html = $.parseHTML(format_html_script_history_span_string());
		var max_log_number = 12;

		if(lfdata.script_log_object_array!=undefined){
			var short_log_length = lfdata.script_log_object_array.length > max_log_number ? max_log_number : lfdata.script_log_object_array.length
			
			if(lfdata.script_log_object_array != undefined){
				
				for(var sls = 0 ; sls < short_log_length ; sls++){
					
					var script_log_span_object = new window.Sherif.view.ScriptLogObject(lfdata.script_log_object_array[sls]);
					script_log_span_object.create_html();
					$(span_html).append(script_log_span_object.get_html());
				}
				return span_html;			
			}
		}
	}
	
	this.update_html = function(){
		
		$(span_html).html("");
		
		if(lfdata.script_log_object_array != undefined){
			
			for(var sls = 0 ; sls < lfdata.script_log_object_array.length ; sls++){
				
				var script_log_span_object = new window.Sherif.view.ScriptLogObject(lfdata.script_log_object_array[sls]);
				
				script_log_span_object.create_html();
				
				$(span_html).append(script_log_span_object.get_html());
				
			}		
			
		}		
		
	}
	
	this.get_html = function(){
		
		return span_html;			
					
		
	}
	
	
}



