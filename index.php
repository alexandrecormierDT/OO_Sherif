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
</head>
<body>
	<?php include("view/php/banner.php");?>

	<?php include("view/php/menu.php");?>
	
	<div id ="page_content">
	
	<?php include("view/php/pages/page_".$page_name.".php");?>
	
	</div>


</body>

</html>
