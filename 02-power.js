const exp = function (b, e) {
  // Base case
  if (e === 0) {
    return 1;
  // Base case
  } else if (e < 0) {
    return `exponent should be >= 0`;
  // General case
  } else {
    return b * exp(b, e - 1);
  }
};

console.log(exp(10, 4));

// 10 * exp(10, 3)
// 100 * exp(10, 2)
// 1000 * exp(10, 1)
// 10000 * exp(10, 0)

// 10 * 10
// 100 * 10
// 1000 * 10
// 10000 * 1

// Reference:
// https://stackoverflow.com/questions/14666275/recursive-power-calculation