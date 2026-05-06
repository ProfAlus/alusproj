//Syntax for fetch api - fetch(URL, Option(this options is a javascript object));
//fetching or getting data from cat fact - https://catfact.ninja/fact
/*
let getData = await fetch("https://catfact.ninja/fact", { method: "GET" });
let txt = await getData.json();
console.log(txt);
*/

/*
let bodyObj = {
  name: "Apple MacBook Pro 16",
  data: {
    year: 2019,
    price: 2049.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB",
    color: "silver",
  },
};
let getProdInfo = await fetch("https://api.restful-api.dev/objects", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    'Accept': "application/json",
  },
  body: JSON.stringify(bodyObj),
});

let txt = await getProdInfo.json();
console.log(txt);
*/

//Using asynchronous function to achieve the same result
/*
async function postData() {
  let bodyObj = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 2049.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
      color: "silver",
    },
  };
  let getProdInfo = await fetch("https://api.restful-api.dev/objects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(bodyObj),
  });
  //   console.log(getProdInfo); //This will print the raw data. This line is not needed in this context
  let txt = await getProdInfo.json(); //this will conver the raw data
  console.log(txt);
}

postData();
*/

//Using asynchronous function to achieve delete result
async function deleteData() {
  let deleteProdInfo = await fetch("https://api.restful-api.dev/objects/9", {
    method: "DELETE",
  });
  //   console.log(getProdInfo); //This will print the raw data. This line is not needed in this context
  let txt = await deleteProdInfo.json(); //this will conver the raw data
  console.log(txt);
}

deleteData();
