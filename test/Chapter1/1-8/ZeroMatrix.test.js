import assert from 'power-assert';
import zeroMatrix from "../../../src/Chapter1/1-8/ZeroMatrix";

describe('ZeroMatrix', () => {
  it('Zero Matrix 4×6 1', () => {
    const assertion = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    const expectation = [
      [1, 0, 1, 1],
      [1, 0, 1, 1],
      [0, 0, 0, 0],
      [1, 0, 1, 1],
      [1, 0, 1, 1],
      [1, 0, 1, 1]
    ];
    assert(zeroMatrix(assertion).toString() === expectation.toString());
  });
  it('Zero Matrix 4×6 2', () => {
    const assertion = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ];
    const expectation = [
      [1, 0, 1, 1],
      [1, 0, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 1, 1],
      [1, 0, 1, 1]
    ];
    assert(zeroMatrix(assertion).toString() === expectation.toString());
  });
  it('Zero Matrix 3×3 1', () => {
    const assertion = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const expectation = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    assert(zeroMatrix(assertion).toString() === expectation.toString());
  });
  it('Zero Matrix 3×3 2', () => {
    const assertion = [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const expectation = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];
    assert(zeroMatrix(assertion).toString() === expectation.toString());
  });
});
