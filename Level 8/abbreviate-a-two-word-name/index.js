function abbrevName(name){
  
  let nameArray = name.toUpperCase().split(" ");
  
  let [firstName, lastName] = nameArray;
  
  return firstName[0] + "." + lastName[0]

}
