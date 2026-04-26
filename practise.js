//Project 1

/* let a = 20;
let b = 30;

function add(a, b) {
  return a + b;
}

let result = add(a, b);
console.log("The sum of a and b is: " + result); */

//Project 2

/*function addNums() {
  let x = 50;
  let y = 70;
  console.log("The sum of x and y is: " + (x + y));
  console.log("The data type of x is a " + typeof x);
}
addNums(); */

//Project 3
/* function boolExam() {
  let isFoggy = true;
  console.log("Is it foggy outside? ");
  if (isFoggy) {
    console.log("Yes, it is foggy. You better get an umbrella");
  } else console.log("No, it is not foggy.So you don't need an umbrella today");
}
boolExam(); */

//Checking withDrawal and bank balance

/*let balance = 1200;
let withdrawalAmount = 1200;

if (balance >= withdrawalAmount) {
  console.log(
    `You have successfully withdrawn $${withdrawalAmount}! Thank for banking with us.`,
  );
} else {
  console.log(
    `Withdrawal failed! Sorry, you don't have sufficient funds in your account. You tried to withdraw $${withdrawalAmount}, but your current account balance is: $${balance}`,
  );
}
*/

//Switch statement - A switch statement is a control flow statement that allows you to execute different blocks of code based on the value of a variable or expression. It is often used as an alternative to multiple if-else statements when you have a large number of conditions to check.
/*
let age = 18;

switch (age) {
  case 18:
    console.log("You are eligible to vote!");
    break;
  case 21:
    console.log("You are eligible to drink alcohol!");
    break;
  case 65:
    console.log("You are eligible for retirement benefits!");
    break;
  default:
    console.log("You are not eligible for any of the listed benefits.");
}

*/

//In this example, we have a variable day that holds the value "Thursday". We use a switch statement to check the value of day and execute different blocks of code based on its value. The switch statement checks each case (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday) and executes the corresponding block of code when a match is found. It has an if statement to handle multiple cases that should execute the same code. If no match is found, it executes the default block of code. In this case, since day is "Thursday", it will execute the block of code for Thursday and print "Today is Thursday, the fourth day of the week!" to the console.
/*
let day = "Thursday";
switch (day) {
  case "Monday":
    console.log("Today is Monday, the start of the week!");
    break;
  case "Tuesday":
    console.log("Today is Tuesday, the second day of the week!");
    break;
  case "Wednesday":
  case "Thursday":
    if (day === "Wednesday") {
      console.log("Today is Wednesday, the third day of the week!");
    } else {
      console.log("Today is Thursday, the fourth day of the week!");
    }
    break;
  case "Friday":
    console.log("Today is Friday, the last day of the workweek!");
    break;
  case "Saturday":
    console.log("Today is Saturday, the first day of the weekend!");
    break;
  case "Sunday":
    console.log("Today is Sunday, the second day of the weekend!");
    break;
  default:
    console.log("Invalid day of the week!");
}
*/

//Pattern program

/*let j;
let i;
let n = 10;

let row;
for (i = 1; i <= n; i++) {
  let row = "";
  for (j = 1; j <= n; j++) {
    row = row + "*";
  }
  console.log(row);
}
*/

//Hollow pattern
/*let m;
let k;
let y = parseInt(prompt("Enter the number of rows for the pattern: "));
//Add a loop to print the rows and a nested loop to print the columns. Use an if statement to check if the current position is on the border of the pattern (first or last row, or first or last column) and print an asterisk, otherwise print a space.
for (m = 1; m <= y; m++) {
  let row = "";
  for (k = 1; k <= y; k++) {
    if (m == 1 || m == y || k == 1 || k == y) {
      row = row + "*";
    } else {
      row = row + " ";
    }
  }
  console.log(row);
}

// let pattern = "";
// for (let i = 1; i <= 5; i++) {
//   pattern += "*".repeat(i) + "\n";
// }
// console.log(pattern);
*/

//Functions
/*
let name = "Alusine";
function greet(name) {
  console.log(`Hello, ${name}! Welcome to JavaScript programming.`);
}
greet(name);
*/

//Arrow functions
/*
const add = (a, b) => {
  return a + b;
};
console.log(`The answer is ${add(5, 10)}`);

//Shorter version of the above function if there is only one expression in the function body, we can omit the curly braces and the return keyword. The result of the expression will be automatically returned.
let addNums = (a, b) => a + b;
console.log(`The answer is ${addNums(5000, 10000)}`);
*/

