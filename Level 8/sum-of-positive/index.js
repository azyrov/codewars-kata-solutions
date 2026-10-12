function positiveSum(arr) {
  let sum = arr.reduce(((accumulator, currentValue) => {
    if (currentValue >= 0) {
      accumulator += currentValue;
      return accumulator;
    } else {
      return accumulator += 0;
    }
  }), 0);

  return sum;
}
