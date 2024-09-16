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


// When we talk about operators in javascript then its the same as any other language.

/* 1. arithmetic operators
   2. comparison operators
   3.logical operators
   4.assignment operators
   5.ternary operators
   */

   // let us understand a bit more about ternary operator

   // it is just a shorthand way of writing a if else statement and is called ternary because of 3 operands.

   // SYNTAX ==> condition ? expressionIfTrue : expressionIfFalse;

let age = 20;
let isAdult;

if (age >= 18) {
  isAdult = "Yes";
} else {
  isAdult = "No";
}
console.log(isAdult);  // Output: "Yes"

// now using ternary operator


let age1=20;

let isAdult1= age1>=18 ? "yes" : "no" ;

console.log(isAdult1);

let newName = 'vivek';

console.log(newName[0]=='b' ? "contains B" : "Doesn't contain B");


// Let us now see functions in javascript


function Demo(){
    console.log("Hello World!")
}

Demo();


function Adder(num1,num2){
 return num1+num2;
}

console.log(Adder(25,26));

let var1 = [1,2,3,4,5]

console.log(var1[2]==4 ? "True Boss" : "False Boss");


// Let us now talk about objects in javascripts


// objects can be defined as literals and constructors.

// 1. objects as literals

const object1 = {
  name:"vivek singh",
  age:20,
  standard:12,
  country:"India"
}

console.log(object1);

// 2. object as constructors

const object2 = new Object();

object2.name2="vivek";
object2.age2=21;

console.log(object2);


//  agar object mein aap ek key-value pair, mein function() likhdo usse hi object method bolte hai.

// There are 2 ways to define a object method, first is traditional method of using function expression, given below:-

const object3 = {
  fname:'batman',
  lname:'kumar',
  fullname:function(){
    console.log(this.fname + this.lname);
  }
}

object3.fullname();


// second method is a shorthand way of writing object method provided in ES6 JS

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName(){
   console.log(this.firstName + this.lastName);
  }
};

person.fullName() ; // Output: "John Doe"

/*The this keyword inside an object method refers to the object itself.

  It allows access to the object’s properties within its methods. */


  // you can also add method to an existing object in the following manner :- 

  const person2 = {
    name:"henry"
  }

  person2.nameteller = function(){
    console.log(this.name + "hello sir !");
  }

  person2.nameteller();


  // Let us now talk about predefined object methods

  // 1. Object.keys() method : Returns an array of an object’s keys.

   console.log(Object.keys(object2));


  // 2. Object.values() method : Returns an array of an object’s values.

    console.log(Object.values(object2));
    
  // 3. Object.entries(): Returns an array of key-value pairs.
  
    console.log(Object.values(object3));

  // 4. Object.assign(target, source) : Copies properties from a source object to a target object

     const target = {}

     const source = {
      src1:"john",
      crc1:"hopkins"
     }

    Object.assign(target,source);

    console.log(target);


 // 5. Object.groupBy() is a new method introduced in ECMAScript 2024 (ES2024), and it's used to group elements of an array based on a given criterion or key. 
 //    The result is an object where each key represents a group, and the corresponding value is an array of items belonging to that group.

//  const words = ["apple", "banana", "apricot", "blueberry", "cherry"];

//  const grouped = Object.groupBy(words, word => word[0]);
 
//  console.log(grouped);
 // Output:
 // {
 //   a: ["apple", "apricot"],
 //   b: ["banana", "blueberry"],
 //   c: ["cherry"]
 // }

 //ES2024 features are relatively new.

// Older browsers may need an alternative code (Polyfill)


// LEt us now talk about arrays in javascript

// js arrays are dynamic.

const Array1 = [1,2,3,4,5,6,7]

console.log(Array1.length);

// length property tells the size of an array.


// Let us see array methods now


// 1. push(): Adds one or more elements to the end of the array.

Array1.push(12);

console.log(Array1);

// 2. pop(): Removes the last element from the array.

Array1.pop()

console.log(Array1);


// 3. shift(): Removes the first element from the array.

Array1.shift();

console.log(Array1);

// 4.unshift():  Adds one or more elements to the beginning of the array.

Array1.unshift(1,11);

console.log(Array1);

// 5. concat(): Merges two or more arrays.

const Array2 = ['hello','namaste','hola']

const TotalArray = Array1.concat(Array2);

console.log(TotalArray)

// 6. join(): Joins all elements of an array into a string.


 const fruits = ['guava','banana','apple']

 console.log(fruits.join(" "));

// 7. reverse(): Reverses the order of the elements in the array.

// 8. sort(): Sorts the elements of the array (default is alphabetical order).


console.log(fruits.sort())


// IMP. METHODS

// 8. map(): Creates a new array by applying a function to each element.

 const numbers = [2,4,6,8,10,12];

 const Mappednumbers = numbers.map(n=>n/2);

 console.log(Mappednumbers)

 // let us see some more examples of map 

 const names = ['john','tedh','red','andy','chris']

 const Mappednames = names.map(name => name[1]=='e');

 console.log(Mappednames)

 // 9. filter(): To create a new array with all elements that pass the test implemented by the provided function.

 const numbers1 = [1, 2, 3, 4, 5];
 const evens = numbers1.filter(num => num % 2 === 0);

 console.log(evens);  // Output: [2, 4]


 console.log(names.filter( name => name.includes('n')));


 // 10. reduce(): To execute a reducer function (that you provide) on each element of the array, resulting in a single output value.

 const numbers2 = [1, 2, 3, 4];
 const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

 console.log(sum);  // Output: 10

 const numbers3 = [2,4,6,8,10,12];

 const product = numbers3.reduce((acc,ini)=>acc*ini,1);

 console.log(product)