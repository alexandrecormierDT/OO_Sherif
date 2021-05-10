
console.log("select_only_one_batchscript");


$(".batchscript_row").on('click', function(event){
	
	var selected_batchscript = "";
	
	console.log("batchscript_row");
	
	//console.log(this);
	
	/*var checked_batchscript = $('.batchscript_input:checkbox:checked').map(function() {
		this.prop( "checked", false );
		
	}).get();*/
 
});




$(".batchscript_row").on('click', function(event){
	
	var selected_batchscript = "";
	
	console.log("batchscript_row");
	
	//console.log(this);
	
	var checked_batchscript = $('.batchscript_input:checkbox:checked').map(function() {
		this.prop( "checked", false );
	});
 
});



/*$( "div" ).click(function() {
  console.log("hello");
  console.log($(this));
});*/