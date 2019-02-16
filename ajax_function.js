// params{
// type:GET/POST,
// data:提交的数据,
// success:成功回调函数，
// error:失败回调函数，
// }
function ajax(params){
	params=params||{};
	params.data=params.data||{};
	params.type=params.type.toUpperCase()||"GET";
	var xhr=null;
	if(window.XMLHttpRequest)
		xhr=new XMLHttpRequest();
	else
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status>=200&&xhr.status<300){
				var result=JSON.parse(xhr.responseText)
				params.success(result);
			}
			else{
				params.error(xhr.status);
			}
		}
	}
	var data=dataSerialize(params.data);
	if(params.type=="GET"){
		xhr.open(params.type,params.url+"?"+data,true);
		xhr.send(null);
	}
	else{
		xhr.open(params.type,params.url,true);
		xhr.send(data);
	}
}
function dataSerialize(data){
	var resultArray=[];
	for(var key in data){
		resultArray.push(encodeURIComponent(key)+"="+encodeURIComponent(data[key]));
	}
	var result=resultArray.join("&");
	return result;
}