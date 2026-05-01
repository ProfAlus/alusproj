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

/*
//loop through the two-dimensional array using for loop
// The outer for loop - for (let i = 0; i < arrDim.length; i++)  - This will loop through each row of the two-dimensional array arrDim using a for loop. The variable i will represent the index of the current row being processed.
//The inner for loop - for (let j = 0; j < arrDim[i].length; j++) - This will loop through each column of the current row (arrDim[i]) using another for loop. The variable j will represent the index of the current column being processed within that row.
console.log("Looping through the two-dimensional array using for loop:");
for (let i = 0; i < arrDim.length; i++) {
  for (let j = 0; j < arrDim[i].length; j++) {
    console.log(`Element at row ${i}, column ${j}: ${arrDim[i][j]}`);
  }
}
*/

/*
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

for (let i = 0; i < arr3D.length; i++) {
  for (let j = 0; j < arr3D[i].length; j++) {
    for (let k = 0; k < arr3D[i][j].length; k++) {
      console.log(
        `Element at layer ${i}, row ${j}, column ${k}: ${arr3D[i][j][k]}`,
      );
    }
  }
} //This code will loop through the three-dimensional array arr3D using nested for loops. The outer loop (i) iterates through each layer of the array, the middle loop (j) iterates through each row within the current layer, and the innermost loop (k) iterates through each column within the current row. The console.log statement will print the value of each element in the three-dimensional array along with its corresponding layer, row, and column indices.

*/

/*

//shallow copy and deep copy of an array using the spread operator and slice method
//Both the spread operator and the slice method create a shallow copy of an array, meaning that they create a new array that references the same underlying data as the original array. This means that if you modify the contents of the new array, it will also affect the original array, and vice versa. However, if you want to create a deep copy of an array (a completely independent copy), you can use methods like JSON.parse(JSON.stringify(array)) or a library like Lodash's _.cloneDeep().

let originalArray = [1, 2, 3, 4, 5];
console.log("Original array:", originalArray);
let shallowCopy = originalArray; //This creates a shallow copy of the original array by assigning it to a new variable called shallowCopy. However, since arrays are reference types in JavaScript, both originalArray and shallowCopy point to the same underlying array in memory. This means that any changes made to either originalArray or shallowCopy will affect both variables, as they reference the same array. After this operation, both originalArray and shallowCopy will contain the same numbers [1, 2, 3, 4, 5], but they are not separate arrays in memory; they are references to the same array. Therefore, if you modify shallowCopy (e.g., by adding or removing elements), it will also modify originalArray, and vice versa.

console.log("Shallow copy:", shallowCopy);

let spreadCopy = [...originalArray]; //This creates a deep copy of the original array by using the spread operator (...). The spread operator takes all the elements of originalArray and creates a new array with those same elements. This means that spreadCopy is a completely separate array from originalArray, and changes made to spreadCopy will not affect originalArray, and vice versa. After this operation, spreadCopy will contain the same numbers as originalArray at the time of copying, but it will be a different array in memory.
console.log("Spread copy:", spreadCopy); //This will print the spread copy of the original array to the console, which should be [1, 2, 3, 4, 5].

originalArray.push(6); //This will add the number 6 to the end of the array that both originalArray and shallowCopy reference. Since they point to the same array, this change will be reflected in both variables.

console.log("Original array after modification:", originalArray); //This will print the modified original array, which now includes the number 6, resulting in [1, 2, 3, 4, 5, 6].

console.log("Shallow copy after modification:", shallowCopy); //This will print the shallow copy of the original array, which will also reflect the change made to originalArray, resulting in [1, 2, 3, 4, 5, 6].

console.log("Spread copy after modification:", spreadCopy); //This will print the spread copy of the original array, which will not reflect the change made to originalArray, and will still be [1, 2, 3, 4, 5]. This demonstrates that spreadCopy is a separate array from originalArray, while shallowCopy is just a reference to the same array as originalArray.

*/

