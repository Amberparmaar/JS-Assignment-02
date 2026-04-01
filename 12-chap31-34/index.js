//////// DATE METHODS
//////// Assignment # 31-34 JAVASCRIPT

// Q1 Write a program that displays current date and time in
// your browser.

// var currentDate = new Date();
// document.writeln(currentDate);

// Q2 Write a program that alerts the current month in words.
// For example December.

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();
// var months = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];

// var monthName = months[currentMonth];
// document.writeln(`Current Month: ${monthName}`);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// var days = [
//     "Sunday", "Monday", "Tuesday", "Wednesday",
//     "Thursday", "Friday", "Saturday"
// ];

// var dayName = days[currentDay];
// var firstThreeLetters = dayName.slice(0, 3);
// document.writeln(`Current Day: ${firstThreeLetters}`);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var message = "";

// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// var days = [
//     "Sunday", "Monday", "Tuesday", "Wednesday",
//     "Thursday", "Friday", "Saturday"
// ];

// var dayName = days[currentDay];

// if (dayName === "Saturday" || dayName === "Sunday") {
//     message = "It's Fun day";
// }else{
//     message = "It's not Fun day";
// }

// document.writeln(message);

// Q5  Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var message = "";

// var currentDate = new Date();
// var currentDay = currentDate.getDate();

// if (currentDay < 16) {
//   message = "First fifteen days of the month";
// } else {
//   message = "Last days of the month";
// }

// document.writeln(`Date is ${currentDay} <br>`);
// document.writeln(message);



// Q6 Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var currentDate = new Date();
// var currentTime = currentDate.getTime();
// var minutesSinceMidnight = currentTime / (1000 * 60);

// document.writeln(`Current Date: ${currentDate}<br>`);
// document.writeln(`Milliseconds since midnight, Jan. 1, 1970: ${currentTime}<br>`);
// document.writeln(`Minutes since midnight, Jan. 1, 1970: ${minutesSinceMidnight}`);


// Q7 Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”. 

// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// var message = "";

// if (currentHour < 12) {
//   message = "It's AM";
// } else {
//   message = "It's PM";
// }

// document.writeln(`Current Date: ${currentDate}<br>`);
// document.writeln(`Current Hour: ${currentHour}<br>`);
// document.writeln(message);


// Q8 Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate. 

// var laterDate = new Date("December 31, 2020");

// document.writeln(`Later Date : ${laterDate}`)




// Q9  Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015 

// var ramadanDate = new Date("June 18, 2015");
// let currentDate = new Date();

// let diff = currentDate - ramadanDate;

// let roundOff = Math.round(diff/ (1000 * 60 * 60 * 24));
// document.writeln(`Number of days past since 1st Ramadan: ${roundOff}`);


// Q10 Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.


// var referenceDate = new Date();

// var start2015 = new Date('January 1, 2015 00:00:00');

// var diff = referenceDate.getTime() - start2015.getTime();

// var seconds = Math.floor(diff / 1000);

// document.writeln(`Seconds elapsed between the beginning of 2015 and the reference date: ${seconds}`);



// Q11 Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

//  let currentDate = new Date();
//  let getHours = currentDate.getHours();
//  // console.log(getHours);
// currentDate.setHours(getHours + 1);

// document.writeln("The date object an hour ahead: " + currentDate);


// Q12 Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back? 

// let currentDate = new Date();
// alert("Current Date: " + currentDate);
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("100 years back, it was " + currentDate);


// Q13 Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser. 

// let age = +prompt("Enter your age");
// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - age;
// document.writeln("Your age is " + age + "<br>");
// document.writeln("Your birth year is " + birthYear);


// Q14 Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 
 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 


// document.writeln(`<h1 style="text-align: center">K-Electric Bill</h1>`)

// var customerName = prompt("Enter your name");
// var currentMonth = prompt("Enter current month");
// var numberOfUnits = +prompt("Enter number of units");
// var chargesPerUnit = +prompt("Enter charges per unit");
// var lateSurcharge = +prompt("Enter late payment surcharge");
// var netAmount = numberOfUnits * chargesPerUnit;
// var grossAmount = netAmount + lateSurcharge;

// document.writeln(`Customer Name: ${customerName}<br>`);
// document.writeln(`Current Month: ${currentMonth}<br>`);
// document.writeln(`Number of units: ${numberOfUnits}<br>`);
// document.writeln(`Charges per unit: ${chargesPerUnit}<br>`);
// document.writeln(`Net Amount Payable (within Due Date): ${netAmount}<br>`);
// document.writeln(`Late Payment Surcharge: ${lateSurcharge}<br>`);
// document.writeln(`Gross Amount Payable (after Due Date): ${grossAmount}`);












 