"use strict";

// This is how you declare a variable automatically without using a keyword
/*vivek=4;
console.log(vivek);*/

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
//pi=2.14;
console.log(pi);

// const declared variable cannot be reassigned a value whereas it is possible with let and assigment should take place with declaration only
// first declaring and then assigning will result in error

const carArr = ['toyota','suzuki','honda'];
//carArr=['fortuner','thar','swift'];
console.log(carArr[0]);

// thus we can clearly see that we use const to define arrays and objects when we dont want any kind of reassignment of the values stores,
// though we can add new values, or we can change the values individually.... for example
carArr[1]='fortuner';
carArr.push('thar');
console.log(carArr);

// now lets see the same thing for an object

const carObj={
    color:'red',
    model:'2010',
    name:'scorpio'
}
console.log(carObj);

carObj.color='yellow';

console.log(carObj);

/*carObj={
    color:'blue',
    model:'2015',
    name:'swift'
}*/

// thus we can clearly see that even in the case of objects, reassignment is not possible only changing individual properties in possible.

/***********************************************************JAVASCRIPT OPERATORS **********************************************/

let num1 = 2;
let num2 = 3;

let add = num1+num2;
let prod=num1*num2;
let subtract=num1-num2;
let divide=num1/num2;
let expo=num1**num2;
let remainder=num1%num2;
let increment=num1++;
let decrement=num2--;

console.log({add,prod,subtract,divide,expo,remainder,increment,decrement});

/********************************************Functions*****************************************************/

function productmaker(val1,val2){
    return val1*val2 ;
}

let val3=productmaker(55,44);
let val4=productmaker;
console.log({val3,val4});

 let msg1='bhai please';
 let msg2='requeshet';
function stringmaker(msg1,msg2){
    return `your string is ${msg1+msg2}`;
}
let msg3=stringmaker(msg1,msg2);
console.log(msg3);

/**************************************OBJECTS****************************************/
// this is object defined as a literal
const obj1={
    name:'batman',
    height:'6ft',
    ethnicity:'white'
}

console.log(obj1);

// this is object defined as a constructor
 const obj2 = new Object();
    obj2.name2='superman',
    obj2.location='krypton',
    obj2.ethnicity='white'
 console.log(obj2);

 const obj3= new Object();
 obj3.name3='selmon';
 obj3.car='hummer';
 obj3.house='panvel';

 console.log(obj3);

 //lets talk about object methods

 const obj4={
    firstName:'batman',
    lastName:'bhati',
    id:44003,
    fullName:function(){
         return this.firstName+" "+this.lastName;
    }
 }

 console.log(obj4.fullName());


 // lets see some other examples

 const obj5={
    first:'john',
    mid:'doe',
    last:'deere',
    id:3558,
    height:1.70,
    weight:70,
    full:function(){
        return this.first+" "+this.mid+" "+this.last;
    },
    bmi:function(){
        return ((this.weight)/(this.height**2));
    }
 }

 console.log(obj5);
 console.log(obj5.full());
 console.log(obj5.bmi());

 /*In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.*/

/*******************************************STRINGS*********************************/
let guyname="bruce";
let text1=`he is ${guyname} wong`;
console.log(text1);

console.log(text1.length)

console.log(text1[4]);

console.log(text1.slice(7,10));

console.log(text1.slice(7));

console.log(text1.slice(-5));

console.log(text1.substring(4,8));

console.log(text1.toLowerCase());

console.log(text1.toUpperCase());

// lets talk about concat method, used to concatenation of 2 strings

let text2='bhailog';
let text3='kaise ho';

let text4=text2.concat(" ",text3);

console.log(text4);

console.log(text2+" "+text3);

// so concat function can be used instead of add(+) operator for attaching/concatenating 2 strings

console.log(text1.concat(" ",text2," ",text3));

// important thing to note that concat method can concatenate more than 2 strings also

console.log(text1.replace('bruce','captain'))

// replace() methods helps to replace particular text in a string

console.log(text2.split(","))
console.log(text2.split("|"));

//lets see some string search methods

let text6="hello everyone i m learing everyone javascript";
console.log(text6.indexOf('everyone'));
//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
console.log(text6.lastIndexOf('everyone'));
//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let text7 = "The rain in SPAIN stays mainly in the plain";
console.log(text7.match("ain"));
//match() tells if a string input is present in given string and gives its starting index

