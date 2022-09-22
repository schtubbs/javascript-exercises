const sumAll = function(int1, int2) {
    // Check for non-numbers
    if (
        (typeof int1 !== "number" || typeof int2 !== "number") ||
        (int1 < 0 || int2 < 0)
    ) {
        return "ERROR"
    }
    
    // Need to know which integer is bigger for the loop
    let littleInt;
    let bigInt;
    if (int1 < int2) {
        littleInt = int1;
        bigInt = int2;
    } else if (int1 > int2) {
        littleInt = int2;
        bigInt = int1;
    }

    let totalSum = 0;
    for (let i = littleInt; i <= bigInt; i++) {
        totalSum += i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
