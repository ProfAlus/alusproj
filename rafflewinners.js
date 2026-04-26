/**
 * Simple raffle program
 * - Filter eligible customers/subscribers based on a condition
 * - Add them to a raffle pool
 * - Randomly select a winner
 * - "Compensate" the winner (example: add a reward credit)
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
];

//Adding a new customer to the customers array/records
customers.push({
  id: 6,
  name: "Sarah",
  gender: "female",
  email: "sarah@example.com",
  isSubscriber: true,
  totalSpent: 200,
  rewardCredit: 0,
});
// Track winners so the same person can't win twice (in this runtime).
// In a real app, persist this to a file/DB.
const pastWinners = new Set();

// 1) Define the eligibility condition
// Example: must be a subscriber AND must have spent at least 100
const isEligible = (customer) =>
  customer.isSubscriber && customer.totalSpent >= 100;

// 2) Build the raffle pool
const rafflePool = customers.filter(isEligible);

if (rafflePool.length === 0) {
  console.log("No eligible customers for the raffle.");
} else {
  // 3) Pick a random winner who hasn't won before
  const remainingPool = rafflePool.filter((c) => !pastWinners.has(c.id));

  if (remainingPool.length === 0) {
    console.log("All eligible customers have already won once.");
  } else {
    const winnerIndex = Math.floor(Math.random() * remainingPool.length);
    const winnerId = remainingPool[winnerIndex].id;
    pastWinners.add(winnerId);

    // 4) Compensate the winner (example: add a reward credit)
    const REWARD_AMOUNT = 25;
    const updatedCustomers = customers.map((c) =>
      c.id === winnerId
        ? { ...c, rewardCredit: c.rewardCredit + REWARD_AMOUNT }
        : c,
    );

    const winner = updatedCustomers.find((c) => c.id === winnerId);
    console.log(
      "Raffle pool:",
      rafflePool.map((c) => c.name),
    );
    if (winner.gender === "male") {
      console.log(
        `The winner is '${winner.name}'. - $${REWARD_AMOUNT} has been credited to his account`,
      );
    } else {
      console.log(
        `The winner is '${winner.name}'. - $${REWARD_AMOUNT} has been credited to her account`,
      );
    }

    // Optional: send a notification (placeholder)
    /* function sendEmail(to, subject, message) {
      console.log(`Sending email to ${to}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
    }
    sendEmail(
      winner.email,
      `Congrats ${winner.name}! You won $${REWARD_AMOUNT} credit.`,
    );  */
  }
}