/*
//slice method for deep copying an array
let originalArray2 = [1, 2, 3, 4, 5];
let anotherDeepCopy = originalArray2.slice(); //This creates a shallow copy of the original array using the slice method. The slice method, when called without any arguments, returns a new array that is a shallow copy of the original array. This means that anotherDeepCopy will contain the same elements as originalArray2 at the time of copying, but it will be a different array in memory. However, since it's a shallow copy, if originalArray2 contained reference types (like objects), those references would still point to the same objects in memory. In this case, since originalArray2 contains only primitive values (numbers), anotherDeepCopy will be an independent array with the same values.
console.log("Another deep copy using slice method:", anotherDeepCopy); //This will print the deep copy of the original array created using the slice method, which should be [1, 2, 3, 4, 5].

//Modifying originalArray2 to show that anotherDeepCopy is unaffected
originalArray2.push(6); //This will add the number 6 to the end of originalArray2. Since anotherDeepCopy is a separate array created by the slice method, it will not be affected by this change.
console.log("Original array 2 after modification:", originalArray2); //This will print the modified original array, which now includes the number 6, resulting in [1, 2, 3, 4, 5, 6].

console.log("Another deep copy after modification:", anotherDeepCopy); //This will print the deep copy of the original array created using the slice method, which will not reflect the change made to originalArray2, and will still be [1, 2, 3, 4, 5]. This demonstrates that anotherDeepCopy is a separate array from originalArray2, while shallowCopy (from earlier) is just a reference to the same array as originalArray.

*/

/*
let grades = [
  [90, 80],
  [99, 85],
]; //This is a two-dimensional array called grades. It consists of two inner arrays, where the first inner array contains the values 90 and 80, and the second inner array contains the values 99 and 85. This structure can be visualized as a matrix or table of grades, where each inner array represents a row of data.

let shallowCopyGrades = grades.slice(); //This creates a shallow copy of the two-dimensional array grades using the slice method. The new array shallowCopyGrades will contain the same inner arrays as grades, but it will be a different array in memory. However, since it's a shallow copy, the inner arrays themselves are still references to the same arrays in memory. This means that if you modify an inner array in either grades or shallowCopyGrades, it will affect both variables, as they reference the same inner arrays.
console.log("Shallow copy of grades:", shallowCopyGrades); //This will print the shallow copy of the grades array to the console, which should be [[90, 80], [99, 85]].

shallowCopyGrades[0][0] = 95; //This will modify the first element of the first inner array in shallowCopyGrades to be 95. Since shallowCopyGrades is a shallow copy of grades, and both variables reference the same inner arrays, this change will also affect the original grades array.
console.log("Grades after modifying shallow copy:", grades); //This will print the original grades array after the modification made to shallowCopyGrades. Since both variables reference the same inner arrays, the change will be reflected in grades, resulting in [[95, 80], [99, 85]].

console.log("Shallow copy of grades after modification:", shallowCopyGrades); //This will print the shallow copy of the grades array after the modification, which will also reflect the change, resulting in [[95, 80], [99, 85]]. This demonstrates that both grades and shallowCopyGrades reference the same inner arrays, and changes to those inner arrays affect both variables.

//Note: In JavaScript, the terms "shallow copy" and "deep copy" can be a bit nuanced. The spread operator and slice method create a new array, but if the original array contains objects or other reference types, those references will still point to the same objects in memory. Therefore, while the array itself is a new instance, the contents (if they are reference types) are not deeply copied. For truly deep copying of complex structures, additional methods or libraries would be needed.

*/

/*
//Real world example of shallow copy and deep copy in a program to check the ages of participants and determine eligibility for a certain activity (e.g., voting, driving, etc.)
let participants = [
  { name: "Alice", gender: "Female", age: 25 },
  { name: "Bob", gender: "Male", age: 17 },
  { name: "Charlie", gender: "Male", age: 30 },
  { name: "David", gender: "Male", age: 70 },
  { name: "Eve", gender: "Female", age: 22 },
  { name: "Frank", gender: "Male", age: 16 },
  { name: "Grace", gender: "Female", age: 40 },
];

let ages = participants.map((p) => p.age); //This will create a new array called ages that contains only the age property of each participant in the participants array. The map method iterates through each participant object in the participants array and extracts the age value, resulting in an array of ages [25, 17, 30, 70, 22, 16, 40].

let isEligible = (age) => age >= 18 && age <= 65; //This is a function called isEligible that takes an age as an argument and returns true if the age is between 18 and 65 (inclusive), and false otherwise. This function will be used to determine if a participant's age makes them eligible for a certain activity. In this case, it checks if the age is greater than or equal to 18 and less than or equal to 65, which are common age limits for activities like voting or driving.

let eligibleAges = ages.filter(isEligible); //This will create a new array called eligibleAges that contains only the ages from the ages array that satisfy the condition defined in the isEligible function. The filter method iterates through each age in the ages array and applies the isEligible function to determine if it should be included in the eligibleAges array. As a result, eligibleAges will contain only the ages that are between 18 and 65, which are [25, 30, 22, 40] in this case.

// Print eligible ages and corresponding participant names
console.log("Eligible participants:");
participants.forEach((p) => {
  if (isEligible(p.age)) {
    console.log(`- ${p.name}: ${p.age} years old`);
  }
});

let ineligibleAges = ages.filter((age) => !isEligible(age)); //This will create a new array called ineligibleAges that contains only the ages from the ages array that do not satisfy the condition defined in the isEligible function. The filter method iterates through each age in the ages array and applies the negation of the isEligible function to determine if it should be included in the ineligibleAges array. As a result, ineligibleAges will contain only the ages that are not between 18 and 65, which are [17, 70, 16] in this case.
console.log("\nIneligible participants:");
participants.forEach((p) => {
  if (!isEligible(p.age)) {
    console.log(`- ${p.name}: ${p.age} years old`);
  }
});

*/

