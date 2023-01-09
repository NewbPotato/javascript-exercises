const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
	return sum;
};

const multiply = function(arr) {
  return arr.reduce( (a, b) => a * b )
};

const power = function(num1, num2) {
	return (num1 ** num2);
};

function factorial(n) {
	if (n == 0 && n <= 1) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
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
