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



