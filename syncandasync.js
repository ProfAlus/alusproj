
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
//Asynchronous
/*
function fun1() {
  console.log("fun1 has started...");
  console.log("fun1 has completed!");
}

function fun2() {
  let started = Date.now();
  let delay = 5000;
  let end = started + delay;
  console.log("fun2 is excuting...");

  while (Date.now() <= end) {}
  console.log("fun2 is completed!");
}

function fun3() {
  console.log("fun3 started...");
  let start = Date.now();
  let delay = 5000;
  let endTime = start + delay;
  while (Date.now() <= endTime) {}
  console.log("fun3 is completed!");
}
function fun4() {
  console.log("fun4 started...");
  console.log("fun4 is completed!");
}

fun1();
setTimeout(fun2, 5000); //setTimeout() - Is an async function
setTimeout(fun3, 2000); //Asynchronous
fun4();
*/

//setInterval() - Is an async function
/*
function intervalFun() {
  console.log("Fetching data...");
}

let intervalID = setInterval(intervalFun, 2000);

setTimeout(() => clearInterval(intervalID), 10000);
*/

//setTimeout Asynchronous function using a social media app
//Callback hell or pyramid of doom - this is not the efficient way to do it. That is why we will be learning about promises.
/*
function loadDashboard(id, callback) {
  let error;
  setTimeout(() => {
    if (error) {
      return callback(error);
    }
    console.log("Fetching user data....");

    setTimeout(() => {
      if (error) {
        return callback(error);
      }
      console.log("Fetching user friend list....");

      setTimeout(() => {
        if (error) {
          return callback(error);
        }
        console.log("Fetching user posts....");

        setTimeout(() => {
          if (error) {
            return callback(error);
          }
          console.log("Fetching post comments....");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

function errorHandler() {
  console.log("An error has occured");
}

loadDashboard("101", errorHandler);
*/

//Promises
/*
let prm = new Promise((reject) => {
  console.log("Executor function...");
  reject("failure"); //This has to be passed as input to your executor or callback function new Promise((reject)=>){}, otherwise it will throw an error. Notice also that you have to provide a message in the reject() function, if not so, it will be undefine.
}); //Every promise must contain a callback
console.log(prm);
*/
//You can pass both reject and resolve
/*
let prom = new Promise((resolve, reject) => {
  console.log("Executor function...");
  resolve("Executed successfully!");
});

//prom.then() if success/resolve, and prom.catch if failure/reject
prom.then((message) => {
  console.log(message);
});

let prom2 = new Promise((resolve, reject) => {
  console.log("Executor function ...");
  reject("Failed to execute....");
});

prom2.catch((res) => {
  console.log(res);
});
*/
//More on promises - combinin .then() and .catch();
/*
let promis = new Promise((resolve, reject) => {
  console.log("Water has started boiling....");
  setTimeout(() => {
    console.log("Water has been boiled!");
    resolve();
  }, 2000);
});

promis
  .then(() => {
    console.log("Promise fulfilled!");
  })
  .catch(() => {
    console.log("Promise unfulfilled");
  });
*/

//Promise chaining. Promises using an online shopping. Note: in every Promise(), there should be an exeutor function - (resolve, reject)=>{}
/*
function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step 1 has started...");
    setTimeout(() => {
      console.log("Step 1 completed!");
      resolve();
    }, 3000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    console.log("Step 2 started");
    setTimeout(() => {
      console.log("Step 2 completed!");
      resolve();
    }, 4000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    console.log("Step 3 started");
    setTimeout(() => {
      console.log("Step 3 completed!");
      resolve();
    }, 2000);
  });
}

function step4() {
  return new Promise((resolve, reject) => {
    console.log("Step 4 started");
    setTimeout(() => {
      console.log("Step 4 completed!");
      resolve();
    }, 1000);
  });
}
//Promise chaining
step1()
  .then(step2)
  .then(step3)
  .then(step4)
  .then(() => console.log("Hurray! All steps completed!"))
  .catch(() => console.log("Promise unfulfilled"));
*/
//Async await
/*
function taskFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task completed!");
      resolve();
    }, 3000);
  });
}

async function awaitFunc() {
  try {
    await taskFunc();
    console.log("Promise fulfilled!");
  } catch (error) {
    console.log("Promise unfulfilled!");
  }
}

awaitFunc();
*/

