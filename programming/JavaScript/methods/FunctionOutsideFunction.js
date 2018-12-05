function Person(name, age) {
	this.name = name;
	this.age = age;
	this.YearOfBirth = BornYear;
}
function BornYear(){return 2018 - this.age;}

var a = new Person("Alex", 29)
	document.write(a.name, a.YearOfBirth());

