console.log("send_batch_form javascript");

$("#batch_form").submit(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	send_batch_form();

});




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