/*
//Deep copy of an array using structuredClone (available in modern JavaScript environments)
let originalScoresArr = [
  [85, 90, 78, 92, 88],
  [80, 85, 90, 95, 100],
]; //This is a two-dimensional array called originalScoresArr. It consists of two inner arrays, where the first inner array contains the values [85, 90, 78, 92, 88], and the second inner array contains the values [80, 85, 90, 95, 100]. This structure can be visualized as a matrix or table of scores.
let deepCopy = structuredClone(originalScoresArr); //This creates a deep copy of the originalScoresArr using the structuredClone function. The deepCopy variable will contain a new array that has the same values as originalScoresArr at the time of copying, but it will be a completely separate array in memory. This means that changes made to originalScoresArr will not affect deepCopy, and vice versa.

originalScoresArr.push([97, 98, 99, 91]); //This will add the array [97, 98, 99, 91] to the end of the originalScoresArr. Since deepCopy is a deep copy of originalScoresArr created using structuredClone, it will not be affected by this change and will remain unchanged.

console.log("Original scores array:", originalScoresArr); //This will print the modified original scores array, which now includes the array [97, 98, 99, 91], resulting in [[85, 90, 78, 92, 88], [80, 85, 90, 95, 100], [97, 98, 99, 91]].

console.log("Deep copy of scores array:", deepCopy); //This demonstrates that deepCopy is a separate array from originalScoresArr, and changes to originalScoresArr do not affect deepCopy.
*/

/*
//split method

let userInput =
  " Alusine Bangura | ALUSINE@gmail.com | JavaScript Developer. I love JavScript.";

let parts = userInput.split("|"); //This will split the userInput string into an array of substrings using the pipe character (|) as the delimiter. The resulting array will contain the following elements: ["Alusine Bangura ", " ALUSINE@gmail.com ", " JavaScript Developer ", " I love JavScript."];

//console.log("Split user input:", parts); //This will print the array resulting from splitting the userInput string using the pipe character as the delimiter.

console.log("Original user input:", userInput); //This will print the original user input string, which remains unchanged after the replace operation, demonstrating that strings in JavaScript are immutable.

//How to replace a substring in a string using the replace method
let toLowerCaseEmail = parts[1].toLowerCase(); //This will convert the second element of the parts array (which is " ALUSINE@gmail.com ") to lowercase.
let replacedString = userInput.replace("ALUSINE@gmail.com", toLowerCaseEmail); //This will replace the first occurrence of "JavaScript" with the value of toLowerCaseEmail in the userInput string.
let finalParts = replacedString.split("|"); //This will split the replacedString into an array of substrings using the pipe character (|) as the delimiter, resulting in an array similar to parts but with the email address in lowercase.
console.log(
  "Replaced string:",
  finalParts.map((part) => part.trim()),
); //This will print the array resulting from splitting the replacedString, with each part trimmed of extra spaces using the trim method. The output will show the cleaned-up parts of the user input, with the email address in lowercase and without leading or trailing spaces.

let isJavaScriptDeveloper = finalParts.includes("JavaScript Developer"); //This will check if the string "JavaScript Developer" is included in the finalParts array. It will return true if it is found, and false otherwise.
console.log("Is the user a JavaScript Developer?", isJavaScriptDeveloper); //This will print whether the user is a JavaScript Developer based on the presence of the string "JavaScript Developer" in the finalParts array. It uses a ternary operator to print "Yes" if isJavaScriptDeveloper is true, and "No" if it is false.
*/

