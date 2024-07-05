            # 7 feb css margin
margin-right
margin-top
margin-bottom
margin-left
values (auto/ length / % /inherit )
margin (shorthand)


            #  9 feb 2024 #
# css padding

# css height,width , max height and max width
# css box Model

                     # 12 feb 2024 #

# css text
color
backgroung color
text-align
text-align-last
direction
unicode-bidi
vertical-align
text-decoration-line
text-decoration-color
text-decoration-style
text-decoration-thickness
text-decoration
text-transform
text-indent
letter-spacing
word-spacing
white-space
text-shadow
line-height
# css fonts
font-style
font-variable
font-weight
font-size
font-family
# css link
@import url()

                          # 13 febb 2024 #

# css links
a:link
a:visited
a:hover
a:active
# css  pseudo-element
::first-line
::first-letter
::before
::after
::marker
::selection
# css list
list-style-types
list-style-image
list-style-position
list-style (shorthand)
# css layout - the display property
display(none, inline, block, inline-block)

            # 14 feb 2024 #
# css visibility property
visibility(hidden/visible)
# css position property
position(relative, fixed, absolute, sticky)
# css layout the z-index property
z-index
# css media queries
@media  not|only mediatype and (expression){
    css code
}
                              # 20 feb 2024
                javascript intro

                           # 21 feb 2024

# inline js
# internal js 
# external js

                          # 23 feb 2024

# variable
 let
 const
 var
 # variable naming 
 the must contain only letters, digit or the symbols $ and _.
 the first character must not be a digit.
 # var
 var has no block scope except function scope
 in var we can redecleare the variavle name
 in var we can redefine the variable value
 in var we can not make const variable
 # let
 let has block scope
 in let we can not we decleare the variable name
 in let we can redefine the value
 in var we can not make const variable
 # const
 const have block scope
 in const we can not redecleare the variable
 in const we can not redefine the variable value
 in const we can make const variable
 note: when we are decleare the variable with const, it is mendatory to define the variable value at same line otherwise we will get an error

                             # 26 feb 2024

 # data types   
 # number   
 # BigInt
 # boolean (logical data type)
 # null
 # undefined
 # array
 # string
 # object and symbol
                             # 27 feb 2024

# objects are collection of property   
# symbol
# Interaction properertics: alert, confirm, prompt
alert   //  alert(" hello world)        
prompt  //  let name = prompt("Enter your name" )
confirm //  let result = confirm("Are you sure?")
                 console.log(result);
