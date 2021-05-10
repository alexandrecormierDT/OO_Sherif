
$("#batch_form").submit(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	
	var checkedScenes = $('.scene_row:checkbox:checked').map(function() {
		return this.name;
	}).get();
	
	var selected_script = $("#input_script_name").val();
	
	var selected_scenes_paths = checkedScenes .join(",");
	
	console.log(selected_scenes_paths);

   // var data_form = $(this).serialize(); // On créer une variable content le formulaire sérialisé
    var data_form = 'script_name='+selected_script+'&scene_paths='+selected_scenes_paths
	
	
     
    $.ajax({
		
       url : 'control/php/runscript.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé
           console.log(data_form);
           console.log(code_html);
           console.log(statut);
		    $('#status').html(statut);
		    $('#feedback').html(code_html);
		   
       }
    });

});