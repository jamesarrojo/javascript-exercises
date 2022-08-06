const ftoc = function(temp) {
  let celcius = (temp - 32) * 5 / 9

  return Number.parseFloat(celcius.toFixed(1))
};

const ctof = function(temp) {
  let fahrenheit = (temp * 9 / 5) + 32

  return Number.parseFloat(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
