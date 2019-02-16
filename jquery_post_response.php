<?php
$arr[0]="HTML";
$arr[1]="JavaScript";
$arr[2]="CSS";
$search=$_POST["search"];
$result=-1;
foreach ($arr as $k => $v) {
	if($search==$v){
		$result=$k;
		break;
	}
}
echo $result;
?>