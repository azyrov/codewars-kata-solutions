// convert number to array
// loop through each number
// if a number is less than 0 or greater than 255, return false
// else return true
function isValidIP(str) {
    let arr = str.split(".");

    return arr.every((item, index, array) => 
        {
            
           if ((array.length === 4) &&
               // alows only numbers
                (/^\d+$/.test(item)) &&
               // allows 0 OR numbers which start with 1 to 9 which are then followed by other numbers
                (/^(0|[1-9]\d*)$/.test(item) &&
                (item >= 0) &&
                (item <= 255)))  {
            return true 
           } else {
                return false
           }
        }
        )
}
