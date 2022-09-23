const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let total = 0;
  for (let num in array) {
    total += num;
  }
  return total;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
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
