// This is how you declare a variable automatically without using a keyword
vivek=4;
console.log(vivek);

//now,lets use var to declare variables
var x=5;
var y=8;
var z=x+y;
console.log(z);

// now,lets use let to declare variables
let a=20;
let b=21;
let c=a+b;
console.log(c);

// usage of const

const myname='batman';
//let myname='robin';
console.log(myname)

/*1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.
*/

let carname;
console.log(typeof carname);

// if you dont define your variable value, then it be undefined.

// you cannot redeclare a variable if it is already declared using let or var, but you can redeclare the variable if it is declared using var.

var name1="hello";
var name1="notello";

console.log(name1);

car_name='maruti';
var car_name;

//car_name2='honda';
//let car_name2;


//console.log({car_name,car_name2});
// this above example shows that var defined variables can be hoisted at the top but when it comes to let defined variables
// hoisting is not possible
// Hoisting basically means usage of a variable before its initialisation or declaration.

const pi=3.142587;
pi=2.14;
console.log(pi);

// const declared variable cannot be reassigned a value whereas it is possible with let and assigment should take place with declaration only
// first declaring and then assigning will result in error