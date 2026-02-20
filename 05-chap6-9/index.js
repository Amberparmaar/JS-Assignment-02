////// MATH EXPRESSIONS

// Q1 Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your browser:
// var a = 10;

// document.writeln("Result:<br>");
// document.writeln("The value of a is: " + a + "<br>");
// document.writeln("....................................<br>");

// document.writeln("The value of ++a is: " + ++a + "<br>");
// document.writeln("Now the value of a is: " + a + "<br>");
// document.writeln("....................................<br>");

// document.writeln("The value of a++ is: " + a++ + "<br>");
// document.writeln("Now the value of a is: " + a + "<br>");
// document.writeln("....................................<br>");

// document.writeln("The value of --a is: " + --a + "<br>");
// document.writeln("Now the value of a is: " + a + "<br>");
// document.writeln("....................................<br>");

// document.writeln("The value of a-- is: " + a-- + "<br>");
// document.writeln("Now the value of a is: " + a + "<br>");

// Q2  What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.writeln(
//   "a is " + a + "</br> b is " + b + "</br> result is " + result + "</br>",
// );

// Q3  Write a program that takes input a name from user & greet the user.
// var name = prompt("Write your name: ");
// alert("Hello " + name + " !");

// Q5  Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var num = +prompt("Enter number here..", 5);
// document.writeln("Table of " + num + "<br>");
// for (var i = 1; i <= 10; i++) {
//   document.writeln(`${num} x ${i} = ${num * i} <br>`);
// }

// Q6  Take a) Take three subjects name from user and store them in 3
// different variables. b) Total marks for each subject is 100, store it in another
// variable. c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables. e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var sub1 = prompt("Enter first subject name: ");
var sub2 = prompt("Enter second subject name: ");
var sub3 = prompt("Enter third subject name: ");
let eachSubMarks = 100;
var sub1marks = +prompt("Enter first subject marks: ");
var sub2marks = +prompt("Enter second subject marks: ");
var sub3marks = +prompt("Enter third subject marks: ");
var obtainedMarks = sub1marks + sub2marks + sub3marks;
var totalSubMarks = eachSubMarks * 3; // 300
let sub1percentage = (sub1marks / eachSubMarks) * 100;
let sub2percentage = (sub2marks / eachSubMarks) * 100;
let sub3percentage = (sub3marks / eachSubMarks) * 100;
var percentage = (obtainedMarks / 300) * 100;
document.writeln(`<table border = 1 >
        <tr>
            <th>Subjects</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
        <tr>
            <td>${sub1}</td>
            <td>${eachSubMarks}</td>
            <td>${sub1marks}</td>
            <td>${sub1percentage}%</td>
        </tr>
        <tr>
            <td>${sub2}</td>
            <td>${eachSubMarks}</td>
            <td>${sub2marks}</td>
            <td>${sub2percentage}%</td>
        </tr>
        <tr>
            <td>${sub3}</td>
            <td>${eachSubMarks}</td>
            <td>${sub3marks}</td>
            <td>${sub3percentage}%</td>
        </tr>
         <tr>
            <th colspan = 2>${totalSubMarks}</th>
            <th>${obtainedMarks}</th>
            <th>${percentage}%</th>
        </tr>

    </table>`);
