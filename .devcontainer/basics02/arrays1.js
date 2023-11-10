const arr1=[1,2,3,4,5,6,7,8,9]
//JS arrays are resizable and heterogenous
console.log(arr1[2])

arr1.push(15);
console.log(arr1)
arr1.pop();
console.log(arr1)

//push operations is used to push a value and pop operations deletes the last entered value

const arr2=[4,8,12,16,20]
arr2.push(24)
arr2.push(28)
console.log(arr2)
arr2.pop()
console.log(arr2)

console.log(arr2.includes(11))
console.log(arr2.includes(16))

console.log(arr2.indexOf(16))

// lets now talk about two important operations on arrays:- Slice and Splice

const n1=[2,4,6,8,10]
console.log("A",n1)

const myn1=n1.slice(1,3)
console.log(myn1)
console.log("B",n1)

const myn2=n1.splice(1,3)
console.log(myn2)
console.log("C",n1)