#   console
console.log( "hello world");     // it will print to
console.error( "hello world");   // it will print to
console.warn( "hello world");    // it will print to
console.info( "hello world");   // it will print to
console.debug( "hello world");  // it will print to
console.table(name , age );               
# string conversion
let num = 15;
console.log(String(num));            // output : "15"
console.log(num.toString());        // output : "15"
# boolean conversion
console.log(Boolean(0))      // output : false
console.log(Boolean(-1))    // output : true
console.log(Boolean(' '))   // output : true
console.log(Boolean(null)) //
`   let bool = true;
console.log(bool.toString());     // output : "true"
console.log(Boolean(15));        // output : "true"
# Number Conversion
let str ="15";
console.log(Number(str));   // output : 15
console.log(parseInt(str));  // output : 15  
# basic operator 
    // operator is symbol  that used for perform some action on variable like addition, subtraction etc
// arithmetic operators + - * / % ++ --
term : "unary", " binary", "operand"
// arithmetic operators
//addition
//subtraction
multiplication
division
modulus (%)
increment (++)
decrement (--)
power (**)
left shift (<<)
right shift (>>>)
unsigned right shift (>>)
relational operators < > <= >= == != === !=== <>
bitwise AND (&)
bitwise OR (|)
XOR (^)
NOT (!)
AND (&&)
OR (||)

                             # 28 feb 2024

 //# addition, substraction, multiplication, division  
  //reminder(modulus %),
 // exponentiation **
 let a = 2;
 let b = 10;
 console.log("Addition: ",a+b);      //output : 12
 console.log("Substraction: ",a-b);  //output : -8
 console.log("Multiplication: ",a*b); //output : 20 
 console.log("Division: ",a/b);       //output : 0.2
 console.log("Remainder: ",a%b);      //output : 0
 console.log("Exponentiation: ",a**b);//output : 100
 
 // string concatenation with binary  operator (+)
 let c = 'Hello';
 let d = 'World';
 console.log("String Concatenation: ",c+d);
  // output Hello World 

// numeric convertion, unary +
let e = "5";
let number =  +e;    //convert string to Number
console.log("Numeric Conversion: ",number);     //output : 5
                              
// increment and decrement
let f = 5;    //initial value of variable f is 5
f++;    //postfix increment
++f ,// prefix return the value before incrementing
console.log("Increment Postfix: ",f);  //output : 5
console.log("Increment Prefix: ", ++f ); //output : 6
f--;    //postfix decre ment
--f ;   //return the value before decrementing

 
                              # 1 mar 2024

# assignment operators // =
# += -= *= /= %
# comparision operators
equal to ==           // returns a Boolean value
not equal to !=       // returns a Boolean value
equal value and equal type ===  
strict not equal !=== // returns a Boolean value
greater than > // returns a Boolean value
less than <   // returns a Boolean value
greater than or equal to >=  // returns a Boolean value
less than or equal to <= // returns a Boolean value
instanceof        // check the object type of an instance with respect to a constructor function
in    // checks whether a property
# logical operators:- &&, ||, !
# ternary operator ?:
 let number = 10;
 number%2 == 0? console.log("even") : console.log("odd");

 let age = 18;
 
 age >= 18  ?
  console.log('you can vote') :
  console.log('you cannot vote');
# logical operators
// &&  - Logical AND 
// ||  - Logical OR
// !   - Logical NOT

let a=5, b=7;
console.log(a === 5 && b === 7);     // true
console.log(a === 5 || b === 10);    // true
console.log(!(a === 5));             // false
# bitwise operators
// AND
// OR
// XOR
// NOT

                         #  4 mar 2024

 # bitwise operator
 // not(~)
 // left shift
 // right shift
 //  zero fill right shift
 # if else
              
                          # 5 mar 2024

# if else ladder
# if (condition){}
# else if (condition){}
# else {}

# nested if else
<!--  number is grater than zero if yes then number is 
odd or even otherwise 
 number should be grater than zero -->
 # switch case 
 # tunary operator(?)
 # nullish coalescing operator (??)

                        // 6 mar 2024

 # loops:- while and for
 #  while loop
 # the do  while loop
 # for loop
 // for in loop
 // for of  loop
 // breaking the loop
 // continue to the next iteration
     // syntax
     for(initialization; condition; increment/decrement) {
         code block to be executed
     }


                                    # 8 mar 2024

# pattern 
# for in loop
# for of loop
                                    # 11 mar 2024
                        # function 
# function declearation
# function variable
# parameters

                                    # 12 mar 2024
                
                            # function
# default values from a function 
# returnig a value from functuin
// object
# object

                                    # 13 mar 2024
# computed properties
# propeerties value shorthand
# properties existance test, "in" operator
# the "for..in " loop
# object references and coping
# comprision by reference 
# cloning merging, object.assign
# nested cloning
# structuredClone
#  garbage collection
                                  
                                    # 15 mar 2024
# object method, "this"
# method shorthand
# "this" in methods
# "this" is not bound
// arrow function have no "this"

                                    # 16 mar 2024
# symbol type


                            # 02/ 04/ 2024
# setter and getter

// class.js

# class basic syntax
 the " class" syntax
 what is class
 what is expression
 Getter/ Setters
 computed names[..]
 class friends
 making bound methods with class fields 


                             # 03/04/2024
# constructor

# class inheritance


# the "extends" keyword

# overriding a method
 
# overriding constructor


     # 15 apr 2024
// rest parameters and spread syntax

// copy and array/ object via spread syntax oprator
// rest variableName
    console.log(window);// window
console.log(this);// window
console.log(a);// undefined
testing()// testing

var a = 00;
 var testing = function testing(){
    coinsole.log("testing)
 }


 // # 13 may 2024

                            #  react ## 13-5-2024 #
# react basic & working with components

                            # 15-5-2024 to 20-5-2024 #
# what is component and its lifecycle ?
  -class
  -function

                        # 22 may 2024



  ##  props 
# class
# function
#  

# 23-05-2024
# jsx
 {/* // jsx is mixture of js and xml */}
      {/* babel is convert to jsx to pure html */}
      // rfc to create component
      // class component
      # rcc
// two type of state management
// component wise state mnaegemnt
// app wise  

// state is unmutable

//1 stCounter (counter +1)
//2 stCounter (counter ++)
//3 stCounter (++counter )
//4 call back
setCounter((prevValue) =>{
    consooe.log(prevValue)
    return +1
})