/* @flow */
export default function returnKthToLast(inputArray: Array<any>, k: number): any {
  if (!inputArray || inputArray.length === 0) {
    throw new TypeError(`"inputArray" is null or not defined`);
  }
  return inputArray.reverse()[k - 1];
}
