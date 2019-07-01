/* @flow */
export default function palindrome(input: Array<any>): boolean {
  if (!input) {
    throw new TypeError(`"input" is null or not defined`);
  }
  const tail = input.concat().reverse();
  return input.every((x, index) => x === tail[index]
  );
}
