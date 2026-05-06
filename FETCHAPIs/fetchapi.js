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
    // const catFactData = await fetch("https://catfact.ninja/fact");
    const catFactData = await fetch("https://careers.sl/wp-json/wp/v2/candidate");
    // console.log(catFactData); //this will print the raw bytes
    const txt = await catFactData.json(); //Converting the raw bytes to JavaScript object/readable text
    console.log(txt);
  } catch (error) {
    console.log("API failed");
  }
}

getCatFact();
