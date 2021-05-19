console.log("BATCH send_chain_batch_form    javascript");

$("#print_command_line").click(function(e){ // On sélectionne le formulaire par son identifiant
    e.preventDefault(); // Le navigateur ne peut pas envoyer le formulaire
	window.Sherif.control.print_command_line();
	window.Sherif.control.copy_command_line_to_clipboard();

});

