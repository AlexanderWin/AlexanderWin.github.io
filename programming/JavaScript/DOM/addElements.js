var p = document.createElement("p");
var node = document.createTextNode("new text");
p.appendChild(node);
var div = document.getElementById("demo");
div.appendChild(p);

var h1 = document.createElement("h1");
var node_h1 = document.createTextNode("new headline");
h1.appendChild(node_h1);
var div = document.getElementById("h1");
div.appendChild(h1);