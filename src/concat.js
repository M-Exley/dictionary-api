// function purely to concatenate the strings in stringMasterArray

export default function concatenate(array) {
  return array.reduce((acc, word) => acc + word, " ");
}
