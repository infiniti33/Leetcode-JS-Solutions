/*
Given a m x n grid filled with non - negative numbers, find a path from
top left to bottom right which minimizes the sum of all numbers along its path.

  Note: You can only move either down or right at any point in time.

    Example:

Input:
[
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]
Output: 7

Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = grid => {
  // Calculate the distance travelled within the first column
  // This is because each square depends on the one above
  // And the one to the left. However there is nothing left
  // of the first column so we can calculate it by adding
  // the current square to the square above it
  for (let row = 1; row < grid.length; row++) {
    grid[row][0] += grid[row - 1][0];
  }
  // The same goes for the first row. There is nothing above the 
  // first row. So we just calculate the distance by what is to the left
  // of it
  for (let col = 1; col < grid[0].length; col++) {
    grid[0][col] += grid[0][col - 1];
  }
  // Start one row and one column in because we've precomputed
  // those above
  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[0].length; col++) {
      // The distance to the grid at row, col is equal to itself plus the minimum
      // of the two grid spaces (one above, one to the left)
      grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
