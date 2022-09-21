const repeatString = function (string, num) {
    if (num == 0) {
        return '';
    } else if (num < 0) {
        return 'ERROR';
    } else {
        let newString;

        for (let i = 0; i < num; i++) {
            if (i == 0) {
                newString = string;
            } else {
                newString += string;
            }
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;