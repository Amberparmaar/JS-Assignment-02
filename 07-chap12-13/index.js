////// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS    

// Q1   Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).


// let char = prompt("Enter characters here: ");

// let ascii = char.charCodeAt(0);

// if(ascii >= 48 && ascii <= 57){
//     alert(char + " is a number.");
// } 
// else if(ascii >= 65 && ascii <= 90){
//     alert(char + " is a uppercase letter.");
// } 
// else if(ascii >= 97 && ascii <= 122){
//     alert(char + " is a lowercase letter.");
// } 
// else{
//     alert(char + " not a number or a letter.");
// }


// Q2 Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 

// var num1 = +prompt("Enter first number: ");
// var num2 = +prompt("Enter second number: ");

// if(num1 > num2){
//     alert(num1 + " is greater than " + num2);
// }
// else if(num1 < num2){
//     alert(num2 + " is greater than " + num1);
// }
// else{
//     alert(num1 + " is equal to " + num2);
// }


//Q3 Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// const userInput = +prompt("Enter a number: ");

// if(userInput > 0){
//     alert(userInput + " is a positive number.");
// }
// else if(userInput < 0){
//     alert(userInput + " is a negative number.");
// }
// else if(userInput == 0){
//     alert("Number is zero.");

// }else{
//     alert("Invalid input.");
// }


// Q4 Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// let charc = prompt("Enter a character: ");

// charc = charc.toLowerCase();
// if(charc == "a" || charc == "e" || charc == "i" || charc == "o" || charc == "u"){
//     alert(charc + " is a vowel.");
// }
// else{
//     alert(charc + " is a consonants.");
// }


// Q5 Write a program that a. Store correct password in a JS variable. b.  Asks user to enter his/her password c.  Validate  the two passwords: i. Check if user has entered password. If not, then 
// give message “ Please enter your password” ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.    


// var correctPassword = 456789;
// var userInput = +prompt("Enter your password: ");
// if(userInput == ""){
//     alert("Please enter your password.");
// }
// else if(correctPassword === userInput){
//     alert("Correct! The password you entered matches the original password.");
// }
// else if(correctPassword !== userInput){
//     alert("Incorrect password.");
// }else{
//     alert("Invalid input.");
// }


// Q6 This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }

// corrected code:

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// }
// else {
// greeting = "Good evening"; 
// }
 
// document.writeln(`${greeting}`)


//Q7 Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

// var userInput = +prompt("Enter time in 24 hours clock format: ");

// if(userInput > 0 && userInput <= 1200){
//     alert("Good Morning");
// }
// else if(userInput > 1200 && userInput <= 1700){
//     alert("Good Afternoon");
// }
// else if(userInput > 1700 && userInput <= 2100){
//     alert("Good Evening");
// }
// else if(userInput > 2100 && userInput <= 2400){
//     alert("Good Night");
// }
// else{
//     alert("Invalid input.");
// }



