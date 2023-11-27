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

 // This is one way of mergin two objects by using assign operator
 // But mostly we will merge two or more objects using the spread operator just like we did in arrays

 const object4 ={...object1,...object2}
 console.log(object4)


 // Now let us understand how we can access objects if data is recieved from the database
 // when data is recieved from database it comes as a array of objects

  const users = [
    {
        value22:"hello",
        value23:"goodnight"
    },
    {
        value22:"hello",
        value23:"goodnight"
    },
    {
        value22:"hello",
        value23:"goodnight"
    },
    {
        value22:"hello",
        value23:"goodnight"
    },
    {
        value22:"hello",
        value23:"goodnight"
    }
  ]

  console.log(users[1].value22)

  console.log(Object.keys(users))

  console.log(Object.keys(obj1))

  const batman = {
    name5:"billy",
    email5:"billy@lilly.com",
    address5:{
        firsthome:{
            lasthome:{
                endhome:"gotham"
            }
        }
    },
    loggedIN:true
  }

  console.log(batman.address5.firsthome.lasthome)

  const bat1 = new Object()
  bat1.name6="hellobro"
  bat1.size="huge"
  bat1.power="strength"
  console.log(bat1.name6)


  const array2 = [
    {
        val5:"yes",
        val6:"no"
    },
    {
        val5:"yes",
        val6:"no"
    },
    {
        val5:"yes",
        val6:"no"
    },
    {
        val5:"yes",
        val6:"no"
    }
  ]

  console.log(array2[1].val5)
  console.log(array2[1].val6)

  console.log(Object.keys(batman))