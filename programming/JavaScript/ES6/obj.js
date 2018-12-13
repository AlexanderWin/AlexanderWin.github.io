let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height);
console.log(tree.color);

let height = 5;
let width = 100;

let athlete = {
    height,
    width
};
console.log(athlete.height);
console.log(athlete.width);

let name = 'name';
let id = '1234';
let mobile = '08914';

// obj ini

let user = {
    [name]: 'Jack',
    [`user_${id}`]: `${mobile}`
};
console.log(user.name);
console.log(user.user_1234);

// object_assign

let person = {
    name: 'Alex',
    age: 29,
    sex: 'male'
};
let student = {
    name: 'bob',
    age: 19,
    xp: '2'
};
let newStudent = Object.assign({}, person, student);
console.log(newStudent.name);
console.log(newStudent.age);
console.log(newStudent.sex);
console.log(newStudent.xp);

