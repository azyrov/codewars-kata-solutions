function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  let dnaUpperCase = dna.toUpperCase();
  let dnaArray = dnaUpperCase.split("");
  for (i = 0; i < dnaArray.length; i++) {
    if ((dnaArray[i] === "G") ||
        (dnaArray[i] === "C") ||
         (dnaArray[i] === "A")) {
      dnaArray[i];
    } else if (dnaArray[i] === "T") {
      dnaArray[i] = "U";
    } else {
      console.log("error!");
    }
  }

  return dnaArray.join("");
}

console.log(DNAtoRNA("GTaCATcGt"));
