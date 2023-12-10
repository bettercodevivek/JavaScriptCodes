//Before starting arrow function lets talk about this keyword.................

const user = {
username:"vivek",
price:999,

welcomemessage: function(){
    console.log(`${this.username}, welcome to the website`)
    console.log(this)
}
}

user.welcomemessage()

user.username = "steve"

user.welcomemessage()

// this keyword is basically used to represent the object within which the function is declared
