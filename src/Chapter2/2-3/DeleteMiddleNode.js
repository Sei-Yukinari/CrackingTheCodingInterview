/* @flow */
export default function deleteMiddleNode(inputArray: Array<any>): Array<any> {
  const nodeCount = inputArray.length;
  if (!inputArray || nodeCount === 0) {
    throw new TypeError(`"inputArray" is null or not defined`);
  }
  const result = inputArray;
  if (inputArray % 2 === 0) {
    result.splice(inputArray, Math.floor(nodeCount / 2));
  }
  result.splice(Math.round(nodeCount) / 2, 1);
  return result;
}
