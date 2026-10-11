function towerBuilder(nFloors) {
  // build here

  let array = [];
  let symbol = "*";
  let emptySpace = " ";

  for (let i = 1; i <= nFloors; i++) {
    if (true) {
        let oddNum = i + (i - 1);
        array.push(oddNum);
    }
  }

  let finalResult = array.map(num => symbol.repeat(num));

  for (let i = 0; i < array.length; i++) {
    finalResult[i] = 
    (emptySpace.repeat((array.at(-1) - array[i]) / 2)) +
    finalResult[i] + 
    (emptySpace.repeat((array.at(-1) - array[i]) / 2));
  }
  
  return finalResult;
}

