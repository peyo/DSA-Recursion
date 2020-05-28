//const decToBin = (dec) => {
//  return (dec >>> 0).toString(2)
//}

const decToBin = (dec) => {
  // Base case
  if (dec === 0) {
    return 0
  
  // General case
  } else {
    return dec % 2 + 10 * decToBin(Math.floor(dec / 2))   // Without the Math.floor, the answer will be infinity.
  }
}

const dec = 25;
console.log(decToBin(dec));

// References:
// https://www.geeksforgeeks.org/decimal-binary-number-using-recursion/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor