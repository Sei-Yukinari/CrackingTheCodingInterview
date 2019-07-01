/* @flow */
export default function sumLists(input1: Array<number>, input2: Array<number>): number {
  if (!input1 || !input2) {
    throw new TypeError(`"input1" or "input2" is null or not defined`);
  }

  let result = 0;
  input1.forEach((x, index) => {
    result += calc(x, index);
  });
  input2.forEach((x, index) => {
    result += calc(x, index);
  });
  return result;
}

function calc(value, digit) {
  return value * (10 ** digit);
}