//Hoisting - Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. So if you try to access a variable before it has been initialized, it will return undefined.

//Example of hoisting with function declarations and variable declarations using var and let:

//using var
/*
console.log(a); // This will work because the function declaration is hoisted to the top of the scope.
var a = 10; // This will work because the variable declaration is hoisted to the top of the scope, but the initialization is not hoisted, so it will return undefined if accessed before this line.
*/
//using let
/*
console.log(b); // This will work because the function declaration is hoisted to the top of the scope.
let b = 20; // This will not work because the variable declaration is not hoisted to the top of the scope, and it will throw a ReferenceError if accessed before this line.
*/

//function declaration
/*
greet(); // This will work because the function declaration is hoisted to the top of the scope.
function greet() {
  console.log("Hello, World!");
}
*/
//In hoisting, function declarations are hoisted to the top of their containing scope, which means that you can call a function before it is defined in the code. However, variable declarations using var are also hoisted to the top of their containing scope, but their initializations are not hoisted. This means that if you try to access a variable declared with var before it has been initialized, it will return undefined. On the other hand, variables declared with let and const are not hoisted to the top of their containing scope, and they will throw a ReferenceError if accessed before they are declared.

//In function scope, variables declared with var are hoisted to the top of the function scope, which means that they can be accessed anywhere within the function, even before they are declared. However, variables declared with let and const are not hoisted to the top of the function scope, and they will throw a ReferenceError if accessed before they are declared. This means that if you declare a variable with var inside a function, it will be accessible anywhere within that function, which can lead to unintended consequences and bugs in your code. On the other hand, if you declare a variable with let or const inside a function, it will only be accessible within the block it is defined in, which helps to prevent accidental variable shadowing and makes your code easier to understand and maintain.

//In block scope, variables declared with let and const are only accessible within the block they are defined in, while variables declared with var are function-scoped and can be accessed outside of the block they are defined in. This means that if you declare a variable with var inside a block, it will be accessible outside of that block, which can lead to unintended consequences and bugs in your code. On the other hand, if you declare a variable with let or const inside a block, it will only be accessible within that block, which helps to prevent accidental variable shadowing and makes your code easier to understand and maintain.

// In block scope, variables declared with let and const are hoisted to the top of their block scope, but they are not initialized until the line of code where they are declared is executed. This means that if you try to access a variable declared with let or const before it has been initialized, it will throw a ReferenceError. On the other hand, variables declared with var are hoisted to the top of their function scope and are initialized with undefined, which means that if you try to access a variable declared with var before it has been initialized, it will return undefined instead of throwing an error. This is one of the reasons why using let and const is generally recommended over var in modern JavaScript programming, as it helps to prevent unintended consequences and makes your code easier to understand and maintain.

//In global scope, variables declared with var are hoisted to the top of the global scope and are initialized with undefined, while variables declared with let and const are not hoisted to the top of the global scope and will throw a ReferenceError if accessed before they are declared. This means that if you declare a variable with var in the global scope, it will be accessible anywhere in your code, which can lead to unintended consequences and bugs in your code. On the other hand, if you declare a variable with let or const in the global scope, it will only be accessible within the block it is defined in, which helps to prevent accidental variable shadowing and makes your code easier to understand and maintain.

//OBJECT ORIENTED PROGRAMMING

//Creating an object using object literal syntax
/*
let car = {
  type: "Ferrari",
  model: "488 GTB",
  year: 2019,

  start: function () {
    console.log("The car has started.");
  },
  accelerate: function () {
    console.log("The car is accelerating.");
  },

  stop: function () {
    console.log("The car has stopped.");
  },

  displayInfo: function () {
    console.log(`This car is a ${this.year} ${this.type} ${this.model}.`);
  },
};
car.displayInfo(); // This will call the displayInfo method of the car object and print the information about the car to the console.
*/

//Class work - Creating an object using constructor function syntax
/*
let student = {
  name: "Joel",
  grade: 6,
  age: 15,

  coding: function () {
    console.log("Joel is coding in JavaScript.");
  },

  singing: function () {
    console.log("Joel is singing a Gospel song.");
  },
  dancing: function () {
    console.log("Joel is dancing to the music.");
  },
};

// student.coding(); // This will call the coding method of the student object and print a message to the console indicating that Joel is coding in JavaScript.

student.singing(); // This will call the singing method of the student object and print a message to the console indicating that Joel is singing a Gospel song.
student.dancing(); // This will call the dancing method of the student object and print a message to the console indicating that Joel is dancing to the music.

*/

