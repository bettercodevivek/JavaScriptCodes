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


const obj2 = {
    name1:"superman",
    address1:"krypton",
    age1:36,
    email1:"superman@gmail.com"
}

console.log(obj2.name1)
console.log(obj2["address1","email1","age1"])
