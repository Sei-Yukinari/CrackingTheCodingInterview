import assert from 'power-assert';
import returnKthToLast from "../../../src/Chapter2/2-2/ReturnKthToLast";

describe('ReturnKthToLast', () => {
  it('Return Kth To Last', () => {
    assert(returnKthToLast([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === 7);
    assert(returnKthToLast([`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`], 5) === `d`);
  });
  it('ReturnKthToLast exception', () => {
    assert.throws(
      () => {
        assert(returnKthToLast([], 3));
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
