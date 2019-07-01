import assert from 'power-assert';
import partition from "../../../src/Chapter2/2-4/Partition";

describe('Partition', () => {
  it('Partition', () => {
    assert(partition(
      [`3`, `5`, `8`, `5`, `10`, `2`, `1`], 5).toString() ===
      [`3`, `2`, `1`, `5`, `8`, `5`, `10`].toString());
    assert(partition([5, 8, 7, 4, 9, 15, 30], 3).toString() === [5, 8, 7, 4, 9, 15, 30].toString());
    assert(partition([5, 8, 7, 4, 9, 15, 30], 31).toString() === [5, 8, 7, 4, 9, 15, 30].toString());
    assert(partition([5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 2).toString() === [1, 5, 8, 3, 2, 7, 4, 9, 15, 30].toString());
    assert(partition([5, 8, 3, 2, 7, 1, 4, 9, 15, 30], 7).toString() === [5, 3, 2, 1, 4, 8, 7, 9, 15, 30].toString());
  });
  it('Partition exception', () => {
    assert.throws(
      () => {
        assert(partition([], 3) === true);
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
