<br>
BATCH
<div id="root_folder">
<form id="root_folder_form">
	<p>select root folder<br>
	<input class="path_input" type="text" id="input_root_folder_path"/>
	<label for="input_root_folder_path">ROOT FOLDER PATH</label>
	<p><input type="submit" value="FETCH" p><span id="feedback"></span>
</form>
<script src="control/js/hide_fetching_animation.js"></script>
<script src="control/js/send_root_folder_form.js"></script>
</div>
<div id="tbscene_fetch">
	<div id="tbscene_fetching_animation" style="display: none;">fetching tbscenes ...</div>
	<form id="batch_form">
		<div id="scripts_input_list"></div>
		<div id="tbscenes_input_list"></div>
		 <p><input type="submit" value="RUN" p>
	</form>	
</div>

<script src="control/js/send_batch_form.js"></script>
