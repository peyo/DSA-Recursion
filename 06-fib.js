const fib = function (n) {
  // Base case
  if (n === 0 || n === 1) {
    return n
  // General case
  } else {
    return  fib(n - 1) + fib(n - 2)
    }
}

console.log(fib(7))

// Apparently an iterative solution might be more efficient than a recursive one.

// n = 0
// 0

// n = 1
// 1

// n = 2
// fib(1) + fib(0)
// 1 + 0

// n = 3
// fib(2) + fib(1)
// 1 + 1

// n = 4
// fib(3) + fib(2)
// 2 + 1

// n = 5
// fib(4) + fib(3)
// 3 + 2

// Reference:
// https://math.hmc.edu/funfacts/fibonacci-number-formula/