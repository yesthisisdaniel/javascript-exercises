const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
};

const multiply = function() {
  return array.reduce((acc, curr) => {
    return acc * curr;
  }, 0)
};

const power = function(base, expo) {
	return base ** expo;
};

const factorial = function(facto) {
  let total = 1;
	for (i = 1; i < facto; i++) {
    total = total * (i + 1)
  }
  return total;
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
