<?php

include("model/php/Sherif.php");

$page_name = "home";
if (isset($_GET['page'])) {
$page_name = $_GET['page'];	
}

global $root_page;
$root_page = "http://localhost/OO_sherif/index.php";

?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="view/styles/sherif.css">
<script src="lib/jquery.js"></script>
<script src="model/js/Sherif.js" type="text/javascript"></script>
<script src="model/js/classes/Sherif_Class_TBScene.js" type="text/javascript"></script>
<script src="model/js/classes/Sherif_Class_BatchScript.js" type="text/javascript"></script>
<script src="control/js/Sherif_Control.js" type="text/javascript"></script>
<script src="view/js/classes/Sherif_Class_TBSceneRowObject.js" type="text/javascript"></script>
<script src="view/js/classes/Sherif_Class_ScriptHistoryObject.js" type="text/javascript"></script>
<script src="view/js/classes/Sherif_Class_BatchScriptRowObject.js" type="text/javascript"></script>
<script src="control/js/send_batch_form.js" type="text/javascript"></script>
</head>
<body>
	<?php include("view/php/banner.php");?>

	<?php include("view/php/menu.php");?>
	
	<div id ="page_content">
	
	<?php include("view/php/pages/page_".$page_name.".php");?>
	
	</div>


</body>

</html>
