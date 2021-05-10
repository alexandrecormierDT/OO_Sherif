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
		<div id="tbscenes_input_list"></div>
		<div id="batchscripts_input_list"></div>
		 <p><input type="submit" value="RUN BACTH SCRIPT" p>
	</form>	
	<div id="batch_status"></div>
	<div id="batch_feedback"></div>
</div>
<script src="control/js/fetch_batch_scripts.js"></script>
<script src="control/js/send_batch_form.js"></script>

