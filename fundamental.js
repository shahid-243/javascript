// code structure 
/*
 // statements
 console.log(" hello world ");
 document.write(" hello world");

 // semicolons(;)
 var x = 5;
 y = "hello";
 z = true;

 // comments
 /* this is a multi line comment */
// single line comments start with // and go until the end of the line    */



//  # Variable (  let , const, var)
/*
//  let

let a = 10;
console.log(a );
 a = 45;
 console.log(a);

// const

const b = 12; // this is not changeable
console.log(b);
const  name = " shahid";
console.log(name);


 // var
 var c = 12;
 console.log(c);
  c = 25;
  console.log(c);
*/
// # 26 feb 2024 #
// data types in JavaScript
/*
// number
let num = 10 ;
console.log(num, typeof num);
let number = 1111111111111111111111;
console.log(number, typeof number);

// BigInt
let bigNum = 987654321987654321n;
console.log(bigNum,typeof bigNum);

// string
let str = 'Hello World';
console.log(str, typeof str);

// boolean
let bool = true;
console.log(bool, typeof bool);

// null & undefined
let nul = null;
console.log(nul, typeof nul);

let undef = undefined;
console.log(undef, typeof undef)
                                           // # 27 feb 2024 #
// object
let obj = {
    firstName: 'md',
    midNane: 'shahid',
    lastName :'alam',
    age : 23
}

console.log(obj,typeof obj);
// symbols
let sym = Symbol("unique");
console.log(sym, typeof sym);
console.log(sym.description);

// arrays
let arr = [1,2,3,'a','b','c'];
console.log(arr, typeof arr);
console.log(arr.length); 
*/
// interaction propertics: alert, confirm , prompt :- this is browser part not a javascript part
/*
// alert
alert('This is an Alert!');
console.log(alert('shahid'));
// promtp
let  userName=prompt('Please Enter Your Name');
console.log(userName);

// confirm
if (confirm('Do You Want To Continue?')){
    console.log('Yes Clicked');
}else{
   console.log('No Clicked'); 
}

// date
let today = new Date();
console.log(today);
*/
//string conversion
// number
/*  let number = 10;
console.log(number,typeof number);
let str = String(number);
console.log(str,typeof str);

// boolean 
let bool = true;
console.log(bool, typeof bool);
let strBool = String(bool);
console.log(strBool, typeof str);  */
// numeric conversion
// string
/* let strNum = '45';
console.log(strNum , typeof strNum) ;
let num = Number(strNum);
console.log(num , typeof num);
// boolean
let bool = false ;
console.log(bool, typeof bool);
let num1 = Number(bool);
console.log(num1 , typeof num1);  */
// boolean conversion :- 0,null, undefined are falsy statement other are truthy statement
// numner
/*  let  num2 = 35;
console.log(num2 , typeof num2 );
let bool1 = Boolean(num2);
console.log(bool1 , typeof bool1);
// string
let str= "my name is shahid,";
console.log(str , typeof str);
let bool2 = Boolean(str);
console.log(bool2 , typeof bool2);   */
// basic operator
// arithimetic  operators +, -, *, /, %, ++, --
// addition 
/* let a = 45;
let b = 25;
console.log(a + b);

// subtraction
console.log(a - b);

// multiplication
console.log(a * b);

// division
console.log(a / b);

// modulus
console.log(a % b); */

// increment and decrement

// let a = "shahid";
// console.log(a, typeof a);
// console.log(a.toUpperCase()); // Converts the string to uppercase

// let b = "MOHAN"
// console.log(b.toLowerCase())  //Converts the string to lower case

// # 6 mar 2024 #
// for loops
// syntax 
/* for( initialiazation; condition; updation){
   statement ;
   statement ;
   statement ;
   ......
} */

/*
 for (let num = 1; num <= 10; num++){
    console.log(num);
    document.write(num);
 }  

 // array 
 let arr = [10,20,30,40,50];

 for (let index = 0; index < arr.length; index++){
    console.log(arr[index]);
 }
 // string
 let str = 'shahid';
 for (let index = 0; index <= str.length; index++){
    console.log(str[index]);
 }  */

