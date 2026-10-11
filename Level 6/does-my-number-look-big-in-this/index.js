function narcissistic(value) {
    let valueString = String(value);
    let valueArray = valueString.split("");
    let valueLength = valueArray.length;

    let finalValue = 0;

    for (let i = 0; i < valueArray.length; ++i) {
        finalValue += (valueArray[i] ** valueLength)
    }
    if (finalValue === value){
            return true;
        } else {
            return false;
        }

}
