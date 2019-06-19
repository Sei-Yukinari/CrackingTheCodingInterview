import assert from 'power-assert';
import { isUnique, isUnique2 } from "../../../src/Chapter1/1-1/IsUnique";

describe('IsUnique', () => {
  it('unique', () => {
    assert(isUnique(`abcdefghijklmnopqrstuvwxyz`) === true);
  });
  it('not unique', () => {
    assert(isUnique(`abcdefghijklmnopqrstuvwxyzz`) === false);
  });
});

describe('IsUnique2', () => {
  it('unique', () => {
    assert(isUnique2(`abcdefghijklmnopqrstuvwxyz`) === true);
  });
  it('not unique', () => {
    assert(isUnique2(`abcdefghijklmnopqrstuvwxyzz`) === false);
  });
});
