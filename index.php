<?php

$page_name = "home";



global $branch;
$branch ="release";

if (isset($_GET['branch'])) {
	$branch = $_GET['branch'];	
}

if (isset($_GET['page'])) {
	$page_name = $_GET['page'];	
}

global $root_page;
$root_page = "";


include("model/php/Sherif.php");


// rename BatchSript to TBScript ?? 

?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="view/styles/sherif.css">

<?php include("view/html/js_code.html");?>

</head>
<body>
	<?php include("view/php/banner.php");?>

	<?php include("view/php/menu.php");?>
	
	<div id ="page_content">
	
	<?php include("view/php/pages/page_".$page_name.".php");?>
	
	</div>


</body>

</html>
