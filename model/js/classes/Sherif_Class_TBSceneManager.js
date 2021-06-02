
		
window.Sherif.model.TBScenesManager = function(){
	
	var tbscenes_objects_array = [];
	
	this.init = function(){
		
		tbscenes_objects_array = [];
	}
	
	this.add_tbscene_object = function(_tbscene_object){
		
		tbscene_id = _tbscene_object.get_tbscene_id();
		
		tbscenes_objects_array[tbscene_id]=_tbscene_object;
		
	}
	
	this.parse_tbscene_objects_from_json = function(_json_object){
		
		tbscenes_objects_array = [];
		
		for(var t = 0 ; t < _json_object.length ; t++){
	
			var TBS_object = new window.Sherif.model.TBScene();
			
			TBS_object.parse_json_map(_json_object[t]); 
			
			console.log("NEW TBSCENE");
			console.log(TBS_object.get_tbscene_id());
			console.log(TBS_object);
			
			this.add_tbscene_object(TBS_object);


		}	
		
	}
	
	this.get_tbscene_object_by_id = function(_tbscene_id){
		
		return tbscenes_objects_array[_tbscene_id];
		
	}
	
	this.get_tbscenes_objects_array = function(){
		
		return tbscenes_objects_array;
		
	}

	this.get_tbscenes_objects_count = function(){
		
		return Object.keys(tbscenes_objects_array).length;
		
	}
	//should be done in scripthistory !!!!
	
	this.update_tbscene_script_log_by_id= function(_tbscene_id){
		
		var current_tbscene = this.get_tbscene_object_by_id(_tbscene_id);
		var current_log_folder_path = current_tbscene.get_log_folder_path();
		var data_form = 'log_folder_path='+current_log_folder_path;
		var script_history_object = window.Sherif.view.script_history_list.get_script_history_by_tbscene_id(_tbscene_id);
		 
		$.ajax({
		   url : 'control/php/fetch_script_logs.php', // La ressource ciblée
		   type : 'POST', // Le type de la requête HTTP.
		   data : data_form,
		   dataType : 'html', // On désire recevoir du HTML
		   success : function(code_html, statut){ // code_html contient le HTML renvoyé

			   console.log(code_html);

				var return_json = JSON.parse(code_html);
				console.log("update_tbscene_script_log");
				console.log(return_json);
				console.log(_tbscene_id);
				
				// updatin the tbscene feedback

				
				// updating the script history
				
				var new_log_folder_object = new window.Sherif.model.LogFolder()
				new_log_folder_object.parse_json_map(return_json);
				
				console.log(new_log_folder_object);
				
				script_history_object.update_data(new_log_folder_object);
				
				script_history_object.update_html();

		

		   }
		});	

	}
	
	this.lock_tbscene_by_id= function(_tbscene_id){
		
		var current_tbscene = this.get_tbscene_object_by_id(_tbscene_id);
		
		var tbscene_folder_path = current_tbscene.get_folder_path()
		
		var data_form = 'tbscene_folder_path='+tbscene_folder_path;
		
		$.ajax({
		   url : 'control/php/lock_tbscene.php', // La ressource ciblée
		   type : 'POST', // Le type de la requête HTTP.
		   data : data_form,
		   dataType : 'html', // On désire recevoir du HTML
		   success : function(code_html, statut){ // code_html contient le HTML renvoyé

			   console.log(code_html);

		   }
		});		
		
	}
	
	this.unlock_tbscene_by_id= function(_tbscene_id){
		
		var current_tbscene = this.get_tbscene_object_by_id(_tbscene_id);
		
		var tbscene_folder_path = current_tbscene.get_folder_path()
		
		var data_form = 'tbscene_folder_path='+tbscene_folder_path;
		
		$.ajax({
		   url : 'control/php/unlock_tbscene.php', // La ressource ciblée
		   type : 'POST', // Le type de la requête HTTP.
		   data : data_form,
		   dataType : 'html', // On désire recevoir du HTML
		   success : function(code_html, statut){ // code_html contient le HTML renvoyé

			   console.log(code_html);

		   }
		});			
		
		
	}	

	
}
	