function duplicateCount(text){
  let originalArr = [...text.toLowerCase()];
  let comparisonArr = [];
  let finalArr = [];
  
  for (let i = 0; i < originalArr.length; i++) {
    if (comparisonArr.includes(originalArr[i])) {
      if (finalArr.includes(originalArr[i])) {
        continue
      } else {
        finalArr.push(originalArr[i])
      }
    } else {
      comparisonArr.push(originalArr[i])
    }
  }
  
  return finalArr.length
}
