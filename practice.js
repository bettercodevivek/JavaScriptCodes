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

