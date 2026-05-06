//A program to check the ages of participants and determine eligibility for a certain activity (e.g., voting, driving, etc.)
let participants = [
  { name: "Alice", gender: "Female", age: 25 },
  { name: "Bob", gender: "Male", age: 17 },
  { name: "Charlie", gender: "Male", age: 30 },
  { name: "David", gender: "Male", age: 70 },
  { name: "Eve", gender: "Female", age: 22 },
  { name: "Frank", gender: "Male", age: 15 },
  { name: "Grace", gender: "Female", age: 40 },
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
    `${participant.name} - age ${participant.age} years. Reason: ${participant.gender === "Male" ? "He is" : "She is"} ${age < 18 ? "too young to drive" : "too old to drive"}`,
  );
});
