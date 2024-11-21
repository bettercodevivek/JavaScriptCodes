let myPromise = new Promise((resolve,reject)=>{
    let success = false;

    if(success==true){
        resolve("Data Success!!!")
    }
    else{
        reject("Data Failed!!!")
    }
})

myPromise
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
});

function Hello(name){
    setTimeout(()=>{
        console.log(`hello Mr. ${name}`)
    },5000)
}

Hello("vivek");


