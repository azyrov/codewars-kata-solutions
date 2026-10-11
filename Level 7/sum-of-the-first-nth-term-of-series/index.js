function SeriesSum(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i++) {
    sum += (1/((2 * i) + i - 2))
  }
  
  return sum.toFixed(2);
}
