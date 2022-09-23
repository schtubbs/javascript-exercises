const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
};

const multiply = function(array) {

  if (array.length === 0) {
    return 0;
  } else {
    let result = 1;
    for (let num of array) {
      result *= num;
    }
    return result;
  }
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
  if (n === 0) return 1;
	let result = n;
  for (let i = 1; i < n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
