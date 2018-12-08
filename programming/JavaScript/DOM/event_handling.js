function show() {
 alert("HE IS ALIVE")
}

var x = document.getElementById('demo');
x.onclick = function(){
	document.body.innerHTML = Date();
}