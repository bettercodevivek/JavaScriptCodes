// basically there are two types of scopes:- 
// 1:- block/local scope and 2:- global scope
// when you define a variable outside any loop or function it is said to be in global scope
// any variable that is declared in global scope is accessible in the source code everywhere with the value it has been assigned globally
// but when a variable is declared within a block or locally its assigned value exists within that block only

let a = 10;
const b = 25;

if(true){
    const b=35
    let a=50
    console.log(b)
    console.log(a)
}

console.log(a)
console.log(b)

// The above example clearly explains the difference between global scope and local scope of a
// variable