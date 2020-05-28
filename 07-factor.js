const fact = function (n) {
  // Base case
  if (n === 0) {
    return 0
  // Base case
  } else if (n === 1) {
    return 1
  // General case
  } else {
    return n * fact(n - 1)
  }
}

console.log(fact(5))

// 5 * fact(4)
// 20 * fact(3)
// 60 * fact(2)
// 120 * fact(1)
// 120