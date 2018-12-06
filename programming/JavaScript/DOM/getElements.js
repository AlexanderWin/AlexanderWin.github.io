//getElementById

var elem = document.getElementById("demo");
elem.innerHTML = "HelloWorld!";

//getElementByClassName (<div class="demo"></div> in HTML)

var arr_1 = document.getElementsByClassName("demo");
arr_1[0].innerHTML = "Santa's COME";
arr_1[1].innerHTML = "Santa's BACK";

//getElementByTagName (Tag p in HTML)

var arr_2 = document.getElementsByTagName("p");
for (var x = 0; arr_2.length; x++) {arr_2[x].innerHTML = "Its a TRAP";}

