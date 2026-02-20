////////  ARRAYS

// // Q1  Declare an empty array using JS literal notation to store student names in future.
// var emptyArry = [];

// // Q2 Declare an empty array using JS object notation to store student names in future.

// let object = {};

// // Q3 Declare and initialize a strings array.
// var stringArray = ["a", "b", "c"];
// document.writeln(stringArray)

// // Q4 Declare and initialize a numbers array.
// var numberArray = [1, 2, 3];
// document.writeln(numberArray)

// // Q5 Declare and initialize a boolean array.
// var booleanArray = [true, false];
// document.writeln(booleanArray)


// //Q6 Declare and initialize a mixed array. 
// var mixedArray = ["a", 1, true, null, undefined];
// document.writeln(mixedArray)


// Q7 Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser

// const educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.writeln("Qualifications:<br>")
// for(var i = 0; i <educationQualifications.length; i++){
//     document.writeln(`${i+1}) ${educationQualifications[i]} <br>`)
// }

//Q8 Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students

// let students = ["Ali", "Ahmed", "Sana"];

// let score = [320, 230, 480];
// var totalMarks = 500;

// for(var i = 0; i < students.length; i++){
//     var percentage = (score[i] / totalMarks) * 100;
//     document.writeln(`Score of ${students[i]} is ${score[i]}. Percentage : ${percentage}% <br>`)
// }




// Q9  Initialize an array with color names. Display the array 
// elements in your browser. 
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated 
// array in your browser. 
// e. Delete the last color in the array. Display the updated 
// array in your browser. 
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser.


// let colorNames = ["Red", "Green", "Blue", "Yellow", "Orange"];
// document.writeln(`${colorNames} <br>`)

// let userInput = prompt("What color do you want to add to the beginning?");
// colorNames.unshift(userInput);
// document.writeln(`${colorNames} <br>`)

// let userInput2 = prompt("What color do you want to add to the ending?");
// colorNames.push(userInput2);
// document.writeln(`${colorNames} <br>`)

// colorNames.unshift("Black", "White");
// document.writeln(`${colorNames} <br>`)

// colorNames.shift();
// document.writeln(`${colorNames} <br>`)

// // let deleteColor= colorNames.pop();
// // console.log(deleteColor);

// document.writeln(`${colorNames} <br>`)

// var userinput3 = parseInt(prompt("At which index do you want to add a color?"));
// var userColor = prompt("What color do you want to add?");
// colorNames.splice(userinput3, 0 , userColor);
// document.writeln(`${colorNames} <br>`)


// var userinput4 = parseInt(prompt("At which index do you want to delete a color?"));
// var removeColor = parseInt(prompt("How many colors do you want to delete?"));
// colorNames.splice(userinput4, removeColor);
// document.writeln(`${colorNames} <br>`)

//Q10 Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

// let scores = [320, 230, 480, 120];
// scores.sort();
// document.writeln(scores)

//Q11 Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array


// var cities =["karachi", "quetta", "lahore", "peshawar", "multan", "sukkur"];
// var selectedCities =cities.slice(2,5);

// document.writeln(`cities list : ${cities} <br>`)
// document.writeln(`Selected cities list : ${selectedCities} <br>`)

// Q12 Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)  

// var arr = ["This", "is", "my", "cat"]; 
// document.writeln(`<h3>Array:<br> ${arr} <br></h3>`)
// var arrJoin = arr.join(" ");
// document.writeln(`<h3>String:<br> ${arrJoin}</h3>`);


//Q13  Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

// var devices = ["keyboard", "mouse", "printer", "monitor"];

// Q14  Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In-
// First Out) 

// Q15 Write a program to store phone manufacturers (Apple, 
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method: 

// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.writeln(`<select>`);
// for(var i = 0; i < phoneManufacturers.length; i++){
//     document.writeln(`<option>${phoneManufacturers[i]}</option>`)
// }
// document.writeln(`</select>`);

