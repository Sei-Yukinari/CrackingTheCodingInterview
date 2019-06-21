import assert from 'power-assert';
import isPalindromePermutations from "../../../src/Chapter1/1-4/PalinPerm";

describe('PalinPerm', () => {
  it('Palindrome permutation true', () => {
    assert(isPalindromePermutations(`Tact Coa`) === true);
    assert(isPalindromePermutations(`tactcoapapa`) === true);
    assert(isPalindromePermutations(`aabb`) === true);
  });
  it('Palindrome permutation false', () => {
    assert(isPalindromePermutations(`Tact boa`) === false);
    assert(isPalindromePermutations(null) === false);
    assert(isPalindromePermutations(``) === false);
  });
});
