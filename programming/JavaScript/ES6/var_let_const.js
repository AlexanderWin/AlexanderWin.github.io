function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

function con() {
    const a = 'hello';
    // a = "abc"; Uncaught TypeError: Assignment to constant variable.
    console.log(a);
}
con();


varTest();
letTest();  //works within brackets


//template strings ES5

let name = 'Alex';
let msg = 'Welcome' + name + '!';
console.log(msg);

// ES6

let name_2 = 'Alex';
let msg_2 = `Good Morning ${name_2} !`;
console.log(msg_2);
