<?php
	$list[]="aaa";
	$list[]="aab";
	$list[]="bba";
	$list[]="bbb";
	$list[]="bbc";
	$name=$_GET["search"];
	$response="";
	if(strlen($name)>0)
	foreach($list as $v){
		if(strtolower($name)==strtolower(substr($v,0,strlen($name)))){
			if($response=="")
				$response="\"".$v."\"";
			else
				$response=$response.","."\"".$v."\"";
		}
	}
	$resultStr="[".$response."]";
	echo $resultStr;
?>