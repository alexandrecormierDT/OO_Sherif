window.Sherif.model.Batch = function(){
	
	var xstages_path_array  = [];
	var batch_script_path;
	var command_string; 
	
	function fetch_xstages_paths(){
		
		var selected_tbscene_ids = window.Sherif.view.tbscene_row_list.get_selected_tbscene_id_list(); 
		
		for (var i = 0 ; i <selected_tbscene_ids.length; i++){
			
			var selected_TBS = window.Sherif.control.tbscenes.get_tbscene_object_by_id(selected_tbscene_ids[i]);
			
			xstages_path_array.push(selected_TBS.get_xstage_path());
			
		}
		
	}
	
	function fetch_bacth_script_path(){
		
		var selected_batch_scripts_ids = window.Sherif.view.bacth_script_row_list.get_selected_bacth_script_id_list(); 
		
		var selected_BS = window.Sherif.control.batch_scripts.get_batch_script_object_by_id(selected_batch_scripts_ids[0]);
		
		batch_script_path = selected_BS.get_file_path;
		
	}	
	
	function format_data_form(){
		
		fetch_xstages_paths()
		
		fetch_bacth_script_path()
		
		var xstages_path_string = xstages_path_array.join(",");
		
		var data_form = 'batchscript_path='+batch_script_path+'&xstages_paths_str='+xstages_path_string	
		
		return data_form;
		
	}
	
	this.send_batch_form = function(){
		 
		$.ajax({
		   url : 'control/php/format_batch_command.php', 
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
	
	this.get_command_string = function(){
		
		$.ajax({
		   url : 'control/php/format_batch_command.php', 
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
	
	this.send_
}