//Passing functions as arguments to other functions is a common practice in JavaScript, and it allows for greater flexibility and modularity in your code. When you pass a function as an argument to another function, you are essentially treating the function as a first-class citizen, which means that it can be assigned to variables, passed as arguments to other functions, and returned from functions just like any other value.
/*
function exmp(fun) {
  fun(20000000, 60000000);
}

function add(a, b) {
  console.log(a + b);
}

exmp(add);
add(30000000, 50000000);
*/

//Understanding scope chain
/*
let city = "Freetown";

function showWeather() {
  let temperature = 18;
  if (temperature < 20) {
    let jacketNeeded = true;
    console.log(`It's chilly in ${city}, temperature is ${temperature}°C`);
    console.log(`Jacket needed: ${jacketNeeded}`);
  }
  // console.log(jacketNeeded); // This will throw a ReferenceError because jacketNeeded is not defined in this scope.
}

function geet() {
  console.log(`Welcome to ${city}!`);// This will print a welcome message for Freetown to the console. The variable city is accessible within the geet function because it is defined in the global scope, which is part of the scope chain that geet can access.
}

showWeather();// This will call the showWeather function, which will print the weather information for Freetown to the console. The variable city is accessible within the showWeather function because it is defined in the global scope, which is part of the scope chain that showWeather can access.
geet();// This will call the geet function, which will print a welcome message for Freetown to the console. The variable city is also accessible within the geet function because it is defined in the global scope, which is part of the scope chain that geet can access.
*/

//Callback functions - A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callback functions are commonly used in asynchronous programming, where you want to perform some action after a certain task has been completed, such as fetching data from an API or handling user input.
/*
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed."; // This will check if the second argument (b) is zero, and if it is, it will return an error message instead of attempting to perform the division, which would result in an error.
  }
  return a / b;
}
// The calculate function takes a CallbackFunction and two arguments (a and b). It calls the CallbackFunction with these arguments and returns the result. This allows us to use the calculate function to perform different operations (addition, subtraction, multiplication, division) by passing the appropriate function as the CallbackFunction.
function calculate(CallbackFunc, a, b) {
  return CallbackFunc(a, b);
}

console.log(calculate(add, 10, 5)); // This will call the calculate function with the add function as the CallbackFunction and 10 and 5 as the arguments. The calculate function will then call the add function with these arguments and return the result, which will be printed to the console.

console.log(calculate(subtract, 10, 5)); // This will call the calculate function with the subtract function as the CallbackFunction and 10 and 5 as the arguments. The calculate function will then call the subtract function with these arguments and return the result, which will be printed to the console.

console.log(calculate(multiply, 10, 5)); // This will call the calculate function with the multiply function as the CallbackFunction and 10 and 5 as the arguments. The calculate function will then call the multiply function with these arguments and return the result, which will be printed to the console.

console.log(calculate(divide, 10, 5)); // This will call the calculate function with the divide function as the CallbackFunction and 10 and 5 as the arguments. The calculate function will then call the divide function with these arguments and return the result, which will be printed to the console.
*/

