//Hourglasses in a 2D matrix
//Find the sum of the hourglasses
//Formula is (R-2)*(C-2), where R is row and C is column
/**
 * An hourglass is patter in a given matrix like below
 *  a b c
 *    d
 *  e f g
 * Hourglass Sum is the total summation of the those above mentioned numbers in integer only
 */

function hourGlassSum(matrix, row, column) {
    let max_sum = -Infinity;

    if (row < 3 || column < 3) {
        return `Matrix is smaller than expected values`;
    } else {
        for (let i = 0; i < row - 2; i++) {
            for (let j = 0; j < column - 2; j++) {
                let sum = (matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] + matrix[i + 1][j + 1] + matrix[i + 2][j] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2]);
                max_sum = Math.max(max_sum, sum);
            }
        }
        return max_sum;
    }

}
let row = 6;
let column = 6;
let matrix = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
];

console.log(hourGlassSum(matrix, row, column))