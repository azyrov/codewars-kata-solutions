  function sumTwoSmallestNumbers(numbers) {  
    
    let finalArray = numbers.filter(x => ((x >= 0) && (isFinite(x))));

    finalArray.sort((a, b) => a-b);

    return finalArray[0] + finalArray[1];

}
