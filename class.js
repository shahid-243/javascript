
                // 02 april 2024
// class ClassName {
//     // propwerty

//     // method
// }

// class employee{ 
// firstName =  "shahid"

// // method
// getfirstName (){
//     console.log("get first name");
//     console.log(this.firstName);
// }

// }

// let employee = new employee();
// console.log(employee);

                // 03 april 2024
/* constructor
class Employee {
     constructor(fname){
        this.firstName = fname;
    }
}

let employee = new Employee("shahid");
let employee1 = new Employee("mohit");
console.log(employee, employee1);
*/
 // getter and setter

class Employee1{ 
 get getfirstName(){
    return this.firstName
 }

 // setter
  setfirstName(value){
    this.firstName = value;
 } 

}



// computed name[..]
let test = "t"
class Testing{
    [test + 'jasjbbd'] = "testing class"
    firstName = "shahid"
}

console.log(Testing);



/* 
class inheritance


the "extends" keyword

overriding a method
 
overriding constructor

*/

// inheritance

// class Class1{
//     className = "class";
//     getClassName = ()=> {
//         console.log(this.className);
//     }
// }

// class Class2 extends Class1{

// }

//  Class2 = new Class2();

// console.log(Class2);


                // # 8 apr 2024

// static properties and methods
// static properties
// inheritance of static properties and methods


class Employee{
    static counter = 0;

    constructor(){
        Employee.counter++
    }

    static getcounter(){
        console.log(Employee.counter);
        console.log(this.counter);
    }
}

let emp1 = new  Employee();
console.log(emp1)
Employee.getcounter()

let emp2 = new Employee();
console.log(emp2)
Employee.getcounter()

//***  static propertis and static method also inheritance


// class expression
// let Testing = class{
//     className = " testing"
// }

// let t = new Testing()
// console.log(t);

//** sigle level , multi -level inheritence

class Parent {
    parentName = 'parent'
}

class Child extends Parent {
    childName = 'child';
}

let c = new Child();
console.log(c);

// Multi-Level Inheritance

class GrandParent {
    grandParentName = 'GrandParent';
}

class Parent1 extends GrandParent {
    parentName = 'Parent1';
}

class Child1 extends Parent1 {
    childName = 'Child1';
}

let gp = new GrandParent();
let p1 = new Parent1();
let c1 = new Child1();

console.log('gp : ', gp);
console.log('p1:', p1);
console.log('c1:', c1);


// private and protected properties and method

  class employee1{
    // public properties
    firstName = " shahid"
    lastName = " alam"
    // private properties(#)  - not accessible outside the class
    #salary = 23;
  // public methods
    getfullName(){
        this.#salary()
        console.log(this.#salary);

        // private fields are only accesable inside the class where the are declreare and define
    
        console.log(this.firstName + " " + this.lastName);
    }
    // private methods
    #getfullName(){
        console.log(this.#salary);
    }
  }
 //***private properties and methods are not inherite  


 // class checking : "instanceof"

 // the intanceof operator


 class A {

 }

 class B {

 }

 let a = new A();
 let  b = new B();

 console.log(a instanceof A);// true
 console.log(a instanceof B);// false
 console.log(b instanceof B);// true 

                // # 09 apr 2024



