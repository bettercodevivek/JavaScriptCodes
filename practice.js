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