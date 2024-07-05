
// # 19 apr 2024

// console.log(window.document);

// selector 

// id
//  let heading = document.getElementById('heading');
//  console.log(heading);
//  console.dir(heading);   // 
 
//  //get data
//  console.log(heading.innerText) ;    // text content of the element
//  console.log(heading.innerHTML);     // inner html of the element
//  //change data
//  heading.innerText ="Hello World from dom <button> Click</button>";
//  heading.innerHTML = "hello worl from dom  <span> hello again </span>";

 /*
 * javascript can chsnge all the html element in the page
 * javascript can change all the html attribute in the page
 * javascript can change all the css style in the page
 * javascript can remove existing html elements and attribute
 * javascript can react  to user events like click, mouseover etc..
 *
 */
// class

// tag/element



// # ** clock from dom // assignment

setInterval(() => { 
let date = new Date();

document.getElementById('clock').innerHTML= `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

document.getElementById('time').innerHTML= `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

})


// 22 apr 2024

// how to create element via dom

let div = document.createElement("div");
div.innerHTML ="div created by dom"

let root = document.getElementById("root");