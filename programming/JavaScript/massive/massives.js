// first way of create

var people = new Array("Alex", "Evgen", "Alexander");
document.write(people[1], people[0]);

// second way of create	

var animals = new Array(3);
animals[0] = "Monkey";
animals[1] = "Lion";
animals[2] = "Bear";
document.write(animals[0]);

//length property

var animals = new Array("Black", "Blue", "Red");
document.write(animals.length);

//combining arrays

var cars = new Array("BMW", "NISSAN");
var colors = new Array("White", "Black");
var choice = cars.concat(colors);
document.write(choice[1]);

//associative arrays

var planets = [];
planets["size"] = "big";
planets["number"] = "4 from SUN";
document.write(planets["number"]);

//object math

document.write(Math.PI);

var number = Math.sqrt(4);
document.write(number);

// found the square root

var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);

// setInterval

function myAlert() {
	document.write("Hi");
}
setInterval(myAlert, 3000);

// obj Date

var d = new Date();
var hours = d.getHours();
	document.write(hours);