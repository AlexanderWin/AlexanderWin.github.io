const add = (x, y) => {
    let sum = x + y;
    console.log(sum);
}
add(20, 10);
add(40, 50);

const breakfest = x => "Welcome " + x;
alert(breakfest("Alex"));

//forEach 

const arr = [2, 3, 4, 7];

arr.forEach(v => {
    console.log(v * 2);
});

//parameters

const test = (a, b = 3, c = 5) => {
  
    return a + b + c;    
}
console.log(test(12));

