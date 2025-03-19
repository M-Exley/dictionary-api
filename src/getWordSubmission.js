import openStringMaster from "./openStringMaster";
// this function will be responsible for the word submission through the DOM

export default function getWordSubmission() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    const input = document.querySelector("#form input");
    e.preventDefault();
    const res = `${input.value} `; // added space as concat didn't seem to be doing it
    console.log(`RES submission only: ${res}`);
    form.reset();
    const resPushToArray = openStringMaster(res); // display stringMaster and show submission val
    // return res; // return value for use elsewhere
  });
}
