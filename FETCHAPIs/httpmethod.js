//Syntax for fetch api - fetch(URL, Option(this options is a javascript object));

let getData = await fetch("https://catfact.ninja/fact", { method: "GET" });
let txt = await getData.json();
console.log(txt);
