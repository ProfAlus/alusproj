//A program to check the ages of participants and determine eligibility for a certain activity (e.g., voting, driving, etc.)
let participants = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 70 },
  { name: "Eve", age: 22 },
  { name: "Frank", age: 15 },
  { name: "Grace", age: 40 },
];

let ages = participants.map((p) => p.age);
let isEligible = (age) => age >= 18 && age <= 65;
let eligibleAges = ages.filter(isEligible);

// Print eligible ages and corresponding participant names
console.log("Eligible participants:");
eligibleAges.forEach((age) => {
  let participant = participants.find((p) => p.age === age);
  console.log(`${participant.name} - age ${participant.age} years`);
});

let ineligibleAges = ages.filter((age) => !isEligible(age));
console.log("\nIneligible participants:");
ineligibleAges.forEach((age) => {
  let participant = participants.find((p) => p.age === age);
  console.log(
    `${participant.name} - age ${participant.age} years. Reason: ${age < 18 ? "Too young" : "Too old"}`,
  );
});
