import assert from 'power-assert';
import palindrome from "../../../src/Chapter2/2-6/Palindrome";

describe('Palindrome', () => {
  it('Palindrome', () => {
    assert(palindrome([0, 1, 2, 1, 0]) === true);
    assert(palindrome([0, 1, 2, 3, 4]) === false);
  });
  it('Palindrome exception', () => {
    assert.throws(
      () => {
        assert(palindrome(null) === true);
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
