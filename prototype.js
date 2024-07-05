
                // # 09 apr 2024  [prototype]
let object = {
    firstName:"shahid", 
    lastName: "alam",
    age : 23
};
console.log(object);

// __proto__  //  primitive type  property of an object that holds the link to its parent in a prototype chain//accessing the property of an object using dot//accessing the properties of an object // primitive type ke pass na object hotsa hai na hi koi method
// number
/*
let a = 10;
console.log(a, typeof a);
console.log(a.__proto__); // number class

// boolean
let b= true;
console.log(b,typeof b)
console.log(b.__proto__); // Boolean   class

// string
let str = "shahid"
console.log(str, typeof str);
console.log(str.__proto__); // String  class
// stmbol
let sym = Symbol("key");
console.log(sym, typeof sym);
console.log(sym.__proto__); // symbol class
// BigInt
let bigint = BigInt("15")
console.log(bigint.__proto__); // BIgInt class
// undefined
let num;
console.log(num.__proto__);  // undefined class

// null 
let number = null;
console.log(number.__proto__); // error

// ARRAY
let arr = ["apple","banana","cherry"];
console.log(arr.__proto__); // Array Class

// object 

let obj = {
    firstname : "Shahid",
    lastname : "Alam"
}
 console.log(obj.__proto__); // object class
*/


//  

class Employee{

}
 Employee.prototype.className = 'Employee';
 Employee.prototype.getEmplyeeName = function(){
    console.log(this.className);
 }
let emp = new Employee( );
console.log(Employee.prototype.getEmplyeeNameetEmployeeName);
emp.getEmplyeeName();

let emp1 = new Employee();
console.log(emp.className);
emp1.getEmplyeeName()






