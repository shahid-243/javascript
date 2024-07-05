

                // 15 apr 2024
// function addition(...nums){
//     console.log(nums);
// }

// addition(10,20,30,50)

// // spread operator
// let array = [10,20,,30,40,50]
// let arrray2 = [...array,70,80,90]
// console.log(array);
// console.log(arrray2);
// console.log(array ===  arrray2);

// // obecct
// let object = {
//     firstName:"shahid", 
//     lastName: "alam",
//     age : 23
// };

// let object2 = {...object,hobbies:["cricket"]}
// console.log(object);
// console.log(object2);
// console.log(object === object2);



// # 16 apr 2024

// variable scope

// nested functions

// lexical environment

/*
// the old "var"
//  "var" has no block scope
//  "var" tolerate redeclearation
// "var" variable can be decleared below their use 

    iife
    syntax
    ()();

*/

// IIFE 

// async  function getCountries(){
//     let response = await fetch("http://restcountries.com/v3.1/all")
//     let data = await getCountries
// }



// new function syntax
// clouser 

// function without using function keyword

/*
let addition = new Function("num1", "num2", "console.log(num1 + num2);")
console.log(addition);
addition(10,20)
*/
// clouser

/*function testing(){
    let a =10;
    let b = 20;

    return () => {
        console.log(a+b);
    }
}

let t = testing();
console.log(t);
t()
*/

// 17 apr 2024

/*
// * scheduling : setTimeout and setIUnterval
// * setTimeout
// * canceling with clearTimeout 
// * setInterval
// * Nested setTimeout
*/

// setInterval(() => {

//     console.log("testing");
// },1000 ) // every second 

/*
let counter = 0;

setInterval(() => {
    console.log(counter += 1);
    let date = new Date()
    
    console.log(`${date.getDate()}-${date.getMonth() +1 }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
},1000)


// stTimeout

setTimeout(()  => {                
    console.log("setTimeout called"); 
    
},50000)

*/

//  nested setTimeout

let counter = 0;

let interval = setInterval(() => {
    console.log(counter += 1);
    let date = new Date()
    
    console.log(`${date.getDate()}-${date.getMonth() +1 }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
},1000)


// stTimeout

setTimeout(()  => {                 // cleartimeout time out ko destroy krta hai
    console.log("setTimeout called"); 
    clearInterval(interval)      // clearInterval set time ko destroy krta hai
},5000)

// decorators and forwarding, call/apply
/*
let object = {
    firstName : "shahid",
    lastName : "alam"
}

let object2 = {
    // age : 23,
    getFullName : function(age, hobbies){
        console.log(this);
        console.log(this.firstName + " " + this.lastName + " " + age);
        console.log(hobbies);
    }
}

object2.getFullName.call(object , 10,  "cricket");
object2.getFullName.apply(object, [10,"Cricket"]);

*/

// module 