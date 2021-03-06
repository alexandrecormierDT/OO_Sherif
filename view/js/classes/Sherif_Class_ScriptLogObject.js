window.Sherif.view.ScriptLogObject = function(_script_log_object){
	
	var script_log_span_template_path = "view/html/templates/script_log_span.html";
	var span_html;

	var sldata = {
		
			file_path:_script_log_object.get_file_path(),
			script_name:_script_log_object.get_script_name(),
			script_log_id:_script_log_object.get_script_log_id(),
			time_stamp:_script_log_object.get_time_stamp(),
			icon_png_path:_script_log_object.get_icon_png_path(),
			script_log_link:_script_log_object.get_script_log_link(),
			errors_count:_script_log_object.get_errors_count()
	}	
	
	this.update = function(_script_log_object){
		
		sldata = {
			file_path:_script_log_object.get_file_path(),
			script_name:_script_log_object.get_script_name(),
			script_log_id:_script_log_object.get_script_log_id(),
			time_stamp:_script_log_object.get_time_stamp(),
			icon_png_path:_script_log_object.get_icon_png_path(),
			script_log_link:_script_log_object.get_script_log_link(),
			errors_count:_script_log_object.get_errors_count()
		}			
			
	}
	
	function format_html_script_log_span_string(){

		var string = $.ajax({type: "GET", url: script_log_span_template_path, async: false}).responseText;

		// bypass the sdldat.object maybe and go straight to get_XXX() ? 
		
		string = string.replaceAll('[script_log_id]',sldata.script_log_id);
		string = string.replaceAll('[script_name]',sldata.script_name);
		string = string.replaceAll('[script_log_link]',sldata.script_log_link);
		string = string.replaceAll('[icon_png_path]',sldata.icon_png_path);

		if(sldata.errors_count > 0){

			string = string.replaceAll('[has_errors]',"haserrors");

		}else{

			string = string.replaceAll('[has_errors]',"");
		}
		
		return string;
				
	}		
	
	this.create_html = function(){
		
		console.log("creating html for script log");
		console.log(format_html_script_log_span_string());
		
		span_html = $.parseHTML(format_html_script_log_span_string());
	
		return span_html;
	}
	
	this.get_html = function(){

		return span_html;
	}
		
	
}
