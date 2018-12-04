function Person(first, last, age, eyes){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyes;	
}
var myFather = new Person("Winduke ", "Vasilii ", 52 , " Brown ");
document.write(myFather.firstName)
document.write(myFather.lastName)
document.write(myFather.age)
document.write(myFather.eyeColor)


