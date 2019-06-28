/* @flow */
export default function stringRotation(source: string, destination: string): boolean {
  if (!source || !destination) {
    throw new TypeError(`"source" and "destination" is null or not defined`);
  }
  if (source.length !== destination.length) {
    return false;
  }
  const joinSource = source + source;
  return joinSource.includes(destination);
}
