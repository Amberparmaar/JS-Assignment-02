//============= STRING METHODS  ===============
//=============== Assignment # 21-25  ===============

// Q1 Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let fname = prompt('Enter first name: ');
// let lname = prompt('Enter last name: ');

// let fullName = fname + " " +lname;
// console.log(`Hello! ${fullName}`);

// Q2 Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobileModel = prompt('Enter favorite mobile phone model: ');

// let lengthOfString = mobileModel.length
// console.log(`Mobile Phone Model is ${mobileModel} & its length is ${lengthOfString}.`);

// Q3 Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let string = 'Pakistani';
// let result = string.indexOf('n');
// console.log(`String: ${string}`);
// console.log(`Index of "n" is ${result}`);

// Q4 Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let string = 'Hello World';
// let result = string.lastIndexOf('l');
// console.log(`String: ${string}`);
// console.log(`Last Index of "l" is ${result}`);

// Q5 Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

//  let string = 'Pakistani';

// let result = string.charAt(3);
// console.log(`String: ${string}`);
// console.log(`Character at 3rd index in the word 'Pakistani' is ${result}`);

// Q6 Repeat Q1 using string concat() method.

// let fname = prompt('Enter first name: ');
// let lname = prompt('Enter last name: ');

// let fullName = fname.concat(" ",lname);
// console.log(`Hello! ${fullName}`);

// Q7 Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let string = 'Hyderabad';
// let replace = string.replace("Hyder", "Islam");
// console.log(replace);

// Q8 Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = 'Ali and Sami are best friends. They play cricket and football together.';

// let result = message.replace(/and/g, "&"); // g flag replace all occurances of "and" in message
// console.log(result);

// Q9 Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let string = "472";
// console.log(`Value: ${string}`);
// console.log(`Type : ${typeof(string)}`);
// let convertToNumber = Number(string);
// console.log(`Value : ${convertToNumber}`);
// console.log(`Type : ${typeof(convertToNumber)}`);

// Q10 Write a program that takes user input. Convert and
// show the input in capital letters.

// const userInput = prompt('Enter text here: ');
// document.writeln(`User Input : ${userInput} <br>`);
// let upperCase = userInput.toUpperCase()
// document.writeln(`Upper Case : ${upperCase}`)

// Q11 Write a program that takes user input. Convert and
// show the input in title case.

// const userInput = prompt("Enter text:");
// let words = userInput.split(" ");
// let result = "";

// for (var i = 0; i < words.length; i++) {
//   let word = words[i];

//   let newWord = word[0].toUpperCase() + word.slice(1);
//   result += newWord + " ";
// }

// document.writeln(`User Input: ${userInput} <br>`);
// document.writeln(`Title Case: ${result}`);

// Q12 Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// let convertToString = num.toString();
// let result = convertToString.replace(".", "");
// document.writeln(`Value: ${num} <br>`);
// document.writeln(`Type: ${typeof(num)} <br>`);
// document.writeln(`Result: ${result} <br>`);

// Q13 Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username = prompt("Enter your username:");

// if (username.includes("@") || username.includes(",") ||
//     username.includes(".") || username.includes("!")) {
//     console.log("Please enter a valid username");
// } else {
//     console.log("Valid Username");
// }

// Q14 You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// var array = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt(
//   "Welcome to ABC Bakery. What do you want to order sir/ma'am?",
// ).toLowerCase();

// var found = false;

// for (var i = 0; i < array.length; i++) {
//   if (userInput === array[i]) {
//     found = true;
//     break; // loop roknay k liye use hota hay
//   }
// }
// if (found) {
//   document.writeln(`${userInput} is available at ${array.indexOf(userInput)} at our Bakery.`)
// } else {
//   document.writeln(`${userInput} is not available at our Bakery.`)
// }

// Q15 Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Enter password");

// //  It must at least 6 characters long
// if (password.length < 6) {
//   document.writeln(`Invalid: password too short`)
// } else if (!isNaN(password[0])) { // It should not start with a number
//   document.writeln(`Invalid: should not start with number`)
// } else {
//   var hasLetter = false;
//   var hasNumber = false;

// //   It should contain alphabets and numbers
//   for (var i = 0; i < password.length; i++) {
//     if (isNaN(password[i])) {
//       hasLetter = true;
//     } else {
//       hasNumber = true;
//     }
//   }

//   if (hasLetter && hasNumber) {
//     document.writeln(`Enter password: ${password}`)
//   } else {
//  document.writeln(`Invalid: must contain letters & numbers`)
//   }
// }



// Q16 Write a program to convert the following string to an 
// array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser.


// var university = 'University of Karachi';

// var splitString = university.split(''); // split(' ') → words ke basis pe array ------ split('') → characters ke basis pe array

// for (var i = 0; i < splitString.length; i++) {
//   document.writeln(splitString[i] + "<br>");
// }


// Q17 Write a program to display the last character of a user 
// input.  


// let userInput = prompt('Enter text here: ');
// let lastCharacter = userInput.charAt(userInput.length - 1);
// document.writeln(`User Input: ${userInput} <br>`);
// document.writeln(`Last Character: ${lastCharacter}`);




// Q18 You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.   

// let text = 'The quick brown fox jumps over the lazy dog';
// let word = text.toLowerCase().split(' ');
// let count = 0;
// for(var i = 0; i < word.length; i++){
//     if(word[i] === 'the'){
//         count++;
//     }
// }
// document.writeln(`Text: ${text} <br>`);
// document.writeln(`There are ${count} occurrence(s) of the word 'the'.`);


