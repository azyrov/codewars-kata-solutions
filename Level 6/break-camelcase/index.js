function solution(string) {
  // turn string to array
  // isert space before capital letter
  
  let array = [...string];
  
  let newArray = [];
  
  for (letter of string) {
    if ((letter === letter.toUpperCase()) && (letter !== letter.toLowerCase())) {
      newArray.push(" ", letter)
    } else {
      newArray.push(letter)
    }
  }
  
  return newArray.join("");
}
