// There are two ways of declaring an object:-
// 1st=> as literals and 2nd=> as constructors
// Basically when we declare am object as a constructor it becomes a "singleton"

//*************************************OBJECT LITERALS***********************************//

const obj1={
    name:"batman",
    address:"gotham",
    age:35,
    email:"batman@yahoo.com",
    isloggedIn:true
}

console.log(obj1.name)
console.log(obj1["address"])


const sym1 = Symbol("key1")

const obj2 = {
    name1:"superman",
    address1:"krypton",
    [sym1]:"hello1",
    age1:36,
    email1:"superman@gmail.com"
}

console.log(obj2.name1)
console.log(obj2["address1","email1","age1"])

console.log(obj2[sym1])
//console.log(typeof obj2.sym1)
// Here we can access the value of sym1 and it gets printed also but here sym1 is not being treated as
// symbol datatype rather as string, so if the interviewer asks us to declare a symbol and use it as a key in a object
// this is not the right approach 
// THE RIGHT WAY TO USE A SYMBOL IN OBJECT IS BY USING SQUARE BRACKETS
// for example:-
const sym3 = Symbol("key3")
const obj3 = { 
name3:"hulk",
address3:"not known",
age3:40,
[sym3]:"hello2"
}

console.log(obj3[sym3])

obj3.address3 = "earth"
//Object.freeze(obj3)
obj3.address3="mars"

console.log(obj3.address3)

// use Object.freeze to freeze current values of properties in the object, as it can be seen
// after freezing values cannot be changed

obj3.greeting = function(){
    console.log("hello git user")
}

console.log(obj3.greeting())
