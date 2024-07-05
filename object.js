// # 12 mar 2024
//   OBJECT

/*
* literals and properties
* square bracket
* computed properties
* properties value shorhand
* properties name limitations
* properties existence test, "in" operator
* the "for" in loop
*/

/* let obj = {
 // key  is properties  , value is literals
 FirstName : "shahid",
 LastName: "khan",
 "Full Name" : "shahid khan", 
 getFullName : function(){
  console.log(" full name  called");
 }

}
console.log(obj.FirstName);
console.log(obj.LastName);
console.log(obj["Full Name"]);
console.log(obj.getFullName());
obj['getFullName']();
console.log(obj['FirstName']);
console.log(obj['LastName']);
console.log(obj[`Full Name`]);
*/

// # 13 mar 2024

// computed properties
 
/*
let firstName = "anything"; // replace key name
let object = {
   [firstName] : "shahid",
}
console.log(object); 

*/

// property value shorthand
 /*  let firstName = "shahid";

 let obj = {
    firstName      // firstName : firstName
 } 
 console.log(obj); */

// property names limitations
//  let specialChars = "$#@!%^&*()_+=-{}[]|\\?/.,<>~:`\"\':; "; 
 /*let obj = {
  $name  : '_Shahid',
  '@mail' : 'shahidkhan7689@gmail.com',
  '#phone' : '+92-305-1234567',
  let : "let value",
  const : "const value",
  var : "var  value",
  if : "if value",
  else: " else value",
  for : "for value",
  while : "while value",
  dowhile : "dowhile value",
// keyword  can not be used as a variable name in javascript 
};

console.log(obj); */ 

// * properties existence test, "in" operator : it will return true or false whether the given key  is present in an object or not.
/*
let object = {
    firstName :  "Shahid",
    lastName :  "alam",
    fullname : " shahid alam"
}

console.log("firstName" in object); */


/*

* object reference and copying
* comprision by refernce
* cloning and merging, object.assign
* nested clonig
* structuredclone

*/
  
// primitive type
/* let num = 10 ;
let num1 = num;
num1=15;
console.log(num);
console.log(num1); */

// refence type
 /* let arr = [10,20,30,40];
 let arr2 = arr; // pointing to the same memory location of arr

 arr2[arr.length] = 50;
 console.log('arr ', arr)
 console.log('arr2', arr2) */

/* let obj1 ={};
let obj2 ={};
console.log(obj1 === obj2 ); // false , they are not equal because they have different memory locations

obj2 = obj1;
console.log(obj1 === obj2 ) ; // true , they are equal now as both point to the same memory location
*/
// * shallow copy

/*let obj_1 = {
    firstname : "shahid",
    lastname : " alam ",
    age : 21
}

let obj_2 = {};

for (const key in obj_1){
    obj_2[key] = obj_1[key] ;
}

obj_2.hobbies = ['coding, gaming']
console.log("obj is ", obj_1);
console.log("obj2 is ", obj_2);
console.log(obj_1 === obj_2);
*/
 
// other way to copy object // Object.assign
/* let obj = {
    firstname : "shahid",
    lastname : " alam ",
    age : 21
}
let obj2 = Object.assign( {}, obj)
console.log("obj" ,obj);
console.log("obj2", obj2);

obj2 = Object.assign(                           // cloning 
    {},
    obj,
    {hobbies : "gaming:,coding"},
    {city : "patna"}
    );

console.log("obj" ,obj);
console.log("obj2", obj2); */

// merging
/* let obj_1 = {
    firstname : "shahid",
    lastname : " alam ",
    age : 21
}

let obj_2 = {
    hobbies :  ["gaming","coding"]
}

let obj_3 = Object.assign(obj_1, obj_2);
console.log(obj_1);
console.log(obj_2);
console.log(obj_3);
console.log(obj_1 === obj_3)   // true
*/

// structuredClone

/*let obj_1 = {
    firstname : "shahid",
    lastname : " alam ",
    age : 21
}
let obj2 = structuredClone(obj_1);
console.log(obj_1);
console.log(obj2);
console.log(obj_1 === obj2)     // false


// garbage collection

let array = [10,20,30,40,50];
array[array.length] =  60;       // adding element to the end of array ,, previous values cleanig with the help of garbage collection,, work on heap section
console.log(array);
*/
// # 15 mar 2024

/* 
* object method, "this"
* method shtrthand
* "this" in method
* "this" is not bound
* arrow function have no "this"
*
*/

let object = {
    firstName :  "Shahid",
    lastName :  "alam",
    fullname : function(){
        console.log(this);
        console.log(this.firstName  + " " + this.lastName);
      this.testing();
    }
    , testing:function() {
       console.log("I am inside the test function");
   }
}
object.fullname();


/*
* constructure, operator "new" 

* constructure function

* constructure mode test : new.target

* return from constructors

* methods in constructor

*/  
function employee(){
    return {
        firstName :  "Shahid",
        lastName :  "alam",
        fullname : " shahid alam"
    }

}

let object1 = employee;          //      object= {
                                //              firstName :  "Shahid",
                                //              lastName :  "alam",
                                //              fullname : " shahid alam"
                                //           }



let object2 = employee;

let object3 = employee; 
let object4 = employee; 
let object5 = employee;
let object6 = employee;

console.log(object1, object2,object3,object4,object5,object6);     // [object Object]



        // # 1 apr 2024
    /* 
    * non writable
    * non enumrable
    * object.defineproperties
    * object.getownproperties
    * sealing an object
    * object.preventExtension 
    * object.seal(obj)
    * object.frozen(obj)
    * oject.isExtension(obj)
    * object.isseal(obj)
    * object.isfrozen(obj)
    */


 let obj = {
    firstName :  "Shahid",
    lastName :  "alam",
    fullname : " shahid alam"

}
//  console.log(obj);
 let descriptors = Object.getOwnPropertyDescriptors(obj) ;       // get all property descriptor
 let descriptor = Object.getOwnPropertyDescriptor(obj,"fullname");   // get specific
 console.log(descriptors);
 console.log(descriptor);


// writable
let obj_1 = {
    firstName :  "Shahid",
    lastName :  "alam",
    age : 23

}
  Object.defineProperty(obj_1 , 'firstName',{writable:false})           // make first name not writable
  obj_1.firstName ="ankit";      // it will give
   console.log(obj_1);     
   // key delete
   delete obj_1.lastName;                               // remove the last name from object
   console.log(obj_1);

// configurable

   let obj_ = {
    firstName :  "Shahid",
    lastName :  "alam",
    age : 23

}
Object.defineProperty(obj_2, 'firstName',{configurable:false}) 
delete obj_1.lastName;                               // remove the last name from object
console.log(obj_2);

// enumarable
let obj_3= {
    firstName :  "Shahid",
    lastName :  "alam",
    age : 23

}
Object.defineProperty(obj_3, 'firstName',{enumerable:false}) 
delete obj_1.lastName;                               // does not access the for in value  of first name because enumerable is false
console.log(obj_3);
