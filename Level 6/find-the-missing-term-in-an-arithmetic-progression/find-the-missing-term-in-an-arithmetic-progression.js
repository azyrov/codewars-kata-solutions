function findMissing(list) {  
  
  let missingNum = 0;
  
  for (let i = 1; i < list.length -1; i++) {
    let firstDiff = (list[i] - list[i - 1]);
    let secondDiff = (list[i + 1] - list[i])

    let smallestDiff  = Math.min(firstDiff, secondDiff)
    let smallestItem = Math.min(list[i], list[i - 1]) 
    
    if (secondDiff !== firstDiff) {
      if (firstDiff > secondDiff) {
        missingNum = list[i - 1] + smallestDiff;
      } else {
        missingNum = list[i] + smallestDiff;
      }
    }
  }
  return missingNum;
}
