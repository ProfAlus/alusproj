/*
let ages = [25, 17, 30, 70, 22, 15, 40];

let resultAges = ages.filter((a) => {
  return a >= 18 && a <= 65 ? true : false; //This is a ternary operator that checks if the age is between 18 and 65. If it is, it returns true (meaning the age will be included in the resultAges array). If it is not, it returns false (meaning the age will be excluded from the resultAges array).
});

console.log(
  "Filtered eligible ages:",
  resultAges.sort((a, b) => a - b),
); ///This will print the eligible ages in ascending order.

*/

/*
//A program to check the ages to determine eligibility for a certain activity (e.g., voting, driving, etc.)
let ages = [32, 15, 19, 12];

let filteredAges = ages.filter((a) => (a >= 18 ? true : false));

console.log(
  "Eligible ages:",
  filteredAges.sort((a, b) => a - b),
);

filteredAges.forEach((age) => {
  //ternary operator to check if age is eligible
  let eligibility = age >= 18 ? "eligible" : "not eligible";
  console.log(`Age ${age} is ${eligibility}`);
});

*/

/*
//Playing around with the ternary operator checking for who is not eligible and printing the ineligible ages in ascending order
let ineligibleFilteredAges = ages.filter((a) => (a < 18 ? true : false)); //This will filter out the ages that are less than 18 and return them in a new array called ineligibleFilteredAges.
console.log(
  "\nIneligible ages:",
  ineligibleFilteredAges.sort((a, b) => a - b),
);
ineligibleFilteredAges.forEach((x) => {
  let eligibilityAge = x < 18 ? "not eligible" : "eligible";
  console.log(`Age ${x} is ${eligibilityAge}`);
});

*/

//some, every, find, sort methods
/*
let scores = [50, 85, 92, 78, 90, 88];

let hasLowScores = scores.some((x) => x > 70); //This will return true because there are scores in the array that are greater than 70 (85, 92, 78, 90, and 88 are all greater than 70).
console.log("Is there any score less than 70?", hasLowScores);

let allScores = scores.every((a) => a >= 50); //This will return true because all scores in the array are greater than or equal to 50 (50 is equal to 50, and all other scores are greater than 50).
console.log("Are all scores greater than 50?", allScores);
*/

/*
//find method
let marks = [85, 92, 78, 90, 88];
let firstMark = marks.find((d) => d > 80); //This will return the first mark in the array that is greater than 80. In this case, it will return 85, which is the first mark that is greater than 80 in the array.
console.log("First mark greater than 80:", firstMark);

let highestMark = marks.find((x) => x === Math.max(...marks)); //This will find the highest mark in the array by using the Math.max function to get the maximum value from the marks array and then using the find method to return that value from the array. In this case, the highest mark is 92, so it will return 92 and store it in the variable highestMark.
console.log("Highest mark:", highestMark);

//find idex of highest mark
let highestMarkIndex = marks.findIndex((x) => x === Math.max(...marks)); //This will find the index of the highest mark in the array by using the Math.max function to get the maximum value from the marks array and then using the findIndex method to return the index of that value in the array. In this case, the highest mark is 92, which is at index 1 in the array, so it will return 1 and store it in the variable highestMarkIndex.
console.log("Index of highest mark:", highestMarkIndex);
*/

/*
//sort method
let fruits = ["banana", "apple", "grape", "orange"];
console.log("Fruits before sorting:", fruits);
console.log("Fruits after sorting:", fruits.sort()); //This will sort the fruits array in alphabetical order and print it to the console.
*/

//Two dimensional array
let arrDim = [
  [50, 85, 92],
  [78, 90, 88],
  [60, 70, 80],
];

/*
console.log("Two-dimensional array:", arrDim); //This will print the entire two-dimensional array arrDim to the console. The output will show the array in a nested format, with each inner array representing a row of the two-dimensional array.
console.log("Element at row 1, column 2:", arrDim[0][1]); //This will access the element at row 1 (the first row) and column 2 (the second column) of the two-dimensional array arrDim. In this case, it will return 85, which is the value at that position in the array.
*/

/*
//loop through the two-dimensional array using forEach method
console.log("Looping through the two-dimensional array:");
arrDim.forEach((row, rowIndex) => {
  row.forEach((value, colIndex) => {
    console.log(`Element at row ${rowIndex}, column ${colIndex}: ${value}`);
  });
});
*/

//loop through the two-dimensional array using for loop
// The outer for loop - for (let i = 0; i < arrDim.length; i++)  - This will loop through each row of the two-dimensional array arrDim using a for loop. The variable i will represent the index of the current row being processed.
//The inner for loop - for (let j = 0; j < arrDim[i].length; j++) - This will loop through each column of the current row (arrDim[i]) using another for loop. The variable j will represent the index of the current column being processed within that row.
console.log("Looping through the two-dimensional array using for loop:");
for (let i = 0; i < arrDim.length; i++) {
  for (let j = 0; j < arrDim[i].length; j++) {
    console.log(`Element at row ${i}, column ${j}: ${arrDim[i][j]}`);
  }
}

//Multidimensional array (3D array)
let arr3D = [
  [
    [90, 85, 92],
    [78, 90, 88],
    [60, 70, 80],
  ],
  [
    [95, 80, 85],
    [88, 92, 90],
    [70, 75, 85],
  ],
]; //This is a three-dimensional array called arr3D. It consists of two main elements, each of which is a two-dimensional array. Each of those two-dimensional arrays contains three inner arrays, which represent rows of data. Each inner array contains three numerical values. The structure of arr3D can be visualized as a cube of data, where you have multiple layers (the two main elements), and within each layer, you have rows and columns of values.
