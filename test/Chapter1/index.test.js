import assert from 'power-assert';
import * as index from '../../src/Chapter1/index';

describe('index', () => {
  it(`abc`, () => {
    assert(1 === index.f());
  });
  it(`abc`, () => {
    assert(2 !== index.f());
  });
});