// pattern
/*
// 1
document.write("question 1 <br>");
 
for (let row = 0; row <5; row++){
for ( let col = 0; col <8; col++){
document.write("  *  ");
}
document.write("<br>")
} 
// 2 second method 
document.write("question 2 <br>");
let rowCount =8;
let colCount =23;
for (let row = 0; row < rowCount; row++){
for ( let col = 0; col < colCount; col++){
document.write("*&nbsp");
}
document.write("<br>")
} 

// 3
document.write("question 3 <br>");
for (let row = 0; row < 5; row++){
for(let col = 0; col < 5; col++){
if(row >= col){
document.write("*&nbsp;&nbsp");
}
}
 
document.write( "<br>" );
}
// 4 socond method
document.write("question 4 <br>");
let nums = 3;
for( let row = 0; row < nums; row++){
for(let col = 0; col < row +1; col++){
document.write("* ");
}
document.write("<br>");
}

// 5
document.write("question 5 <br>");
for ( let row = 0; row < 6; row++){
for( let col = 0; col <6- row; col++){
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
}
for ( let col = 0; col < 6; col++){
if( row >= col){
document.write( "*&nbsp;&nbsp;");
}
}
document.write("<br>");
}

// 6
document.write("question pyramid <br>");
let num =8;
for(row =0 ; row < num; row++){
for(col=0; col <num-row-1; col++){
document.write( "&nbsp;&nbsp" );
}
for(col= 0; col < row+1; col++){
document.write( "*&nbsp;&nbsp" )
}
document.write("<br>")
}
// 7  question 6
document.write("question 6 <br>");
for ( let row = 0; row < 4; row++){
for( let col = 0; col <4- row; col++){
document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
}
for ( let col = 0; col < 4; col++){
if( row >= col){
document.write( "*&nbsp;&nbsp;");
}
}
for( col =1; col<=row; col++){
document.write("*&nbsp;");
}
document.write("<br>");
}

// 8
document.write("question 7 <br>");
for( let row = 0; row < 4; row ++) {
for (let col = 0; col <4-row; col++){
document.write("*&nbsp;&nbsp;");
}
document.write("<br>");
}

// 9 second method
document.write("question 8 <br>");
let n = 8;
for(let row = 0; row <n; row++){
for(let col = 0; col < n-row; col++){
document.write("*&nbsp")
}
document.write("<br>");
}

// 10
document.write("question 9 <br>");
for (let row = 0; row <8; row++) {
if (row === 0 || row  === 7) {
for (let col = 0; col < 8; col++) {
document.write("*&nbsp;&nbsp");
}
}
else {
document.write("*&nbsp;&nbsp");
for (let i = 0; i < 6; i++) {
document.write("&nbsp;&nbsp;&nbsp;&nbsp");
}
document.write("*");
}
document.write("<br>");
}
// 11 second method
document.write("question 10 <br>");
let rowcount = 8;
let  colcount = 20;
for (let row = 0; row < rowcount; row++) {
if (row === 0 || row  === rowcount-1) {
for (let col = 0; col < colcount; col++) {
document.write("*&nbsp;&nbsp");
}
}
else {
document.write("*&nbsp;&nbsp");
for (let i = 0; i < colcount-2; i++) {
document.write("&nbsp;&nbsp;&nbsp;&nbsp");
}
document.write("*");
}
document.write("<br>");
}

// 12
document.write("question 11 <br>");
for( let row = 0; row <6; row++){
for(let col = 0; col<row; col++){
document.write("&nbsp;&nbsp");
} 
for(col =0; col < 6-row; col++){
document.write( "*&nbsp;&nbsp" );
}
document.write("<br>");
}
// 13
document.write("question 12 <br>");
let numb = 5;
for( let row = 0; row < numb; row++){
for(let col = 0; col < row +1; col++){
document.write("* ");
}
document.write("<br>");
}
for(let row = 0; row <numb; row++){
for(let col = 0; col < numb-row; col++){
document.write("*&nbsp")
}
document.write("<br>");
}
// 14 
document.write("question 13 <br>");
let number = 6;
for ( let row = 0; row < number; row++){
for( let col = 0; col <number- row; col++){
document.write("&nbsp;&nbsp");
}
for ( let col = 0; col < number; col++){
if( row >= col){
document.write( "*");
}
}
document.write("<br>");
}
for(let row =0; row < number; row ++){
for(col =0; col<row+1; col++){
document.write( "&nbsp;&nbsp" )
}
for(col =0; col<number-row; col++){
document.write("*");
}
document.write( "<br>" );
}
// 15
document.write("question 14 <br>");
let nub =5;
for(row =0 ; row < nub; row++){
for(col=0; col <nub-row-1; col++){
document.write( "&nbsp;&nbsp" );
}
for(col= 0; col < row+1; col++){
document.write( "*&nbsp;&nbsp" )
}
document.write("<br>")
}
for( let row = 0; row <nub; row++){
for(let col = 0; col<row; col++){
document.write("&nbsp;&nbsp");
} 
for(col =0; col < nub-row; col++){
document.write( "*&nbsp;&nbsp" );
}
document.write("<br>");
}
*/


