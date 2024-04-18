const sumAll = function(firstNumber, lastNumber) {

    let sum = 0

    if (firstNumber < 0 
        || lastNumber < 0 
        || typeof firstNumber !== "number" 
        || typeof lastNumber !== "number") {
        return "ERROR"
    } else if(firstNumber < lastNumber) {
        for (i = firstNumber; i <= lastNumber; i++ ) {
            sum = sum + i
        }
    } else {
        for (i = firstNumber; i >= lastNumber; i-- ) {
            sum = sum + i
        }
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
