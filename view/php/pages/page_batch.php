<div class = "pane" id="leftpane">
	<div class="panel_title">TBSCENES</div>
	<div id="root_folder">
	<form id="root_folder_form">
		<input type="submit" value="FETCH TBSCENES" p><span id="feedback"></span>
		select root folder : <br>
		<input class="path_input" type="text" id="input_root_folder_path"/>
	</form>
	<script src="control/js/send_root_folder_form.js"></script>
	</div>
	<div id="tbscene_fetch">
		<div id="tbscene_fetching_animation" style="display: none;">fetching tbscenes ...</div>
		<form id="batch_form">
			<div id="tbscene_select_menu">
				<button id="tbscene_select_all">SELECT ALL</button>
				<button id="tbscene_unselect_all">UNSELECT ALL</button>
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
	<div id = "command_line" ></div>
	<div id="batch_feedback"></div>
</div>
<script src="control/js/fetch_batch_scripts.js"></script>
<script src="control/js/send_batch_form.js"></script>

