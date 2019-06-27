/* @flow */
export default function stringCompression(inputString: string): string {
  if (!inputString) {
    throw new Error("nullぽ");
  }

  let result = '';
  let count = 0;
  let currentString = '';
  Array.from(inputString).forEach((x,index) => {
    if (index !==0 && x !== currentString) {
      result += `${currentString}${count}`;
      currentString = x;
      count = 0;
    }else{
      currentString = x;
    }
    count ++;
  });
  return  result += `${currentString}${count}`;
}
