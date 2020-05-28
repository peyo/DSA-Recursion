// Could not solve
// Reference:
// https://github.com/PatientPadawan/DSA-Recursion/blob/master/mazeSolver.js

const maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

let solutionPath = '';
const reverseString = (str) => {
  const splitString = str.split('');
  const reverseStringArray = splitString.reverse();
  const reversedString = reverseStringArray.join();
  return reversedString;
};

const legalMove = (matrix, x, y) => {
  const i = matrix.length; // how many rows
  const j = matrix[0].length; // how many columns
  if (i && j) {
    if (x >= 0 && x < i && y >= 0 && y < j) {
      if (matrix[x][y] === ' ' || matrix[x][y] === 'e') {
        return true;
      }
      return false;
    }
    return false;
  }
  return false;
};

const mazeSolver = (matrix, x, y) => {
  // base case
  if (x === matrix.length - 1 && y === matrix[0].length - 1) {
    return true;
  }
  // general case
  if (legalMove(matrix, x, y)) {
    if (mazeSolver(matrix, x, y + 1)) {
      solutionPath = solutionPath.concat('R');
      return true;
    }
    if (mazeSolver(matrix, x + 1, y)) {
      solutionPath = solutionPath.concat('D');
      return true;
    }
    if (mazeSolver(matrix, x, y - 1)) {
      solutionPath = solutionPath.concat('L');
      return true;
    }
    if (mazeSolver(matrix, x - 1, y)) {
      solutionPath = solutionPath.concat('U');
      return true;
    }
    return false;
  }
  solutionPath = '';
  return false;
};

mazeSolver(maze, 0, 0);
console.log(`Path to the exit: ${reverseString(solutionPath)}`);