var p = document.createElement('p');
var node = document.createTextNode('new node');
p.appendChild(node);
var parent = document.getElementById('demo');
var child = document.getElementById("p1");
parent.replaceChild(p,child);