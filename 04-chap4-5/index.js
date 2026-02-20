/////// chap 4 VARIABLE NAMES: LEGAL & ILLEGAL  //////

// 1.  Declare 3 variables in one statement. 

// var name = "Amber", age = 28, city = "Karachi";


// 2. Declare 5 legal & 5 illegal variable names. 

// legal variables
// var _myName;
// let $myvariable;
// var allStudents;
// let animals3;
// var fruits6name;

// illegal variables

// let 5numbers;
// var my-name;
// var const; // keywords are not use in variables
// let @yourname;
// let all students; // space are not use in variables


// 3. Display this in your browser
// a)  A heading stating “Rules for naming JS variables” 
// b)  Variable names can only contain ______, ______, 
// ______ and ______. 
// For example $my_1stVariable 
// c) Variables must begin with a ______, ______ or 
// _____. For example $name, _name or name 
// d) Variable names are case _________ 
// e) Variable names should not be JS _________   

// document.writeln(`<h1>Rules for naming JS variables</h1>
//     <p>Variable names can only contain $, _ , numbers. For example $my_1stVariable</p>
//     <p>Variables must begin with a $, _, lette. For example $name, _name or name</p>
//     <p>Variable names are case sensitive.</p>
//     <p>Variable names should not be JS Keywords.</p>`)


////// chap 5 MATH EXPRESSIONS //////

// Q1 & 2  Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//  Repeat task1 for subtraction, multiplication, division & modulus


// //add
// var x = +prompt("Enter first number");
// var y = +prompt("Enter second number");
// var add = x + y; 
// document.writeln(`Sum of  ${x} and ${y} is ${add}`);

// // subtraction
// var x = +prompt("Enter first number");
// var y = +prompt("Enter second number");
// var sub = x - y; 
// document.writeln(`Difference of  ${x} and ${y} is ${sub}`);


// // multiplication
// var x = +prompt("Enter first number");
// var y = +prompt("Enter second number");
// var multiply = x * y; 
// document.writeln(`Product of  ${x} and ${y} is ${multiply}`);


// // division
// var x = +prompt("Enter first number");
// var y = +prompt("Enter second number");
// var divide = x / y;
// document.writeln(`Divion of  ${x} and ${y} is ${divide}`);


// Q3  Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value 
// MATH EXPRESSIONS | JAVASCRIPT 
//  Page 2 of 9 
 
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value 
// by 3.  l. Output : “The remainder is : 0”.

// a ---- k
// var value = 5;
// document.writeln(`Value after variable declaration is: ${value} <br>.`);

// document.writeln(`Initial value : ${value} .<br>`);

// value = ++value;
// document.writeln(`Value after increment is: ${value} .<br>`);

// value = value + 7;
// document.writeln(`Value after addition is: ${value} .<br>`);

// value = --value;
// document.writeln(`Value after decrement is: ${value} .<br>`);

// var remainder = value % 3;
// document.writeln(`The remainder is : ${remainder}`);


// Q4 Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output: 

// let ticketPrice = 600;
// let numOfTickets = 5;
// let totalCost = ticketPrice * numOfTickets;

// document.writeln(`Total cost to buy ${numOfTickets} tickets to a movie is ${totalCost} PKR. <br>`)


// Q5 Write a script to display multiplication table of any 
// number in your browser. E.g   

//  document.writeln(`Table of 4 <br>`)
// for(var i = 1; i <= 10; i++){
//     document.writeln(`4 X ${i} = ${4 * i} <br>`)
// }


// Q6 The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c.  Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. 


// var celsius = 25;
// // F = (C × 9/5) + 32
// var fahrenheit = (celsius * 9/5) + 32;
// document.writeln(`${celsius}<sup>o</sup>C is ${fahrenheit}<sup>o</sup>F <br>`)

// var fahrenheit2 = 70;
// // C = (F - 32) × 5/9

// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.writeln(`${fahrenheit2}<sup>o</sup>F is ${celsius2}<sup>o</sup>C`)

// Q7  Write a program to implement checkout process of a shopping cart system for an e-commerce website.
// Store the following in variables 
// MATH EXPRESSIONS | JAVASCRIPT 
//  Page 5 of 9 
 
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges Compute the total cost & show the receipt in your browser. 

// var item1price = 30;
// var item2price = 50;

// var quantityitem1 = 4;
// var quantityitem2 = 3;
// var shippingCharges = 100;

// var totalCost = (item1price * quantityitem1) + (item2price * quantityitem2) + shippingCharges;
// document.writeln(`<h1>Shopping Crat 🛒</h1> `);
// document.writeln(`Price of item 1 is ${item1price} <br>`);
// document.writeln(`Quantity of item 1 is ${quantityitem1} <br>`);
// document.writeln(`Price of item 2 is ${item2price} <br>`);
// document.writeln(`Quantity of item 2 is ${quantityitem2} <br>`);
// document.writeln(`Total cost of your order is ${totalCost}`);



// Q8 Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in your browser 

// var totalMarks = 500;

// var marksObtained = 440;

// var percentage = marksObtained / totalMarks * 100;

// document.writeln(`<h1>Mark Sheet 📑</h1>`);

// document.writeln(`Total Marks : ${totalMarks} <br>`);

// document.writeln(`Marks Obtained : ${marksObtained} <br>`);

// document.writeln(`Percentage : ${percentage}%`);


// Q9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee) 


// var usDollars = 10;
// var saudiRiyals = 25;

// var usDollarRate = 104.80;
// var saudiRiyalRate = 28;

// var totalCurrency = (usDollars * usDollarRate) + (saudiRiyals * saudiRiyalRate);

// document.writeln(`<h1>Currency in PKR</h1>`);

// document.writeln(`Total Currency in PKR : ${totalCurrency}`);



// Q10 Write a program to initialize a variable with some 
// number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 

// let num = 14;
// let result = (num + 5) * 10 / 2;
// console.log(result);

// document.writeln(`Calculation Result : ${result}`);




// Q11  The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored 
// values. 
// Output them to the screen like so: “They are either NN or NN 
// years old”.


// var currentYear = 2026;
// var birthYear = 1994;

// var currentAge = currentYear - birthYear;

// document.writeln(`<h1> The Age Calculator 📱🙎</h1>`);

// document.writeln(`Current Year : ${currentYear} <br>`);
// document.writeln(`Birth Year : ${birthYear} <br>`);
// document.writeln(`They are either ${currentAge - 1} or ${currentAge} years old.`);


// Q12 The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.  
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

// const radius = 20;
// const pi = 3.142;
//  const circumference = 2 * pi * radius;
//  const area = pi * radius * radius;
//  document.writeln(`<h1>The Geometrizer</h1>`);
//  document.writeln(`Radius of Circle: ${radius} <br>`);
//  document.writeln(`The circumference is ${circumference} <br>`);
//  document.writeln(`The area is ${area}`);




// Q13.  The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of 
// your life. Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”. 



// var favouriteSnack = "Chocolate";
// var currentAge = 32;
// var estimateAmount = 2;
// var maxAge = 80;
// var totalEat =currentAge * estimateAmount;

// document.writeln(`<h1>The Lifetime Supply Calculator</h1>`);
// document.writeln(`Favourite Snack : ${favouriteSnack} <br>`);
// document.writeln(`Current Age : ${currentAge} <br>`);
// document.writeln(`Estimated Maximum Age : ${maxAge} <br>`);
// document.writeln(`Amount of snack per day : ${estimateAmount} <br>`);
// document.writeln(`You will need ${totalEat} to last you until the ripe old age of ${maxAge}`);

















    
