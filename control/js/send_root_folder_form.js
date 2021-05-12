


$("#root_folder_form").submit(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire

	var selected_root_folder_path = $("#input_root_folder_path").val();
	$('#tbscene_fetching_animation').show()
	 $('#tbscenes_input_list').html("");
	 $('#feedback').html("");

	console.log(selected_root_folder_path);

    var data_form = 'selected_root_folder_path='+selected_root_folder_path;
     
    $.ajax({
       url : 'control/php/fetch_tbscenes.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé

           console.log(code_html);

		    $('#feedback').html(statut);
			$('#tbscene_fetching_animation').hide()
			
			var return_json = JSON.parse(code_html);
			console.log("hello");
			console.log(return_json);
			
			for(var t = 0 ; t < return_json.length ; t++){
			
				var TBS = new Sherif.TBScene();
				TBS.parse_json_map(return_json[t]); 
			
				var tbscene_row = new  Sherif.TBsceneRowObject(TBS);

				$("#tbscenes_input_list").append(tbscene_row.get_html());				

			}	

       }
    });

});


var Sherif = {};


Sherif.TBsceneRowObject = function(_tbscene_object){
	
	var input_div_template_path = "view/html/templates/tbscene_input.html";
	var row_div_template_path = "view/html/templates/tbscene_row_div.html";
	
	var tbdata = {
		tbscene_id:_tbscene_object.get_tbscene_id(),
		xstage_path:_tbscene_object.get_xstage_path(),
		tbscene_name:_tbscene_object.get_tbscene_name(),
		log_folder_object: _tbscene_object.get_log_folder_object()
		
	}	
	
	
	this.update = function(_tbscene_object){
		
		tbdata = {
			tbscene_id:_tbscene_object.get_tbscene_id(),
			xstage_path:_tbscene_object.get_xstage_path(),
			tbscene_name:_tbscene_object.get_tbscene_name(),
			log_folder_object: _tbscene_object.get_log_folder_object()
		}		
		
	}
	
	function format_html_input_string(){

		var string = $.ajax({type: "GET", url: input_div_template_path, async: false}).responseText;
		
		string = string.replace('[tbscene_id]',tbdata.tbscene_id);
		string = string.replace('[xstage_path]',tbdata.xstage_path);
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
		
		var script_log_history_object = new Sherif.ScriptHistoryObject(tbdata.log_folder_object)
		var script_log_history_html = script_log_history_object.get_html()
		
		$(row_html).append(input_html);
		$(row_html).append(script_log_history_html);
		
		return row_html;		

		
	}
	
}



Sherif.ScriptHistoryObject = function(_log_folder_object){
	
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
			
			var script_log_span_object = new Sherif.ScriptLogSpan(lfdata.script_log_object_array[sls]);
			$(span_html).append(script_log_span_object.get_html());
			
		}
		
		return span_html;
	}
	
	
}


Sherif.ScriptLogSpan = function(_script_log_object){
	
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



Sherif.XStage = function(){
	
	var xstage_path;
	
	this.parse_json_map = function(_json_object){
		
		xstage_path = _json_object.file_path;

	}
	
	this.get_path = function(){
		
		return xstage_path;
		
	}
	
}

Sherif.LogFolder = function(){
	
	var script_log_object_array;
	var folder_path;
	
	this.parse_json_map = function(_json_object){
		
		folder_path = _json_object.folder_path;
		script_log_object_array = [];
		
		for(var s = 0 ; s < _json_object.script_log_object_array.length ; s++){
			
			var new_script_log = new Sherif.ScriptLog();
			new_script_log.parse_json_map(_json_object.script_log_object_array[s]);
			script_log_object_array.push(new_script_log);
			
		}
		
		

	}
	
	this.get_path = function(){
		
		return folder_path;
		
	}
	
	this.get_script_log_object_array = function(){
		
		return script_log_object_array;
		
	}
	
}

Sherif.ScriptLog = function(){
	
	var file_path;
	var script_name;
	var script_log_id;
	var time_stamp;
	var icon_png_path;
	var script_log_link;
	
	this.parse_json_map = function(_json_object){
		
		file_path = _json_object.file_path;
		script_name = _json_object.script_name;
		time_stamp = _json_object.time_stamp;
		icon_png_path = _json_object.icon_png_path;
		script_log_id = "script_log_"+generate_serial();

	}
	

	
	this.get_file_path = function(){
		
		return file_path;
		
	}
	this.get_script_name = function(){
		
		return script_name;
		
	}	
	this.get_script_log_id = function(){
		
		return script_log_id;
		
	}	
	this.get_time_stamp = function(){
		
		return time_stamp;
		
	}	
	this.get_icon_png_path = function(){
		
		return icon_png_path;
		
	}	
	this.get_script_log_link = function(){
		
		return script_log_link;
		
	}		
	
	function generate_serial() {
	  return Math.floor(Math.random()*1000)

	}
	
	
}

Sherif.TBSceneManager = function(){
	
	
	
	
}

Sherif.TBScene = function(){
	
	var tbscene_id;
	var tbscene_name;
	var folder_name;
	var folder_path;
	var log_folder_object;
	var xstage; 
	
	var input_div_template_path = "view/html/templates/tbscene_input.html";
	
	var tbscene_id =""; 

	this.parse_json_map = function(_json_object){
		
		folder_name = _json_object.folder_name;
		folder_path = _json_object.folder_path;
		tbscene_name = folder_name;
		
		tbscene_id =folder_name+"_"+generate_serial();
		
		xstage = new Sherif.XStage(); 
		xstage.parse_json_map(_json_object.xstage);
		
		log_folder_object = new Sherif.LogFolder(); 
		log_folder_object.parse_json_map(_json_object.log_folder);
		
	}
	
	function generate_serial() {
	  return Math.floor(Math.random()*1000)

	}
	
	this.get_folder_name  = function(){
		
		return folder_name;
		
	}	
	
	this.get_tbscene_name  = function(){
		
		return tbscene_name;
		
	}	
	
	this.get_tbscene_id  = function(){
		
		return tbscene_id;
		
	}
		
	this.get_xstage  = function(){
		
		return xstage;
		
	}	
	
	this.get_xstage_path  = function(){
		
		return xstage.get_path();
		
	}	

	this.get_log_folder_object  = function(){
		
		return log_folder_object;
		
	}		
	
}

		
	



				
