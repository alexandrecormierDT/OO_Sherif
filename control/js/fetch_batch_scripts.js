console.log('fetch_batch_scripts');

function fetch_batch_scripts(){
	
    var data_form = 'batchscripts_folder=P:/pipeline/alexdev/batch/OO_sherif';
     
    $.ajax({
       url : 'control/php/fetch_batchscripts.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé
	   
			console.log(code_html);

			var return_json = JSON.parse(code_html);

			console.log(return_json);
			
			window.Sherif.control.batch_scripts.parse_batch_script_objects_from_json(return_json);
			window.Sherif.view.batch_script_row_list.refresh_list();

			
       }
    });

	
}

fetch_batch_scripts();

