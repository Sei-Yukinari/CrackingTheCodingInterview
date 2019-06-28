import assert from 'power-assert';
import deleteMiddleNode from "../../../src/Chapter2/2-3/DeleteMiddleNode";

describe('DeleteMiddleNode', () => {
  it('Delete Middle Node', () => {
    assert(deleteMiddleNode([`a`, `b`, `c`, `d`, `e`]).toString() === [`a`, `b`, `d`, `e`].toString());
    assert(deleteMiddleNode([`a`, `b`, `c`]).toString() === [`a`, `c`].toString());
  });
  it('Delete Middle Node exception', () => {
    assert.throws(
      () => {
        assert(deleteMiddleNode([], 3));
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
