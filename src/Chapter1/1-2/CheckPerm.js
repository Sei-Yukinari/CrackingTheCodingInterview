/* @flow */
export default function checkPermutation(source: string, destination: string): boolean {
  if (source.length !== destination.length) {
    return false;
  }
  return Array.from(source).sort().toString() === Array.from(destination).sort().toString();
}
