const count = function(input) {  
  // Base case
  if (input < 1) {
    return `All sheep jumped over the fence`
  // General case
  } else {
    console.log(`${input}: Another sheep jumps over the fence`)
    return count(input - 1);
  }
}

const input = 4
console.log(count(input));

// 4: Another sheep jumps over the fence
// count(3);

// 3: Another sheep jumps over the fence
// count(2);

// 2: Another sheep jumps over the fence
// count(1);

// 1: Another sheep jumps over the fence
// count(0);

// All sheep jumped over the fence