/*
                     // assignment ( home work )
// 1. write a program to sort an array without using  any sort function.
document.write("question 1. <br>");
let arr = [5, 3, 8, 1, 6];

// bubble sort algorithm
for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j < arr.length; j++) {
    if (arr[i] > arr[j ]) {
      // swap elements
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

document.write(arr);

// 2. write a program to reverse an array without reverse  function

document.write("<br> question 2.<br> ");
let ar = [5, 3, 8, 1, 6];

// bubble sort algorithm
for (let i = 0; i < ar.length; i++) {
  for (let j = i+1; j < ar.length; j++) {
    if (ar[i] < ar[j ]) {
      // swap elements
      let temp = ar[i];
      ar[i] = ar[j];
      ar[j] = temp;
    }
  }
}

document.write(ar);

// 3. write a program to get the maximum value in an array without using max function.
 document.write("<br> question 3 . <br> ");
let array = [1, 2, 3, 4, 5];

// finding maximum value in an array
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

document.write(max); 

// 4 write a program to get the second maximum value in an array.
document.write("<br> question 4 . <br> ");
let arrr = [1, 2,9,7, 3, 4, 5];

// finding second maximum value in an array
let maxx = arrr[0];
let secMax = -Infinity;
for (let i = 1; i < arr.length; i++) {
  if (arrr[i] > maxx) {
    secMax = maxx;
    maxx = arrr[i];
  } else if (arrr[i] > secMax && arrr[i] < maxx) {
    secMax = arrr[i];
  }
}
document.write(secMax);

// 5 write a program to get the minimum value in an array without using min function.
document.write("<br> question 5 . <br> ");
let shahid = [1, 2, 3, 4, 5];

// finding minimum value in an array
let min = shahid[0];
for (let i = 1; i < shahid.length; i++) {
  if (shahid[i] < min) {
    min = shahid[i];
  }
}
document.write(min);
// 6 write a program to get the second minimum value in an array.
document.write("<br> question 6 . <br> ");

let arrs = [1, 2, 3, 4, 5];

// finding second minimum value in an array
let min1 = arrs[0];
let secMin = Infinity;
for (let i = 1; i < arrs.length; i++) {
  if (arrs[i] < min1) {
    secMin = min1;
    min1 = arrs[i];
  } else if (arrs[i] < secMin && arrs[i] !== min1) {
    secMin = arrs[i];
  }
}

document.write("second smallest number is " + secMin);

// 7. write a program to check number is palindrome or not.

document.write("<br> question 7 . <br> ");

// 9. write a program to reverse a numberwrite a program to reverse a number
document.write("<br> question 9 . <br> ");

let nums = 12345;

// converting number to string
let str = String(nums);
// reversing the string
let reversedStr = str.split('').reverse().join('');
// converting the reversed string to number
let reversedNum = Number(reversedStr);

document.write(reversedNum);

// 10. write a program to check the number is perfect square number or not.

document.write("<br> question 10 .  <br>");
let num = 16;

// checking if the number is negative
if (num < 0) {
  document.write(num + " is not a perfect square number.");
}

// finding the square root of the number
let sqrt = Math.sqrt(num);

// checking if the square root is an integer
if (sqrt % 1 === 0) {
   document.write(num + " is a perfect square number.");
} else {
   document.write(num + " is not a perfect square number.");
}

// 11. writa a program to add the value in an array without using pop function.
document.write("<br> question 11 .  <br>");
let arrt = [1, 2, 3];

// creating a new array with the new length
let newArr = new Array(arrt.length + 1);
// copying the elements from the old array to the new array
for (let i = 0; i < arrt.length; i++) {
  newArr[i] = arrt[i];
}
// adding the new value to the end of the new array
newArr[newArr.length - 1] = 8;
document.write(newArr); 

// 12 write a program to delete a value from array with using buildin function


// 13. writa a program to merge an array without using merge function.
 document.write("<br> question 13 .  <br>");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// creating a new array with the length of the sum of the lengths of the two arrays
let newarr = new Array(arr1.length + arr2.length);
// copying the elements from the first array to the new array
for (let i = 0; i < arr1.length; i++) {
  newarr[i] = arr1[i];
}
// copying the elements from the second array to the new array
for (let i = 0; i < arr2.length; i++) {
  newarr[arr1.length + i] = arr2[i];
}
document.write(newarr); 

*/
// 8 march 20
// for in 
//Array

