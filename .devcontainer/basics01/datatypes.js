"use strict"; /* treats all JS code as newer version*/
/*alert("hello") alert needs a proper syntax in node, in console this command can work*/
/* code readability is very important*/

let name="batman"
let age=30
let loggedIn=true

console.log(name,age,loggedIn)
console.table([name,age,loggedIn])

/* DATAYPES IN JS:-----
1.number
2.string ""
3.boolean T/F
4.bigint
5.null => standalone value it means an empty value 
6.undefined => value has not been assigned yet */

console.log(typeof"batman")
console.log(typeof null)
console.log(typeof undefined)

/*basically typeof gives you the type of a particular value that have been used,
also type of null is object but type of undefined is undefined itself*/
