/* @flow */
export default function zeroMatrix(matrix: Array<Array<number>>): Array<Array<number>> {
  const zeroColumnIndexList = new Set();
  const zeroRowIndexList = new Set();
  matrix.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
        if (value === 0) {
          zeroColumnIndexList.add(columnIndex);
          zeroRowIndexList.add(rowIndex);
        }
      }
    );
  });
  const result = matrix;
  matrix.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
        if (
          zeroRowIndexList.has(rowIndex) ||
          zeroColumnIndexList.has(columnIndex)
        ) {
          result[rowIndex][columnIndex] = 0;
        }
      }
    );
  });
  return result;
}
