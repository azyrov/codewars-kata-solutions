function digitize(n) {
  // return String(n).split("").map(Number).reverse()
  return [...String(n)].map(Number).reverse()
}
