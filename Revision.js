"use strict";

/*The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.*/

/*Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error. */

// USE STRICT SHOULD ONLY BE MENTIONED IN THE STARTING OF THE SCRIPT ONLY THEN IT IS RECOGNIZED.

// batman = 8 ;
// console.log(batman);


var name1 = 'mahesh';
var name2 = 'ramesh';

console.log(name1,name2);

function Tester(){
    name1='batman'
    name2='robin'

    return name1+name2
}

console.log(Tester());


// var keyword can be used to declare variables and those variables can be reassigned values.

let name3='leonard';
let name4='sheldon';

console.log(name3,name4);

function Tester2(){
  name3='penny';
  name4='amy';

  return name3+name4
}

console.log(Tester2());

// let also declares variables and those variables too can be reassigned values. Then what is the actual difference between let and var ?

if (true) {
    var x = 5;
    let y = 10;
}
console.log(x); // 5
//console.log(y); // ReferenceError: y is not defined

// let has a block {} scope which means, if declared within {} then it is not accessible outside.

// Variables declared with var are hoisted to the top of their scope and initialized with undefined. This means you can reference them before the line where they are declared, though the value will be undefined until it’s initialized.

// Variables declared with let are also hoisted, but they are not initialized. This leads to a "Temporal Dead Zone" where you can't access the variable before its declaration.

// console.log(table);

// console.log(table1);

// var table='charles';

// let table1='chuck';

// let variables cannot be hoisted.

// console.log(name5);

const name5='john';

const name6='peter';

console.log(name5,name6);

// name5='vivek';

// console.log(name5); // gives assignment to constant variable error 

// const declared variables cannot be hoisted.


// let us now see the usage of const variable for arrays and objects.

// const array1 = ['cherry','banana','apple'];

// array1=['orange','banana','apple'];

// console.log(array1);

// this gives assignment to constant variable error

// but in an array you can reassign individual values using indexing

const arr1=[1,2,3,4,5];

arr1[3]=24;

console.log(arr1);


const obj1 ={
    name:'vivek',
    age:18,
    time:2002
}

// obj1={
//     name:'dave',
//     age:18,
//     time:2002
// }

// console.log(obj1);

// This also gives assignment to constant variable error

// but you can modify individual values like array


obj1.name='dave';

console.log(obj1);