console.log(text7.includes("rain"));

/***********************************************STRING TEMPLATES************************************/

// basically strings enclosed in backticks(` `)

let text8=`hello brother`;

// this can be used for string interpolation, for example

let textName='batman';

console.log(`i wanted to tell you that ${text8 } ${textName}`);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total);

//To create a BigInt, append n to the end of an integer or call BigInt():

let numericVal=BigInt("12345678912345678124353453");
console.log(numericVal);
console.log(typeof numericVal);

//JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.

//A BigInt can not have decimals.

let max1=Number.MAX_SAFE_INTEGER;
let min1=Number.MIN_SAFE_INTEGER;
console.log({max1,min1});

// isInteger() ans isSafeinteger() can be used to check number
console.log(Number.isInteger(12));

console.log(Number.isSafeInteger(12345678901234567812345));


// FOLLOWING ARE THE NUMBER METHODS IN JAVASCRIPT

let exampNum=12345.8765;
console.log(exampNum.toString());
console.log(exampNum.toPrecision());
console.log(exampNum.toExponential());
console.log(exampNum.toFixed());
console.log(exampNum.valueOf());

console.log(Date());

/*******************************************ARRAYS*******************************************/

const arr1 =[2,4,6,8,12];
console.log(arr1);

const arr2=[];
arr2[0]='volvo';
arr2[1]='swift';
arr2[2]='toyota';
console.log(arr2);

const arr3=new Array();
arr3[0]=4;
arr3[1]=6;
arr3[2]=8;
arr3[3]=14;
console.log(arr3);

//There is no need to use new Array().
//For simplicity, readability and execution speed, use the array literal method.
//The easiest way to add a new element to an array is using the push() method:

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
console.log(fruits);

//looping through an array
console.log(fruits.length);
let Flen=fruits.length;
for(let i=0;i<=Flen;i++){
    console.log(fruits[i]);
}

//In JavaScript, arrays use numbered indexes.  
//In JavaScript, objects use named indexes.

console.log(typeof fruits);

console.log(Array.isArray(fruits));

// as we can see the type of array is given object, thus to check if it is an array or not we can use
//Array.isArray() method

/**************************************************ARRAY METHODS*******************************************************/

const arrName1=['red','yellow','green','blue','violet','pink'];

console.log(arrName1.length);

console.log(arrName1.toString());

console.log(arrName1.at(2));

console.log(arrName1.join('$'));
// same as toString(), just can give separator for array items in it
arrName1.pop();
console.log(arrName1);

arrName1.shift();
console.log(arrName1);

// shift does the same thing as pop, only difference is that shift removes starting element.
// unshift does same work as push, but new element is pushed in starting.
arrName1.unshift('mausami');
console.log(arrName1);

const arrName2=['aloo','pyaaz','gobhi'];
const arrName3=arrName1.concat(arrName2);
console.log(arrName3);

arrName2.copyWithin(0,1);
console.log(arrName2);
// copyWithin() basically interchanges the values at input indices within an array.

const myArr = [[1,2],[[3,4]],[5,6]];
const newArr = myArr.flat(Infinity);
console.log(newArr);

const marvel=['spider','iron','thor'];

const dc=['super','aqua','wonder'];

const all=marvel.concat(dc);

console.log(all);

const all1=[...marvel,...dc];
console.log(all1);

// ... these 3 dots are basically spread operator and they are preferred over push and concat

const n1=[2,4,6,8,10]
console.log("A",n1)

const myn1=n1.slice(1,3)
console.log(myn1)
console.log("B",n1)

const myn2=n1.splice(1,3)
console.log(myn2)
console.log("C",n1)

/* So, basically we can see that there are two differences in the slice and splice function
DIFFERENCE 1 =>  In Slice final index value is not counted whereas in Splice final index value is also counted.
DIFFERENCE 2 => In slice the original array is not changed after performing slice as copy of original array is used
whereas in Splice original array is changed after performing the function.
The splice() method adds new items to an array.
The slice() method slices out a piece of an array.
*/
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. */

/******************************************ARRAY ITERATION METHODS*********************************************/

//The forEach() method calls a function (a callback function) once for each array element.

const arr4=['walt','jesse','saul','hank','skyler'];

