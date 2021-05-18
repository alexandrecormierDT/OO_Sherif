
window.Sherif.control.tbscenes = new window.Sherif.model.TBScenesManager();
window.Sherif.control.batch_scripts = new window.Sherif.model.BatchScriptManager();
window.Sherif.control.batchs = new window.Sherif.model.BatchManager();
	




window.Sherif.control.send_batch_form = function(){
	
	console.log("send_batch_form");
	var current_batch = window.Sherif.control.batchs.add_batch();
	current_batch.send_batch_form_for_each_tbscenes ();

}
	
	
window.Sherif.control.print_command_line = function(){
	
	console.log("print_command_line");
	var current_batch = window.Sherif.control.batchs.add_batch();
	
	console.log(current_batch.get_data_form());
	console.log(current_batch.get_command_string());
	
	
	$("#command_line").html(current_batch.get_command_string());

}
