

window.Sherif.model.BatchManager = function(){
	
	var batch_object_array = []; 
	
	this.add_batch = function(){
		
		var new_batch = new window.Sherif.model.Batch();
		batch_object_array.push(new_batch);
		return new_batch;
		
	}
	
}



window.Sherif.model.Batch = function(){
	
	var xstages_path_array  = [];
	var batch_script_path;
	var command_string; 
	var data_form;
	var harmony_path = 'C:/Program Files (x86)/Toon Boom Animation/Toon Boom Harmony 20 Premium/win64/bin/HarmonyPremium.exe';
	
	function fetch_xstages_paths(){
		
		var selected_tbscene_ids = window.Sherif.view.tbscene_row_list.get_selected_tbscene_id_list(); 
		
		for (var i = 0 ; i <selected_tbscene_ids.length; i++){
			
			var selected_TBS = window.Sherif.control.tbscenes.get_tbscene_object_by_id(selected_tbscene_ids[i]);
			xstages_path_array.push(selected_TBS.get_xstage_path());
			
		}
		
	}
	

	function fetch_bacth_script_path(){
		
		console.log("window.Sherif.view.batch_script_row_list")
		console.log(window.Sherif.view.batch_script_row_list)
		
		var selected_ids = window.Sherif.view.batch_script_row_list.get_selected_bacth_script_id_list(); 
		var batch_script_object = window.Sherif.control.batch_scripts.get_batch_script_object_by_id(selected_ids[0]);
		batch_script_path = batch_script_object.get_file_path();
		
	}	
	
	function format_data_form(){
		
		fetch_xstages_paths()
		
		fetch_bacth_script_path()
		var xstages_path_string = xstages_path_array.join(",");
		data_form = 'batchscript_path='+batch_script_path+'&xstages_paths_str='+xstages_path_string	
		return data_form;
		
	}

	
	this.send_batch_form_for_each_tbscenes = function(){
		
		var selected_tbscene_ids = window.Sherif.view.tbscene_row_list.get_selected_tbscene_id_list(); 
		
		for (var i = 0 ; i <selected_tbscene_ids.length; i++){
			
			var selected_TBS = window.Sherif.control.tbscenes.get_tbscene_object_by_id(selected_tbscene_ids[i]);
			
			
			
			send_batch_form_for_tbscene_object(selected_TBS)
			
		}		
		
	}

	
	function send_batch_form_for_tbscene_object(_tbscene_object){
		
		fetch_bacth_script_path();
		
		var tbscene_id = _tbscene_object.get_tbscene_id();
		var tbscene_name = _tbscene_object.get_tbscene_name();
		var tbscene_data_form = 'batch_script_path='+batch_script_path+'&xstage_path='+_tbscene_object.get_xstage_path()
		var tbscene_row_object = window.Sherif.view.tbscene_row_list.get_row_by_tbscene_id(tbscene_id);
		tbscene_row_object.set_feedback_html("BATCHING ... ");
		
		window.Sherif.control.append_string_to_feedback_html("batch--"+tbscene_name+"_begin .... ");
		
		window.Sherif.control.tbscenes.lock_tbscene_by_id(tbscene_id);		
		
		$.ajax({
			
		   url : 'control/php/run_script_on_xstage.php', 
		   type : 'POST',
		   data : tbscene_data_form,
		   dataType : 'html', 
		   success : function(code_html, statut){ 
			   console.log(code_html);
			   console.log(statut);
			   
				//$('#bacth_status').html(statut);
				
				tbscene_row_object.set_feedback_html(code_html);
				
				window.Sherif.control.tbscenes.unlock_tbscene_by_id(tbscene_id);				
				window.Sherif.control.tbscenes.update_tbscene_script_log_by_id(tbscene_id);
				window.Sherif.control.append_string_to_feedback_html("batch--"+tbscene_name+"_"+statut);
				
			   
		   }
		});			
		
	}
	
	
	
	
	
	this.send_batch_form = function(){
		 
		$.ajax({
		   url : 'control/php/run_script.php', 
		   type : 'POST',
		   data : format_data_form(),
		   dataType : 'html', 
		   success : function(code_html, statut){ 
			   console.log(code_html);
			   console.log(statut);
				$('#bacth_status').html(statut);
				$('#batch_feedback').html(code_html);
			   
		   }
		});			
		
	}
	
	function remove_spaces(_str){
	
		return  _str.replace(/\s/g, '');
		
	}
	
	function format_command_line(){
		

		var final_command_line =""
		
		for(var x = 0 ; x < xstages_path_array.length ; x++){
			
			 var cxs = xstages_path_array[x]; 

			 var xstage_command_line = '"'+harmony_path+'" "'+remove_spaces(cxs)+'" -batch -compile "'+remove_spaces(batch_script_path)+'"'
			 
			 if(x == 0){
				 
				  final_command_line+=xstage_command_line;
				 
			 }else{
				 
				 final_command_line+=" & "+xstage_command_line;
				 
			 }
			 
			 
			
		}

		return final_command_line;
		
	}
	
	this.get_command_string = function(){

		var result_command_line = format_command_line()

		return  result_command_line;
		
		
	}
	
	this.get_data_form = function(){
		
		format_data_form()
		return data_form
		
	}
}
