/* @flow */
export default function partition(input: Array<number>, partitionNumber): Array<number> {
  if (!input) {
    throw new TypeError(`"input" is null or not defined`);
  }
  const headList = [];
  const tailList = [];

  input.forEach((x) => {
    if (x < partitionNumber) {
      headList.push(x);
    } else {
      tailList.push(x);
    }
  });
  return headList.concat(tailList);
}
