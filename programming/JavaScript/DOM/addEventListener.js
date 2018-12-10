var btn = document.getElementById('demo_2');
btn.addEventListener("click", myFunction);
function myFunction() {
	alert(Math.random());
	btn.removeEventListener('click', myFunction);
}


