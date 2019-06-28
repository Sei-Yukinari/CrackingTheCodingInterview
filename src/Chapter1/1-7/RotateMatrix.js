/* @flow */
export default function rotateMatrix(matrix: Array<Array<number>>): Array<Array<number>> {
  const dimensions = matrix.length - 1;
  const result = [];
  matrix.forEach((column, columnIndex) => {
    column.forEach((row, rowIndex) => {
        result.push(matrix[dimensions - rowIndex][columnIndex]);
      }
    );
  });
  return result;
}
