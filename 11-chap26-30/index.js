////////////   MATH METHODS 
////////////   Assignment # 26-30 JAVASCRIPT

// Q1 Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 

// let num = +prompt('Enter a positive integer');
// let round = Math.round(num);
// let floor = Math.floor(num);
// let ceil = Math.ceil(num);

// document.writeln(`The number is ${num} <br>`);
// document.writeln(`The round off value is ${round} <br>`);
// document.writeln(`The floor value is ${floor} <br>`);
// document.writeln(`The ceil value is ${ceil} <br>`);


// Q2 Write a program that takes a negative floating point 
// number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 

// let num = +prompt('Enter a negative floating point number: ');
// let round = Math.round(num);
// let floor = Math.floor(num);
// let ceil = Math.ceil(num);

// document.writeln(`The number is ${num} <br>`);
// document.writeln(`The round off value is ${round} <br>`);
// document.writeln(`The floor value is ${floor} <br>`);
// document.writeln(`The ceil value is ${ceil} <br>`);



// Q3  Write a program that displays the absolute value of a 
// number.

// absolute number means numbers in a positive form

// var userInput = +prompt('Enter number here: ');
// let absoluteValue = Math.abs(userInput);

// document.writeln(`The absolute value is ${absoluteValue}`);



// Q4 Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:


// var diceValue = Math.floor(Math.random() * 6) + 1;

// document.writeln(`The dice value is ${diceValue}`)


// Q5 Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser 


// var coinValue = Math.floor(Math.random() * 2) + 1;

// if(coinValue == 1){
//     document.writeln(`${coinValue} <br>`)
//     document.writeln(`Random coin Value is head <br>`)
// }else{
//     document.writeln(`${coinValue} <br>`)
//     document.writeln(`Random coin Value is tail`)
// }

// Q6 Write a program that shows a random number between 1 
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.writeln(`The random number between 1 & 100 is : ${randomNumber}`)


// Q7 Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 

// var userWeight = prompt('Enter your weight here: ');
// var weight = parseFloat(userWeight);
// document.writeln(`The weight of user is : ${weight} kilograms.`);


// Q8 Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.


// let input = +prompt('Enter a number between 1 to 10');
// let random = Math.floor(Math.random() * 10) + 1;
// if(input === random){
//     document.writeln(`🏆Congratulation! Random Number is ${random}`)
// }else{
//     alert('try again')    
// }

