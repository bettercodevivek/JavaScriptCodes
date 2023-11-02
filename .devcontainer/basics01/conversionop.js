let score="45"
console.log(typeof score)
let valnum=Number(score)/* for conversion into a datatype always first alphabet will be a capital letter 
of the datatype you want to convert into*/
console.log(typeof valnum)

let val=true
console.log(typeof val)
let numval=Number(val)
console.log(typeof numval)
console.log(numval)

let var1=null
console.log(typeof var1)
let var2=Number(var1)
console.log(typeof var2)
console.log(var2)

let var3=undefined
console.log(typeof var3)
let var4=Number(var3)
console.log(typeof var4)
console.log(var4)

let islogged="heyguys"
let isloggedin=Boolean(islogged)
console.log(isloggedin)

/* 
string=> number
bool=>number
null=>number it gives 0 value
undefined=> number it gives NaN value
also if string is something like this "34abc" in that case number conversion happens but value is NaN
 in case of boolean
 1=>true
 0=>false
 " "=>false
 "some string"=>true*/

/* OPERATIONS */

let str1="hello"
let str2=" vivek"
let str3=str1+str2

console.log(str3)

console.log(3+3)
console.log(8-3)
console.log(8*3)
console.log(8%3)
console.log(2**4)

console.log("2"+2+2)

console.log(2+2+"2")

/* in such cases the first data type in console.log is considered as preferred data type
means if number value first than whole op to be converted in number but if string value first
then whole op to be converted in string*/

let a=4
console.log(++a)
console.log(a++)
console.log(a--)
console.log(--a)
/* pre-increment means print hone se pehle hi operation hojyega inc/dec ka and post means
 operation print hone ke baad hoga inc/dec ka*/