// let array = [10,20,30,40];
// for( let index in array){
//    console.log(index, array[index]);  
// }

// string

// let string = "shahid"
//  for(let char in string){
//    console.log(char, string[char]);
//  }

// OBJECT
/*
let obj = {
   FirstName: "shahid",
   LastName: "Alam",
   Age: 24
}

for (const key in obj) {
   console.log(key, obj[key]);
}
console.log(obj['FirstName']);
console.log(obj[Age]);  */

// FOR OF
/* //array
let arr = [10,20,30,40,50];
for (let value of arr) {
   console.log(value);
} */

//  string
/* let str = "shahid";
for (let shahid of str) {
   console.log(shahid);
} */

// object
// let obj = {
//    firstName : "shahid",
//    lastName: "alam",
//    fullNmae : "shahid alam"
// }
// for (const value of object) {
//    console.log(value);  // object gives a errors not work on the for of
// }

// table print for loop
            /* let n = prompt( 'Enter number of table' );
            for ( let i = 1; i<=10 ; i++){
               document.write( i*n + "<br>");
            } */
   
   //    let number =1;
   //    number <= 10;
   //    for(; ; ){
   //    console.log(number);
   //    number++
   // }

   //  WHILE
   // syntax
   /* while(condition){

    }*/

   /* let number = 1;
    while(number <= 5){
       console.log(number);
       number++;
    }*/
   
    /*let arr = [10,20,30,40]
    let index = 0;
    while(index < arr.length){
        console.log(index, arr[index]);
        index++;
    }*/

    /*let string = "shahid"
    let index = 0;
    while(index < string.length){
        console.log(index, string[index]);
        index++;
    }*/
/*let number = 1234567890;
let counter = 0;
while(number > 0) {
 number++
 number = parseInt(number / 10);
 console.log(counter++, number);
}
console.log(counter); */

/*DO WHILE
let number = 10;
do{
   console.log(number);
   number--
}
while(number >10)*/


// # 11 mar 2024

//   FUNCTION  is use to code reuseablity
// function declearation

/*function myFunction(){
    // code to be executed
    console.log("Hello World");
}
// call
myFunction(); */
/*
function addition(){
   let a =10, b= 20;
   console.log(a + b);
}
addition();
// function parameters and  argumnets
// function parameters
function addition1(c, d){
  console.log(c + d);
}
// argumnets
addition1(10,50);

// local scope
function addition2(num1,num2){
  let sum = num1 + num2 ; // sum is local variable
  console.log(sum);
}
addition2(30,60);
console.log(sum); */

