let date1=new Date();
console.log(date1.toString());
console.log(date1.toDateString())
console.log(date1.toLocaleString())

console.log(typeof date1)

let date2=new Date(2023,10,9)
console.log(date2.toDateString());

let date3=new Date("11-19-2023")
console.log(date3.toLocaleString())
console.log(date3.getTime())

let timestamp=Date.now();
console.log(Math.round(timestamp/1000))

date3.toLocaleString('default',{
    weekday:"long"
})