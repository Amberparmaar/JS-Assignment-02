///////  FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS
///////  Assignment # 38-44

// Q1   Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(a, b){
//     let powr = a ** b;
//     return powr;
// }

// console.log(power(2, 3));

// Q2  Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// let year = +prompt("Enter a year: ");
// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return `${year} is a leap year`;
//   } else {
//     return `${year} is not a leap year`;
//   }
// }

// console.log(leapYear(year));

// Q3 If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions

// function semiPerimeter(a, b, c){
//     return (a + b + c) / 2;
// }

// function triangleArea(a, b, c){
//     let S = semiPerimeter(a, b, c);
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// // Example:
// let a = 5, b = 6, c = 7;
// console.log("Triangle ka area:", triangleArea(a, b, c));

// Q4 Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function mainFunc(sub1, sub2, sub3) {
//   function average(sub1, sub2, sub3) {
//     return (sub1 + sub2 + sub3) / 3;
//   }
//   function percentage(sub1, sub2, sub3) {
//     let total = sub1 + sub2 + sub3;
//     let percent = (total / 300) * 100;
//     return `percentage is : ${percent}%`;
//   }
// let avg = average(sub1, sub2, sub3);
// let per = percentage(sub1, sub2, sub3);
// console.log("average is :", avg);
// console.log("percentage is :", per);
// }

// mainFunc(80, 90, 70);

// Q5 You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now. 

// function indexOf(str, char){
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === char){
//             return i;
//         }
//     }
//     return -1;

// }
// console.log(indexOf("hello", "l"));

// Q6 Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.

// function deleteVowels(str){
//     if(str.length > 25){
//         return "Sentence is too long";
//     }

//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         let char = str[i].toLowerCase();
//         if(char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'){
//             result += str[i]; 
//         }
//     }
//     return result;
// }


// console.log(deleteVowels("today is sunday")); 
// console.log(deleteVowels("This sentence is definitely too long for the limit"));

// Q7  Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence 
// “Pleases read this application and give me gratuity” 
// Such occurrences are ea, ea, ui.

// function countConsecutiveVowels(str) {
//     let count = 0;
//     str = str.toLowerCase();

//     for (let i = 0; i < str.length - 1; i++) {
//         let char1 = str[i];
//         let char2 = str[i + 1];

//         switch (char1) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
                
//                 if ('aeiou'.includes(char2)) {
//                     count++;
//                     i++; 
//                 }
//                 break;
//         }
//     }

//     return count;
// }

// let sentence = "Pleases read this application and give me gratuity";
// console.log(`Number of consecutive vowels: ${countConsecutiveVowels(sentence)}`);


// Q8 The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

// let distanceInput = +prompt("Enter distance in km: ");

// function meter(){
//     return distanceInput * 1000;
// }
// function feet(){
//     return distanceInput * 3280.84;
// }
// function inches(){
//     return distanceInput * 39370.1;
// }
// function centimeters(){
//     return distanceInput * 100000;
// }

// let convertMeter = meter();
// console.log(`Distance in meters: ${convertMeter}`);
// let convertFeet = feet();
// console.log(`Distance in feet: ${convertFeet}`);
// let convertInches = inches();
// console.log(`Distance in inches: ${convertInches}`);
// let convertCentimeters = centimeters();
// console.log(`Distance in centimeters: ${convertCentimeters}`);


// Q9  Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.

// let hours = +prompt("Enter total working hours: ");

// let overtimeHours = 0;
// let overtimePay = 0;

// if (hours > 40) {
//     overtimeHours = hours - 40;
//     overtimePay = overtimeHours * 12;
// }

// console.log(`Overtime hours: ${overtimeHours}`);
// console.log(`Overtime pay: Rs. ${overtimePay}`);


// Q10 A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.    

// let amount = +prompt("Enter amount to withdraw: ");

// let notes100 = Math.floor(amount / 100);
// amount = amount % 100;

// let notes50 = Math.floor(amount / 50);
// amount = amount % 50;

// let notes10 = Math.floor(amount / 10);

// console.log(`100 notes: ${notes100}`);
// console.log(`50 notes: ${notes50}`);
// console.log(`10 notes: ${notes10}`);



