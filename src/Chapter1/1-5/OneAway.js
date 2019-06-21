/* @flow */
export default function isOneCharacterDiff(source: string, destination: string): boolean {
  if (!source || !destination) {
    throw new Error("nullぽ");
  }
  //置換
  if (source.length === destination.length) {
    return oneEditReplace(source, destination);
  }
  //追加
  if (source.length === destination.length + 1) {
    return oneEditInsert(source, destination);
  }
  //削除
  if (source.length === destination.length - 1) {
    return oneEditInsert(destination, source);
  }
  return false;
}

function oneEditInsert(sourceChars: string, destinationChars: string): boolean {
  return Array.from(destinationChars).every((destinationChar) => {
    return Array.from(sourceChars).indexOf(destinationChar) !== -1;
  });
}

function oneEditReplace(sourceChars: string, destinationChars: string): boolean {
  let foundDifference = false;
  return Array.from(sourceChars).every((sourceChar, index) => {
    if (sourceChar !== destinationChars[index]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
    return true;
  });
}
