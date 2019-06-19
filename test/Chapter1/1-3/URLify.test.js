import assert from 'power-assert';
import replaceSpaces from "../../../src/Chapter1/1-3/URLify";

describe('URLify', () => {
  it('replace', () => {
    assert(replaceSpaces(`Mr John Smith    `, 13) === `Mr%20John%20Smith`);
  });
});
