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
