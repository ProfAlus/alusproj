/**
 * Simple raffle program
 */

// Example data
const customers = [
  {
    id: 1,
    name: "Amina",
    gender: "female",
    email: "amina@example.com",
    isSubscriber: true,
    totalSpent: 120,
    rewardCredit: 0,
  },
  {
    id: 2,
    name: "Ben",
    gender: "male",
    email: "ben@example.com",
    isSubscriber: false,
    totalSpent: 250,
    rewardCredit: 0,
  },
  {
    id: 3,
    name: "Joel",
    gender: "male",
    email: "joel@example.com",
    isSubscriber: true,
    totalSpent: 60,
    rewardCredit: 0,
  },
  {
    id: 4,
    name: "Dina",
    gender: "female",
    email: "dina@example.com",
    isSubscriber: true,
    totalSpent: 310,
    rewardCredit: 0,
  },
  {
    id: 5,
    name: "Alusine",
    gender: "male",
    email: "balusinea1990@gmail.com",
    isSubscriber: true,
    totalSpent: 150,
    rewardCredit: 0,
  },
  {
    id: 6,
    name: "Sarah",
    gender: "female",
    email: "sarah@example.com",
    isSubscriber: true,
    totalSpent: 200,
    rewardCredit: 0,
  },
];

// Track winners (runtime only)
const pastWinners = new Set();

// Email function
function sendEmail(to, subject, message) {
  console.log("Sending email to:", to);
  console.log("Subject:", subject);
  console.log("Message:", message);
}

// Eligibility rule
const isEligible = (customer) =>
  customer.isSubscriber && customer.totalSpent >= 100;

// Build raffle pool
const rafflePool = customers.filter(isEligible);

if (rafflePool.length === 0) {
  console.log("No eligible customers for the raffle.");
  process.exit();
}

// Remove past winners
const remainingPool = rafflePool.filter((c) => !pastWinners.has(c.id));
// Check if there are still eligible customers who haven't won yet
if (remainingPool.length === 0) {
  console.log("All eligible customers have already won once.");
  process.exit();
}

// Pick winner randomly from remaining pool
const winner = remainingPool[Math.floor(Math.random() * remainingPool.length)];
pastWinners.add(winner.id);

// Reward system - add $25 credit to winner's account
const REWARD_AMOUNT = 25;

const updatedCustomers = customers.map((c) =>
  c.id === winner.id
    ? { ...c, rewardCredit: c.rewardCredit + REWARD_AMOUNT }
    : c,
);

//Printing all customers
console.log(customers);
const finalWinner = updatedCustomers.find((c) => c.id === winner.id);

console.log(
  "Raffle Pool:",
  rafflePool.map((c) => c.name),
);

const winnerGender = finalWinner.gender === "male" ? "his" : "her";

console.log(
  `Winner is ${finalWinner.name}. $${REWARD_AMOUNT} has been credited to ${winnerGender} account.`,
);

// Send notification email to the winner
sendEmail(
  finalWinner.email,
  "Raffle Winner Announcement",
  `Congrats ${finalWinner.name}! You have won $${REWARD_AMOUNT} credit.`,
);
