const palindromes = function (str) {
    let strBackwards = '';
    for (let i = str.length-1; i >= 0; i--) {
        strBackwards += str[i];
        
        console.log(strBackwards, str[i]);
    }
    return str === strBackwards;
};

// Do not edit below this line
module.exports = palindromes;
