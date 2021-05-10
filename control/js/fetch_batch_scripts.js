console.log('fetch_batch_scripts');

function fetch_batch_scripts(){
	
    var data_form = 'batchscripts_folder=P:/pipeline/alexdev/batch/OO_sherif';
     
    $.ajax({
       url : 'control/php/fetch_batchscripts.php', // La ressource ciblée
       type : 'POST', // Le type de la requête HTTP.
       data : data_form,
       dataType : 'html', // On désire recevoir du HTML
       success : function(code_html, statut){ // code_html contient le HTML renvoyé
           console.log(data_form);
           console.log(code_html);
           console.log(statut);
		    $('#batchscripts_input_list').html(code_html);
       }
    });

	
}

fetch_batch_scripts();

