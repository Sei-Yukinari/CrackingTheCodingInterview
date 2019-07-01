import assert from 'power-assert';
import sumLists from "../../../src/Chapter2/2-5/SumLists";

describe('Partition', () => {
  it('Partition', () => {
    assert(sumLists([7, 1, 6], [5, 9, 2]) === 912);
    assert(sumLists([1], [1]) === 2);
    assert(sumLists([11], [11]) === 22);
    assert(sumLists([111], [111]) === 222);
    assert(sumLists([111], [11]) === 122);
  });
  it('Partition exception', () => {
    assert.throws(
      () => {
        assert(sumLists(null, null) === 0);
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
