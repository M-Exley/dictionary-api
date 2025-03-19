import concatenate from "./concat";

// this function will open the stringMaster upon submission
let stringMasterArray = [];
export default function openStringMaster(submitVal) {
  const stringMaster = document.querySelector(".string-master");
  stringMaster.style.display = "flex";

  stringMasterArray.push(submitVal);
  const concatString = concatenate(stringMasterArray);
  console.log(`Concatenated string so far: ${concatString}`);
  stringMaster.innerHTML = `${concatString}`;
  return stringMasterArray;
}
