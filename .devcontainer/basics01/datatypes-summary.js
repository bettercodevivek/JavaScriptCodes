/* so basically datatypes are only of 2 types :- 
(on the basis ki how is that datatype stored in the memory)
1. primitive= they are always call-by-value
a)string
b)number
c)null
d)undefined
e)boolean
f)symbol
g)BigInt
2.non-primitive=they are always call-by-reference
a)array
b)objects
c)functions

JS is a dynamically typed language*/

/* In JS there are two types of memory:-
1.Stack Memory
-> it used in the case of primitive datatype

2.Heap Memory
-> it is used in case of non-primitive datatype */

let userOne = {
    email:"hello@gmail.com" ,
    alias:"devslope"
}

console.log(userOne)

let userTwo=userOne

console.log(userTwo)
 
userTwo.email="batman@gmail.com"

console.log(userOne)
console.log(userTwo)

/* kul milake baat yeh hai ki stack memory mein primitve datatypes hai aur usme value ki copy
banti hai aur changes copy mein hote hai thus altering the copy doesnt alter the actual value
but heap ke case mein reference of original value milta hai thus altering the value will alter the
original value*/