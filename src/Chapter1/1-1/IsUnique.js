/* @flow */
export function isUnique(inputString: string): boolean {
  for (let i = 0; i < inputString.length; ++i) {
    for (let j = 0; j < inputString.length; ++j) {
      if (i === j) {
        break;
      }
      if (inputString[i] === inputString[j]) {
        return false;
      }
    }
  }
  return true;
}

export function isUnique2(inputString: string): boolean {
  return !Array.from(inputString).some((element, index, inputString) =>
    inputString.indexOf(element, index + 1) !== -1
  );
}