arr4.forEach(func1);

function func1(value,index,array){
    console.log(`hello! its been a long time ${value}`);
}

// so basically in the case of forEach() iteration, function is called for each element of array.

//The map() method creates a new array by performing a function on each array element.

const arr5=[25,35,45,55,65,75];
const arr6=arr5.map(func2);
function func2(value,index,array){
    return value*10
}
console.log(arr6);

// forEach mein basically kya ho rha tha ki har element pe kuch function lg rha tha, similar in case of map() bas yaha pe new array bn jaata
// hai for storing what map iteration does

const arr7=arr5.map((value)=>value*10);
console.log(arr7);
//same thing achieved using map() iteration method but using arrow function.

const arr8=arr5.flatMap((value)=>value*8);
console.log(arr8);
//The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const arr9=arr5.filter(func3);

function func3(value,index,array){
     return value>=45;
}

console.log(arr9);

//The filter() method creates a new array with array elements that pass a test.

let sum=arr5.reduce(func4);

function func4(total,value,index,array){
    return total+value;
}
console.log(sum);
/*
The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.
*/

const arr10=arr5.every((value)=>value>=25);
console.log(arr10);

//The every() method checks if all array values pass a test.

let str1='elliot';
console.log(Array.from(str1));

// Array.from() method can be used to create an array from any given input

let n=456789;
console.log(Array.from(n));

/*Array.from() lets you create Arrays from:
iterable objects (objects such as Map and Set); or, if the object is not iterable,
array-like objects (objects with a length property and indexed elements).*/

/*The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array. */

const iterator=fruits.keys();

for(let key of iterator){
    console.log(key);
}

const entries=fruits.entries();
for(let entry of entries){
    console.log(entry);
}

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
// basically does the same thing as keys(), only difference it return key-value pair instead of just key

const months=['january','february','march','apr','may','jun','july'];
const newMonth=months.with(3,'april');
console.log(newMonth);

//ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

//The ... operator expands an iterable (like an array) into more elements:it is called spread operator

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

/**************************************************************** DATE OBJECTS***********************************************************/

const d1=new Date();
const d2=new Date("december 25,2016 11:45:00");

console.log(`date from 1st date object is${d1} and from 2nd is ${d2}`);

const d3=new Date(2023,8);
const d4=new Date(100000000000);
console.log(d4.toUTCString());

//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
//Date.parse() returns the number of milliseconds between the date and January 1, 1970:

console.log(Date.parse(d3));

console.log(d2.getFullYear());
console.log(d2.getHours());
console.log(d2.getDay());
console.log(d2.getMonth());
console.log(d2.getTimezoneOffset());

/*The JavaScript Math object allows you to perform mathematical tasks on numbers*/

console.log(Math.PI);

/*
The syntax for any Math property is : Math.property.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:

Example
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
 */

console.log('its working boss')

console.log(Math.PI);

/*********************************IF AND ELSE**************************************/

//Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

if(25==30){
    console.log('aapka knowledge toh kamaal ka hai bhai');
}
else 
    console.log('bazingaaaa!!!')

let num11=35;
let num12=70;
if(num11*2>num12){
      console.log('yes boss!!')
    }
    else if(num11*2<num12){
        console.log('no bosss!!')
    }
    else{
       console.log('they are equal boss!!');
    }

    /***********************************JS LOOPS*******************************************/

/*JavaScript supports different kinds of loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

for(let i=1;i<=10;i++){
    console.log('this loop works!')
}

var i=5;
for(var i=0;i<=10;i++){
    console.log('var redeclares the variables');
}

/*let i=5;
for(let i=0;i<=10;i++){
    console.log('let does not redeclare variables');
}*/

// we can clearly see that using var can help redeclare the variable inside the loop but when it
// comes to let it does not allow redeclaration in loop and gives an error

const obj7={
    name7:'john',
    age:25,
    father:'billy'
}

for(let x in obj7){
    console.log(`how are you ${obj7[x]}`);
}

// this is how for in loops works

const cars=['volvo','thar','scorpio'];

for(let element1 of cars){
    console.log(element1);
}

// this is how for of loop works

for(let element2 in cars){
    console.log(element2);
}

for(let element3 of cars){
    console.log(element3);
}

