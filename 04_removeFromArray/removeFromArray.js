const removeFromArray = function(array, strToRemove) {
    // Need to check for more than one removal string
    let numArgs = arguments.length;
    if (numArgs > 2) {
        for (let a = 1; a < numArgs; a++) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === arguments[a]) {
                    array.splice(i, 1);
                }
            }
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === strToRemove) {
                array.splice(i,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
