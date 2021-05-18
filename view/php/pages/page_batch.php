<div id="leftpane">
	<div id="root_folder">
	<form id="root_folder_form">
		<p>select root folder : <br>
		<input class="path_input" type="text" id="input_root_folder_path"/>
		<p><input type="submit" value="FETCH TBSCENES" p><span id="feedback"></span>
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
<div id="middlepane">		
	<div id="batch_scripts_input_list"></div>
<input id="run_batch_script" type="submit" value="RUN BACTH SCRIPT">
<input id="print_command_line" type="submit" value="PRINT COMMAND LINE">
</div>
<div id="rightpane">
<div id = "command_line" ></div>
<div id="batch_feedback"></div>
</div>
<script src="control/js/fetch_batch_scripts.js"></script>
<script src="control/js/send_batch_form.js"></script>
<script src="control/js/print_command_line.js"></script>

