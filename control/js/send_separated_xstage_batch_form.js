console.log("send_batch_separated_xstage_form     javascript");

$("#batch_form").submit(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	
	var log = send_separated_xstages_batch_form();
	
	if(log != ""){
		
		console.log(log);
		
	}
	
	

});





function send_single_tbscene_batch_form(_xstage_object,_batch_script_path){

   // var data_form = $(this).serialize(); // On créer une variable content le formulaire sérialisé
    var data_form = 'batchscript_path='+_batch_script_path+'&xstage_path='+_xstage_object.path;
	
	var status_div_id_string = "#satus_"+_xstage_object.name;
	var feedback_div_id_string = "#feedback_"+_xstage_object.name;
	
    $.ajax({
       url : 'control/php/run_single_xstage_batch.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé
			console.log(code_html);
			console.log(statut);
		    $(status_div_id_string).html(statut);
		    $(feedback_div_id_string).html(code_html);
			$('#bacth_status').html(statut);
		    $('#batch_feedback').html(code_html);
			
		   
       }
    });		
	
}


function send_separated_xstages_batch_form(){
	

	var checked_xstages_objects = $('.tbscene_input:checkbox:checked').map(function() {
		var xstage_object = {
			path:this.name,
			name:this.id
		}
		return xstage_object;
	}).get();
	
	
	
	var checked_batchscripts_paths = $('.batchscript_input:checkbox:checked').map(function() {
		var batch_script_object = {
			path:this.name,
			name:this.id
		}
		return batch_script_object;
	}).get();
	
	var selected_batchscript_path = checked_batchscripts_paths[0];
	
	var errors = ""; 
	
	console.log(checked_xstages_objects.length);
	
	if(checked_xstages_objects.length > 0){
		
		
		
		if(selected_batchscript_path != null){
			
			for(var x = 0 ; x < checked_xstages_objects.length;x++){
				
				var current_xstage_object = checked_xstages_objects[x]; 
				
				send_single_tbscene_batch_form(current_xstage_object,selected_batchscript_path);
				
			}			
		}else{

			errors = "please select a script";

		}
		
	}else{
		
		errors = "please select at least one tbscene";
		
	}
	
	return errors; 
	
	

	
	
}
	
	


     

