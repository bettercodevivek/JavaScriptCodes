const arr1=[1,2,3,4,5,6,7,8,9]
//JS arrays are resizable and heterogenous
console.log(arr1[2])

arr1.push(15);
console.log(arr1)
arr1.pop();
console.log(arr1)

//push operations is used to push a value and pop operations deletes the last entered value

const arr2=[4,8,12,16,20]
arr2.push(24)
arr2.push(28)
console.log(arr2)
arr2.pop()
console.log(arr2)

console.log(arr2.includes(11))
console.log(arr2.includes(16))

console.log(arr2.indexOf(16))

// lets now talk about two important operations on arrays:- Slice and Splice

const n1=[2,4,6,8,10]
console.log("A",n1)

const myn1=n1.slice(1,3)
console.log(myn1)
console.log("B",n1)

const myn2=n1.splice(1,3)
console.log(myn2)
console.log("C",n1)

/* So, basically we can see that there are two differences in the slice and splice function
DIFFERENCE 1 =>  In Slice final index value is not counted whereas in Splice fina; index value is also counted.
DIFFERENCE 2 => In slice the original array is not changed after performing slice as copy of original array is used
whereas in Splice original array is changed after performing the function.*/

const marvel=["cap","nat","ironman","thor"]
const DC=["batman","joker","aquaman"]

//marvel.push(DC)

//console.log(marvel)

//console.log(marvel[4][2])

const all=marvel.concat(DC)
console.log(all)
//this is concat operator

const all_new=[...marvel,...DC]
console.log(all_new)
//this is spread operator it basically spreads the entire array into single elements, it is preferred more than concat and push.

const newarr1=[1,2,3,[6,7,8],10,12,[13,[14,15,16]]]
const newarr2=newarr1.flat(Infinity)
console.log(newarr2)
//Basically The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
console.log(Array.isArray("vivek"))
console.log(Array.isArray([1,2,3,4,5]))
console.log(Array.from("Vivek"))
console.log(Array.from("123456"))
//isArray is used to check if the datatype is array or not
//fromArray is used to convert any kind of datatype into array
console.log(Array.from({name:"vivek"}))
// this is a very interesting case as from method is not able to convert this directly into
// array. you have to specify in this case if you wwant array of keys or array of values

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3))