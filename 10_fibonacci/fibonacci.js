const fibonacci = function(nth) {
    if (nth < 0 ) return "OOPS";
    if (typeof nth === "string") nth = +nth;
    
    let fibArray = [0,1];
    for (let i = 1; i < nth; i++) {
        fibArray[i+1] = fibArray[i-1] + fibArray[i]
    }
    return fibArray[fibArray.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
