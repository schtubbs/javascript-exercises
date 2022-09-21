const reverseString = function(string) {
    let stringRev = '';
    for (let i = string.length-1; i >= 0; i--) {
        stringRev += string.substr(i, 1);
    }
    return stringRev;
};

// Do not edit below this line
module.exports = reverseString;
