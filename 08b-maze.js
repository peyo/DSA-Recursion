const maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

const solve = (maze, row = 0, col = 0, path = "") => {

  if (row < 0 || col < 0 || row === maze.length || col === maze[row].length) {
    return
  }

  // Base case
  if (maze[row][col] === "e") {
    return console.log(`Solved at (${row}, ${col})! Path to exit: ${path}`)

  // General case
  } else if (maze[row][col] === "*") {
    return 
  }
  
  // Marker
  maze[row][col] = "*"

  // Right
  solve(maze, row, col + 1, path.concat("R"))

  // Down
  solve(maze, row + 1, col, path.concat("D"))

  // Left
  solve(maze, row, col - 1, path.concat("L"))
  
  // Up
  solve(maze, row - 1, col, path.concat("U"))
  
  // Remove marker
  maze[row][col] = " "
}

console.log(solve(maze));