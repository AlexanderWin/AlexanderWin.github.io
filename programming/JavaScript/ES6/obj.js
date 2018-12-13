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
ыва