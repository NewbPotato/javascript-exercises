const ftoc = function(temp) {
  let far = (temp - 32) * .5556;
  let roundedNum = Math.round(far * 10) / 10
  return roundedNum
};

const ctof = function(temp) {
  let far = temp * 1.8 + 32;
  let roundedNum = Math.round(far * 10) / 10
  return roundedNum
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