/*
let custDetails =
  "Joel Alusine Bangura | JOEL@gmail.com | JavaScript Developer. I love JavaScript | I love studying the Holy Bible ";

let detailsParts = custDetails.split("|"); //This will split the custDetails string into an array of substrings using the pipe character (|) as the delimiter, and then trim each part to remove extra spaces. The resulting array will contain the cleaned-up parts of the customer details.
console.log("Customer details parts:", detailsParts); //This will print the array resulting from splitting the custDetails string, with each part trimmed of extra spaces using the trim method. The output will show the cleaned-up parts of the customer details.

let custName = detailsParts[0].trim(); //This will extract the first element of the detailsParts array (which is the customer's name) and trim it to remove any leading or trailing spaces, storing the result in the variable cName.
let custEmail = detailsParts[1].trim().toLowerCase(); //This will extract the second element of the detailsParts array (which is the customer's email) and trim it to remove any leading or trailing spaces, storing the result in the variable cEmail.
let custProfession = detailsParts[2].trim(); //This will extract the third element of the detailsParts array (which is the customer's profession) and trim it to remove any leading or trailing spaces, storing the result in the variable cProfession.

customerLikes = detailsParts[3].trim();

console.log("Customer name:", custName);
console.log("Customer email:", custEmail.toLowerCase()); //This will print the customer's email in lowercase to the console, demonstrating how to manipulate string data after splitting it into parts.
console.log("Customer profession:", custProfession);
console.log("Customer Hobby:", customerLikes);

custProfession.includes("JavaScript Developer")
  ? console.log("The customer is a JavaScript Developer.")
  : console.log("The customer is not a JavaScript Developer."); //This will check if the string "JavaScript Developer" is included in the custProfession variable. If it is, it will print "The customer is a JavaScript Developer." Otherwise, it will print "The customer is not a JavaScript Developer." This demonstrates how to use the includes method to check for the presence of a substring within a string.

//IndexOf and lastIndexOf methods
console.log(
  "The first index or occurence of the customer's profession is:",
  custProfession.indexOf("JavaScript"),
);
console.log(
  "The the last index or last occurence of the customer's profession is:",
  custProfession.lastIndexOf("JavaScript"),
);

custProfession = custProfession.replaceAll("JavaScript", "Python");

console.log(custProfession);

//How to get the customer's profession

console.log(custProfession.slice(0, custProfession.indexOf("I")).trim());

//Email validation - Checking if an email is valid or not
let myEmail = "email@gamil.comj";

validEmail = myEmail.includes("@") && myEmail.endsWith(".com");
console.log(
  "Is this a valid email?",
  validEmail
    ? `Yes, this is the email -> ${myEmail}`
    : `No, this is the email -> ${myEmail}`,
);

//Template literals

let dashSeperator = "-".repeat(60); //to add 60 dashes whereever it is called
let userProfile = `
${dashSeperator}

 User Profile:

 Customer Name       : ${custName};
 Customer Email      : ${custEmail};
 Customer Profession : ${custProfession}
 Customer's Hobby    : ${customerLikes}
 
 ${dashSeperator}
 `;
console.log(userProfile);

*/

/*
//Synchronous and asynchronous
function task1() {
  console.log("Task1 started...");

  let started = Date.now();
  let delay = 5000;
  let end = started + delay;
  console.log("Task1 is excuting...");

  while (Date.now() <= end) {}
  console.log("Task1 is completed!");
}

function task2() {
  console.log("Task2 started...");

  let started = Date.now();
  let delay = 3000;
  let end = started + delay;
  console.log("Task2 is excuting...");

  while (Date.now() <= end) {}
  console.log("Task2 is completed!");
}

function task3() {
  console.log("Task3 started...");

  let started = Date.now();
  let delay = 6000;
  let end = started + delay;
  console.log("Task3 is excuting...");

  while (Date.now() <= end) {}
  console.log("Task3 is completed!");
}

task1();
task2();
task3();
*/

/*
//Synchronous
function fetchCourseProgress() {
  console.log("Fetching course progress has started");

  let started = Date.now();
  let delay = 5000;
  let end = started + delay;

  while (Date.now() <= end) {}
  console.log("Fetching course progress has completed!");
}

function fetchLeaderBoard() {
  console.log("Fetching Leaderboard started...");

  let started = Date.now();
  let delay = 3000;
  let end = started + delay;

  while (Date.now() <= end) {}
  console.log("Leaderboard loaded successfully!");
}

function fetchingImages() {
  console.log("Fetching images started...");

  let started = Date.now();
  let delay = 6000;
  let end = started + delay;

  while (Date.now() <= end) {}
  console.log("Fetching images completed!");
}

console.log("Dashboard loading started");
fetchCourseProgress();
fetchLeaderBoard();
fetchingImages();

*/

