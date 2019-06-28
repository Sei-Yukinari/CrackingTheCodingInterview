import assert from 'power-assert';
import removeDups from "../../../src/Chapter2/2-1/RemoveDups";

describe('RemoveDups', () => {
  it('Remove Dups', () => {
    assert(removeDups(`abcdefga`) === `abcdefg`);
    assert(removeDups(`aaa`) === `a`);
  });
});
