/* @flow */
export default function removeDups(input: string): string {
  return Array.from(input).filter((x, i, self) => {
    return self.indexOf(x) === i;
  }).toString().replace(/,/g, '');
}