//Promise chaining revised using async await. Promises using an online shopping. Note: in every Promise(), there should be an exeutor function - (resolve, reject)=>{}

function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step 1 has started...");
    setTimeout(() => {
      console.log("Step 1 completed!");
      resolve();
    }, 3000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    console.log("Step 2 started");
    setTimeout(() => {
      console.log("Step 2 completed!");
      resolve();
    }, 4000);
  });
}

function step3() {
  return new Promise((resolve, reject) => {
    console.log("Step 3 started");
    setTimeout(() => {
      console.log("Step 3 completed!");
      resolve();
    }, 2000);
  });
}

function step4() {
  return new Promise((resolve, reject) => {
    console.log("Step 4 started");
    setTimeout(() => {
      console.log("Step 4 completed!");
      resolve();
    }, 1000);
  });
}

//Promise chaining
/*
async function run() {
  try {
    await step1();
    await step2();
    await step3();
    await step4();
    console.log("Hurray! All steps completed!");
  } catch (error) {
    console.log("Promise unfulfilled!");
  }
}
run();
*/

//try{}catch{} can also be written without async function and it will still work - as shown below
async function myAwaitFunc() {
  try {
    await step1();
    await step2();
    await step3();
    await step4();
    console.log("Hurray! All steps completed!");
  } catch (error) {
    console.log("Promise unfulfilled!");
  }
}

myAwaitFunc();

/*
//JSON - Careers SL
const sampleData = {
  name: "Careers SL",
  description: "Your Employment Exchange Depot",
  url: "https:\/\/careers.sl",
  home: "https:\/\/careers.sl",
  gmt_offset: "0",
  timezone_string: "",
  page_for_posts: 42,
  page_on_front: 8646,
  show_on_front: "page",
  namespaces: [
    "cmb2\/v1",
    "code-snippets\/v1",
    "contact-form-7\/v1",
    "embedpress\/v1",
    "jetpack\/v4",
    "jwt-auth\/v1",
    "litespeed\/v1",
    "litespeed\/v3",
    "sliderrevolution",
    "elementor-one\/v1",
    "wpcom\/v2",
    "jetpack\/v4\/stats-app",
    "mc4wp\/v1",
    "elementor\/v1",
    "elementor-pro\/v1",
    "wpcom\/v3",
    "jetpack-boost\/v1",
    "my-jetpack\/v1",
    "jetpack\/v4\/explat",
    "google-site-kit\/v1",
    "elementor\/v1\/documents",
    "elementor-ai\/v1",
    "elementor\/v1\/feedback",
    "wp\/v2",
    "wp-site-health\/v1",
    "wp-block-editor\/v1",
    "wp-abilities\/v1",
  ],
  authentication: {
    "application-passwords": {
      endpoints: {
        authorization:
          "https:\/\/careers.sl\/wp-admin\/authorize-application.php",
      },
    },
  },
  routes: {
    "\/": {
      namespace: "",
      methods: ["GET"],
      endpoints: [
        {
          methods: ["GET"],
          args: { context: { default: "view", required: false } },
        },
      ],
      _links: { self: [{ href: "https:\/\/careers.sl\/wp-json\/" }] },
    },
    "\/batch\/v1": {
      namespace: "",
      methods: ["POST"],
      endpoints: [
        {
          methods: ["POST"],
          args: {
            validation: {
              type: "string",
              enum: ["require-all-validate", "normal"],
              default: "normal",
              required: false,
            },
            requests: {
              type: "array",
              maxItems: 25,
              items: {
                type: "object",
                properties: {
                  method: {
                    type: "string",
                    enum: ["POST", "PUT", "PATCH", "DELETE"],
                    default: "POST",
                  },
                  path: { type: "string", required: true },
                  body: {
                    type: "object",
                    properties: [],
                    additionalProperties: true,
                  },
                  headers: {
                    type: "object",
                    properties: [],
                    additionalProperties: {
                      type: ["string", "array"],
                      items: { type: "string" },
                    },
                  },
                },
              },
              required: true,
            },
          },
        },
      ],
      _links: { self: [{ href: "https:\/\/careers.sl\/wp-json\/batch\/v1" }] },
    },
  },
};

strngData = JSON.stringify(sampleData);
console.log(strngData);
// parsedData = JSON.parse(sampleData);

console.log(sampleData.description);
*/
