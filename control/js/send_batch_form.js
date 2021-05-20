console.log("BATCH send_chain_batch_form    javascript");

$("#run_batch_script").click(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	//send_batch_form();
	//send_chain_batch_form()
	
	console.log("run_batch_script");
	window.Sherif.control.send_batch_form();


});
