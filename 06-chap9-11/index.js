////// USER INPUT & CONDITIONAL STATEMENT

// Q1   Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// const cityName = prompt("Enter your city name: ");
// if(cityName.toLowerCase() === "karachi"){
//     alert("Welcome to city of lights");
// }

// Q2  Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// const gender = prompt("Enter your gender: ");
// if(gender.toLowerCase() === "male"){
//     alert("Good Morning Sir.");
// }else if(gender.toLowerCase() === "female"){
//     alert("Good Morning Ma'am.");
//  }
// else{
//     alert("Invalid Input")
// }

// Q3 Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var userInput = prompt("Enter color of road traffic signal: ");
// if(userInput.toLowerCase() === "red"){
//     alert("Must Stop 🚫");
// }else if(userInput.toLowerCase() === "yellow"){
//     alert("Ready to move 🚘");
// }else if(userInput.toLowerCase() === "green"){
//     alert("Move now 🚗");
// }else{
//     alert("Invalid Input");
// }

//Q4 Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// var userInput = prompt("Enter remaining fuel in car (in litres): ");
// if(userInput < 0.25){
//     alert("Please refill the fuel in your car");
// }else{
//     alert("You have enough fuel in your car");
// }

// Q5 Run this script, & check whether alert message would be displayed or not. Record the outputs.
//a
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// //b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// } else {
//   alert("given condition for variable b is false");
// }
// //c
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// } else {
//   alert("condition 1 is not true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// } else {
//   alert("condition 3 is not true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// //d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// //e
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// //f
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// Q6 Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table: Show the total marks, marks obtained, percentage, grade &
// remarks like:


// var marksObtained = +prompt("Enter Obtained Marks: ");
// var totalMarks = +prompt("Enter Total Marks: ");
// var percentage = (marksObtained / totalMarks) * 100;

// document.writeln(`<h1>Marks Sheet</h1>`);
// document.writeln(`Total Marks: ${totalMarks} <br>`);
// document.writeln(`Marks Obtained: ${marksObtained}  <br>`);
// document.writeln(`Percentage: ${percentage}% <br>`);

// if (percentage >= 80) {
//   document.writeln(`Grade : A-One </br> Remarks : Excellent </br>`);
// } else if (percentage >= 70) {
//   document.writeln(`Grade : A </br> Remarks : Good </br>`);
// } else if (percentage >= 60) {
//   document.writeln(
//     `Grade : B </br> Remarks : You need to improve </br>`
//   );
// } else {
//   document.writeln(`Grade : Fail </br> Remarks : Sorry!`);
// }


// Q7  Guess game: Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”.
// var secretNumber = 5;
// var guessNumber = +prompt("Guess the secret number (ranging from 1 to 10): ");
// if(guessNumber === secretNumber){
//     alert("Bingo! Correct answer");
// }else if(guessNumber === secretNumber + 1){
//     alert("Close enough to the correct answer");
// }else{
//     alert("Sorry! Try again");
// }


//Q8 Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number 
// is divisible by 3

// const num = +prompt("Enter a number");

// if(num %3 === 0){
//     alert("The number is divisible by 3");
// }else{
//     alert("The number is not divisible by 3");

// }


//Q9  Write a program that checks whether the given input is an even number or an odd number. 

// var input = +prompt("Enter a number");
// if(input % 2 === 0){
//     alert("The number is even");
// }else{
//     alert("The number is odd");

// }

// Q10 Write a program that takes temperature as input and 
// shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var userInput = +prompt("Enter temperature: ");
// if(userInput > 40){
//     alert("It is too hot outside.");
// }else if(userInput > 30){
//     alert("The Weather today is Normal.");
// }else if(userInput > 20){
//     alert("Today’s Weather is cool.");
// }else if(userInput > 10){
//     alert("OMG! Today’s weather is so Cool.");
// }else{
//     alert("Invalid Input");
// }

// Q11 Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user.   


// var firstNum = +prompt("Enter first Number: ");
// var secondNum = +prompt("Enter second Number: ");
// var operator = prompt("Enter operator (+, -, *, /, %): ");

// if(operator === "+"){
//     alert(firstNum + secondNum);
// }else if(operator === "-"){
//     alert(firstNum - secondNum);
// }else if(operator === "*"){
//     alert(firstNum * secondNum);
// }else if(operator === "/"){
//     alert(firstNum / secondNum);
// }else if(operator === "%"){
//     alert(firstNum % secondNum);
// }else{
//     alert("Invalid operator");
// }