// the above example clearly gives the difference between for in loop and for of loop, as we can see in for in.....
// to access the element u have to use this syntax object_name[variable], but in for of to access element u just need variable_name

let m=1;
while(m<10){
    console.log('while loop works')
    m++;
}

const loop_arr=[1,2,3,4,5,6,7,8,9,10];
let i1=0;
while(i1<loop_arr.length){
    console.log(loop_arr[i1]);
    i1++;
}

// This is how a while loop functions
let m1=1;
do{
    console.log('hello!');
    m1++;
}
while(m1<=10);
// A JavaScript Set is a collection of unique values.
//Each value can only occur once in a Set.

/*
Method	           Description
new Set()	       Creates a new Set
add()	           Adds a new element to the Set
delete()	       Removes an element from a Set
has()	           Returns true if a value exists in the Set
forEach()	       Invokes a callback for each element in the Set
values()           Returns an iterator with all the values in a Set

Property	       Description
size	           Returns the number of elements in a Set
*/

// creating a set from array

const setarr= new Set(['ramesh','mahesh','mukesh']);
console.log(setarr);

const setarr1=new Set();

setarr1.add('hello');
setarr1.add('bye');
setarr1.add('good');

console.log(setarr1);
console.log(setarr.size);
setarr.delete('mahesh');
console.log(setarr);

 const setarr2=  new Set([24,44,56,89,76,55]);
 const iter=setarr2.values();

 for(let n2 of iter){
    console.log(n2);
 }

 // let talk about javascript maps

 const map1=new Map(
    [
        ['apples',200],
        ['bananas',300],
        ['guavas',400]
    ]
 );

 console.log(map1);

 const map2=new Map();

 map2.set('apples',200);
 map2.set('bananas',400);
 map2.set('grapes',600);
 console.log(map2);

 console.log(map2.get)

const typearr=['john',3.14, NaN,false,[1,2,3,4],{naam:'johnny',kaam:'mason'},new Date()];

for(let m of typearr){
    console.log(typeof m);
}

/*Please observe:
The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined */

// JAVASCRIPT TYPE CONVERSIONS

console.log(Number('hello'));
console.log(String(12345.45677));
console.log(Boolean(5));

/***************************JS SCOPE************************/

/*Scope determines the accessibility (visibility) of variables.
JavaScript variables have 3 types of scope:
Block scope
Function scope
Global scope */

//BLOCK SCOPE
//Variables declared inside a { } block cannot be accessed from outside the block:

{
    let a1=25;
    //console.log(a1);
}
//console.log(a1);
// we can see from the above example that a variable declared with let has a block scope and is not accessible outside the block.
// but same doesn't apply for var keyword,variable declared using var can be accessed outside the block.

//Variables declared within a JavaScript function, are LOCAL to the function:

function func6(){
    let my_vari=35;
    return my_vari*2;
}
console.log(func6());

/*JavaScript has function scope: Each function creates a new scope.

Variables defined inside a function are not accessible (visible) from outside the function.

Variables declared with var, let and const are quite similar when declared inside a function.

They all have Function Scope:*/

const obj8={
    name8:'james',
    last8:'mendel',
    full8:function(){
        return this.name8 + " " + this.last8;
    }
}
 console.log(obj8.full8());
 
 let namenm='neo'
 console.log(`hello i m trying to learn javascript ${namenm}`);

 console.log(String(Math.PI));

 console.log(Number('344.4368'));

 if(1==1){
    console.log('hello');
 }
 else {
    console.log('bye');
 }

 for(let a11=0;a11<10;a11++){
    console.log(obj1.name);
 }

//hoisting examples

/*car1='baleno';
let car1;
console.log(car1);*/

car2='endevour';
var car2;
console.log(car2);

/*car3='creta';
const car3;
console.log(car3);*/

// thus we can clearly see that in javascript let and const keyword defined variables are not hoisted.

//"use strict"; Defines that JavaScript code should be executed in "strict mode".

/*Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.*/

const objj1={
    usernm:'dopinder',
    price:999,
    welcome:function(){
        console.log(`welcome to website,${this.usernm}`)
        console.log(this);
    }
}

objj1.welcome();

objj1.usernm='kael al';

objj1.welcome();

console.log(this);

// within the object, this keyword refers to the context of that object only but outside in global scope
// this keyword refers to an empty object {} whereas in browser console it refers to window object.