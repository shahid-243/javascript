// assignment ( home work )

// 8 mar 2024
// print table with the help of prompt and loops
let n = prompt('Enter number of table');
for (let i = 1; i <= 10; i++) {
  document.write(i * n + "<br>");
}

// 1. write a program to sort an array without using  any sort function.
document.write("question 1. <br>");
let arr = [5, 3, 8, 1, 6];

// bubble sort algorithm
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
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
  for (let j = i + 1; j < ar.length; j++) {
    if (ar[i] < ar[j]) {
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
let arrr = [1, 2, 9, 7, 3, 4, 5];

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

