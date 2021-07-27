// CLASS OO_ASSET

//////MessageLog.trace("CLASS OO_ASSET")

window.Sherif.model.DeadLineJobSubmiter = function(_S){
	
	var S = _S;

    this.submit_harmony_job = function(){

        var job = new window.Sherif.model.DeadLineJob(); 

        job.set_xstage_path(S.get_xstage_path());
        job.set_plugin("harmony")
        job.create_job_files();

        var command_line = job.format_submit_command_line();
		var deadline_process = new Process2(command_line); 
		deadline_process.launch();
    }


    this.submit_command_line_job = function(_cmd_line_string,_job_name){


        var job = new window.Sherif.model.DeadLineJob(); 

        job.set_command_line_string(_cmd_line_string);
        job.set_plugin("command_line")
        job.set_job_name(_job_name)
        job.create_job_files();

        var command_line = job.format_submit_command_line();

		var deadline_process = new Process2(command_line); 
		var launch = deadline_process.launch();

    }



}
