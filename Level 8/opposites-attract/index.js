function lovefunc(flower1, flower2){
  let evenFlower1 = (flower1 % 2 === 0);
  let evenFlower2 = (flower2 % 2 === 0);
  let oddFlower1 = (flower1 % 2 !== 0);
  let oddFlower2 = (flower2 % 2 !== 0);
  
  if (evenFlower1) {
    if (oddFlower2) {
      return true
    } else if (evenFlower2) {
      return false
    }
  } else if (evenFlower2) {
      if (oddFlower1) {
        return true
      } else if (evenFlower1) {
        return false
      }
  } else if (oddFlower1) {
      if (evenFlower1) {
          return true
        } else {
            return false;
      }
    }
}
