const score=400

const balance=new Number(400.450)

console.log(balance)

console.log(balance.toString())
console.log(balance.toFixed(2))

const num1=1234.5678
console.log(num1.toPrecision(5))


console.log(Math.abs(-5))

console.log(Math.round(5.6))

console.log(Math.ceil(5.2))

console.log(Math.floor(5.9))

console.log(Math.min(5,8,9,4,3))

console.log(Math.max(9,12,13,3,4))

// most of the time random function of math library will be used by us as it
// can be used in different games like dice game where number value has to lie between
// a particular given range only

console.log(Math.random())

console.log((Math.random()*10)+1)

const min=10
const max=20

console.log(Math.random() * (max-min+1) + min)

/* math.random() func gives values in the range of 0-1
but when we multiply this by 10 in some cases there is possibility that values remains under 1 only
for example 0.01 on multiplication with 10 gives 0.1, so to tackle this problem what we do is to add 1
thus making the formula => console.log((math.random()*10) +1).*/
