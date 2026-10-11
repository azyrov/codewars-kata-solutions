function nbYear(p0, percent, aug, p) {
    
  let counter = 0; 

  percent = percent / 100;
  
  for (let i = 0; p0 < p; i++) {

    p0 += Math.floor(((p0 * percent) + aug));

    ++counter;
  }
  
  return counter
}
