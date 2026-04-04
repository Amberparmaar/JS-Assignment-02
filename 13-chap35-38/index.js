//////////////  FUNCTION
////////////// Assignment # 35-38 JAVASCRIPT

// Q1 Write a function that displays current date & time in your
// browser.

// function dateTime(){
//     var date = new Date();
//     document.writeln(date);
// }
// dateTime();

// Q2 Write a function that takes first & last name and then it
// greets the user using his full name.

// function fullName(fname, lname){
//     document.writeln(`Hello ${fname} ${lname}`);
// }
// fullName("Ahmed", "khan")

// Q3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");

// function sum(num1, num2){
//      let result = num1 + num2;
//      return result;
// }
// document.writeln("Sum is: " + sum(num1, num2));

// Q4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var operator = prompt("Enter operator");

// function calculation(num1, num2, operator){
//     if(operator == "+"){
//         return num1 + num2;
//     }
//     else if(operator == "-"){
//         return num1 - num2;
//     }
//     else if(operator == "*"){
//         return num1 * num2;
//     }
//     else if(operator == "/"){
//         return num1 / num2;
//     }
//     else{
//         return "Invalid operator";
//     }

// }
// document.writeln(calculation(num1, num2, operator));

// Q5. Write a function that squares its argument.

// function square(num){
//         return num * num;
// }

// document.writeln("Square is :" + square(2));

// Q6. Write a function that computes factorial of a number.

// function factorial(num){
//     let result = 1;

//     for(let i = num; i >= 1; i--){
//         result = result * i;
//     }

//     return result;
// }

// document.writeln("Factorial is: " + factorial(4));

// Q7. Write a function that take start and end number as inputs
// & display counting in your browser.

// let start = +prompt("Enter start number");
// let end = +prompt("Enter end number");

// function counting(start, end){
//     for(let i = start; i <= end; i++){
//         document.writeln(i);
//     }
// }

// counting(start, end);

// Q8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calculateHypotenuse() {
//   let inputBase = +prompt("Enter base: ");
//   let inputPerpendicular = +prompt("Enter perpendicular: ");

//   function calculateSquare(num) {
//     return num * num;
//   }

//   let baseSquare = calculateSquare(inputBase);
//   let perpendicularSquare = calculateSquare(inputPerpendicular);
//   let sum = baseSquare + perpendicularSquare;
//   let hypotenuse = Math.round(Math.sqrt(sum));

//   return hypotenuse;
// }

// let result = calculateHypotenuse();
// document.writeln(result);




// Q9. Write a function that calculates the area of a rectangle.
//      A = width * height
//     Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function areaOfRectangle(width, height){
//        let A =width * height;
//     return A;
// }
// let w = 4;
// let h = 5;
// console.log(areaOfRectangle(3, 6));
// console.log(areaOfRectangle(w, h));




// Q10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function palindrome(str){
//     let reversed = str.split("").reverse().join("");
    
//     if(str === reversed){
//         return true;  // palindrome hai
//     } else {
//         return false; // palindrome nahi hai
//     }
// }
// console.log(palindrome("madam")); // true
// console.log(palindrome("hello")); // false




// Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// Q12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// Q13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// Q14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle    =     2πr
// Area of circle       =     πr2
