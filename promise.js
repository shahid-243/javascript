               
               // 10 apr 2024
// syntax
// let promise = new Promise((resolve, reject) => {

// })


// let promise = new Promise((resolve, reject) =>{
//     // resolve("Resolved stste")
//     reject("rejected stste")
// })
// console.log(promise);


// then block
// let promise = new Promise((resolve, reject) =>{
//     resolve("Resolved stste")
// })
// promise.then((Response) =>{
//     console.log(Response);
// })


// catch block
// let promise = new Promise((resolve, reject) =>{
//     reject("Rejected stste")
// })

// promise.catch((error) => {
//     console.log(error);
// })


// both
// let promise = new Promise((resolve, reject) =>{
//     // reject("Rejected stste")
//     resolve("Resolved stste")

// })
// promise.then((Response) =>{
//         console.log(Response);
//     }).catch((error) =>{
//         console.log(error);
//     }) 


// example
// let items = ["pen", "paper", "pencil"];
// let promise = new Promise((resolve, reject) =>{
//   if(items.includes("paper")){
//     resolve("Item found");
//   }else{
//     reject("Item not found");
//   }

// })
// promise.then((Response) =>{
//         console.log(Response);
//     }).catch((error) =>{
//         console.log(error);
//     }) 



// promise work  

let promise1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promise1")
    },2000)
})
promise1.then((Response) =>{
    console.log(Response);
})

let promise2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promise2")
    },5000)
})
promise2.then((Response) =>{
    console.log(Response);
})

let promise3 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promise3")
    },7000)
})
promise3.then((Response) =>{
    console.log(Response);
})

let promise4 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("promise4")
    },1000)
})
promise4.then((Response) =>{
    console.log(Response);
})

console.log("after promise");

for (let number =  0; number < 100; number++){
    console.log(number  + " good morning");
}


            // 11 apr 2024
// 
 
let promise = new Promise((resolve, reject) =>{
    resolve("Resolved stste")
})
promise.then((Response) =>{
    console.log("testing1");
    // throw new Error("somthing went wrong")
}).then((Response) => {
    console.log("testing2");
}).then((Response)=>{
    console.log("testing3");
}).then((response) =>{
    console.log("testing4");
})
 // promise is callback hell replacement


 // fetch
//  fetch("url",{
//     headers:{

//     },
//     method:"GET",
//     body: 
//  })

