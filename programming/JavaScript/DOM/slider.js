	var images = [
	"https://vignette.wikia.nocookie.net/simpsons/images/e/e2/Chalmers.jpg/revision/latest?cb=20100408202102",
	"https://vignette.wikia.nocookie.net/simpsons/images/6/69/The_simpsons_ralph_wiggum-1-.png/revision/latest?cb=20141124210636",
	"https://vignette.wikia.nocookie.net/simpsons-fanfiction/images/d/dc/TiitlitaLisa.jpg/revision/latest?cb=20150104100446"
	];
	var num = 0;
	var t = setInterval(move, 1000);
	function move() {
		var slider = document.getElementById('slider');
		num++
		if (num >= images.length) {
			num = 0;
		}
		slider.src = images[num];
	}
