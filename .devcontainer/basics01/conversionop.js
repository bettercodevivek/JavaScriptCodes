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
 "some string"=>true