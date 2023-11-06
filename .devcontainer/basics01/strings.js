const name="vivek"
const repocount=50

console.log(`hello my name is ${name} and my repocount is ${repocount}`)

//this is called string interpolation. it enhances code readability. It is better
//than concatenating two strings together by adding them using a third string.

const game_Name= new String('walterwhite')
console.log(game_Name[0])

/*This way of defining a string using new keyword helps us in accessing indiviudal letters of the string
as it creates key-value pairs with keys starting at 0 like array indexing, though its not array indexing*/

console.log(game_Name.__proto__)

console.log(game_Name.length)
// helps is accessing the length of string

console.log(game_Name.toUpperCase())
//converts the string into uppercase

console.log(game_Name.charAt(3))
console.log(game_Name.indexOf('h'))

const str1="pinkman-jesse-tuco"
const newstr=str1.substring(0,4)
console.log(newstr)
// We use this method to slice at a string or basically to create a substring from desired
// starting index to ending index position

const str2="gustavo"
const str4=str2.slice(-6,5)
console.log(str4)
// same function as substring only difference is that it can take negative index value as input

const str5="  helloworld  "
console.log(str5)
console.log(str5.trim())
// basically sometimes user enter some unnecessary spaces in string, but we dont want those spaces in
//database so to remove those use trim method

const url="https://bcs.com/saul%20goodman"
console.log(url.replace('%20','-'))
// replaces given input with desired input in a url

console.log(url.includes('hello'))

console.log(str1.split('-'))
// splits a string on the basis  of separator and gives the result into an array
