import assert from 'power-assert';
import checkPermutation from "../../../src/Chapter1/1-2/CheckPerm";

describe('permutation', () => {
  it('same', () => {
    assert(checkPermutation(`dog-`, `god-`) === true);
    assert(checkPermutation(`dogcat`, `catdog`) === true);
    assert(checkPermutation(``, ``) === true);
  });
  it('not same', () => {
    assert(checkPermutation(`a`, `bbbbbbbbb`) === false);
    assert(checkPermutation(`test`, `tesd`) === false);
  });
});
