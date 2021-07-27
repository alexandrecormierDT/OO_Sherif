
window.onload = function(){
    window.Sherif.control.fetch_batch_scripts();
}

$("#print_command_line").click(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	window.Sherif.control.print_command_line();
	window.Sherif.control.copy_command_line_to_clipboard();
});


$("#run_batch_script").click(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	//send_batch_form();
	//send_chain_batch_form()
	console.log("run_batch_script");
	window.Sherif.control.send_batch_form();
});


