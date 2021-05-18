
window.Sherif.control.tbscenes = new window.Sherif.model.TBScenesManager();
window.Sherif.control.batch_scripts = new window.Sherif.model.BatchScriptManager();
window.Sherif.control.batchs = new window.Sherif.model.BatchManager();
	




window.Sherif.control.send_batch_form = function(){
	
	console.log("send_batch_form");
	$("#command_line").html("BATCH RUNNING ...");
	var current_batch = window.Sherif.control.batchs.add_batch();
	
	window.Sherif.control.append_string_to_feedback_html(" starting batch ... ");
	
	current_batch.send_batch_form_for_each_tbscenes ();
	

}
	
	
window.Sherif.control.print_command_line = function(){
	
	console.log("print_command_line");
	var current_batch = window.Sherif.control.batchs.add_batch();
	
	console.log(current_batch.get_data_form());
	console.log(current_batch.get_command_string());
	
	
	$("#command_line").html(current_batch.get_command_string());

}

window.Sherif.control.append_string_to_feedback_html = function(_string){

	console.log(_string)
	var html_object = $.parseHTML("<br><br>"+_string);
	$("#command_line").append(html_object);

}


window.Sherif.control.send_root_folder_form = function(){
	
	var selected_root_folder_path = $("#input_root_folder_path").val();
	$('#tbscene_fetching_animation').show()
	 $('#tbscenes_input_list').html("");
	 $('#feedback').html("");


	window.Sherif.control.append_string_to_feedback_html(" fetching tbscenes from "+selected_root_folder_path+" ... ");

	console.log(selected_root_folder_path);

    var data_form = 'selected_root_folder_path='+selected_root_folder_path;
     
    $.ajax({
       url : 'control/php/fetch_tbscenes.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé

           console.log(code_html);

		    //$('#batch_feedback').html(code_html);
			$('#tbscene_fetching_animation').hide()
			
			var return_json = JSON.parse(code_html);

			console.log(return_json);
			
			window.Sherif.control.tbscenes.parse_tbscene_objects_from_json(return_json);
			window.Sherif.view.tbscene_row_list.refresh_list();
			window.Sherif.view.script_history_list.refresh_list();
			window.Sherif.view.script_history_list.append_all_history();
			
			window.Sherif.control.append_string_to_feedback_html(" tbscenes fetched ");

       }
    });
	
	
}