import assert from 'power-assert';
import stringCompression from "../../../src/Chapter1/1-6/StringCompression";

describe('StringCompression', () => {
  it('String Compression', () => {
    assert(stringCompression(`aabcccccaaa`) === `a2b1c5a3`);
    assert(stringCompression(`a`) === `a1`);
    assert(stringCompression(`abcdefg`) === `a1b1c1d1e1f1g1`);
  });
  it('StringCompression exception', () => {
    assert.throws(
      () => {
        assert(stringCompression(null) === ``);
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