/*
//In this example, we have defined several functions to calculate the area and perimeter of different shapes (circle, square, equilateral triangle). We then have a calculate function that takes a CallbackFunction, a shape, and a dimension as arguments. The calculate function calls the CallbackFunction with the dimension argument and returns the result. Finally, we call the calculate function with different CallbackFunctions and dimensions to calculate the area and perimeter of different shapes, and print the results to the console.
function circleArea(radius) {
  return Math.PI * radius * radius;
}

function circleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function squareArea(side) {
  return side * side;
}

function squarePerimeter(side) {
  return 4 * side;
}

function equilateralTriangleArea(side) {
  return (Math.sqrt(3) / 4) * side * side;
}

function equilateralTrianglePerimeter(side) {
  return 3 * side;
}

function calculate(CallbackFunc, shape, dimension) {
  return CallbackFunc(dimension);
}

console.log(calculate(circleArea, "circle", 5)); // This will call the calculate function with the circleArea function as the CallbackFunction, "circle" as the shape argument, and 5 as the dimension argument. The calculate function will then call the circleArea function with the dimension argument (5) and return the result, which will be printed to the console.

console.log(calculate(circleCircumference, "circle", 5)); // This will call the calculate function with the circleCircumference function as the CallbackFunction, "circle" as the shape argument, and 5 as the dimension argument. The calculate function will then call the circleCircumference function with the dimension argument (5) and return the result, which will be printed to the console.
console.log(calculate(squareArea, "square", 4)); // This will call the calculate function with the squareArea function as the CallbackFunction, "square" as the shape argument, and 4 as the dimension argument. The calculate function will then call the squareArea function with the dimension argument (4) and return the result, which will be printed to the console.
console.log(calculate(squarePerimeter, "square", 4)); // This will call the calculate function with the squarePerimeter function as the CallbackFunction, "square" as the shape argument, and 4 as the dimension argument. The calculate function will then call the squarePerimeter function with the dimension argument (4) and return the result, which will be printed to the console.
console.log(calculate(equilateralTriangleArea, "equilateral triangle", 6)); // This will call the calculate function with the equilateralTriangleArea function as the CallbackFunction, "equilateral triangle" as the shape argument, and 6 as the dimension argument. The calculate function will then call the equilateralTriangleArea function with the dimension argument (6) and return the result, which will be printed to the console.
console.log(calculate(equilateralTrianglePerimeter, "equilateral triangle", 6)); // This will call the calculate function with the equilateralTrianglePerimeter function as the CallbackFunction, "equilateral triangle" as the shape argument, and 6 as the dimension argument. The calculate function will then call the equilateralTrianglePerimeter function with the dimension argument (6) and return the result, which will be printed to the console.

*/

//Arrays
/*
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);

console.log("My favourite fruit is ", fruits[1]);

*/

//using for of loop to iterate through the fruits array and print each fruit to the console.
/*
for (let fruit of fruits) {
  console.log(fruit);
}
*/

/*
let favouriteFruits = ["Apple", "Mango", "Pineapple", "Orange"];
favouriteFruits.push("Banana"); // This will add "Banana" to the end of the favouriteFruits array.
console.log(favouriteFruits); // This will print the updated favouriteFruits array to the console, which will now include "Banana" at the end.

favouriteFruits.unshift("Strawberry"); // This will add "Strawberry" to the beginning of the favouriteFruits array.
console.log(favouriteFruits); // This will print the updated favouriteFruits array to the console, which will now include "Strawberry" at the beginning.

//Asking the popped item to be returned to us
let poppedItem = favouriteFruits.pop();
console.log(`The ${poppedItem} was removed`); // This will print the popped item to the console.

/*
favouriteFruits.shift(); // This will remove the first element from the favouriteFruits array, which is "Pineapple".
console.log(favouriteFruits); // This will print the updated favouriteFruits array to the console, which will no longer include "Pineapple".

favouriteFruits.splice(1, 0, "Grapes"); // This will add "Grapes" at index 1 of the favouriteFruits array without removing any elements.
console.log(favouriteFruits); // This will print the updated favouriteFruits array to the console, which will now include "Grapes" at index 1.

favouriteFruits.splice(1, 1); // This will remove the element at index 1 of the favouriteFruits array, which is "Grapes".
console.log(favouriteFruits); // This will print the updated favouriteFruits array to the console, which will no longer include "Grapes".
*/

/*
let arrNames = ["Alusine", "Joel", "Joseph", "Moses", "Sulaiman"];

let removedArr = arrNames.splice(3, 1); // Removes the element at index 2 (Joseph) and returns it
//Printing all the current items in the array
console.log("The names in our current database are: ");
for (let name of arrNames) {
  console.log(name);
}
console.log(`${removedArr} has been removed from our database`); // This will print the removed element to the console, which is "Sulaiman".

*/

//map method - The map method is a built-in array method in JavaScript that creates a new array by applying a provided function to each element of the original array. It takes a callback function as an argument, which is executed for each element in the array, and returns a new array containing the results of calling the callback function on each element.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // This will print the original numbers array to the console, which is [1, 2, 3, 4, 5].

let squaredNumbers = numbers.map((num) => num * num); // This will create a new array called squaredNumbers, where each element is the square of the corresponding element in the numbers array. The map method takes a callback function that takes each element (num) from the numbers array, multiplies it by itself (num * num), and returns the result. The resulting array will be [1, 4, 9, 16, 25].
console.log(squaredNumbers); // This will print the squaredNumbers array to the console, which is [1, 4, 9, 16, 25].
