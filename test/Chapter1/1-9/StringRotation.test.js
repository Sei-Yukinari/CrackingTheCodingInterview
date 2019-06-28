import assert from 'power-assert';
import stringRotation from "../../../src/Chapter1/1-9/StringRotation";

describe('StringRotation', () => {
  it('String Rotation', () => {
    assert(stringRotation(`waterbottle`, `erbottlewat`) === true);
    assert(stringRotation(`aa`, `bbb`) === false);
    assert(stringRotation(`abcdef`, `efabcd`) === true);
  });
  it('String Rotation exception', () => {
    assert.throws(
      () => {
        assert(stringRotation(null, null) === false);
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
