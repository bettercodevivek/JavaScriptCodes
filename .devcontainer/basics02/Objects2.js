// Here, we will be declaring objects as constructors or basically what we call as Singleton
// We have already learnt how to declare objects as literals

//***************************************OBJECT CONSTRUCTORS*****************************************//

const obj1=new Object()

obj1.name = "iyer"
obj1.fullname = "venugopal iyer"
obj1.age = 45 

console.log(obj1)

const obj2 = {
    email:"jesse@yahoo.com",
    fullname:{
        username:{
            first:"jesse",
            last:"pinkman"
        }
    }
}
console.log(obj2.fullname.username)

// This is how you can access nested objects.

// Now, lets learn how to merge two objects

 const object1 = {
    1:"a",
    2:"b"
 }

 const object2 = {
    3:"c",
    4:"d"
 }

 const object3= Object.assign({},object1,object2)

 console.log(object3)