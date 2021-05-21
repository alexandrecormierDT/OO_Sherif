<div class = "pane" id="leftpane">
	<div class="panel_title">TBSCENES</div>
	<div id="root_folder">
	<form id="root_folder_form">
		<input type="submit" value="FETCH TBSCENES"><span id="feedback"></span>
		select root folder : <br>
		<input class="path_input" type="text" id="input_root_folder_path"/>
	</form>
	<script src="control/js/send_root_folder_form.js"></script>
	</div>
	<div id="tbscene_fetch">
		<div id="tbscene_fetching_animation" style="display: none;">fetching tbscenes ...</div>
		<form id="batch_form">
			<div id="tbscene_select_menu">

				<span class = "sherif_small_button" id="tbscene_select_all" >SELECT ALL</span>
				<span  class = "sherif_small_button" id="tbscene_unselect_all" >UNSELECT ALL</span>
				
			</div>
			<div id="tbscenes_input_list"></div>

			

		</form>	
		<div id="batch_status"></div>
	</div>
</div>
<div class = "pane" id="middlepane">	
	<div class="panel_title">BATCH SCRIPTS</div>	
	<input id="run_batch_script" type="submit" value="RUN BACTH SCRIPT">
	<div id="batch_scripts_input_list"></div>
</div>
<div class = "pane" id="rightpane">
	<div class="panel_title">FEEDBACK</div>
	<input id="print_command_line" type="submit" value="COPY COMMAND LINE">
	<div id = "command_line" ></div>
	<div id="batch_feedback"></div>
</div>
<script src="control/js/fetch_batch_scripts.js"></script>
<script src="control/js/send_batch_form.js"></script>
<script src="control/js/print_command_line.js"></script>
<script src="view/js/tbscene_selection.js"></script>
