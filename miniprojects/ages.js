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
