window.Sherif.model.BatchManager = function(){
	
	var batch_object_array = []; 
	
	this.add_batch = function(){
		
		var new_batch = new window.Sherif.model.Batch();
		batch_object_array.push(new_batch);
		return new_batch;
		
	}
	
}

