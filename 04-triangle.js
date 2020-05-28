const tri = function (n) {
  // Base case
  if (n <= 1) {
    return n
  // General case
  } else {
    return n + tri(n-1)
  }
}

console.log(tri(3));

// 3 + tri(2) + tri(1)  + tri(0)
// 3 + 2 + 1 + 0