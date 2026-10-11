function findShort(s){
  let array = s.split(" ");
  
  let lengthStr = [];
  
  for (let i = 0; i < array.length; i++) {
    lengthStr.push(array[i].length);  
  }
  
  return Math.min(...lengthStr)
}
