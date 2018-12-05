function Person(name, age){
	this.name = name;
	this.age = age;
	this.changeName = function(name){this.name = name;}	
}
var p = new Person("Alex", 29);
p.changeName("Alexande ");
document.write(p.name, p.age)