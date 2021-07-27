

window.Sherif.control.tbscenes = new window.Sherif.model.TBScenesManager();
window.Sherif.control.batch_scripts = new window.Sherif.model.BatchScriptManager();
window.Sherif.control.batchs = new window.Sherif.model.BatchManager();
	


window.Sherif.control.fetch_batch_scripts = function(){
	
    var data_form = 'batchscripts_folder=P:\\pipeline\\alexdev\\batch\\OO_sherif';
     
    $.ajax({
       url : 'control/php/fetch_batchscripts.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé
	   
			console.log(code_html);

			var return_json = JSON.parse(code_html);

			console.log("batchscript return_json");
			console.log(return_json);
			
			window.Sherif.control.batch_scripts.parse_batch_script_objects_from_json(return_json);
			window.Sherif.view.batch_script_row_list.refresh_list();

			
       }
    });

	
}


window.Sherif.control.send_batch_form = function(){
	
	console.log("send_batch_form");
	var current_batch = window.Sherif.control.batchs.add_batch();

	var inputs_error_log = current_batch.check_inputs()

	if( inputs_error_log  ==""){

	
		window.Sherif.control.append_string_to_feedback_html(" starting batch ... ");
		current_batch.send_batch_form_for_each_tbscenes ();

	}else{

		window.Sherif.control.append_string_to_feedback_html( inputs_error_log );

	}

	

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
	
	// need to clean this input
	var selected_root_folder_path = $("#input_root_folder_path").val();
	$('#tbscenes_input_list').html("");

	var root_folder = new window.Sherif.model.RootFolder(selected_root_folder_path)

	window.Sherif.control.append_string_to_feedback_html(" fetching tbscenes from "+root_folder.get_path()+" ... ");

	console.log(root_folder.get_path());

    var data_form = 'selected_root_folder_path='+root_folder.get_path();
     
    $.ajax({
       url : 'control/php/fetch_tbscenes.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', 
       success : function(code_html, statut){ 
	   
			console.log(code_html);

			if(code_html == "no tbscenes found"){

				window.Sherif.control.append_string_to_feedback_html(" FAIL ! no tbscenes found ");	

			}else{

				var return_json = JSON.parse(code_html);

				console.log("-------------fetch tbscenes return_json");
				console.log(return_json);
				
				if(return_json.length != undefined || return_json.length > 0 ){
					
					//instanciating model 
					window.Sherif.control.tbscenes.parse_tbscene_objects_from_json(return_json);

					//instanciating view
					window.Sherif.view.tbscene_row_list.refresh_list();
					window.Sherif.view.script_history_list.refresh_list();

					//script logs update
					window.Sherif.view.script_history_list.append_all_history();

					// feeback on fetching
					var tbscenes_count = window.Sherif.control.tbscenes.get_tbscenes_objects_count();
					window.Sherif.control.append_string_to_feedback_html(" SUCCESS ! "+tbscenes_count+"  tbscenes fetched ");

				}else{
					
					// feeback on fetching
					window.Sherif.control.append_string_to_feedback_html(" FAIL ! tbscenes fetching failed ");			
					
				}

			}
			


       }
    });
	
	
}

window.Sherif.control.copy_command_line_to_clipboard = function(){

	var containerid = "command_line";
	
	var range = document.createRange();
	range.selectNode(document.getElementById(containerid));
	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges();// to deselect
	
}


window.Sherif.control.copy_xstage_path_to_clipboard = function(_tbscene_id){

	
	var current_tbscene = window.Sherif.control.tbscenes.get_tbscene_object_by_id(_tbscene_id)

	var xstage_path  = current_tbscene.get_xstage_path();
	
	$("#command_line").html(xstage_path);

	console.log(xstage_path);
	
	var containerid = "command_line";
	console.log(document.getElementById(containerid));

	document.getElementById(containerid).innerHTML = xstage_path;

	var range = document.createRange();
	range.selectNodeContents(document.getElementById(containerid));
	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges();// to deselect
	
}


console.log("CONTROL LOADED")