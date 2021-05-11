console.log("BATCH send_chain_batch_form    javascript");

$("#batch_form").submit(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	//send_batch_form();
	send_chain_batch_form()

});




function send_chain_batch_form(){
	
	var checked_batchscripts = $('.batchscript_input:checkbox:checked').map(function() {
		return this.name;
	}).get();
	
	var checked_tbscenes = $('.tbscene_input:checkbox:checked').map(function() {
		var object = {
			path:this.name,
			name:this.id
		}
		return object;
	}).get();
	

	var selected_batchscripts_paths = checked_batchscripts[0];
	
	for(var x = 0; x < checked_tbscenes.length ; x++){
	
		var current_tbscene =  checked_tbscenes[x];
		
		var data_form = 'batchscript_path='+selected_batchscripts_paths+'&xstages_paths_list_str='+current_tbscene.path
		
		$.ajax({
		   url : 'control/php/run_batch.php', // La ressource ciblée
		   type : 'POST', // Le type de la requête HTTP.
		   data : data_form,
		   dataType : 'html', // On désire recevoir du HTML
		   success : function(code_html, statut){ // code_html contient le HTML renvoyé
			   console.log(code_html);
			   console.log(statut);
			   console.log("NAME   "+current_tbscene.name);
				$('#bacth_status').html(statut);
				$('#batch_feedback').html(code_html);
				
				//status_ep105_pl001_animatic_
				
				$('#feedback_'+current_tbscene.name).html(code_html);
				$('#status_'+current_tbscene.name).html(statut);
		   }
		});			

	}		
	
}



function send_batch_form(){
	
	console.log("send_batch_form");
	var checked_tbscenes = $('.tbscene_input:checkbox:checked').map(function() {
		return this.name;
	}).get();
	
	var checked_batchscripts = $('.batchscript_input:checkbox:checked').map(function() {
		return this.name;
	}).get();
	

	var selected_xstages_paths_list_str = checked_tbscenes.join(",");
	var selected_batchscripts_paths = checked_batchscripts[0];

   // var data_form = $(this).serialize(); // On créer une variable content le formulaire sérialisé
    var data_form = 'batchscript_path='+selected_batchscripts_paths+'&xstages_paths_list_str='+selected_xstages_paths_list_str

    console.log(data_form);
     
    $.ajax({
       url : 'control/php/run_batch.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé
           console.log(code_html);
           console.log(statut);
		    $('#bacth_status').html(statut);
		    $('#batch_feedback').html(code_html);
		   
       }
    });	
	
}