// global scope
/* let sum = 0;
function addition2(num1,num2){
  sum = num1 + num2 ; // sum is local variable
  console.log(sum);
}
console.log(sum);
addition2(30,60);
console.log(sum); */

// outer variavle
// function testing(){
//   let a = 10;

//   function test(){
//     console.log(a);
//   }
//    test();
// }


// # 12 mar 2024 


// function expression
// arrow function
// callbach function

// default value
/* function addition(num1, num2, num3=0){
   console.log(num1 , num2, num3);
}
addition(20,30,);*/

// returnnig a value
/*function addition( num1=0 , num2=0, num3=0){
  return num1 + num2+ num3; // after return nothing are executed
}
let sum = addition(5,10,25);
console.log(sum);*/

// function expressions
/* let addition = function(num1, num2){        // anonymous function : there  is no name of the function
  console.log(num1 + num2);
 }
 addition(5,7) ;  */                      // calling the function

// Arrow Function
/*
let arrowFunction = ()=>  {           // ()=> {} this is arrow function syntax
  console.log("Hello World");            
}
arrowFunction();                         // calling the arrow function

let addition = (num1, num2, num3 )=>{
  console.log(num1, num2, num3);
  return num1+ num2+  num3;              // returning the value from the function
}
 let sum = addition(10,20,30);
 console.log(sum);
*/
/* let arrowFunction = (para1, para2)=>{
   statement ;
}
let addition  = (a,b) =>{
  return a+b;
}
console.log(addition(4,6));    */        // calling the arrow function with parameters and getting the result

let squareofNumber = (num) =>{
  return  num * num;                // single line arrow function
}
console.log(squareofNumber(9));     // passing the argument to get the output 

// callback function 
/*
function calculate(a, b, operator = "+"){
  if (operator === "+"){
    console.log("sum:" + (a+b));
}
else if (operator == "-"){
  console.log("sub:" + (a-b));
}
else if (operator == "*"){
  console.log("mul:" + (a*b));
}
else if (operator == "/"){
  console.log("div:" + (a/b));
}
else if (operator == "%"){
  console.log("mod:" + (a%b));
}
else if (operator == "**"){
  console.log("pow:" + (a**b));
}
else{
  console.log("please enter the valid  operator");
}
}
calculate(12, 2 , "**" );      */         // passing parameter to the callback function

// now call back function using another way

function testing(callback){
  console.log(callback);
  callback();                       // calling the callback function here
}
function test(){
  console.log("test function called");
}
testing(test);                       // calling a function as an argument of other function,, that is callback function
test();                              // calling the passed function from outside

testing(function(){
  console.log("normal function  called inside of a callback function");
});                                // passing normal function as a argument in callback function


testing(()=> {
  console.log("arrow function called inside of a callback function");
});                               // arrow function is also can be used as a callback function


//  calculation

function calculate(a,b, callback){
        console.log(a,b,callback);
        callback(a,b);
}

calculate(10,20, function(num1,num2){
     console.log("sum:" + (num1+ num2));
});

calculate(10,40, function(num1,num2){
  console.log("sunb:" + (num2 - num1));
});

calculate(5,4, function(num1,num2){
  console.log("multipe:" + (num1 * num2));
});

calculate(50,20, function(num1,num2){
  console.log("module:" + (num1 % num2)); // reminder
});

calculate(50,2, function(num1,num2){
  console.log("pow:" + (num1 ** num2));
});

calculate(50,3, function(num1,num2){
  console.log("divide:" + (num1 / num2));
});

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

let obj = {
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



// # 13 mar 2024


// computed properties
//   let firstName = "anything"; // replace key name
// let object = {
//    [firstName] : "shahid",
// }
// console.log(object);

// property value shorthand
/*   let firstName = "shahid";

 let obj = {
    firstName      // firstName : firstName
 } 
 console.log(obj);*/

