// In this we will learn about functions and their parameters

function Saymyname(){
    console.log("Bat")
    console.log("man")
}

Saymyname() // this is basically how you execute a function

function Addnum(number1,number2){
console.log(number1+number2)
}


Addnum(5,24)

const result = Addnum(5,24)

console.log("result is :-", result)

// when you define a function then the values given are called parameters but when you call that function
// for execution then the values are called arguments

function mult(num1,num2){
   return num1*num2
}

const result2 = mult(5,9)

console.log("result is:-",result2)

// Basically in a function afer the return statement is written, nothing else can be further
// executed

function loginmessage(username){
    if(!username){
    return `please enter a valid username`
    }
    else {
        return `${username} just logged in`
    }
}

console.log(loginmessage())

console.log(loginmessage("Vivek"))

// here !username is equivalent to username===undefined, so when no argument is given we use this
// if condition
// This was all about the basics of functions and their parameters

// Now lets consider the cases where the number of parameters for a function is not known 
// for example:- this might happen in case of a e-commerce website where the number of items
// the user may add into their cart is unknown but still we need to create a functions that
// sums up the value of all items

function calculateCartprice(...num1){
    return num1
}

console.log(calculateCartprice(200,400,600,800))

// here we use ... (rest operator or in some cases called spread operator), it takes any number of parameters

const user = {
 username:"vivek",
 price:999
}

function handleObject(anyobject){
    console.log(`the username is ${anyobject.username} and the price is ${anyobject.price} `)
}

handleObject(user)

// This is how you handle objects in functions.