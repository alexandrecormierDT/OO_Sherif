<?php

	global $LEVEL;
	
	if(isset($LEVEL) == false){
		$LEVEL = "";
	}
	
	include($LEVEL."model/php/classes/Sherif_Class_SherifObject.php");
	include($LEVEL."model/php/classes/Sherif_Class_RemoteFolder.php");
	include($LEVEL."model/php/classes/Sherif_Class_RemoteFile.php");
	include($LEVEL."model/php/classes/Sherif_Class_XStage.php");
	include($LEVEL."model/php/classes/Sherif_Class_ScriptLog.php");
	include($LEVEL."model/php/classes/Sherif_Class_LogFolder.php");
	include($LEVEL."model/php/classes/Sherif_Class_Sherif.php");
	include($LEVEL."model/php/classes/Sherif_Class_Page.php");
	include($LEVEL."model/php/classes/Sherif_Class_TBsceneManager.php");
	include($LEVEL."model/php/classes/Sherif_Class_TBscene.php");
	include($LEVEL."model/php/classes/Sherif_Class_Batch.php");
	include($LEVEL."model/php/classes/Sherif_Class_BatchScript.php");
	include($LEVEL."model/php/classes/Sherif_Class_BatchManager.php");
	
	
?>
