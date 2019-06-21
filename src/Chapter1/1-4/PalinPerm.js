/* @flow */
export default function isPalindromePermutations(inputString: string): boolean {
  if (!inputString) {
    return false;
  }
  const tempArray = new Set();
  Array.from(inputString.toLocaleLowerCase().replace(' ', '')).forEach((x) => {
      tempArray.has(x)
        ? tempArray.delete(x)
        : tempArray.add(x);
    }
  );
  return tempArray.size <= 1;
}
