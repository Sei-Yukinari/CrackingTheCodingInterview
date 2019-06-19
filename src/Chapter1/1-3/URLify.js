/* @flow */
export default function replaceSpaces(source: string, length: number): string {
  const replaceValue = `%20`;
  return source.substr(0, length).replace(/ /g, replaceValue);
}
