import assert from 'power-assert';
import isOneCharacterDiff from "../../../src/Chapter1/1-5/OneAway";

describe('OneAway', () => {
  it('OneAway insert', () => {
    assert(isOneCharacterDiff(`pale`, `ple`) === true);
    assert(isOneCharacterDiff(`pale`, `pce`) === false);
  });
  it('OneAway replace', () => {
    assert(isOneCharacterDiff(`pale`, `bale`) === true);
    assert(isOneCharacterDiff(`pale`, `baxe`) === false);
  });
  it('OneAway delete', () => {
    assert(isOneCharacterDiff(`apple`, `aple`) === true);
    assert(isOneCharacterDiff(`apple`, `aplz`) === false);
  });
  it('TwoAway diff', () => {
    assert(isOneCharacterDiff(`apple`, `apl`) === false);
  });
  it('OneAway exception', () => {
    assert.throws(
      () => {
        assert(isOneCharacterDiff(null, null) === false);
      },
      (error) => {
        assert(error !== null);
        return true;
      }
    );
  });
});
