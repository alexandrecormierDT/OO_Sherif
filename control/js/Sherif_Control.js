
window.Sherif.control.tbscenes = new window.Sherif.model.TBScenesManager();
window.Sherif.control.batch_scripts = new window.Sherif.model.BatchScriptManager();
	

window.Sherif.control.select_TBScene = function(_tbscene_id){
	
	var selected_TBS = window.Sherif.control.tbscenes.get_tbscene_object_by_id(_tbscene_id);
	
	console.log(selected_TBS.get_xstage_path());

}

window.Sherif.control.unselect_TBScene = function(_tbscene_id){
	
	var selected_TBS = window.Sherif.control.tbscenes.get_tbscene_object_by_id(_tbscene_id);
	
	console.log(selected_TBS.get_xstage_path());

}

window.Sherif.control.is_selected_TBScene = function(_tbscene_id){
	
	var selected_TBS = window.Sherif.control.tbscenes.get_tbscene_object_by_id(_tbscene_id);
	
	console.log(selected_TBS.get_xstage_path());

}


