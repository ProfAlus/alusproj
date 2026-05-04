//lerning step - The result below will show the facts in machine readable format, we will now have to convert it to human readable format(ASSCCI/UTF-8 (English)) - text
/*fetch("https://catfact.ninja/fact")
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.log("API failed");
  });
*/

//Real step - Rewriting it to properly understand it. Now I am going to convert it to text
/*
fetch("https://catfact.ninja/fact")
  .then((res) => res.text()) //this line will further return another promise
  .then((txt) => {
    // console.log(txt);//this will print the raw bytes
    parsedDataFact = JSON.parse(txt);//Converting the raw bytes to JavaScript object
    console.log(parsedDataFact.fact);
  }) //
  .catch(() => {
    console.log("API failed");
  });
*/

//Using json() to convert raw bytes to JavaScript object
/*
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((txt) => console.log(txt))
  .catch(() => console.log("API failed"));

*/
//Using aync await for a cleaner and easy to read code

async function getCatFact() {
  try {
    const catFactData = await fetch("https://catfact.ninja/fact");
    // console.log(catFactData); //this will print the raw bytes
    const data = await catFactData.json(); //Converting the raw bytes to JavaScript object
    console.log(data);
  } catch (error) {
    console.log("API failed");
  }
}

getCatFact();
