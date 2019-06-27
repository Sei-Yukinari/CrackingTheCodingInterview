import assert from 'power-assert';
import rotateMatrix from "../../../src/Chapter1/1-7/RotateMatrix";

describe('RotateMatrix', () => {
  it('RotateMatrix 4×4', () => {
    const assertion = [
      [ 1,  2,  3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10,  9,  8, 7]
    ];
    const expectation = [
      [10, 11, 12, 1],
      [ 9, 16, 13, 2],
      [ 8, 15, 14, 3],
      [ 7,  6,  5, 4]
    ];
    assert(rotateMatrix(assertion).toString() === expectation.toString());
  });
  it('RotateMatrix 3×3', () => {
    const assertion = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ];
    const expectation = [
      [7, 8, 1],
      [6, 9, 2],
      [5, 4, 3]
    ];
    assert(rotateMatrix(assertion).toString() === expectation.toString());
  });
});
