
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
			
				var TBS_object = new window.Sherif.model.TBScene();
				TBS_object.parse_json_map(return_json[t]); 
				window.Sherif.control.TBScenes.add_tbscene_object(TBS_object);


			}	
			
			window.Sherif.view.tbscene_row_list.refresh_list()
			
			
			

       }
    });

});





				
